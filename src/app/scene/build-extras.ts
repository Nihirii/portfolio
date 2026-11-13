import * as THREE from 'three';
import { InteractiveObjectId } from '../data/types';
import { addHitBox, DimEmissive, DimLight } from './build-room';
import { box, cyl, group, mat, pointLight, rnd, sph } from './helpers';
import { AQUARIUM, BOWL, STARS, SUNFLOWERS } from './room-layout';

interface ExtrasContext {
  root: THREE.Group;
  /** Groupe du mur du KALLAX (masqué avec le mur). */
  gEnd: THREE.Group;
  /** Groupe du mur TV (colonnes BESTÅ), masqué avec le mur en vue d'en haut. */
  gTV: THREE.Group;
  register(id: InteractiveObjectId, o: THREE.Object3D): void;
  dimLight: DimLight;
  dimEmissive: DimEmissive;
  tickers: ((t: number) => void)[];
  eggEffects: Map<InteractiveObjectId, () => void>;
}

/** Objets « de cœur » : aquarium à méduses, tournesols, étoiles, gamelle de Hiki. */
export function buildExtras(ctx: ExtrasContext) {
  buildAquarium(ctx);
  buildSunflowers(ctx);
  buildStars(ctx);
  buildBowl(ctx);
}

/**
 * Aquarium à méduses rond (cylindre blanc, hublot éclairé en bleu),
 * posé dans la colonne BESTÅ gauche. Le hublot fait face à la pièce (-z).
 */
function buildAquarium({
  gTV,
  register,
  dimLight,
  dimEmissive,
  tickers,
  eggEffects,
}: ExtrasContext) {
  const R = 0.17; // rayon extérieur
  const r = 0.125; // rayon du hublot
  const depth = 0.19;
  const g = group(gTV, 'aquarium');
  g.position.set(AQUARIUM.x, AQUARIUM.shelfY, AQUARIUM.z);

  const shell = mat('#eef0f3', { roughness: 0.35, metalness: 0.25 });
  box(g, 0.16, 0.02, 0.12, '#dfe2e7', 0, 0, 0, 0.006); // pied
  const drum = group(g);
  drum.position.set(0, 0.02 + R, 0);

  // coque : cylindre couché (axe vers la pièce)
  const body = new THREE.Mesh(new THREE.CylinderGeometry(R, R, depth, 64, 1, true), shell);
  body.rotation.x = Math.PI / 2;
  body.castShadow = true;
  drum.add(body);
  const back = new THREE.Mesh(new THREE.CircleGeometry(R, 64), shell);
  back.position.z = depth / 2;
  drum.add(back);
  // façade : anneau blanc autour du hublot
  const face = new THREE.Mesh(new THREE.RingGeometry(r, R, 64), shell);
  face.position.z = -depth / 2;
  face.rotation.y = Math.PI;
  drum.add(face);

  // intérieur lumineux : fond et paroi bleus
  const glowBack = new THREE.MeshStandardMaterial({
    color: '#0d1b33',
    emissive: '#2f8fe0',
    emissiveIntensity: 0.6,
    roughness: 0.6,
  });
  dimEmissive(glowBack, 0.45, 0.9);
  const inner = new THREE.Mesh(new THREE.CylinderGeometry(r, r, depth - 0.01, 64, 1, true), glowBack);
  inner.material.side = THREE.BackSide;
  inner.rotation.x = Math.PI / 2;
  drum.add(inner);
  const bottom = new THREE.Mesh(
    new THREE.CircleGeometry(r, 64),
    new THREE.MeshStandardMaterial({ color: '#06101f', emissive: '#123a6b', emissiveIntensity: 0.5 }),
  );
  bottom.position.z = depth / 2 - 0.006;
  bottom.rotation.y = Math.PI;
  drum.add(bottom);
  // vitre
  const glass = new THREE.Mesh(
    new THREE.CircleGeometry(r, 64),
    new THREE.MeshPhysicalMaterial({
      color: '#bfe6ff',
      transparent: true,
      opacity: 0.12,
      roughness: 0.02,
      clearcoat: 1,
      depthWrite: false,
    }),
  );
  glass.position.z = -depth / 2 + 0.004;
  glass.rotation.y = Math.PI;
  drum.add(glass);

  const light = pointLight(drum, 0x6fc3ff, 0, 1.2, 0, 0, -0.3);
  dimLight(light, 0.05, 0.45);

  // méduses : petites cloches translucides qui pulsent et dérivent dans le hublot
  let boost = 0;
  const jellyMat = new THREE.MeshStandardMaterial({
    color: '#e6f4ff',
    emissive: '#bfe4ff',
    emissiveIntensity: 0.6,
    transparent: true,
    opacity: 0.8,
    roughness: 0.3,
  });
  dimEmissive(jellyMat, 0.5, 1.1);
  const bellGeo = new THREE.SphereGeometry(0.014, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  const tentGeo = new THREE.CylinderGeometry(0.0012, 0.0005, 0.022, 4);
  tentGeo.translate(0, -0.011, 0);
  const jellies: { g: THREE.Group; bell: THREE.Mesh; tents: THREE.Mesh[]; phase: number; a: number; rad: number; z: number }[] = [];
  for (let i = 0; i < 11; i++) {
    const jg = new THREE.Group();
    const bell = new THREE.Mesh(bellGeo, jellyMat);
    jg.add(bell);
    const tents: THREE.Mesh[] = [];
    for (let k = 0; k < 5; k++) {
      const t = new THREE.Mesh(tentGeo, jellyMat);
      const ang = (k / 5) * Math.PI * 2;
      t.position.set(Math.cos(ang) * 0.007, 0, Math.sin(ang) * 0.007);
      jg.add(t);
      tents.push(t);
    }
    const scale = 0.7 + rnd() * 0.6;
    jg.scale.setScalar(scale);
    drum.add(jg);
    jellies.push({ g: jg, bell, tents, phase: rnd() * 6, a: rnd() * Math.PI * 2, rad: 0.02 + rnd() * 0.08, z: -0.05 + rnd() * 0.1 });
  }
  // easter egg : les méduses se rassemblent en cœur
  let heart = 0;
  const heartAt = (i: number) => {
    const u = (i / jellies.length) * Math.PI * 2;
    const k = 0.0055;
    return [16 * Math.sin(u) ** 3 * k, (13 * Math.cos(u) - 5 * Math.cos(2 * u) - 2 * Math.cos(3 * u) - Math.cos(4 * u)) * k + 0.01];
  };
  const place = (t: number) =>
    jellies.forEach((j, i) => {
      const a = j.a + t * 0.12;
      const fx = Math.cos(a) * j.rad;
      const fy = Math.sin(a * 1.3 + j.phase) * j.rad;
      const m = Math.min(1, heart) ** 2 * (3 - 2 * Math.min(1, heart));
      const [hx, hy] = heartAt(i);
      j.g.position.set(fx + (hx - fx) * m, fy + (hy - fy) * m, j.z + (-0.04 - j.z) * m);
      const p = 1 + Math.sin(t * 2.6 + j.phase) * 0.14;
      j.bell.scale.set(p, 1 / p, p);
      j.tents.forEach((tt, k) => (tt.rotation.z = Math.sin(t * 2.6 + j.phase + k) * 0.3));
    });
  place(0);
  tickers.push((t) => {
    boost = Math.max(0, boost - 0.016);
    heart = Math.max(0, heart - 0.006); // ~3 s en cœur, puis elles se dispersent
    place(t);
    jellyMat.opacity = 0.75 + boost * 0.25;
  });

  addHitBox(g, 2 * R + 0.04, 2 * R + 0.06, depth + 0.04, 0, R + 0.02, 0);
  register('egg-aquarium', g);
  eggEffects.set('egg-aquarium', () => {
    boost = 1;
    heart = 1.6;
    const base = jellyMat.emissiveIntensity;
    jellyMat.emissiveIntensity = base + 1.2;
    setTimeout(() => (jellyMat.emissiveIntensity = base), 1200);
  });
}

/** Vase de tournesols sur le rebord derrière le canapé. */
function buildSunflowers({ root, register }: ExtrasContext) {
  const g = group(root, 'sunflowers');
  g.position.set(SUNFLOWERS.x, SUNFLOWERS.y, SUNFLOWERS.z);
  g.scale.setScalar(0.72);
  cyl(g, 0.07, 0.09, 0.3, '#f6f1e8', 0, 0, 0, 20);
  cyl(g, 0.072, 0.072, 0.02, '#f2b8c6', 0, 0.24, 0, 20);
  const petal = mat('#f7c948', { roughness: 0.7 });
  const heart = mat('#6b4423', { roughness: 0.9 });
  (
    [
      [0, 0.72, 0, 0.0],
      [-0.06, 0.62, 0.05, 0.25],
      [0.05, 0.56, -0.05, -0.2],
    ] as const
  ).forEach(([x, y, z, lean]) => {
    const stem = cyl(g, 0.006, 0.006, y, '#6a8a4a', x / 2, 0.05, z / 2, 6);
    stem.rotation.z = lean * 0.3;
    const head = group(g);
    head.position.set(x, y + 0.05, z);
    head.rotation.set(-0.35, lean * 0.6, 0); // tournée vers la pièce
    for (let k = 0; k < 12; k++) {
      const a = (k / 12) * Math.PI * 2;
      const p = sph(head, 0.025, petal, Math.cos(a) * 0.05, Math.sin(a) * 0.05, 0, 1.4, 0.55, 0.25);
      p.rotation.z = a;
    }
    sph(head, 0.035, heart, 0, 0, 0.01, 1, 1, 0.45);
    const leaf = sph(g, 0.03, '#7fa860', x / 2 + 0.03, y * 0.5, z / 2, 1.6, 0.3, 0.8);
    leaf.rotation.z = 0.6;
  });
  addHitBox(g, 0.3, 0.9, 0.3, 0, 0.45, 0);
  register('egg-sunflowers', g);
}

/** Étoiles phosphorescentes au-dessus du KALLAX : presque invisibles le jour. */
function buildStars({ gEnd, register, dimEmissive, tickers, eggEffects }: ExtrasContext) {
  const g = group(gEnd, 'stars');
  g.position.set(0.012, STARS.y, (STARS.z0 + STARS.z1) / 2);
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 0.018 : 0.042;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    const fn = i ? 'lineTo' : 'moveTo';
    shape[fn](Math.cos(a) * r, Math.sin(a) * r);
  }
  const geo = new THREE.ShapeGeometry(shape);
  const span = STARS.z1 - STARS.z0;
  const stars: { m: THREE.Mesh; mat: THREE.MeshStandardMaterial; phase: number }[] = [];
  for (let i = 0; i < 11; i++) {
    const m2 = new THREE.MeshStandardMaterial({
      color: '#f4f0cf',
      emissive: '#e9ff9e',
      emissiveIntensity: 0.05,
    });
    dimEmissive(m2, 0.04, 1.6);
    const s = new THREE.Mesh(geo, m2);
    s.rotation.y = Math.PI / 2;
    s.rotation.x = rnd() * 0.6;
    const scale = 0.6 + rnd() * 0.7;
    s.scale.setScalar(scale);
    s.position.set(0, (rnd() - 0.5) * 0.36, -span / 2 + (i / 10) * span + (rnd() - 0.5) * 0.08);
    g.add(s);
    stars.push({ m: s, mat: m2, phase: rnd() * 6 });
  }
  // une petite lune
  const moonMat = new THREE.MeshStandardMaterial({
    color: '#fff6d8',
    emissive: '#fff1b0',
    emissiveIntensity: 0.05,
  });
  dimEmissive(moonMat, 0.04, 1.4);
  const moon = new THREE.Mesh(new THREE.CircleGeometry(0.07, 24), moonMat);
  moon.rotation.y = Math.PI / 2;
  moon.position.set(0, 0.1, -span / 2 - 0.12);
  g.add(moon);
  const bite = new THREE.Mesh(
    new THREE.CircleGeometry(0.065, 24),
    mat('#f4ede5', { roughness: 0.95 }),
  );
  bite.rotation.y = Math.PI / 2;
  bite.position.set(0.001, 0.125, -span / 2 - 0.09);
  g.add(bite);

  let twinkle = 0;
  tickers.push((t) => {
    twinkle = Math.max(0, twinkle - 0.012);
    stars.forEach((s) => {
      const k =
        1 +
        Math.sin(t * 2.2 + s.phase) * 0.06 +
        twinkle * Math.abs(Math.sin(t * 9 + s.phase)) * 0.5;
      s.m.scale.setScalar(k * (s.m.userData['base'] ?? (s.m.userData['base'] = s.m.scale.x)));
    });
  });
  addHitBox(g, 0.06, 0.5, span + 0.3, 0.03, 0, -0.05);
  register('egg-stars', g);
  eggEffects.set('egg-stars', () => {
    twinkle = 1;
    stars.forEach((s) => {
      const base = s.mat.emissiveIntensity;
      s.mat.emissiveIntensity = base + 1.2;
      setTimeout(() => (s.mat.emissiveIntensity = base), 1400);
    });
  });
}

/** Gamelle de Hiki, contre le mur près de l'entrée. */
function buildBowl({ root, register }: ExtrasContext) {
  const g = group(root, 'bowl');
  g.position.set(BOWL.x, 0, BOWL.z);
  g.rotation.y = BOWL.rotY; // le long du mur
  box(g, 0.34, 0.006, 0.24, '#f6c9d3', 0, 0, 0, 0.003); // tapis
  cyl(g, 0.07, 0.055, 0.045, '#ffffff', -0.07, 0.006, 0, 20);
  cyl(g, 0.065, 0.065, 0.005, '#c9a07a', -0.07, 0.045, 0, 20); // croquettes
  cyl(g, 0.07, 0.055, 0.045, '#cbbcf6', 0.08, 0.006, 0, 20);
  cyl(g, 0.064, 0.064, 0.004, mat('#a9dcff', { roughness: 0.1 }), 0.08, 0.044, 0, 20); // eau
  // petit poisson sur le tapis
  const fish = sph(g, 0.022, '#e38aa3', 0.0, 0.01, 0.09, 1.6, 0.3, 0.9);
  fish.castShadow = false;
  addHitBox(g, 0.4, 0.12, 0.3, 0, 0.05, 0);
  register('egg-bowl', g);
}

/** Console portable en cours de démontage sur la table basse. */
export function buildTeardown(
  root: THREE.Group,
  register: ExtrasContext['register'],
  x: number,
  z: number,
) {
  const g = group(root, 'teardown');
  g.position.set(x, 0.36, z);
  g.rotation.y = -0.4;
  box(g, 0.2, 0.012, 0.11, '#c8b4ef', 0, 0, 0, 0.006); // coque arrière
  box(g, 0.18, 0.006, 0.09, '#2f7a4f', 0, 0.012, 0, 0.002); // carte mère
  box(g, 0.03, 0.006, 0.03, '#1d1d22', -0.03, 0.018, 0.0, 0.002); // puce
  box(g, 0.02, 0.006, 0.015, '#1d1d22', 0.03, 0.018, -0.02, 0.002);
  box(g, 0.05, 0.004, 0.008, '#e9c46a', 0.04, 0.018, 0.025, 0); // connecteur
  box(g, 0.04, 0.012, 0.05, '#cfd6ff', 0.06, 0.018, 0.0, 0.003); // batterie
  const shell = box(g, 0.2, 0.01, 0.11, '#c8b4ef', 0.0, 0.0, 0.13, 0.006); // façade retournée
  shell.rotation.y = 0.15;
  box(g, 0.07, 0.003, 0.05, '#9bbc6a', -0.02, 0.01, 0.13, 0.002); // écran
  for (let k = 0; k < 4; k++)
    cyl(g, 0.004, 0.004, 0.006, '#b9b9c4', -0.12 + k * 0.012, 0, 0.07 + (k % 2) * 0.01, 6);
  const driver = group(g);
  driver.position.set(-0.04, 0.008, -0.09);
  driver.rotation.y = 0.3;
  cyl(driver, 0.008, 0.009, 0.06, '#e38aa3', 0, 0, 0, 8).rotation.z = Math.PI / 2;
  cyl(driver, 0.002, 0.002, 0.06, '#b9b9c4', 0.055, 0.006, 0, 6).rotation.z = Math.PI / 2;
  addHitBox(g, 0.3, 0.08, 0.3, 0, 0.02, 0.04);
  register('egg-teardown', g);
}

/** Canard de débogage sur le bureau. */
export function buildDuck(
  root: THREE.Group,
  register: ExtrasContext['register'],
  x: number,
  y: number,
  z: number,
) {
  const g = group(root, 'duck');
  g.position.set(x, y, z);
  g.rotation.y = 2.3;
  const yellow = mat('#ffd84d', { roughness: 0.4 });
  sph(g, 0.035, yellow, 0, 0.03, 0, 1.25, 0.9, 1);
  sph(g, 0.024, yellow, 0.03, 0.07, 0);
  sph(g, 0.012, '#f08a24', 0.055, 0.066, 0, 1.3, 0.5, 1);
  sph(g, 0.005, '#1d1d22', 0.045, 0.078, 0.012);
  sph(g, 0.005, '#1d1d22', 0.045, 0.078, -0.012);
  addHitBox(g, 0.12, 0.12, 0.12, 0, 0.05, 0);
  register('egg-duck', g);
}
