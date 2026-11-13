import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { forEachRoomMesh, meshSignature } from './bake-ids';

/**
 * Lumière pré-calculée dans Blender (tools/bake) : géométrie biseautée de la pièce et deux atlas
 * d'éclairage (jour / soir). Les objets pré-calculés passent en matériau sans éclairage temps réel
 * (couleur × lumière de l'atlas), comme dans les scènes « baked » ; les objets lumineux, transparents
 * ou animés par leur matériau (écrans, LED, vitres, lampe à lave, Hiki) gardent leur rendu temps réel.
 */
export interface BakeAssets {
  meshes: Map<string, THREE.Mesh>;
  day: THREE.Texture;
  night: THREE.Texture;
}

export interface BakeControls {
  /** 0 = jour, 1 = nuit (transition progressive). */
  night: { value: number };
  /** Réglage global de la luminosité de la lumière pré-calculée. */
  exposure: { value: number };
  /** Nombre d'objets passés en lumière pré-calculée. */
  count: number;
}

const BASE = 'room/';

/** Charge les fichiers du pré-calcul ; null s'ils sont absents (la pièce reste en temps réel). */
export async function loadBake(): Promise<BakeAssets | null> {
  try {
    const draco = new DRACOLoader().setDecoderPath('draco/');
    const gltf = new GLTFLoader().setDRACOLoader(draco);
    const tex = new THREE.TextureLoader();
    const [scene, day, night] = await Promise.all([
      gltf.loadAsync(BASE + 'room.glb').then((g) => g.scene),
      tex.loadAsync(BASE + 'light-day.webp'),
      tex.loadAsync(BASE + 'light-night.webp'),
    ]);
    draco.dispose();
    for (const t of [day, night]) {
      t.flipY = false; // convention glTF
      t.colorSpace = THREE.NoColorSpace; // encodage maison, décodé dans le shader
      t.channel = 1;
      // pas de mipmaps : elles mêleraient le fond noir de l'atlas aux bords des îlots
      t.generateMipmaps = false;
      t.minFilter = THREE.LinearFilter;
    }
    const meshes = new Map<string, THREE.Mesh>();
    scene.updateMatrixWorld(true);
    scene.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        // l'export est en coordonnées du monde ; on applique quand même une éventuelle transformation
        m.geometry.applyMatrix4(m.matrixWorld);
        meshes.set(m.name, m);
      }
    });
    return { meshes, day, night };
  } catch (e) {
    console.warn('Lumière pré-calculée indisponible, rendu temps réel.', e);
    return null;
  }
}

/** Remplace géométrie et matériau des objets pré-calculés. À appeler juste après `buildRoom()`. */
export function applyBake(root: THREE.Object3D, bake: BakeAssets): BakeControls {
  const controls: BakeControls = { night: { value: 0 }, exposure: { value: 1 }, count: 0 };
  const twins = new Map<THREE.Material, THREE.MeshBasicMaterial>();
  const stale: string[] = [];
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4();

  forEachRoomMesh(root, (mesh, id) => {
    const src = bake.meshes.get(id);
    if (!src) return;
    if (src.userData['sig'] !== meshSignature(mesh)) {
      stale.push(id);
      return;
    }
    const orig = mesh.material as THREE.MeshStandardMaterial;
    let twin = twins.get(orig);
    if (!twin) {
      twin = bakedMaterial(orig, bake, controls);
      twins.set(orig, twin);
      orig.userData['bakedTwin'] = twin; // les images de cadres chargées ensuite suivent (helpers.ts)
    }
    const g = src.geometry.clone();
    g.applyMatrix4(inv.copy(mesh.matrixWorld).invert());
    // atlas de lumière : toujours sur le canal 1
    if (!g.attributes['uv1']) {
      g.setAttribute('uv1', g.attributes['uv']);
      g.deleteAttribute('uv');
    }
    g.computeBoundingSphere();
    mesh.geometry = g;
    mesh.material = twin;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    controls.count++;
  });
  if (stale.length) {
    console.warn(
      `Lumière pré-calculée périmée pour ${stale.length} objet(s) : relancer « npm run bake ».`,
      stale.slice(0, 10),
    );
  }
  return controls;
}

function bakedMaterial(
  orig: THREE.MeshStandardMaterial,
  bake: BakeAssets,
  controls: BakeControls,
): THREE.MeshBasicMaterial {
  const m = new THREE.MeshBasicMaterial({
    color: orig.color,
    map: orig.map,
    side: orig.side,
    lightMap: bake.day,
  });
  m.onBeforeCompile = (shader) => {
    shader.uniforms['lightMapNight'] = { value: bake.night };
    shader.uniforms['uNight'] = controls.night;
    shader.uniforms['uExposure'] = controls.exposure;
    shader.fragmentShader = shader.fragmentShader
      .replace(
        'void main() {',
        `uniform sampler2D lightMapNight;
uniform float uNight;
uniform float uExposure;
vec3 decodeLight( vec3 e ) {
  vec3 t = min( pow( e, vec3( 2.2 ) ), vec3( 0.996 ) );
  return t / ( 1.0 - t );
}
void main() {`,
      )
      .replace(
        'reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;',
        `vec3 lightDay = decodeLight( lightMapTexel.rgb );
    // soir tamisé : les lampes ressortent, le reste de la pièce reste dans la pénombre
    vec3 lightNight = decodeLight( texture2D( lightMapNight, vLightMapUv ).rgb ) * 0.42;
    reflectedLight.indirectDiffuse += mix( lightDay, lightNight, uNight ) * uExposure;`,
      );
  };
  m.customProgramCacheKey = () => 'baked';
  return m;
}
