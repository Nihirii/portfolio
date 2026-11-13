"""
Pré-calcul de la lumière du salon dans Blender (Cycles), à la manière des scènes « baked ».

Entrée  : tools/bake/room.json (node tools/bake/export.cjs, serveur de dev lancé)
Sorties : public/room/room.glb          géométrie biseautée + coordonnées de l'atlas de lumière
          public/room/light-day.webp     lumière du jour (atlas)
          public/room/light-night.webp   lumière du soir (atlas)

Lancer avec le module Python de Blender (pip install bpy, Python 3.13) :
    python tools/bake/bake.py [--size 2048] [--samples 128] [--preview]
ou avec Blender : blender -b -P tools/bake/bake.py -- --size 2048

Encodage des atlas (8 bits) : e = (L / (1 + L)) ^ (1 / 2.2), L = éclairement diffus (sans la couleur).
Le site décode avec L = t / (1 - t), t = e ^ 2.2 (voir src/app/scene/bake/apply-bake.ts).
"""

import argparse
import json
import math
import os
import sys
import time

import bpy  # avant bmesh : c'est bpy qui l'enregistre
import bmesh
import numpy as np
from mathutils import Matrix, Vector

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..'))

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:]
ap = argparse.ArgumentParser()
ap.add_argument('--size', type=int, default=2048)
ap.add_argument('--samples', type=int, default=128)
ap.add_argument('--preview', action='store_true', help='petit atlas, peu d’échantillons (réglages)')
ap.add_argument('--only', choices=['day', 'night'], default=None)
ap.add_argument('--out', default=os.path.join(ROOT, 'public', 'room'))
ap.add_argument('--save-blend', action='store_true')
args = ap.parse_args(argv)
if args.preview:
    args.size, args.samples = 1024, 24

# ---------------------------------------------------------------- réglages de lumière
# Ajustés à l'œil (captures) ; les unités de Three.js et de Cycles ne se correspondent pas exactement.
LIGHT = {
    'point_k': 4 * math.pi,  # intensité Three.js (cd) → puissance Cycles (W)
    'emit_k': 1.0,  # emissiveIntensity → force d'émission
    'day': {'sun': 7.0, 'sky': ('#d6e6ff', 6.0), 'window': 3.0, 'points': 1.0, 'emit': 0.6},
    'night': {'sun': 0.0, 'sky': ('#1a2140', 0.03), 'window': 0.25, 'points': 1.0, 'emit': 1.0},
}
ROOM_H = 2.5


def srgb_to_lin(c):
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def hex_rgb(h):
    h = h.lstrip('#')
    return tuple(srgb_to_lin(int(h[i:i + 2], 16) / 255) for i in (0, 2, 4))


def log(*a):
    print('[bake]', *a, flush=True)


# ---------------------------------------------------------------- scène vide
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
data = json.load(open(os.path.join(HERE, 'room.json')))
t0 = time.time()

# Les coordonnées de Three.js (y vers le haut) sont gardées telles quelles : l'export glTF se fait
# avec export_yup=False, le site retrouve donc exactement ses repères.
THREE_TO_BL = Matrix.Rotation(-math.pi / 2, 4, 'X')  # axe z de Blender → axe y de Three.js (formes)


def three_matrix(el):
    """Matrice Three.js (colonnes) → mathutils."""
    return Matrix([[el[c * 4 + r] for c in range(4)] for r in range(4)])


# ---------------------------------------------------------------- matériaux
materials = {}


def diffuse_mat(color):
    key = 'd' + color
    if key in materials:
        return materials[key]
    m = bpy.data.materials.new(key)
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    bsdf = nt.nodes.new('ShaderNodeBsdfDiffuse')
    bsdf.inputs['Color'].default_value = (*hex_rgb(color), 1)
    nt.links.new(bsdf.outputs[0], out.inputs[0])
    m['bake_target'] = True
    materials[key] = m
    return m


emit_mats = []  # (matériau, couleur jour, force jour, couleur nuit, force nuit, fenêtre ?)


def emit_mat(entry):
    e = entry['emit']
    key = 'e' + json.dumps(e) + str(entry['window'])
    if key in materials:
        return materials[key]
    m = bpy.data.materials.new('emit')
    m.use_nodes = True
    nt = m.node_tree
    nt.nodes.clear()
    out = nt.nodes.new('ShaderNodeOutputMaterial')
    em = nt.nodes.new('ShaderNodeEmission')
    if entry['window']:
        # vitre : laisse passer le soleil (le mur est percé derrière) et diffuse la lumière du ciel
        tr = nt.nodes.new('ShaderNodeBsdfTransparent')
        add = nt.nodes.new('ShaderNodeAddShader')
        nt.links.new(tr.outputs[0], add.inputs[0])
        nt.links.new(em.outputs[0], add.inputs[1])
        nt.links.new(add.outputs[0], out.inputs[0])
    else:
        nt.links.new(em.outputs[0], out.inputs[0])
    materials[key] = m
    emit_mats.append((em, e, entry['window']))
    return m


def set_emitters(mode):
    cfg = LIGHT[mode]
    for em, e, window in emit_mats:
        col, strength = e[mode]
        em.inputs['Color'].default_value = (*hex_rgb(col), 1)
        k = cfg['window'] if window else cfg['emit']
        em.inputs['Strength'].default_value = strength * LIGHT['emit_k'] * k


# ---------------------------------------------------------------- formes
def bm_box(s):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bmesh.ops.scale(bm, vec=Vector((s['w'], s['h'], s['d'])), verts=bm.verts)
    r = s['r']
    if r > 0.002:
        bmesh.ops.bevel(bm, geom=list(bm.edges), offset=r, segments=3, profile=0.5, affect='EDGES')
    elif min(s['w'], s['h'], s['d']) > 0.01:
        # même les boîtes « vives » reçoivent un petit chanfrein : il accroche la lumière
        bmesh.ops.bevel(
            bm, geom=list(bm.edges), offset=min(0.002, min(s['w'], s['h'], s['d']) / 4), segments=1, affect='EDGES'
        )
    return bm


def bm_cyl(s):
    bm = bmesh.new()
    seg = max(12, min(40, int(s['seg'])))
    bmesh.ops.create_cone(
        bm, cap_ends=True, cap_tris=False, segments=seg, radius1=s['rb'], radius2=s['rt'], depth=s['h']
    )
    bmesh.ops.transform(bm, matrix=THREE_TO_BL, verts=bm.verts)
    rmin = min(s['rt'], s['rb'])
    off = min(0.004, rmin / 3, s['h'] / 4)
    if off > 0.0008:
        caps = [e for e in bm.edges if e.is_manifold and e.calc_face_angle(0) > 1.0]
        bmesh.ops.bevel(bm, geom=caps, offset=off, segments=2, affect='EDGES')
    return bm


def bm_sph(s):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=32, v_segments=16, radius=s['r'])
    return bm


def make_object(entry):
    me = bpy.data.meshes.new(entry['id'])
    if 'shape' in entry:
        s = entry['shape']
        bm = {'box': bm_box, 'cyl': bm_cyl, 'sph': bm_sph}[s['t']](s)
        bm.transform(three_matrix(entry['matrix']))
        if three_matrix(entry['matrix']).determinant() < 0:
            bmesh.ops.reverse_faces(bm, faces=bm.faces)
        bm.to_mesh(me)
        bm.free()
        for p in me.polygons:
            p.use_smooth = True
        weighted = True
    else:
        pos = np.array(entry['pos'], dtype=np.float32).reshape(-1, 3)
        idx = np.array(entry['index'], dtype=np.int32).reshape(-1, 3)
        if entry.get('flip'):
            idx = idx[:, ::-1]
        me.from_pydata(pos.tolist(), [], idx.tolist())
        me.validate(clean_customdata=False)
        for p in me.polygons:
            p.use_smooth = True
        if 'nor' in entry and len(me.vertices) == len(pos):
            nor = np.array(entry['nor'], dtype=np.float32).reshape(-1, 3)
            me.normals_split_custom_set_from_vertices(nor.tolist())
        if 'uv' in entry and len(me.vertices) == len(pos):
            uv = np.array(entry['uv'], dtype=np.float32).reshape(-1, 2)
            layer = me.uv_layers.new(name='UV0')
            loops_v = np.zeros(len(me.loops), dtype=np.int32)
            me.loops.foreach_get('vertex_index', loops_v)
            layer.data.foreach_set('uv', uv[loops_v].ravel())
        # soude les sommets en double (géométries non indexées) : sinon chaque triangle
        # deviendrait un îlot dans l'atlas de lumière
        bm = bmesh.new()
        bm.from_mesh(me)
        bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
        bm.to_mesh(me)
        bm.free()
        weighted = False
    ob = bpy.data.objects.new(entry['id'], me)
    ob['sig'] = entry['sig']
    scene.collection.objects.link(ob)
    if entry['role'] == 'emit':
        me.materials.append(emit_mat(entry))
    else:
        me.materials.append(diffuse_mat(entry['color']))
    if weighted:
        # normales « durcies » : faces planes nettes, arêtes arrondies douces
        mod = ob.modifiers.new('wn', 'WEIGHTED_NORMAL')
        mod.keep_sharp = True
        mod.weight = 100
    return ob


bake_objs, other_objs, windows = [], [], []
for entry in data['meshes']:
    ob = make_object(entry)
    (bake_objs if entry['role'] == 'bake' else other_objs).append(ob)
    if entry['window']:
        windows.append(ob)
log(f'{len(bake_objs)} objets à pré-calculer, {len(other_objs)} autres ({time.time() - t0:.0f} s)')

# ---------------------------------------------------------------- plafond (pour les rebonds de lumière)
# Il n'existe pas dans le site (vue d'en haut), mais une vraie pièce renvoie la lumière par le haut.
me = bpy.data.meshes.new('ceiling')
# limité à l'intérieur : le dessus des murs, visible en vue d'en haut, reste éclairé
me.from_pydata([(0, ROOM_H, -0.35), (6.0, ROOM_H, -0.35), (6.0, ROOM_H, 3.4), (0, ROOM_H, 3.4)], [], [(0, 3, 2, 1)])
ceiling = bpy.data.objects.new('ceiling', me)
me.materials.append(diffuse_mat('f6f1ea'))
scene.collection.objects.link(ceiling)


# ---------------------------------------------------------------- murs percés aux fenêtres
def bbox(ob):
    pts = [ob.matrix_world @ Vector(c) for c in ob.bound_box]
    return Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts))), Vector(
        (max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts))
    )


for win in windows:
    lo, hi = bbox(win)
    size = hi - lo
    thin = min(range(3), key=lambda i: size[i])
    big = [i for i in range(3) if i != thin]
    clo, chi = lo.copy(), hi.copy()
    clo[thin] -= 0.4
    chi[thin] += 0.4
    cut = bpy.data.objects.new('cut', bpy.data.meshes.new('cut'))
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bm.transform(Matrix.Translation((clo + chi) / 2) @ Matrix.Diagonal((*(chi - clo), 1)))
    bm.to_mesh(cut.data)
    bm.free()
    scene.collection.objects.link(cut)
    for ob in bake_objs:
        olo, ohi = bbox(ob)
        contains = all(olo[i] <= lo[i] + 1e-3 and ohi[i] >= hi[i] - 1e-3 for i in big)
        overlaps = olo[thin] < chi[thin] and ohi[thin] > clo[thin]
        if contains and overlaps:
            mod = ob.modifiers.new('hole', 'BOOLEAN')
            mod.operation = 'DIFFERENCE'
            mod.object = cut
            mod.solver = 'EXACT'
            log('mur percé :', ob.name, '←', win.name)
    cut.hide_render = True

# applique les modificateurs (biseaux, normales, percements)
deps = bpy.context.evaluated_depsgraph_get()
for ob in bake_objs + other_objs:
    if ob.modifiers:
        ev = ob.evaluated_get(deps)
        me = bpy.data.meshes.new_from_object(ev, preserve_all_data_layers=True, depsgraph=deps)
        ob.modifiers.clear()
        old = ob.data
        ob.data = me
        bpy.data.meshes.remove(old)
for ob in scene.objects:
    if ob.name.startswith('cut'):
        bpy.data.objects.remove(ob)
log(f'géométrie prête ({time.time() - t0:.0f} s)')

# ---------------------------------------------------------------- atlas de lumière (UV2)
for ob in bake_objs:
    ob.data.uv_layers.new(name='Lightmap')
    ob.data.uv_layers.active = ob.data.uv_layers['Lightmap']
bpy.ops.object.select_all(action='DESELECT')
for ob in bake_objs:
    ob.select_set(True)
bpy.context.view_layer.objects.active = bake_objs[0]
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.uv.smart_project(angle_limit=math.radians(60), island_margin=0.0, area_weight=0.0, scale_to_bounds=False)
bpy.ops.uv.select_all(action='SELECT')
bpy.ops.uv.average_islands_scale()
margin_px = 4
bpy.ops.uv.pack_islands(
    udim_source='CLOSEST_UDIM', rotate=True, margin_method='FRACTION', margin=margin_px / args.size, shape_method='AABB',
    scale=True,
)
bpy.ops.object.mode_set(mode='OBJECT')
log(f'atlas déplié ({time.time() - t0:.0f} s)')

# ---------------------------------------------------------------- lumières
world = bpy.data.worlds.new('world')
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes['Background']

sun_data = bpy.data.lights.new('sun', 'SUN')
sun_data.angle = math.radians(1.5)
sun_data.color = hex_rgb(data['sun']['color'])
sun = bpy.data.objects.new('sun', sun_data)
d = Vector(data['sun']['dir']).normalized()
sun.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
scene.collection.objects.link(sun)

points = []
for l in data['lights']:
    ld = bpy.data.lights.new('p', 'POINT')
    ld.color = hex_rgb(l['color'])
    ld.shadow_soft_size = 0.06
    ob = bpy.data.objects.new('p', ld)
    ob.location = l['pos']
    scene.collection.objects.link(ob)
    points.append((ld, l))


def set_mode(mode):
    cfg = LIGHT[mode]
    sun_data.energy = cfg['sun']
    col, strength = cfg['sky']
    bg.inputs['Color'].default_value = (*hex_rgb(col), 1)
    bg.inputs['Strength'].default_value = strength
    for ld, l in points:
        ld.energy = l[mode] * LIGHT['point_k'] * cfg['points']
    set_emitters(mode)


# ---------------------------------------------------------------- pré-calcul
scene.render.engine = 'CYCLES'
cy = scene.cycles
cy.device = 'CPU'
cy.samples = args.samples
cy.max_bounces = 6
cy.diffuse_bounces = 4
cy.glossy_bounces = 1
cy.transparent_max_bounces = 4
cy.sample_clamp_indirect = 8
scene.render.bake.margin = margin_px * 2
scene.render.bake.margin_type = 'EXTEND'
scene.render.bake.use_pass_direct = True
scene.render.bake.use_pass_indirect = True
scene.render.bake.use_pass_color = False

img = bpy.data.images.new('LM', args.size, args.size, float_buffer=True)
for m in materials.values():
    if not m.get('bake_target'):
        continue
    n = m.node_tree.nodes.new('ShaderNodeTexImage')
    n.image = img
    n.select = True
    m.node_tree.nodes.active = n

bpy.ops.object.select_all(action='DESELECT')
for ob in bake_objs:
    ob.select_set(True)
bpy.context.view_layer.objects.active = bake_objs[0]
os.makedirs(args.out, exist_ok=True)

try:
    from PIL import Image
except ImportError:  # pragma: no cover
    Image = None


def denoise():
    """Débruite l'atlas avec OIDN (compositeur de Blender ; il faut EGL : paquets libegl1, libegl-mesa0)."""
    sc = bpy.data.scenes.get('denoise') or bpy.data.scenes.new('denoise')
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = 1
    sc.cycles.device = 'CPU'
    sc.render.resolution_x = sc.render.resolution_y = args.size
    sc.render.resolution_percentage = 100
    sc.render.use_compositing = True
    sc.render.image_settings.file_format = 'OPEN_EXR'
    sc.render.image_settings.color_depth = '32'
    sc.view_settings.view_transform = 'Standard'
    tree = bpy.data.node_groups.new('denoise', 'CompositorNodeTree')
    sc.compositing_node_group = tree
    n_img = tree.nodes.new('CompositorNodeImage')
    n_img.image = img
    dn = tree.nodes.new('CompositorNodeDenoise')
    dn.inputs['HDR'].default_value = True
    out = tree.nodes.new('NodeGroupOutput')
    tree.interface.new_socket('Image', in_out='OUTPUT', socket_type='NodeSocketColor')
    tree.links.new(n_img.outputs['Image'], dn.inputs['Image'])
    tree.links.new(dn.outputs[0], out.inputs[0])
    bpy.ops.render.render(scene=sc.name)
    tmp = os.path.join(HERE, '_denoised.exr')
    bpy.data.images['Render Result'].save_render(tmp, scene=sc)
    res = bpy.data.images.load(tmp)
    px = np.array(res.pixels[:], dtype=np.float32).reshape(args.size, args.size, 4)
    bpy.data.images.remove(res)
    bpy.data.node_groups.remove(tree)
    os.remove(tmp)
    return px


def save_encoded(path, px):
    px = px[::-1, :, :3]
    px = np.clip(px, 0, None)
    enc = (px / (1 + px)) ** (1 / 2.2)
    enc8 = np.clip(enc * 255 + 0.5, 0, 255).astype(np.uint8)
    if Image is None:
        raise SystemExit('Pillow manquant : pip install pillow')
    Image.fromarray(enc8, 'RGB').save(path, quality=88, method=6)
    log('écrit', path, f'{os.path.getsize(path) / 1e3:.0f} ko', 'max', float(px.max()), 'moy', float(px.mean()))


for mode in [args.only] if args.only else ['day', 'night']:
    set_mode(mode)
    t1 = time.time()
    bpy.ops.object.bake(type='DIFFUSE', pass_filter={'DIRECT', 'INDIRECT'}, use_clear=True, margin=margin_px * 2)
    log(f'pré-calcul {mode} : {time.time() - t1:.0f} s')
    t1 = time.time()
    try:
        px = denoise()
        log(f'débruitage : {time.time() - t1:.0f} s')
    except Exception as e:  # pas d'EGL : atlas brut
        log('débruitage impossible :', e)
        px = np.array(img.pixels[:], dtype=np.float32).reshape(args.size, args.size, 4)
    save_encoded(os.path.join(args.out, f'light-{mode}.webp'), px)

# ---------------------------------------------------------------- export
bpy.ops.object.select_all(action='DESELECT')
for ob in bake_objs:
    ob.select_set(True)
glb = os.path.join(args.out, 'room.glb')
bpy.ops.export_scene.gltf(
    filepath=glb,
    use_selection=True,
    export_format='GLB',
    export_yup=False,
    export_apply=True,
    export_normals=False,
    export_tangents=False,
    export_materials='NONE',
    export_texcoords=True,
    export_attributes=False,
    export_extras=True,
    export_draco_mesh_compression_enable=True,
    export_draco_mesh_compression_level=7,
    export_draco_position_quantization=15,
    export_draco_texcoord_quantization=14,
)
log('écrit', glb, f'{os.path.getsize(glb) / 1e6:.2f} Mo', f'(total {time.time() - t0:.0f} s)')
if args.save_blend:
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(HERE, 'room.blend'))
