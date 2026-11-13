import * as THREE from 'three';
import { InteractiveObjectId } from '../data/types';
import { FRAME_IMAGES } from '../data/frames';
import {
  box,
  canvasTexture,
  cyl,
  glow,
  group,
  loadFrameImage,
  mat,
  plane,
  pointLight,
  resetRandom,
  rnd,
  sph,
} from './helpers';
import {
  BALCONY_DOOR,
  CHAIRS,
  COFFEE_TABLE,
  CAT_TREE,
  DESK,
  DESK_ITEMS,
  KALLAX,
  MEDIA_WALL,
  MONITORS,
  ROOM,
  RUG,
  SOFA,
  TV,
  WINDOW,
} from './room-layout';
import { buildDuck, buildExtras, buildTeardown } from './build-extras';
import { buildConsoles, buildEvaFigure, buildLavaLamp, LavaLamp } from './build-collection';
import {
  artTexture,
  azuraMonitorTexture,
  cvPaperTexture,
  floorTexture,
  haloTexture,
  hubtvMonitorTexture,
  hubtvTvTexture,
  jellyfishTexture,
  notebookTexture,
  pixelArtTexture,
  retroGameTexture,
  minimalPosterTexture,
} from './textures';

/** Une valeur qui varie entre le jour (0) et la nuit (1). */
export interface Dimmable {
  apply(night: number): void;
}

export interface Wall {
  group: THREE.Group;
  center: THREE.Vector3;
  normal: THREE.Vector3;
}

export interface RoomBuild {
  root: THREE.Group;
  walls: Wall[];
  interactives: Map<InteractiveObjectId, THREE.Object3D>;
  dimmables: Dimmable[];
  sun: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  tv: {
    screen: THREE.MeshStandardMaterial;
    light: THREE.PointLight;
    jellyfish: THREE.Texture;
    hubtv: THREE.Texture;
    retro: THREE.Texture;
  };
  /** Petites animations permanentes (LED du serveur, méduses…). */
  tickers: ((t: number) => void)[];
  /** Effets propres à certains easter eggs (méduses qui brillent, étoiles qui scintillent). */
  eggEffects: Map<InteractiveObjectId, () => void>;
  /** Lampe à lave : `step` l'anime et suit l'état allumé. */
  lava: LavaLamp;
}

const { width: W, depth: D, height: H, wallThickness: WT, doorRecessDepth: RD } = ROOM;
const WALL = '#f4ede5';

export function buildRoom(): RoomBuild {
  resetRandom(7);
  const root = new THREE.Group();
  root.name = 'room';
  const walls: Wall[] = [];
  const interactives = new Map<InteractiveObjectId, THREE.Object3D>();
  const dimmables: Dimmable[] = [];
  const tickers: ((t: number) => void)[] = [];
  const eggEffects = new Map<InteractiveObjectId, () => void>();

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const dimLight = (l: THREE.Light, day: number, night: number) =>
    dimmables.push({ apply: (n) => (l.intensity = lerp(day, night, n)) });
  const dimEmissive = (m: THREE.MeshStandardMaterial, day: number, night: number) =>
    dimmables.push({ apply: (n) => (m.emissiveIntensity = lerp(day, night, n)) });
  const dimOpacity = (m: THREE.Material, day: number, night: number) =>
    dimmables.push({ apply: (n) => (m.opacity = lerp(day, night, n)) });

  const register = (id: InteractiveObjectId, o: THREE.Object3D) => {
    o.userData['interactiveId'] = id;
    o.name = id;
    interactives.set(id, o);
  };

  const wallGroup = (cx: number, cz: number, nx: number, nz: number) => {
    const g = group(root);
    walls.push({
      group: g,
      center: new THREE.Vector3(cx, H / 2, cz),
      normal: new THREE.Vector3(nx, 0, nz),
    });
    return g;
  };
  const gDesk = wallGroup(W / 2, 0, 0, -1);
  const gTV = wallGroup(W / 2, D, 0, 1);
  const gEnd = wallGroup(0, D / 2, -1, 0);
  const gWin = wallGroup(W, D / 2, 1, 0);

  // ---------- murs & sol ----------
  const wm = mat(WALL, { roughness: 0.95 });
  box(gDesk, W - 1.0 + WT, H, WT, wm, 1.0 + (W - 1.0) / 2 + WT / 2, 0, -WT / 2, 0);
  box(gDesk, 1.0, H, WT, wm, 0.5, 0, -RD - WT / 2, 0);
  box(gDesk, WT, H, RD, wm, 1.0 + WT / 2, 0, -RD / 2, 0);
  box(gTV, W + WT * 2, H, WT, wm, W / 2, 0, D + WT / 2, 0);
  box(gEnd, WT, H, D + RD + WT, wm, -WT / 2, 0, (D - RD) / 2, 0);
  box(gWin, WT, H, D, wm, W + WT / 2, 0, D / 2, 0);
  box(gDesk, W - 1.0, 0.07, 0.02, '#ffffff', 1.0 + (W - 1.0) / 2, 0, 0.01, 0);
  box(gTV, W, 0.07, 0.02, '#ffffff', W / 2, 0, D - 0.01, 0);
  box(gEnd, 0.02, 0.07, D, '#ffffff', 0.01, 0, D / 2, 0);

  const fm = new THREE.MeshStandardMaterial({ map: floorTexture(), roughness: 0.55 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), fm);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(W / 2, 0, D / 2);
  floor.receiveShadow = true;
  floor.name = 'floor';
  root.add(floor);
  const fl2 = new THREE.Mesh(new THREE.PlaneGeometry(1.0, RD), fm);
  fl2.rotation.x = -Math.PI / 2;
  fl2.position.set(0.5, 0, -RD / 2);
  fl2.receiveShadow = true;
  root.add(fl2);
  // socle du diorama
  box(
    root,
    W + 0.4,
    0.18,
    D + 0.4 + RD,
    mat('#e9dccf', { roughness: 0.9 }),
    W / 2,
    -0.181,
    (D - RD) / 2,
    0.04,
  );

  const glassMat = new THREE.MeshStandardMaterial({
    color: '#cfe8ff',
    emissive: '#d8eeff',
    emissiveIntensity: 0.9,
  });
  glassMat.userData['window'] = true; // vitre : source de lumière du ciel pour le pré-calcul
  dimmables.push({
    apply: (n) => {
      glassMat.color.lerpColors(new THREE.Color('#cfe8ff'), new THREE.Color('#1d2547'), n);
      glassMat.emissive.lerpColors(new THREE.Color('#d8eeff'), new THREE.Color('#141a38'), n);
      glassMat.emissiveIntensity = lerp(0.9, 0.5, n);
    },
  });

  // ---------- mur du bureau (z = 0) ----------
  box(gDesk, 0.85, 2.05, 0.04, '#ece4da', 0.5, 0, -RD + 0.02, 0.01);
  sph(gDesk, 0.025, '#b9a99a', 0.82, 1.0, -RD + 0.06);
  // galerie de cadres au-dessus du bureau
  (
    [
      [1.5, 1.45, 0.42, 0.55],
      [2.0, 1.58, 0.38, 0.5],
      [2.45, 1.52, 0.36, 0.48],
      [2.85, 1.6, 0.26, 0.36],
      [1.55, 2.02, 0.3, 0.24],
    ] as const
  ).forEach(([x, y, w, h], i) => {
    box(gDesk, w, h, 0.025, '#1f1b22', x, y - h / 2, 0.0125, 0.004);
    const art = new THREE.MeshStandardMaterial({
      map:
        i === 0
          ? pixelArtTexture('jelly')
          : i === 2
            ? pixelArtTexture('cat')
            : i === 3
              ? pixelArtTexture('pad')
              : artTexture(i),
      roughness: 0.9,
    });
    plane(gDesk, w - 0.05, h - 0.05, art, x, y, 0.027);
    loadFrameImage(art, FRAME_IMAGES.desk[i] ?? null, w - 0.05, h - 0.05); // vraie image si fournie
  });
  // passe-plat vers la cuisine au-dessus du canapé
  const PX = 4.9;
  box(gDesk, 1.2, 1.0, 0.02, mat('#d9cfe0', { roughness: 0.25, metalness: 0.1 }), PX, 1.0, 0.01, 0);
  [0.98, 2.0].forEach((y) => box(gDesk, 1.28, 0.05, 0.05, '#ffffff', PX, y, 0.025, 0.005));
  [PX - 0.62, PX + 0.62].forEach((x) =>
    box(gDesk, 0.05, 1.05, 0.05, '#ffffff', x, 0.98, 0.025, 0.005),
  );
  box(gDesk, 0.42, 0.5, 0.025, '#e9dccb', 3.85, 1.35, 0.0125, 0.005);
  plane(
    gDesk,
    0.36,
    0.44,
    new THREE.MeshStandardMaterial({ map: artTexture(7), roughness: 0.9 }),
    3.85,
    1.6,
    0.027,
  );
  box(gDesk, 0.3, 0.42, 0.025, '#1f1b22', 3.2, 1.58, 0.0125, 0.004);
  plane(
    gDesk,
    0.25,
    0.37,
    new THREE.MeshStandardMaterial({ map: artTexture(3), roughness: 0.9 }),
    3.2,
    1.79,
    0.027,
  );
  // guirlande au-dessus du passe-plat
  const fairy = glow('#ffd89a', 3);
  dimEmissive(fairy, 0.4, 3);
  for (let k = 0; k < 14; k++)
    sph(
      gDesk,
      0.012,
      fairy,
      PX - 0.58 + k * 0.089,
      1.95 - Math.sin((k / 13) * Math.PI) * 0.08,
      0.06,
    );
  // halo violet derrière les écrans
  {
    const m = new THREE.MeshBasicMaterial({
      map: haloTexture('rgba(170,140,255,0.95)'),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    dimOpacity(m, 0.25, 1);
    plane(gDesk, 2.0, 1.0, m, DESK.x - 0.05, 1.0, 0.03);
    dimLight(pointLight(gDesk, 0xa58cff, 1.6, 2.5, DESK.x - 0.05, 1.0, 0.3), 0.1, 1.6);
  }

  // ---------- mur du KALLAX (x = 0) : miroir, guitare ----------
  {
    const m = group(gEnd);
    m.position.set(0.04, 0, 1.05);
    m.rotation.z = -0.05;
    box(m, 0.03, 1.8, 0.62, '#2a2630', 0, 0, 0, 0.01);
    box(m, 0.01, 1.72, 0.54, mat('#d8e8f0', { metalness: 0.9, roughness: 0.08 }), 0.02, 0.04, 0, 0);
  }
  {
    const gg = group(gEnd);
    gg.position.set(0.06, 0.85, 0.38);
    gg.rotation.y = Math.PI / 2;
    cyl(gg, 0.17, 0.17, 0.08, '#a86b3c', 0, 0.15, 0, 24).rotation.x = Math.PI / 2;
    cyl(gg, 0.13, 0.13, 0.08, '#a86b3c', 0, 0.42, 0, 24).rotation.x = Math.PI / 2;
    cyl(gg, 0.04, 0.04, 0.09, '#2a1a10', 0, 0.27, 0).rotation.x = Math.PI / 2;
    box(gg, 0.05, 0.55, 0.03, '#3a2a20', 0, 0.55, 0, 0.005);
    box(gg, 0.08, 0.12, 0.03, '#3a2a20', 0, 1.1, 0, 0.01);
    // cordes
    for (let k = 0; k < 4; k++)
      box(gg, 0.003, 0.8, 0.002, '#e8e2d6', -0.015 + k * 0.01, 0.12, 0.046, 0);
    addHitBox(gg, 0.4, 1.25, 0.15, 0, 0.6, 0);
    register('egg-guitar', gg);
  }

  // ---------- mur de la fenêtre (x = W) ----------
  box(
    gWin,
    0.02,
    WINDOW.height,
    WINDOW.width,
    glassMat,
    W - 0.01,
    WINDOW.sill,
    WINDOW.z,
    0,
  ).castShadow = false;
  [WINDOW.sill, WINDOW.sill + WINDOW.height].forEach((y) =>
    box(gWin, 0.06, 0.06, WINDOW.width + 0.08, '#ffffff', W - 0.03, y - 0.03, WINDOW.z, 0.005),
  );
  [WINDOW.z - 0.6, WINDOW.z + 0.6, WINDOW.z].forEach((z) =>
    box(gWin, 0.06, 1.26, 0.06, '#ffffff', W - 0.03, WINDOW.sill - 0.03, z, 0.005),
  );
  [WINDOW.z - 0.78, WINDOW.z + 0.78].forEach((z) => {
    for (let k = 0; k < 4; k++)
      cyl(gWin, 0.05, 0.06, 2.2, '#d8bdae', W - 0.12, 0.05, z - 0.12 + k * 0.08, 10);
  });
  // radiateur + hamac à chat (restent visibles même quand le mur est masqué)
  for (let k = 0; k < 14; k++)
    box(root, 0.08, 0.55, 0.05, '#f7f7f5', W - 0.09, 0.15, WINDOW.z - 0.53 + k * 0.077, 0.01);
  box(root, 0.42, 0.03, 0.6, '#f6ece0', W - 0.32, 0.72, WINDOW.z, 0.015);
  [WINDOW.z - 0.28, WINDOW.z + 0.28].forEach((z) => {
    const r = cyl(root, 0.006, 0.006, 0.3, '#c9c9cf', W - 0.2, 0.7, z, 6);
    r.rotation.z = 0.9;
  });

  // ---------- mur du balcon et de la TV (z = D) ----------
  const { x0: FD0, x1: FD1 } = BALCONY_DOOR;
  const FDc = (FD0 + FD1) / 2;
  box(gTV, FD1 - FD0, 2.15, 0.02, glassMat, FDc, 0.02, D - 0.01, 0).castShadow = false;
  [FD0, FDc, FD1].forEach((x) => box(gTV, 0.06, 2.2, 0.06, '#ffffff', x, 0, D - 0.03, 0.005));
  box(gTV, FD1 - FD0 + 0.06, 0.06, 0.06, '#ffffff', FDc, 2.17, D - 0.03, 0.005);
  box(gTV, FD1 - FD0, 0.06, 0.06, '#ffffff', FDc, 1.05, D - 0.03, 0.005);
  [FD0 - 0.12, FD1 + 0.12].forEach((x) => {
    for (let k = 0; k < 4; k++)
      cyl(gTV, 0.05, 0.06, 2.3, '#f6f3ee', x - 0.12 + k * 0.08, 0.02, D - 0.12, 10);
  });
  // affiches encadrées sur l'étagère, entre les colonnes
  for (let i = 0; i < 6; i++) {
    const x = TV.x + (i - 2.5) * 0.29;
    const tex = new THREE.MeshStandardMaterial({ map: minimalPosterTexture(i), roughness: 0.9 });
    loadFrameImage(tex, FRAME_IMAGES.tv[i] ?? null, 0.23, 0.34); // vraie affiche si fournie
    box(gTV, 0.27, 0.39, 0.025, '#d8b893', x, 1.72 - 0.195, D - 0.0125, 0.004);
    plane(gTV, 0.23, 0.34, tex, x, 1.72, D - 0.027, Math.PI);
  }
  // halo bleu derrière la TV (éclairage du meuble TV)
  {
    const m = new THREE.MeshBasicMaterial({
      map: haloTexture('rgba(90,170,255,1)'),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    dimOpacity(m, 0.2, 1);
    plane(gTV, 2.4, 1.5, m, TV.x, 0.98, D - 0.012, Math.PI);
    dimLight(pointLight(root, 0x5aaaff, 2.2, 3, TV.x, 0.95, D - 0.35), 0.1, 2.2);
  }
  // ---------- bureau ----------
  const deskTop = DESK.height;
  box(root, DESK.width, 0.04, DESK.depth, '#d9b48c', DESK.x, deskTop - 0.04, DESK.z, 0.01);
  box(
    root,
    0.05,
    deskTop - 0.04,
    DESK.depth - 0.08,
    '#f4f4f2',
    DESK.x - DESK.width / 2 + 0.05,
    0,
    DESK.z,
    0.005,
  );
  box(root, 0.38, 0.7, 0.6, '#f7f5f2', DESK.drawerX, 0, DESK.z - 0.06, 0.01);
  for (let k = 0; k < 5; k++)
    box(root, 0.36, 0.005, 0.01, '#d9d2c8', DESK.drawerX, 0.12 + k * 0.135, DESK.z + 0.245, 0);
  box(root, 0.95, 0.006, 0.36, '#f3f1ee', DESK.x - 0.1, deskTop, DESK.z + 0.1, 0.003); // tapis de souris
  box(
    root,
    0.42,
    0.025,
    0.13,
    mat('#ffffff', { emissive: '#bcd6ff', emissiveIntensity: 0.25 }),
    DESK_ITEMS.keyboard.x,
    deskTop + 0.006,
    DESK_ITEMS.keyboard.z,
    0.006,
  );
  sph(
    root,
    0.03,
    '#ffffff',
    DESK_ITEMS.keyboard.x + 0.37,
    deskTop + 0.02,
    DESK_ITEMS.keyboard.z + 0.02,
    1,
    0.6,
    1.4,
  );

  // deux écrans Acer
  (
    [
      ['monitor-left', MONITORS.left, hubtvMonitorTexture()],
      ['monitor-right', MONITORS.right, azuraMonitorTexture()],
    ] as const
  ).forEach(([id, m, tex]) => {
    const g = group(root);
    g.position.set(m.x, MONITORS.centerY, MONITORS.z);
    g.rotation.y = m.rotY;
    box(g, MONITORS.width, MONITORS.height, 0.035, '#16151b', 0, -MONITORS.height / 2, 0, 0.008);
    // petit logo sous la dalle
    box(g, 0.06, 0.008, 0.002, '#6b6b75', 0, -MONITORS.height / 2 + 0.006, 0.019, 0);
    plane(
      g,
      MONITORS.width - 0.03,
      MONITORS.height - 0.04,
      new THREE.MeshBasicMaterial({ map: tex }),
      0,
      0.006,
      0.019,
    );
    cyl(g, 0.015, 0.015, 0.28, '#222', 0, -0.5, -0.06);
    box(g, 0.2, 0.012, 0.16, '#222', 0, -MONITORS.centerY + deskTop, -0.04, 0.004);
    dimLight(
      pointLight(g, id === 'monitor-left' ? 0x8fa8ff : 0xd9c8ff, 0, 1.6, 0, 0, 0.35),
      0,
      0.7,
    );
    register(id, g);
  });

  // tour PC éclairée + lampe posée dessus
  box(root, 0.3, 0.44, 0.44, '#f5f5f7', DESK.drawerX, deskTop - 0.02, 0.3, 0.012);
  const pcGlow = glow('#b79cff', 1.3);
  dimEmissive(pcGlow, 0.6, 1.3);
  box(root, 0.26, 0.38, 0.005, pcGlow, DESK.drawerX, deskTop + 0.01, 0.523, 0);
  dimLight(pointLight(root, 0xa98bff, 0.6, 1.4, DESK.drawerX, 0.95, 0.65), 0.1, 0.6);

  // lampe à lave du bureau : allumée le soir, ou au clic
  const lava = buildLavaLamp(root, register, DESK_ITEMS.lamp.x, deskTop - 0.02, DESK_ITEMS.lamp.z);
  buildDuck(root, register, 3.12, deskTop, 0.68);

  // panier fermé + ampli sous le bureau
  cyl(root, 0.18, 0.16, 0.4, '#d5b48a', 1.6, 0, 0.35, 24);
  cyl(root, 0.19, 0.19, 0.04, '#c9a57a', 1.6, 0.4, 0.35, 24);
  box(root, 0.3, 0.28, 0.2, '#222226', 2.45, 0, 0.3, 0.02);

  // carnet « Mon travail »
  {
    const g = group(root);
    g.position.set(DESK_ITEMS.notebook.x, deskTop + 0.003, DESK_ITEMS.notebook.z);
    g.rotation.y = DESK_ITEMS.notebook.rotY;
    box(g, 0.2, 0.022, 0.27, '#f7f2ea', 0, 0, 0, 0.004);
    const cover = plane(
      g,
      0.2,
      0.27,
      new THREE.MeshStandardMaterial({ map: notebookTexture(), roughness: 0.7 }),
      0,
      0.0235,
      0,
    );
    cover.rotation.x = -Math.PI / 2;
    box(g, 0.008, 0.008, 0.2, '#8f7ae6', 0.06, 0.022, 0.02, 0); // stylet
    // hit-box un peu plus large pour faciliter le clic
    addHitBox(g, 0.26, 0.08, 0.32, 0, 0.02, 0);
    register('notebook', g);
  }
  // feuille « CV — Léna Simonin » près du clavier
  {
    const g = group(root);
    g.position.set(DESK_ITEMS.cvSheet.x, deskTop + 0.004, DESK_ITEMS.cvSheet.z);
    g.rotation.y = DESK_ITEMS.cvSheet.rotY;
    const paper = plane(
      g,
      0.18,
      0.255,
      new THREE.MeshStandardMaterial({ map: cvPaperTexture(), roughness: 0.85 }),
      0,
      0.002,
      0,
    );
    paper.rotation.x = -Math.PI / 2;
    paper.receiveShadow = true;
    box(g, 0.05, 0.006, 0.014, '#e38aa3', 0, 0.002, -0.12, 0.002); // trombone
    addHitBox(g, 0.22, 0.06, 0.29, 0, 0.02, 0);
    register('cv-sheet', g);
  }

  // ---------- chaise gaming REKT (siège baquet) ----------
  {
    const g = group(root, 'gaming-chair');
    g.position.set(CHAIRS.gaming.x, 0, CHAIRS.gaming.z);
    g.rotation.y = CHAIRS.gaming.rotY;
    const leather = new THREE.MeshPhysicalMaterial({
      color: CHAIRS.gaming.main,
      roughness: 0.45,
      clearcoat: 0.35,
      clearcoatRoughness: 0.5,
    });
    const accent = mat(CHAIRS.gaming.accent, { roughness: 0.5 });
    const plastic = mat('#18181c', { roughness: 0.5 });
    const chrome = mat('#c9ccd3', { metalness: 0.9, roughness: 0.25 });

    // piétement 5 branches et roulettes
    cyl(g, 0.028, 0.032, 0.3, chrome, 0, 0.08, 0, 24);
    cyl(g, 0.06, 0.06, 0.05, plastic, 0, 0.36, 0, 24);
    for (let k = 0; k < 5; k++) {
      const a = (k / 5) * Math.PI * 2;
      const arm = box(g, 0.3, 0.035, 0.05, plastic, Math.cos(a) * 0.15, 0.06, Math.sin(a) * 0.15, 0.015);
      arm.rotation.y = -a;
      arm.rotation.z = 0;
      sph(g, 0.028, plastic, Math.cos(a) * 0.3, 0.028, Math.sin(a) * 0.3, 1, 1, 0.8);
    }
    // assise baquet : coussin central + bourrelets latéraux
    box(g, 0.4, 0.09, 0.5, leather, 0, 0.4, 0, 0.04);
    [-1, 1].forEach((s) => {
      box(g, 0.08, 0.13, 0.5, leather, s * 0.24, 0.39, 0, 0.04);
      box(g, 0.012, 0.012, 0.46, accent, s * 0.2, 0.488, 0, 0.004); // surpiqûre
    });
    // dossier inclinable
    const back = group(g);
    back.position.set(0, 0.47, 0.25);
    back.rotation.x = 0.14;
    box(back, 0.4, 0.86, 0.1, leather, 0, 0, 0, 0.05);
    [-1, 1].forEach((s) => {
      const wing = box(back, 0.08, 0.66, 0.15, leather, s * 0.235, 0.02, -0.02, 0.04);
      wing.rotation.y = -s * 0.28;
      const shoulder = box(back, 0.1, 0.16, 0.12, leather, s * 0.2, 0.66, -0.005, 0.04);
      shoulder.rotation.z = s * 0.12;
      box(back, 0.04, 0.09, 0.012, '#0b0b0e', s * 0.08, 0.7, -0.051, 0.004); // passages de harnais
      box(back, 0.012, 0.62, 0.012, accent, s * 0.16, 0.1, -0.052, 0.004); // bandes contrastées
    });
    box(back, 0.3, 0.012, 0.012, accent, 0, 0.6, -0.052, 0.004);
    box(back, 0.26, 0.11, 0.08, accent, 0, 0.72, -0.08, 0.04); // coussin de tête
    box(back, 0.3, 0.13, 0.08, accent, 0, 0.12, -0.08, 0.05); // coussin lombaire
    // accoudoirs
    [-1, 1].forEach((s) => {
      box(g, 0.035, 0.2, 0.05, plastic, s * 0.3, 0.42, 0.08, 0.01);
      box(g, 0.08, 0.03, 0.26, plastic, s * 0.3, 0.62, 0.04, 0.014);
    });
  }

  // ---------- canapé YULIN, bouclette beige ----------
  {
    const bTex = canvasTexture(256, 256, (c, w, h) => {
      c.fillStyle = '#e7dac6';
      c.fillRect(0, 0, w, h);
      for (let k = 0; k < 2600; k++) {
        const x = rnd() * w;
        const y = rnd() * h;
        const r = 1.5 + rnd() * 2.5;
        c.strokeStyle = rnd() < 0.5 ? 'rgba(255,250,240,.55)' : 'rgba(170,150,125,.35)';
        c.lineWidth = 1.2;
        c.beginPath();
        c.arc(x, y, r, 0, 7);
        c.stroke();
      }
    });
    bTex.wrapS = bTex.wrapT = THREE.RepeatWrapping;
    bTex.repeat.set(3, 3);
    const B = new THREE.MeshStandardMaterial({ map: bTex, color: SOFA.fabric, roughness: 1 });
    const B2 = new THREE.MeshStandardMaterial({ map: bTex, color: SOFA.fabricLight, roughness: 1 });
    const g = group(root, 'sofa');
    const X0 = SOFA.x0;
    const X1 = SOFA.x1;
    const Z0 = SOFA.z0;
    const ZM = Z0 + SOFA.seatDepth;
    const ZC = Z0 + SOFA.chaiseDepth;
    const XA = X0 + SOFA.armWidth;
    const XC = XA + SOFA.chaiseWidth;
    const XB = X1 - SOFA.armWidth;
    box(g, X1 - X0, 0.36, ZM - Z0, B, (X0 + X1) / 2, 0.03, (Z0 + ZM) / 2, 0.05);
    box(g, XC - XA, 0.36, ZC - ZM, B, (XA + XC) / 2, 0.03, (ZM + ZC) / 2, 0.05);
    box(g, X1 - X0 - 0.02, 0.26, 0.17, B, (X0 + X1) / 2, 0.39, Z0 + 0.085, 0.05);
    box(g, SOFA.armWidth, 0.57, ZC - Z0, B, X0 + 0.125, 0.03, (Z0 + ZC) / 2, 0.07);
    box(g, SOFA.armWidth, 0.57, ZM - Z0, B, X1 - 0.125, 0.03, (Z0 + ZM) / 2, 0.07);
    box(
      g,
      XC - XA - 0.01,
      0.08,
      ZC - Z0 - 0.2,
      B2,
      (XA + XC) / 2,
      0.39,
      (Z0 + 0.17 + ZC - 0.03) / 2,
      0.04,
    );
    box(g, XB - XC - 0.01, 0.08, 0.7, B2, (XC + XB) / 2, 0.39, Z0 + 0.17 + 0.35, 0.04);
    (
      [
        [XA + 0.47, 0.94],
        [XC + 0.63, 1.24],
      ] as const
    ).forEach(([x, w]) => {
      box(g, w - 0.03, 0.4, 0.2, B2, x, 0.45, Z0 + 0.2, 0.08).rotation.x = -0.16;
    });
    (
      [
        [X0 + 0.2, Z0 + 0.1],
        [X1 - 0.2, Z0 + 0.1],
        [X0 + 0.2, ZC - 0.1],
        [XC - 0.1, ZC - 0.1],
        [X1 - 0.2, ZM - 0.1],
      ] as const
    ).forEach(([x, z]) => cyl(g, 0.02, 0.02, 0.03, '#1d1d22', x, 0, z, 8));
    (
      [
        ['#f2b8c6', XA + 0.2, -0.12],
        ['#fbf3e8', XA + 0.7, 0.1],
        ['#e2d8f7', XC + 0.35, -0.1],
        ['#f2b8c6', XB - 0.25, 0.15],
      ] as const
    ).forEach(([c, x, ry]) =>
      box(g, 0.42, 0.4, 0.13, c, x, 0.47, Z0 + 0.36, 0.09).rotation.set(-0.22, ry, 0),
    );
    box(g, 0.8, 0.035, 0.55, '#f6c9d3', (XA + XC) / 2, 0.47, ZC - 0.38, 0.015);
  }

  // rebord derrière le canapé + étagère échelle
  {
    const LH = 0.85;
    box(root, W - 3.15, LH, 0.2, '#f1ebe3', 3.15 + (W - 3.15) / 2, 0, 0.1, 0.01);
    box(root, W - 3.15, 0.025, 0.21, '#e9e1d6', 3.15 + (W - 3.15) / 2, LH, 0.105, 0.005);
    cyl(root, 0.035, 0.035, 0.08, mat('#1f1f24', { roughness: 0.3 }), 3.4, LH + 0.025, 0.1);
    const x = 5.78;
    const z = 0.11;
    const y0 = LH + 0.025;
    [-0.17, 0.17].forEach((dx) =>
      [-0.1, 0.1].forEach((dz) => cyl(root, 0.012, 0.012, 1.4, '#ffffff', x + dx, y0, z + dz, 8)),
    );
    [0.02, 0.42, 0.82, 1.22].forEach((y) =>
      box(root, 0.36, 0.02, 0.24, '#ffffff', x, y0 + y, z, 0.004),
    );
    sph(root, 0.08, '#f3dcc0', x + 0.08, y0 + 0.52, z);
    box(root, 0.1, 0.14, 0.06, glow('#9fd4ff', 0.6), x - 0.08, y0 + 0.44, z, 0.01);
    const globe = glow('#fff0d8', 1.3);
    dimEmissive(globe, 0.2, 1.4);
    sph(root, 0.08, globe, x - 0.07, y0 + 0.92, z);
    dimLight(pointLight(root, 0xffc98a, 0.25, 2.5, 5.6, 1.75, 0.4), 0.1, 1.1);
  }

  // ---------- table basse, tapis, manette ----------
  box(root, RUG.width, 0.015, RUG.depth, '#f5ecde', RUG.x, 0, RUG.z, 0.006);
  {
    const { x, z } = COFFEE_TABLE;
    // table basse : seulement la manette et la console en cours de démontage
    box(root, 1.0, 0.36, 0.56, '#f7f5f2', x, 0, z, 0.02);

    const pad = group(root);
    pad.position.set(x - 0.22, 0.36, z + 0.02);
    pad.rotation.y = 0.5;
    box(pad, 0.15, 0.03, 0.09, '#f2f2f2', 0, 0, 0, 0.02);
    sph(pad, 0.035, '#f2f2f2', -0.07, 0.02, 0.02, 1, 0.6, 1.2);
    sph(pad, 0.035, '#f2f2f2', 0.07, 0.02, 0.02, 1, 0.6, 1.2);
    sph(pad, 0.012, '#e38aa3', 0.05, 0.035, -0.01);
    sph(pad, 0.012, '#8f7ae6', -0.05, 0.035, -0.01);
    addHitBox(pad, 0.28, 0.1, 0.2, 0, 0.02, 0.01);
    register('egg-controller', pad);
    buildTeardown(root, register, x + 0.16, z - 0.02);
  }

  // ---------- meuble TV IKEA blanc + TV TCL ----------
  const TX = TV.x;
  box(root, TV.cabinetWidth, TV.cabinetHeight, TV.cabinetDepth, '#f7f5f2', TX, 0, D - 0.21, 0.01);
  box(root, TV.cabinetWidth + 0.15, 0.03, 0.44, '#c9a47c', TX, TV.cabinetHeight, D - 0.22, 0.005);
  [TX - 0.3, TX + 0.3].forEach((x) =>
    box(root, 0.005, 0.44, 0.005, '#d8d0c6', x, 0.02, D - 0.425, 0),
  );
  // ruban LED sous le plateau (lumière du meuble TV la nuit)
  const cabinetLed = glow('#9fd0ff', 1.5);
  dimEmissive(cabinetLed, 0, 2.2);
  box(
    root,
    TV.cabinetWidth - 0.1,
    0.008,
    0.01,
    cabinetLed,
    TX,
    TV.cabinetHeight - 0.02,
    D - 0.43,
    0,
  );
  dimLight(pointLight(root, 0x8fc4ff, 0, 1.6, TX, 0.3, D - 0.75), 0, 0.9);

  const tvJelly = jellyfishTexture();
  const tvHub = hubtvTvTexture();
  const tvScreen = new THREE.MeshStandardMaterial({
    color: '#07070b',
    roughness: 0.25,
    metalness: 0.2,
    emissive: '#ffffff',
    emissiveMap: tvJelly,
    emissiveIntensity: 0,
  });
  const tvLight = pointLight(root, 0x7fb6ff, 0, 2.5, TX, 0.95, D - 0.7);
  {
    const g = group(root);
    box(g, 0.06, 0.06, 0.2, '#2a2a2e', TX - 0.35, 0.51, D - 0.24, 0.005);
    box(g, 0.06, 0.06, 0.2, '#2a2a2e', TX + 0.35, 0.51, D - 0.24, 0.005);
    box(
      g,
      TV.screenWidth + 0.04,
      TV.screenHeight + 0.04,
      0.05,
      '#15141a',
      TX,
      0.58,
      D - 0.25,
      0.01,
    );
    plane(
      g,
      TV.screenWidth,
      TV.screenHeight,
      tvScreen,
      TX,
      0.58 + 0.02 + TV.screenHeight / 2,
      D - 0.276,
      Math.PI,
    );
    // petit logo
    box(g, 0.05, 0.008, 0.002, '#77777f', TX, 0.585, D - 0.277, 0);
    register('tv', g);
  }
  // lampe champignon
  // peluche Cinnamoroll (easter egg)
  {
    const plush = group(root, 'plush');
    // sur le rebord derrière le canapé, à côté des tournesols
    plush.position.set(3.68, 0.875, 0.1);
    plush.rotation.y = 0.15; // regarde vers la pièce
    buildPlush(plush);
    addHitBox(plush, 0.3, 0.3, 0.25, 0, 0.13, 0);
    register('egg-plush', plush);
  }

  // console rétro branchée sur la TV, cartouche insérée (easter egg)
  {
    const g = group(root, 'retro-console');
    g.position.set(TX - 0.52, 0.51, D - 0.22);
    box(g, 0.26, 0.06, 0.18, '#d9d6e3', 0, 0, 0, 0.012);
    box(g, 0.26, 0.012, 0.18, '#8f7ae6', 0, 0.06, 0, 0.004);
    box(g, 0.1, 0.05, 0.02, '#3b3b46', 0.02, 0.06, 0.02, 0.004); // cartouche
    box(g, 0.085, 0.03, 0.022, '#f2b8c6', 0.02, 0.085, 0.02, 0.003); // étiquette
    sph(g, 0.008, '#e38aa3', -0.09, 0.035, -0.091);
    box(g, 0.03, 0.012, 0.004, '#6b6b78', -0.05, 0.03, -0.091, 0.002);
    addHitBox(g, 0.32, 0.16, 0.24, 0, 0.06, 0);
    register('egg-retro', g);
  }
  {
    cyl(root, 0.03, 0.05, 0.18, '#fff6ea', TX - 0.82, 0.51, D - 0.2, 16);
    const capMat = glow('#ffe4b8', 1.2);
    dimEmissive(capMat, 0.15, 1.3);
    const cap = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 24, 12, 0, 6.3, 0, Math.PI / 2),
      capMat,
    );
    cap.position.set(TX - 0.82, 0.69, D - 0.2);
    root.add(cap);
    dimLight(pointLight(root, 0xffc98a, 0.25, 2.5, TX - 0.82, 0.72, D - 0.35), 0.05, 1.3);
  }

  // colonnes BESTÅ vitrées + étagère à affiches (masquées avec le mur en vue d'ensemble)
  buildMediaColumns(gTV, dimLight, dimEmissive, register);

  // ---------- arbre à chat ----------
  {
    const { x, z } = CAT_TREE;
    box(root, 0.5, 0.08, 0.45, '#d9cfc0', x, 0, z, 0.02);
    cyl(root, 0.06, 0.06, 0.9, '#cfae7e', x + 0.1, 0.08, z, 12);
    cyl(root, 0.05, 0.05, 0.5, '#cfae7e', x - 0.15, 0.08, z + 0.05, 12);
    box(root, 0.32, 0.25, 0.3, '#e6ddd0', x - 0.1, 0.58, z, 0.04);
    box(root, 0.45, 0.04, 0.4, '#e6ddd0', x + 0.05, 0.98, z, 0.02);
    cyl(root, 0.05, 0.05, 0.4, '#cfae7e', x + 0.05, 1.02, z, 12);
    box(root, 0.4, 0.05, 0.36, '#e6ddd0', x + 0.05, 1.42, z, 0.03);
  }

  // ---------- aquarium, tournesols, gamelle, étoiles ----------
  buildExtras({ root, gEnd, gTV, register, dimLight, dimEmissive, tickers, eggEffects });

  // ---------- KALLAX 5 × 5 ----------
  buildKallax(root, register, dimLight, dimEmissive, tickers);

  // ---------- lumières globales ----------
  const hemi = new THREE.HemisphereLight(0xfff6ee, 0xd9c4b4, 1.4);
  root.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.4);
  sun.position.set(W + 3, 4.2, WINDOW.z + 0.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 0.5, far: 20 });
  sun.shadow.bias = -0.0003;
  sun.shadow.normalBias = 0.02;
  root.add(sun);
  const sunTarget = new THREE.Object3D();
  sunTarget.position.set(W / 2, 0, D / 2);
  root.add(sunTarget);
  sun.target = sunTarget;
  const hemiDay = new THREE.Color(0xfff6ee);
  const hemiNight = new THREE.Color(0x9a92bd);
  dimmables.push({
    apply: (n) => {
      sun.intensity = lerp(2.4, 0, n);
      sun.visible = n < 0.999;
      hemi.intensity = lerp(1.0, 0.28, n);
      hemi.color.lerpColors(hemiDay, hemiNight, n);
    },
  });

  return {
    root,
    walls,
    interactives,
    dimmables,
    sun,
    hemi,
    tv: {
      screen: tvScreen,
      light: tvLight,
      jellyfish: tvJelly,
      hubtv: tvHub,
      retro: retroGameTexture(),
    },
    tickers,
    eggEffects,
    lava,
  };
}

/** Volume invisible qui agrandit la zone cliquable d'un petit objet. */
export function addHitBox(
  parent: THREE.Object3D,
  w: number,
  h: number,
  d: number,
  x: number,
  y: number,
  z: number,
) {
  const m = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  m.position.set(x, y, z);
  m.userData['hitBox'] = true;
  parent.add(m);
  return m;
}

export type DimLight = (l: THREE.Light, day: number, night: number) => void;
export type DimEmissive = (m: THREE.MeshStandardMaterial, day: number, night: number) => void;

function buildMediaColumns(
  g: THREE.Group,
  dimLight: DimLight,
  dimEmissive: DimEmissive,
  register: (id: InteractiveObjectId, o: THREE.Object3D) => void,
) {
  const ledMat = glow('#fff1d6', 2.2);
  dimEmissive(ledMat, 0.4, 2.2);
  const glass = new THREE.MeshStandardMaterial({
    color: '#eef7ff',
    transparent: true,
    opacity: 0.18,
    roughness: 0.05,
    metalness: 0.1,
  });
  const cols: THREE.Group[] = [];
  MEDIA_WALL.columnsX.forEach((xc) => {
    const w = MEDIA_WALL.columnWidth;
    const h = MEDIA_WALL.columnHeight;
    const d = 0.4;
    const t = 0.018;
    const c = group(g);
    c.position.set(xc, 0, D - d / 2);
    box(c, t, h, d, '#f8f7f4', -w / 2 + t / 2, 0, 0, 0.003);
    box(c, t, h, d, '#f8f7f4', w / 2 - t / 2, 0, 0, 0.003);
    box(c, w, t, d, '#f8f7f4', 0, h - t, 0, 0.003);
    box(c, w, 0.06, d, '#f8f7f4', 0, 0, 0, 0.003);
    box(c, w, h, 0.01, '#fbf8f2', 0, 0, d / 2 - 0.005, 0);
    [0.55, 0.98, 1.42].forEach((y) => box(c, w - 2 * t, 0.008, d - 0.04, glass, 0, y, 0, 0));
    box(c, w - 2 * t, 0.005, 0.03, ledMat, 0, h - t - 0.012, -d / 2 + 0.04, 0);
    const door = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.01, h - 0.07), glass);
    door.position.set(0, 0.06 + (h - 0.07) / 2, -d / 2 - 0.002);
    door.rotation.y = Math.PI;
    c.add(door);
    [-w / 2 + 0.01, w / 2 - 0.01].forEach((x) =>
      box(c, 0.012, h - 0.07, 0.012, '#ffffff', x, 0.06, -d / 2, 0),
    );
    box(c, w - 0.04, 0.48, 0.38, '#f3efe8', 0, 0.06, 0, 0.01);
    dimLight(pointLight(g, 0xffd9a6, 0.7, 1.6, xc, 1.6, D - 0.5), 0.05, 0.7);
    cols.push(c);
  });
  // étagère à affiches entre les deux colonnes
  box(g, 1.8, 0.03, 0.24, '#f8f7f4', TV.x, MEDIA_WALL.ledgeY, D - 0.12, 0.006);
  box(g, 1.8, 0.035, 0.012, '#f8f7f4', TV.x, MEDIA_WALL.ledgeY + 0.03, D - 0.235, 0.003);
  box(g, 1.76, 0.006, 0.02, ledMat, TV.x, MEDIA_WALL.ledgeY - 0.01, D - 0.2, 0);
  dimLight(pointLight(g, 0xffd9a6, 0.5, 1.2, TV.x, 1.4, D - 0.3), 0.05, 0.5);
  // vue depuis la pièce : consoles dans la colonne à gauche de la TV (x = 5,7),
  // aquarium à méduses dans celle de droite (x = 3,3, voir build-extras.ts)
  buildConsoles(cols[1], register);
}

function buildKallax(
  root: THREE.Group,
  register: (id: InteractiveObjectId, o: THREE.Object3D) => void,
  dimLight: DimLight,
  dimEmissive: DimEmissive,
  tickers: ((t: number) => void)[],
) {
  const w = KALLAX.size;
  const h = KALLAX.size;
  const d = KALLAX.depth;
  const t = 0.035;
  const N = KALLAX.cells;
  const cell = (w - (N + 1) * t) / N;
  const gK = group(root, 'kallax');
  gK.position.set(d / 2 + 0.01, 0, KALLAX.z);
  gK.rotation.y = -Math.PI / 2;
  const white = '#f8f7f4';
  const x0 = -w / 2;
  box(gK, t, h, d, white, x0 + t / 2, 0, 0, 0.004);
  box(gK, t, h, d, white, x0 + w - t / 2, 0, 0, 0.004);
  box(gK, w, t, d, white, 0, 0, 0, 0.004);
  box(gK, w, t, d, white, 0, h - t, 0, 0.004);
  for (let i = 1; i < N; i++) {
    box(gK, t, h - 2 * t, d, white, x0 + t / 2 + i * (cell + t), t, 0, 0);
    box(gK, w - 2 * t, t, d, white, 0, i * (cell + t), 0, 0);
  }
  box(gK, w, h, 0.01, white, 0, 0, d / 2 - 0.005, 0);
  const cx = (i: number) => x0 + t + cell / 2 + i * (cell + t);
  const cy = (j: number) => t + j * (cell + t);

  const backLed = new THREE.MeshStandardMaterial({
    color: '#fff3dc',
    emissive: '#ffd9a0',
    emissiveIntensity: 0.9,
  });
  dimEmissive(backLed, 0.12, 0.9);
  const stripLed = glow('#fff1d6', 2);
  dimEmissive(stripLed, 0.3, 2);

  const projectCells = new Map<string, string>();
  Object.entries(KALLAX.projectCells).forEach(([id, [i, j]]) => projectCells.set(`${i},${j}`, id));

  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) {
      const X = cx(i);
      const Y = cy(j);
      if (j === 0 || (j === 1 && (i === 0 || i === 4))) {
        box(gK, cell - 0.02, cell - 0.02, cell - 0.04, '#efe9e0', X, Y + 0.005, 0.01, 0.01);
        sph(gK, 0.012, '#b9ad9e', X, Y + cell * 0.7, -0.17);
        continue;
      }
      plane(gK, cell, cell, backLed, X, Y + cell / 2, d / 2 - 0.012, Math.PI);
      box(gK, cell - 0.04, 0.008, 0.02, stripLed, X, Y + cell - 0.01, -0.15, 0);
      const projectId = projectCells.get(`${i},${j}`);
      if (projectId) {
        const prop = group(gK);
        prop.position.set(X, Y, 0);
        buildProjectProp(prop, projectId, tickers);
        addHitBox(prop, cell - 0.02, cell - 0.02, d - 0.04, 0, cell / 2, -0.02);
        register(projectId as InteractiveObjectId, prop);
        continue;
      }
      if (i === KALLAX.evaFigureCell[0] && j === KALLAX.evaFigureCell[1]) {
        const fig = group(gK);
        fig.position.set(X, Y, -0.02);
        fig.rotation.y = Math.PI; // face à la pièce
        buildEvaFigure(fig, register);
        continue;
      }
      // case vide : prête pour de futures figurines
    }
  // dessus du KALLAX laissé vide
  dimLight(pointLight(gK, 0xffd29a, 1.4, 2.8, 0, 1.45, -0.75), 0.1, 2.4);
}

/** Les objets-projets rangés dans le KALLAX. */
function buildProjectProp(g: THREE.Group, id: string, tickers: ((t: number) => void)[]) {
  switch (id) {
    case 'kallax-cards': {
      // boîte de cartes + cartes en éventail
      box(g, 0.18, 0.1, 0.13, '#5b3a8e', -0.02, 0, 0.02, 0.008);
      box(g, 0.185, 0.03, 0.135, '#e9c46a', -0.02, 0.1, 0.02, 0.008);
      const cards = ['#f2b8c6', '#9fc3f0', '#ffe08a', '#bfe8d6'];
      cards.forEach((c, k) => {
        const card = box(g, 0.06, 0.085, 0.004, c, 0.08 + k * 0.012, 0.0, -0.08, 0.004);
        card.rotation.z = -0.35 + k * 0.2;
        card.rotation.x = -0.25;
      });
      break;
    }
    case 'kallax-console': {
      // console de poche en forme d'œuf, sur un petit socle
      cyl(g, 0.05, 0.06, 0.02, '#ffffff', 0, 0, 0, 20);
      const egg = sph(g, 0.07, '#f2b8c6', 0, 0.1, 0, 1, 1.15, 0.55);
      egg.rotation.x = 0.15;
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.06, 0.05), glow('#cfeccf', 0.6));
      screen.position.set(0, 0.115, -0.04);
      screen.rotation.y = Math.PI;
      g.add(screen);
      [-0.025, 0, 0.025].forEach((x) => sph(g, 0.008, '#8f7ae6', x, 0.065, -0.035));
      // petit pixel qui bouge sur l'écran
      const pix = new THREE.Mesh(
        new THREE.PlaneGeometry(0.012, 0.012),
        new THREE.MeshBasicMaterial({ color: '#2f4a2f' }),
      );
      pix.position.set(0, 0.112, -0.041);
      pix.rotation.y = Math.PI;
      g.add(pix);
      tickers.push((t) => (pix.position.x = Math.round(Math.sin(t * 1.3) * 2) * 0.008));
      break;
    }
    case 'kallax-binder': {
      // classeur d'échantillons avec onglets de couleur
      const b = box(g, 0.05, 0.24, 0.2, '#e7c9a6', -0.03, 0, 0, 0.008);
      b.rotation.z = 0.08;
      ['#f2b8c6', '#c8b4ef', '#9fc3f0', '#bfe8d6', '#ffe08a'].forEach((c, k) => {
        box(g, 0.04, 0.03, 0.022, c, 0.0, 0.03 + k * 0.042, -0.1, 0.004);
      });
      // échantillons sortis
      ['#f6d6e2', '#cfe8ff'].forEach((c, k) => {
        const s = box(g, 0.07, 0.004, 0.07, c, 0.1, 0.0 + k * 0.006, -0.02 + k * 0.03, 0.002);
        s.rotation.y = k * 0.4;
      });
      break;
    }
    case 'kallax-server': {
      // mini-serveur avec voyants
      box(g, 0.14, 0.22, 0.2, '#2b2b33', 0, 0, 0.01, 0.01);
      const leds: THREE.MeshStandardMaterial[] = [];
      for (let k = 0; k < 4; k++) {
        box(g, 0.1, 0.003, 0.002, '#4a4a55', 0, 0.035 + k * 0.045, -0.091, 0);
        const m = glow(k % 2 ? '#7cf0b0' : '#7fc6ff', 2);
        leds.push(m);
        box(g, 0.012, 0.012, 0.004, m, 0.045, 0.045 + k * 0.045, -0.092, 0.002);
      }
      tickers.push((t) =>
        leds.forEach(
          (m, k) => (m.emissiveIntensity = Math.sin(t * (3 + k * 1.7) + k) > 0.2 ? 2.2 : 0.3),
        ),
      );
      // câble
      const cab = cyl(g, 0.004, 0.004, 0.12, '#1d1d22', 0.09, 0.0, 0.05, 6);
      cab.rotation.z = 1.2;
      break;
    }
  }
}

/** Peluche Cinnamoroll : grosse tête ronde, longues oreilles tombantes, queue en roulé. Face à +z. */
function buildPlush(g: THREE.Group) {
  const plush = new THREE.MeshPhysicalMaterial({
    color: '#fbfcff',
    roughness: 0.9,
    sheen: 1,
    sheenRoughness: 0.5,
    sheenColor: new THREE.Color('#dfe9ff'),
  });
  const inner = group(g, 'plush-inner');
  // corps et petits pieds
  sph(inner, 0.05, plush, 0, 0.055, 0, 1, 1.05, 0.95);
  [-1, 1].forEach((s) => {
    sph(inner, 0.02, plush, s * 0.026, 0.014, 0.03, 1, 0.7, 1.2);
    sph(inner, 0.016, plush, s * 0.05, 0.075, 0.02, 0.8, 1.2, 0.9); // bras
  });
  // tête large
  const head = group(inner);
  head.position.set(0, 0.155, 0.005);
  sph(head, 0.075, plush, 0, 0, 0, 1.2, 0.9, 1.0);
  // yeux bleus ovales avec reflets
  const eye = new THREE.MeshPhysicalMaterial({ color: '#3e6fc4', roughness: 0.15, clearcoat: 1 });
  [-1, 1].forEach((s) => {
    sph(head, 0.012, eye, s * 0.032, 0.002, 0.066, 0.7, 1, 0.45);
    sph(head, 0.0035, mat('#ffffff', { roughness: 0.2 }), s * 0.03, 0.007, 0.071);
    sph(head, 0.012, mat('#f7b8c9', { roughness: 0.8 }), s * 0.055, -0.02, 0.058, 1.2, 0.7, 0.35); // joues
  });
  // petite bouche
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.007, 0.0015, 8, 20, Math.PI), mat('#3a3150'));
  mouth.position.set(0, -0.016, 0.071);
  mouth.rotation.z = Math.PI;
  head.add(mouth);
  // longues oreilles tombantes
  [-1, 1].forEach((s) => {
    const ear = group(head, s < 0 ? 'ear-l' : 'ear-r');
    ear.position.set(s * 0.07, 0.035, 0);
    ear.rotation.z = s * -0.55;
    sph(ear, 0.055, plush, s * 0.06, -0.01, 0, 1.55, 0.38, 0.85);
  });
  // queue en roulé à la cannelle
  const pts: THREE.Vector3[] = [];
  for (let k = 0; k <= 40; k++) {
    const t = (k / 40) * Math.PI * 3.2;
    const r = 0.024 * (1 - k / 52);
    pts.push(new THREE.Vector3(Math.cos(t) * r, 0.065 + Math.sin(t) * r, -0.05 - k * 0.0004));
  }
  const tail = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, 0.0075, 10), plush);
  inner.add(tail);
}
