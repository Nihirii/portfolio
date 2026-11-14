import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Modèles 3D libres (Poly Haven, CC0) préparés par tools/assets/prepare.py, dans public/models/.
 * Si un fichier manque, l'objet dessiné en code le remplace : le salon reste complet.
 */
export const DECOR_MODELS = ['manette-nes', 'canard', 'cadre-photo'] as const;
export type DecorModel = (typeof DECOR_MODELS)[number];
export type DecorAssets = Map<DecorModel, THREE.Object3D>;

export async function loadDecorAssets(): Promise<DecorAssets> {
  const draco = new DRACOLoader().setDecoderPath('draco/');
  const loader = new GLTFLoader().setDRACOLoader(draco);
  const assets: DecorAssets = new Map();
  await Promise.all(
    DECOR_MODELS.map(async (name) => {
      try {
        const buf = await fetchModel(name);
        const gltf = await loader.parseAsync(buf, 'models/');
        assets.set(name, gltf.scene);
      } catch {
        console.warn(`Modèle « ${name} » indisponible : version dessinée à la place.`);
      }
    }),
  );
  draco.dispose();
  return assets;
}

/** `name.glb`, ou à défaut `name.glb.json` (base64) pour les hébergements qui ne servent pas le .glb. */
async function fetchModel(name: string): Promise<ArrayBuffer> {
  const res = await fetch(`models/${name}.glb`);
  if (res.ok) {
    const buf = await res.arrayBuffer();
    if (new TextDecoder().decode(new Uint8Array(buf, 0, 4)) === 'glTF') return buf;
  }
  const { data } = (await (await fetch(`models/${name}.glb.json`)).json()) as { data: string };
  return Uint8Array.from(atob(data), (c) => c.charCodeAt(0)).buffer;
}

const box = new THREE.Box3();
const size = new THREE.Vector3();
const center = new THREE.Vector3();

/**
 * Pose une copie du modèle dans `parent` : plus grande dimension ramenée à `maxSize` (m),
 * centré en x/z, posé sur y = 0. Renvoie null si le modèle n'est pas chargé.
 */
export function placeModel(
  assets: DecorAssets,
  name: DecorModel,
  parent: THREE.Object3D,
  maxSize: number,
): THREE.Group | null {
  const src = assets.get(name);
  if (!src) return null;
  const model = src.clone(true);
  box.setFromObject(model).getSize(size);
  const k = maxSize / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(k);
  box.setFromObject(model).getCenter(center);
  model.position.set(-center.x, -box.min.y, -center.z);
  const holder = new THREE.Group();
  holder.add(model);
  model.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh) m.castShadow = m.receiveShadow = true;
  });
  parent.add(holder);
  return holder;
}
