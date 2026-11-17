import * as THREE from 'three';
import { InteractiveObjectId } from '../data/types';
import { addHitBox } from './build-room';
import { box, cyl, group, mat, pointLight, sph } from './helpers';

type Register = (id: InteractiveObjectId, o: THREE.Object3D) => void;

export interface LavaLamp {
  /** true = allumée. */
  on: boolean;
  /** Avance l'animation (bulles de cire, lumière). */
  step(dt: number, t: number, night: number, reducedMotion: boolean): void;
}

/** Lampe à lave rose : la cire monte et descend quand elle est allumée. */
export function buildLavaLamp(
  root: THREE.Group,
  register: Register,
  x: number,
  y: number,
  z: number,
): LavaLamp {
  const g = group(root, 'lava-lamp');
  g.position.set(x, y, z);
  const metal = mat('#c3c0cc', { metalness: 0.6, roughness: 0.35 });
  cyl(g, 0.04, 0.065, 0.1, metal, 0, 0, 0, 24);
  const liquid = new THREE.MeshStandardMaterial({
    color: '#95b4f9',
    emissive: '#769ef8',
    emissiveIntensity: 0.1,
    transparent: true,
    opacity: 0.55,
    roughness: 0.15,
  });
  const glass = cyl(g, 0.028, 0.042, 0.2, liquid, 0, 0.1, 0, 24);
  glass.castShadow = false;
  cyl(g, 0.012, 0.03, 0.05, metal, 0, 0.3, 0, 20);

  const wax = new THREE.MeshStandardMaterial({
    color: '#ffb36b',
    emissive: '#ff9a4d',
    emissiveIntensity: 0.1,
    roughness: 0.4,
  });
  const blobs = [0.02, 0.016, 0.022, 0.014].map((r, i) => {
    const b = sph(g, r, wax, i % 2 ? 0.008 : -0.008, 0.12, 0, 1, 1.3, 1);
    b.castShadow = false;
    return { mesh: b, phase: i * 1.7, speed: 0.22 + i * 0.07, r };
  });

  const light = pointLight(g, 0xff9fbe, 0, 3, 0.05, 0.25, 0.2);
  addHitBox(g, 0.14, 0.38, 0.14, 0, 0.17, 0);
  register('lava-lamp', g);

  let level = 0;
  const lamp: LavaLamp = {
    on: false,
    step(dt, t, night, reducedMotion) {
      level += ((lamp.on ? 1 : 0) - level) * Math.min(1, dt * 2.5);
      liquid.emissiveIntensity = 0.08 + level * 1.3;
      wax.emissiveIntensity = 0.05 + level * 1.6;
      light.intensity = level * (0.5 + 1.9 * night);
      blobs.forEach((b) => {
        // éteinte, la cire retombe au fond ; allumée, elle monte et redescend lentement
        const wave = reducedMotion ? 0.35 : Math.sin(t * b.speed + b.phase) * 0.5 + 0.5;
        const target = 0.125 + wave * 0.14 * level;
        b.mesh.position.y += (target - b.mesh.position.y) * Math.min(1, dt * 1.5);
        const stretch = reducedMotion ? 1 : 1 + Math.sin(t * 0.9 + b.phase) * 0.15 * level;
        b.mesh.scale.set(1 / stretch, stretch * 1.2, 1 / stretch);
      });
    },
  };
  return lamp;
}

/** Collection de consoles dans la colonne BESTÅ à gauche de la TV : GameCube, Nintendo 64, PSP, 3DS. */
export function buildConsoles(column: THREE.Group, register: Register) {
  const g = group(column, 'consoles');
  const shelf = (y: number) => y + 0.009;

  // GameCube (étagère du bas)
  {
    const c = group(g);
    c.position.set(0, shelf(0.56), 0.02);
    c.rotation.y = 0.15;
    const purple = mat('#5b4b9e', { roughness: 0.5 });
    box(c, 0.15, 0.12, 0.16, purple, 0, 0, 0, 0.012);
    cyl(c, 0.052, 0.052, 0.006, mat('#4a3c86'), -0.01, 0.12, 0.0, 28);
    box(c, 0.12, 0.012, 0.014, mat('#3a3a44'), 0, 0.122, 0.068, 0.004); // poignée
    [-0.045, -0.015, 0.015, 0.045].forEach((x) =>
      box(c, 0.02, 0.012, 0.004, '#2a2a33', x, 0.025, -0.081, 0.002),
    );
    sph(c, 0.008, '#c9c6d3', 0.05, 0.085, -0.081);
  }

  // Nintendo 64 avec sa cartouche (étagère du milieu)
  {
    const c = group(g);
    c.position.set(0, shelf(0.99), 0.0);
    c.rotation.y = -0.12;
    const grey = mat('#36363e', { roughness: 0.55 });
    box(c, 0.26, 0.055, 0.19, grey, 0, 0, 0, 0.02);
    box(c, 0.12, 0.03, 0.13, grey, 0, 0.05, 0.01, 0.015);
    box(c, 0.1, 0.07, 0.02, mat('#7a7a82'), 0, 0.07, 0.01, 0.004); // cartouche
    box(c, 0.07, 0.035, 0.002, mat('#e8c25a'), 0, 0.095, -0.001, 0); // étiquette
    [-0.075, -0.025, 0.025, 0.075].forEach((x) =>
      box(c, 0.03, 0.018, 0.004, '#1d1d22', x, 0.015, -0.096, 0.003),
    );
    box(c, 0.022, 0.008, 0.012, '#9a9aa4', -0.035, 0.08, -0.05, 0.002);
    box(c, 0.022, 0.008, 0.012, '#9a9aa4', 0.035, 0.08, -0.05, 0.002);
  }

  // PSP et 3DS (étagère du haut)
  {
    const psp = group(g);
    psp.position.set(-0.12, shelf(1.43), 0.01);
    psp.rotation.y = 0.2;
    box(psp, 0.06, 0.012, 0.05, mat('#e9e6ef'), 0, 0, 0.02, 0.004); // support
    const body = group(psp);
    body.position.set(0, 0.012, 0);
    body.rotation.x = 0.35;
    box(
      body,
      0.17,
      0.074,
      0.02,
      mat('#1d1d22', { roughness: 0.25, metalness: 0.2 }),
      0,
      0,
      0,
      0.02,
    );
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.095, 0.054),
      new THREE.MeshStandardMaterial({
        color: '#141420',
        emissive: '#3a4a8a',
        emissiveIntensity: 0.25,
        roughness: 0.1,
      }),
    );
    screen.position.set(0, 0.037, -0.0105);
    screen.rotation.y = Math.PI;
    body.add(screen);
    box(body, 0.014, 0.004, 0.003, '#55555f', -0.068, 0.04, -0.011, 0.001);
    box(body, 0.004, 0.014, 0.003, '#55555f', -0.068, 0.035, -0.011, 0.001);
    [0, 1, 2, 3].forEach((k) =>
      sph(
        body,
        0.0035,
        '#6b6b75',
        0.066 + (k % 2 ? 0.007 : -0.007) * (k < 2 ? 1 : 0),
        0.04 + (k < 2 ? 0 : k === 2 ? 0.007 : -0.007),
        -0.011,
      ),
    );

    const ds = group(g);
    ds.position.set(0.13, shelf(1.43), 0.0);
    ds.rotation.y = -0.25;
    const aqua = mat('#38a7c7', { roughness: 0.3, metalness: 0.15 });
    box(ds, 0.134, 0.012, 0.074, aqua, 0, 0, 0, 0.006);
    const bottomScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(0.06, 0.045),
      mat('#1a1a24', { roughness: 0.1 }),
    );
    bottomScreen.rotation.x = -Math.PI / 2;
    bottomScreen.position.set(0, 0.0125, 0);
    ds.add(bottomScreen);
    const hinge = group(ds);
    hinge.position.set(0, 0.012, 0.037);
    hinge.rotation.x = 0.28; // ouverte, légèrement penchée en arrière
    box(hinge, 0.134, 0.074, 0.01, aqua, 0, 0, 0, 0.006);
    const top = new THREE.Mesh(
      new THREE.PlaneGeometry(0.09, 0.055),
      new THREE.MeshStandardMaterial({
        color: '#141420',
        emissive: '#7fc6ff',
        emissiveIntensity: 0.3,
        roughness: 0.1,
      }),
    );
    top.position.set(0, 0.037, -0.0055);
    top.rotation.y = Math.PI;
    hinge.add(top);
  }

  addHitBox(g, 0.54, 1.0, 0.36, 0, 1.0, 0);
  register('egg-consoles', g);
}

/**
 * Figurine façon Unité 01 (violet, vert, orange) : version stylisée et simplifiée,
 * modelée en formes simples. Face à +z.
 */
export function buildEvaFigure(g: THREE.Group, register: Register) {
  const purple = mat('#6b3fa0', { roughness: 0.45 });
  const green = mat('#7ccf4a', { roughness: 0.45 });
  const orange = mat('#f08a24', { roughness: 0.5 });
  cyl(g, 0.05, 0.055, 0.012, '#2b2533', 0, 0, 0, 24); // socle
  // jambes
  [-1, 1].forEach((s) => {
    const leg = cyl(g, 0.011, 0.014, 0.085, purple, s * 0.02, 0.012, 0, 10);
    leg.rotation.z = s * 0.06;
    box(g, 0.022, 0.012, 0.034, purple, s * 0.022, 0.012, 0.006, 0.004); // pieds
    box(g, 0.006, 0.03, 0.004, green, s * 0.02, 0.05, 0.013, 0.001);
  });
  const body = group(g);
  body.position.set(0, 0.095, 0);
  body.rotation.x = 0.12; // légèrement voûtée
  box(body, 0.05, 0.022, 0.03, purple, 0, 0, 0, 0.006); // bassin
  box(body, 0.052, 0.055, 0.034, purple, 0, 0.02, 0, 0.008); // torse
  box(body, 0.03, 0.022, 0.004, green, 0, 0.045, 0.017, 0.002); // plastron
  box(body, 0.014, 0.008, 0.004, orange, 0, 0.034, 0.018, 0.002);
  // épaulières et bras
  [-1, 1].forEach((s) => {
    const pylon = box(body, 0.024, 0.04, 0.034, purple, s * 0.04, 0.05, 0, 0.006);
    pylon.rotation.z = -s * 0.25;
    box(body, 0.026, 0.006, 0.036, green, s * 0.04, 0.084, 0, 0.002);
    const arm = cyl(body, 0.008, 0.009, 0.07, purple, s * 0.042, -0.02, 0.004, 8);
    arm.rotation.z = s * 0.12;
  });
  // tête : mâchoire verte, corne
  const head = group(body);
  head.position.set(0, 0.08, 0.004);
  box(head, 0.022, 0.028, 0.026, purple, 0, 0, 0, 0.006);
  box(head, 0.016, 0.008, 0.008, green, 0, 0.004, 0.012, 0.002);
  sph(head, 0.0035, '#ffe24d', -0.005, 0.017, 0.013);
  sph(head, 0.0035, '#ffe24d', 0.005, 0.017, 0.013);
  const horn = new THREE.Mesh(new THREE.ConeGeometry(0.004, 0.03, 6), purple);
  horn.position.set(0, 0.035, 0.008);
  horn.rotation.x = 0.35;
  head.add(horn);
  addHitBox(g, 0.14, 0.24, 0.12, 0, 0.12, 0);
  register('egg-eva-figure', g);
}
