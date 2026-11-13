import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/** Petites fabriques de formes, posées au sol (y = bas de l'objet). */

let seed = 7;
/** Aléatoire déterministe : la pièce est identique à chaque chargement. */
export function rnd(): number {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}
export function resetRandom(value = 7): void {
  seed = value;
}

const materialCache = new Map<string, THREE.MeshStandardMaterial>();
export type MatLike = string | THREE.Material;

export function mat(
  color: string,
  opts: THREE.MeshStandardMaterialParameters = {},
): THREE.MeshStandardMaterial {
  const key = color + JSON.stringify(opts);
  let m = materialCache.get(key);
  if (!m) {
    m = new THREE.MeshStandardMaterial({ color, roughness: 0.8, metalness: 0, ...opts });
    materialCache.set(key, m);
  }
  return m;
}

export function glow(color: string, intensity = 1.5): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: intensity,
    roughness: 0.6,
  });
}

const toMat = (m: MatLike) => (typeof m === 'string' ? mat(m) : m);

/** Géométries partagées : des formes plus lisses sans multiplier la mémoire. */
const geoCache = new Map<string, THREE.BufferGeometry>();
function cached<T extends THREE.BufferGeometry>(key: string, make: () => T): T {
  let g = geoCache.get(key) as T | undefined;
  if (!g) {
    g = make();
    geoCache.set(key, g);
  }
  return g;
}

function finish<T extends THREE.Mesh>(m: T, parent: THREE.Object3D): T {
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

export function box(
  parent: THREE.Object3D,
  w: number,
  h: number,
  d: number,
  material: MatLike,
  x: number,
  y: number,
  z: number,
  r = 0.015,
): THREE.Mesh {
  const rr = Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001);
  const g =
    rr > 0.003
      ? cached(`rb:${w}:${h}:${d}:${rr}`, () => new RoundedBoxGeometry(w, h, d, 4, rr))
      : cached(`b:${w}:${h}:${d}`, () => new THREE.BoxGeometry(w, h, d));
  const m = new THREE.Mesh(g, toMat(material));
  m.position.set(x, y + h / 2, z);
  m.userData['shape'] = { t: 'box', w, h, d, r: Math.max(rr, 0) };
  return finish(m, parent);
}

export function cyl(
  parent: THREE.Object3D,
  rt: number,
  rb: number,
  h: number,
  material: MatLike,
  x: number,
  y: number,
  z: number,
  seg = 20,
): THREE.Mesh {
  const segments = Math.min(64, Math.max(16, Math.round(seg * 1.8)));
  const m = new THREE.Mesh(
    cached(`c:${rt}:${rb}:${h}:${segments}`, () => new THREE.CylinderGeometry(rt, rb, h, segments)),
    toMat(material),
  );
  m.position.set(x, y + h / 2, z);
  m.userData['shape'] = { t: 'cyl', rt, rb, h, seg: segments };
  return finish(m, parent);
}

export function sph(
  parent: THREE.Object3D,
  r: number,
  material: MatLike,
  x: number,
  y: number,
  z: number,
  sx = 1,
  sy = 1,
  sz = 1,
): THREE.Mesh {
  const m = new THREE.Mesh(
    cached(`s:${r}`, () => new THREE.SphereGeometry(r, 40, 28)),
    toMat(material),
  );
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.userData['shape'] = { t: 'sph', r };
  return finish(m, parent);
}

export function plane(
  parent: THREE.Object3D,
  w: number,
  h: number,
  material: THREE.Material,
  x: number,
  y: number,
  z: number,
  ry = 0,
): THREE.Mesh {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  m.position.set(x, y, z);
  m.rotation.y = ry;
  parent.add(m);
  return m;
}

export function group(parent: THREE.Object3D, name?: string): THREE.Group {
  const g = new THREE.Group();
  if (name) g.name = name;
  parent.add(g);
  return g;
}

export function pointLight(
  parent: THREE.Object3D,
  color: number,
  intensity: number,
  distance: number,
  x: number,
  y: number,
  z: number,
): THREE.PointLight {
  const l = new THREE.PointLight(color, intensity, distance, 2);
  l.position.set(x, y, z);
  parent.add(l);
  return l;
}

export function canvasTexture(
  w: number,
  h: number,
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d')!, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

const loader = new THREE.TextureLoader();

/**
 * Remplace l'image d'un matériau par un fichier (si `path` est donné), recadrée pour couvrir
 * un cadre de proportions `w` × `h`. En cas d'erreur, l'illustration existante reste.
 */
export function loadFrameImage(material: THREE.MeshStandardMaterial, path: string | null, w: number, h: number) {
  if (!path) return;
  loader.load(
    path,
    (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      const img = tex.image as { width: number; height: number };
      const frame = w / h;
      const image = img.width / img.height;
      if (image > frame) {
        tex.repeat.set(frame / image, 1);
        tex.offset.set((1 - frame / image) / 2, 0);
      } else {
        tex.repeat.set(1, image / frame);
        tex.offset.set(0, (1 - image / frame) / 2);
      }
      material.map = tex;
      material.needsUpdate = true;
      // version « lumière pré-calculée » du même matériau (bake/apply-bake.ts)
      const twin = material.userData['bakedTwin'] as THREE.MeshBasicMaterial | undefined;
      if (twin) {
        twin.map = tex;
        twin.needsUpdate = true;
      }
    },
    undefined,
    () => console.warn(`Image de cadre introuvable : ${path}`),
  );
}
