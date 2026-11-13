import * as THREE from 'three';
import { buildRoom } from '../build-room';
import { forEachRoomMesh, meshSignature } from './bake-ids';

/**
 * Outil de développement : décrit la pièce pour le pré-calcul de la lumière dans Blender
 * (`tools/bake/bake.py`). Appelé par `tools/bake/export.mjs` via `window.__salonExport()`.
 *
 * Rôles des meshes :
 * - `bake` : opaque et non lumineux ; reçoit la lumière pré-calculée ;
 * - `emit` : lumineux (écrans, LED, vitres) ; éclaire la pièce dans Blender, garde son rendu temps réel ;
 * - `keep` : opaque mais rendu à part (matériau non standard) ; ne fait qu'ombrer ;
 * - `glass` : transparent ; ignoré par le pré-calcul.
 */
type Role = 'bake' | 'emit' | 'keep' | 'glass';

const r4 = (v: number) => Math.round(v * 1e4) / 1e4;

export function exportRoom(): string {
  const room = buildRoom();
  const root = room.root;

  // états jour (0) et nuit (1) des matériaux lumineux et des lampes
  const emissive = new Map<THREE.Material, { day: [string, number]; night: [string, number] }>();
  const lights = new Map<THREE.PointLight, { day: number; night: number }>();
  const snapshot = (key: 'day' | 'night') => {
    root.updateMatrixWorld(true);
    root.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh && !Array.isArray(mesh.material)) {
        const m = mesh.material as THREE.MeshStandardMaterial;
        if (m.emissive) {
          const e = emissive.get(m) ?? { day: ['000000', 0], night: ['000000', 0] };
          e[key] = [m.emissive.getHexString(), m.emissiveIntensity];
          emissive.set(m, e);
        }
      }
      const l = o as THREE.PointLight;
      if (l.isPointLight) {
        const v = lights.get(l) ?? { day: 0, night: 0 };
        v[key] = l.intensity;
        lights.set(l, v);
      }
    });
  };
  room.dimmables.forEach((d) => d.apply(1));
  snapshot('night');
  room.dimmables.forEach((d) => d.apply(0));
  snapshot('day');
  root.updateMatrixWorld(true);

  const meshes: unknown[] = [];
  const v = new THREE.Vector3();
  forEachRoomMesh(root, (mesh, id) => {
    const m = mesh.material as THREE.MeshStandardMaterial & { transmission?: number };
    if (Array.isArray(mesh.material) || !m.visible || !isShown(mesh)) return;
    const e = emissive.get(m);
    const lit =
      !!m.emissiveMap ||
      (!!e && ((e.day[0] !== '000000' && e.day[1] > 0) || (e.night[0] !== '000000' && e.night[1] > 0)));
    let role: Role;
    if (m.transparent || m.opacity < 1 || (m.transmission ?? 0) > 0) role = 'glass';
    else if (lit) role = 'emit';
    else if (!(m as THREE.MeshStandardMaterial).isMeshStandardMaterial) role = 'keep';
    else role = 'bake';
    if (role === 'glass') return;

    const color = (m.color ?? new THREE.Color('#ffffff')).clone();
    if (m.map) color.multiply(averageColor(m.map));
    const entry: Record<string, unknown> = {
      id,
      role,
      sig: meshSignature(mesh),
      color: color.getHexString(), // sRGB
      rough: m.roughness ?? 1,
      metal: m.metalness ?? 0,
      side: m.side,
      window: !!m.userData['window'],
    };
    if (role === 'emit' && e) {
      const tint = m.emissiveMap ? averageColor(m.emissiveMap) : new THREE.Color(1, 1, 1);
      entry['emit'] = {
        day: [new THREE.Color('#' + e.day[0]).multiply(tint).getHexString(), e.day[1]],
        night: [new THREE.Color('#' + e.night[0]).multiply(tint).getHexString(), e.night[1]],
      };
    }
    const shape = mesh.userData['shape'];
    if (shape && !m.map && role === 'bake') {
      entry['shape'] = shape;
      entry['matrix'] = mesh.matrixWorld.elements.map(r4);
    } else {
      const g = mesh.geometry;
      const pos = g.attributes['position'];
      const nor = g.attributes['normal'];
      const uv = g.attributes['uv'];
      const nm = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld);
      const p: number[] = [];
      const n: number[] = [];
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(mesh.matrixWorld);
        p.push(r4(v.x), r4(v.y), r4(v.z));
        if (nor) {
          v.fromBufferAttribute(nor, i).applyMatrix3(nm).normalize();
          n.push(r4(v.x), r4(v.y), r4(v.z));
        }
      }
      entry['pos'] = p;
      if (nor) entry['nor'] = n;
      if (uv && m.map) entry['uv'] = Array.from(uv.array as Float32Array, r4);
      entry['index'] = g.index
        ? Array.from(g.index.array)
        : Array.from({ length: pos.count }, (_, i) => i);
      // miroir (échelle négative) : l'ordre des triangles s'inverse
      entry['flip'] = mesh.matrixWorld.determinant() < 0;
    }
    meshes.push(entry);
  });

  const lightList: unknown[] = [];
  lights.forEach((val, l) => {
    if (l === room.tv.light || (val.day <= 0 && val.night <= 0)) return;
    l.getWorldPosition(v);
    lightList.push({
      pos: [r4(v.x), r4(v.y), r4(v.z)],
      color: l.color.getHexString(),
      distance: l.distance,
      day: val.day,
      night: val.night,
    });
  });

  const sunDir = room.sun.position.clone().sub(room.sun.target.position).normalize();
  return JSON.stringify({
    version: 1,
    meshes,
    lights: lightList,
    sun: { dir: sunDir.toArray().map(r4), color: room.sun.color.getHexString() },
  });
}

function isShown(o: THREE.Object3D): boolean {
  for (let p: THREE.Object3D | null = o; p; p = p.parent) if (!p.visible) return false;
  return true;
}

/** Couleur moyenne (linéaire) d'une texture dessinée en canvas ou chargée. */
function averageColor(tex: THREE.Texture): THREE.Color {
  const img = tex.image as CanvasImageSource | undefined;
  const out = new THREE.Color(1, 1, 1);
  if (!img) return out;
  const c = document.createElement('canvas');
  c.width = c.height = 8;
  const ctx = c.getContext('2d')!;
  try {
    ctx.drawImage(img, 0, 0, 8, 8);
    const d = ctx.getImageData(0, 0, 8, 8).data;
    let r = 0;
    let g = 0;
    let b = 0;
    for (let i = 0; i < d.length; i += 4) {
      r += d[i];
      g += d[i + 1];
      b += d[i + 2];
    }
    const k = 1 / (64 * 255);
    out.setRGB(r * k, g * k, b * k, THREE.SRGBColorSpace);
  } catch {
    /* image inaccessible : blanc */
  }
  return out;
}
