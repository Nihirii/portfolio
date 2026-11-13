import * as THREE from 'three';

/**
 * Identifiant stable de chaque mesh de la pièce : son rang dans le parcours de `room.root`.
 * La pièce étant construite de façon déterministe, l'export (Blender) et le chargement du
 * pré-calcul retrouvent les mêmes objets. Si la scène change, il faut refaire le pré-calcul
 * (`npm run bake`) ; en attendant, les objets qui ne correspondent plus gardent leur rendu temps réel.
 */
export function forEachRoomMesh(root: THREE.Object3D, fn: (mesh: THREE.Mesh, id: string) => void) {
  let i = 0;
  root.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) fn(o as THREE.Mesh, `m${i++}`);
  });
}

/** Empreinte légère d'un mesh, pour détecter un pré-calcul périmé. */
export function meshSignature(mesh: THREE.Mesh): string {
  const m = mesh.material as THREE.MeshStandardMaterial;
  const shape = mesh.userData['shape']?.t ?? mesh.geometry.type;
  return `${shape}:${m.color?.getHexString() ?? ''}`;
}
