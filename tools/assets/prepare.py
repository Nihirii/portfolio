"""
Prépare les modèles 3D libres (Poly Haven, CC0) pour le salon : un seul mesh par modèle,
texture de couleur seule réduite à 512 px (WebP), géométrie compressée (Draco).

Entrée  : dossiers glTF téléchargés depuis https://polyhaven.com (résolution 1k)
Sortie  : public/models/<nom>.glb

    python tools/assets/prepare.py <dossier_des_modeles>

Les modèles et leurs réglages sont listés dans ASSETS ci-dessous ; la liste des sources et
licences est dans public/models/CREDITS.md.
"""

import colorsys
import glob
import os
import sys

import bpy  # avant bmesh
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.abspath(os.path.join(HERE, '..', '..', 'public', 'models'))

# nom de sortie : (dossier Poly Haven, décalage de teinte en degrés)
ASSETS = {
    'manette-nes': ('gamepad', 0),
    'canard': ('rubber_duck_toy', 14),  # orange → jaune, comme le vrai canard du bureau
    'cadre-photo': ('standing_picture_frame_01', 0),
}
TEX = 512


def shift_hue(img, degrees):
    if not degrees:
        return
    px = np.array(img.pixels[:], dtype=np.float32).reshape(-1, 4)
    rgb = px[:, :3]
    h, l, s = np.vectorize(colorsys.rgb_to_hls)(rgb[:, 0], rgb[:, 1], rgb[:, 2])
    h = (h + degrees / 360.0) % 1.0
    r, g, b = np.vectorize(colorsys.hls_to_rgb)(h, l, s)
    px[:, 0], px[:, 1], px[:, 2] = r, g, b
    img.pixels.foreach_set(px.ravel())


def prepare(src_dir, name, hue):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    gltf = glob.glob(os.path.join(src_dir, '*.gltf'))[0]
    bpy.ops.import_scene.gltf(filepath=gltf)
    meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
    bpy.ops.object.select_all(action='DESELECT')
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    if len(meshes) > 1:
        bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)
    ob.name = name
    # matériaux : couleur de base seule (les autres cartes ne servent pas avec la lumière pré-calculée)
    for mat in ob.data.materials:
        nt = mat.node_tree
        bsdf = next(n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED')
        for inp in ('Normal', 'Roughness', 'Metallic'):
            for link in list(bsdf.inputs[inp].links):
                nt.links.remove(link)
        bsdf.inputs['Roughness'].default_value = 0.6
        bsdf.inputs['Metallic'].default_value = 0.0
        for link in bsdf.inputs['Base Color'].links:
            img = getattr(link.from_node, 'image', None)
            if img:
                if max(img.size) > TEX:
                    img.scale(TEX, TEX)
                shift_hue(img, hue)
        for n in list(nt.nodes):
            if n.type in ('NORMAL_MAP',) or (n.type == 'TEX_IMAGE' and not n.outputs['Color'].links):
                nt.nodes.remove(n)
    path = os.path.join(OUT, name + '.glb')
    bpy.ops.export_scene.gltf(
        filepath=path,
        use_selection=True,
        export_format='GLB',
        export_image_format='WEBP',
        export_image_quality=82,
        export_tangents=False,
        export_draco_mesh_compression_enable=True,
        export_draco_mesh_compression_level=7,
    )
    print(f'[assets] {name} : {len(ob.data.polygons)} faces, {os.path.getsize(path) / 1e3:.0f} ko', flush=True)


if __name__ == '__main__':
    src = sys.argv[sys.argv.index('--') + 1] if '--' in sys.argv else sys.argv[1]
    os.makedirs(OUT, exist_ok=True)
    for name, (folder, hue) in ASSETS.items():
        prepare(os.path.join(src, folder), name, hue)
