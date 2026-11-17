import * as THREE from 'three';
import { box, canvasTexture, cyl, glow, group, mat, plane, pointLight, rnd, sph } from './helpers';
import { DecorAssets, placeModel } from './decor-assets';
import { ROOM } from './room-layout';

type DimEmissive = (m: THREE.MeshStandardMaterial, day: number, night: number) => void;
type DimLight = (l: THREE.Light, day: number, night: number) => void;

const { width: W } = ROOM;
const OAK = '#d6ae7b';

/**
 * Tablettes d'angle en chêne, entre le mur du canapé (z = 0) et le mur de la fenêtre (x = W).
 * De haut en bas : la tour sombre « 33 », un daruma, la lampe Poro et une photo encadrée.
 */
export function buildCornerShelves(
  root: THREE.Group,
  dimEmissive: DimEmissive,
  dimLight: DimLight,
  assets: DecorAssets,
) {
  const g = group(root, 'corner-shelves');
  g.position.set(W, 0, 0);
  const R = 0.3;
  const levels = [1.08, 1.36, 1.64, 1.92];
  // quart de disque : x < W et z > 0 (θ de 3π/2 à 2π)
  const shelfGeo = new THREE.CylinderGeometry(
    R,
    R,
    0.025,
    28,
    1,
    false,
    (3 * Math.PI) / 2,
    Math.PI / 2,
  );
  const oak = mat(OAK, { roughness: 0.6 });
  levels.forEach((y) => {
    const s = new THREE.Mesh(shelfGeo, oak);
    s.position.set(0, y + 0.0125, 0);
    s.castShadow = s.receiveShadow = true;
    g.add(s);
  });
  const spot = (y: number) => new THREE.Vector3(-0.12, y + 0.025, 0.12);

  // photo encadrée (maison au bord de la mer), posée contre le mur
  {
    const p = spot(levels[0]);
    const f = group(g);
    f.position.copy(p);
    f.rotation.y = (3 * Math.PI) / 4; // face à la pièce (diagonale)
    const photo = new THREE.MeshStandardMaterial({ map: beachHouseTexture(), roughness: 0.7 });
    // cadre à poser (modèle Poly Haven) ; sinon cadre dessiné
    const model = placeModel(assets, 'cadre-photo', f, 0.16);
    if (model) {
      model.rotation.y = Math.PI / 2;
      // photo en portrait, inclinée comme le cadre (appuyé sur son chevalet)
      photo.map = beachHouseTexture(180, 240);
      // pivot au pied de la face avant (mesurée dans Blender : 3,2 cm devant le centre en bas)
      const tilt = group(f);
      tilt.position.set(0, 0, -0.0335);
      tilt.rotation.x = TILT;
      plane(tilt, 0.1, 0.13, photo, 0, 0.082, 0, Math.PI).castShadow = true;
    } else {
      box(f, 0.2, 0.15, 0.015, OAK, 0, 0, 0, 0.003);
      plane(f, 0.17, 0.12, photo, 0, 0.075, -0.0085, Math.PI).castShadow = true;
    }
  }

  // lampe Poro : boule de poils blanche, lumineuse le soir
  {
    const p = spot(levels[1]);
    const poro = group(g);
    poro.position.copy(p);
    poro.rotation.y = (3 * Math.PI) / 4;
    const fur = glow('#fff6ea', 0.6);
    dimEmissive(fur, 0.05, 1.1);
    sph(poro, 0.085, fur, 0, 0.075, 0, 1.15, 0.88, 1);
    // houppe et petites cornes
    sph(poro, 0.03, fur, 0, 0.16, 0.01);
    [-1, 1].forEach((s) => {
      const horn = cyl(poro, 0, 0.012, 0.035, '#d9b48c', s * 0.055, 0.13, 0.0, 12);
      horn.rotation.z = -s * 0.5;
    });
    // yeux fermés, bouche ouverte, langue
    [-1, 1].forEach((s) =>
      box(poro, 0.022, 0.005, 0.004, '#3a2a2a', s * 0.03, 0.09, -0.083, 0.002),
    );
    sph(poro, 0.022, '#7a3b3b', 0, 0.055, -0.078, 1, 0.8, 0.5);
    sph(poro, 0.012, '#8faceb', 0, 0.047, -0.086, 1, 0.6, 0.5);
    dimLight(pointLight(g, 0xffd8a0, 0.05, 1.4, -0.16, levels[1] + 0.1, 0.16), 0.02, 0.7);
  }

  // daruma rouge
  {
    const p = spot(levels[2]);
    const d = group(g);
    d.position.copy(p);
    d.rotation.y = (3 * Math.PI) / 4;
    sph(d, 0.07, mat('#c8261f', { roughness: 0.35 }), 0, 0.075, 0, 1, 1.12, 1);
    sph(d, 0.045, '#f6e6cf', 0, 0.095, -0.04, 1, 0.9, 0.55); // visage
    [-1, 1].forEach((s) => sph(d, 0.009, s < 0 ? '#1d1d22' : '#f6e6cf', s * 0.018, 0.1, -0.064));
    box(d, 0.05, 0.004, 0.004, '#d9a63c', 0, 0.06, -0.067, 0); // ceinture dorée
    box(d, 0.024, 0.03, 0.003, '#d9a63c', 0, 0.022, -0.066, 0); // inscription
  }

  // tour sombre « 33 »
  {
    const p = spot(levels[3]);
    const t = group(g);
    t.position.copy(p);
    t.rotation.y = (3 * Math.PI) / 4;
    box(t, 0.13, 0.02, 0.1, '#2a2730', 0, 0, 0, 0.004);
    const rock = mat('#33303a', { roughness: 0.5, metalness: 0.2 });
    for (let k = 0; k < 9; k++) {
      const a = (k / 9) * Math.PI * 2;
      const r = k === 0 ? 0 : 0.025 + rnd() * 0.02;
      const h = k === 0 ? 0.22 : 0.08 + rnd() * 0.09;
      cyl(t, 0, 0.012 + rnd() * 0.01, h, rock, Math.cos(a) * r, 0.02, Math.sin(a) * r, 6);
    }
    const label = new THREE.MeshStandardMaterial({
      map: textTexture('33', '#d9b45a'),
      transparent: true,
      roughness: 0.5,
    });
    plane(t, 0.05, 0.035, label, 0, 0.09, -0.04, Math.PI);
  }
}

/**
 * Colonne BESTÅ à droite de la TV (vue depuis la pièce) : figurine de chanteuse en haut,
 * aquarium au milieu (build-extras.ts), console NES et sa manette en bas. Repère de la colonne :
 * la façade vitrée est en -z.
 */
export function buildRightColumnDecor(c: THREE.Group, assets: DecorAssets) {
  const shelf = (y: number) => y + 0.009;

  // figurine : chanteuse punk, pied de micro, socle noir
  {
    const f = group(c);
    f.position.set(0, shelf(1.42), -0.01);
    cyl(f, 0.055, 0.06, 0.012, '#121216', 0, 0, 0, 32);
    const skin = '#f1d9c8';
    const black = mat('#1b1a20', { roughness: 0.45 });
    [-1, 1].forEach((s) => {
      cyl(f, 0.011, 0.012, 0.03, black, s * 0.014, 0.012, 0, 12); // bottes
      cyl(f, 0.007, 0.009, 0.11, '#3a3540', s * 0.013, 0.04, 0, 12); // jambes (collants)
    });
    cyl(f, 0.03, 0.024, 0.04, black, 0, 0.14, 0, 20); // jupe
    cyl(f, 0.02, 0.026, 0.06, black, 0, 0.18, 0, 20); // haut
    box(f, 0.07, 0.05, 0.03, '#26242c', 0, 0.19, 0.003, 0.01); // veste
    cyl(f, 0.006, 0.006, 0.015, skin, 0, 0.24, 0, 10); // cou
    sph(f, 0.022, skin, 0, 0.27, 0);
    sph(f, 0.025, '#141317', 0, 0.278, 0.006, 1, 0.95, 1); // coupe au carré
    // bras levé vers le micro
    const arm = cyl(f, 0.005, 0.006, 0.07, skin, 0.03, 0.2, -0.01, 8);
    arm.rotation.z = -0.6;
    // pied de micro
    cyl(f, 0.002, 0.002, 0.25, '#8b8b94', 0.06, 0.012, -0.02, 8);
    sph(f, 0.008, '#2b2b30', 0.06, 0.265, -0.02);
  }

  // console NES et manette
  {
    const n = group(c);
    n.position.set(0.02, shelf(0.55), 0.02);
    n.rotation.y = -0.12;
    box(n, 0.22, 0.06, 0.2, '#d8d6d2', 0, 0, 0, 0.006);
    box(n, 0.222, 0.025, 0.2, '#4a4a50', 0, 0, 0, 0.004); // bande basse
    box(n, 0.12, 0.004, 0.11, '#3a3a40', 0, 0.06, 0.02, 0.002); // trappe
    box(n, 0.04, 0.012, 0.004, '#c9302c', -0.07, 0.03, -0.101, 0.002);
    const pad = group(c);
    pad.position.set(-0.06, shelf(0.55), -0.12);
    pad.rotation.y = 0.25;
    // manette (modèle Poly Haven) devant la console ; sinon manette dessinée
    const model = placeModel(assets, 'manette-nes', pad, 0.24);
    if (model) {
      pad.position.set(-0.02, shelf(0.55), -0.1);
      pad.rotation.y = Math.PI + 0.2;
      return;
    }
    box(pad, 0.1, 0.012, 0.045, '#cfcdc9', 0, 0, 0, 0.004);
    box(pad, 0.09, 0.003, 0.035, '#1f1f24', 0, 0.012, 0, 0.002);
    [0.02, 0.035].forEach((x) => sph(pad, 0.005, '#c9302c', x, 0.016, 0));
    box(pad, 0.016, 0.004, 0.016, '#cfcdc9', -0.025, 0.014, 0, 0.002);
  }
}

/** Pothos dans un pot crème, posé sur la colonne, avec des lianes qui retombent sur le côté. */
export function buildPothos(c: THREE.Group, topY: number, side: 1 | -1) {
  const g = group(c, 'pothos');
  g.position.set(side * 0.18, topY, 0.02); // pot près du bord, côté où retombent les lianes
  cyl(g, 0.065, 0.05, 0.1, mat('#efe6da', { roughness: 0.7 }), 0, 0, 0, 28);
  cyl(g, 0.06, 0.06, 0.008, '#4a3a2e', 0, 0.092, 0, 24);
  const leafA = mat('#4e8a3a', { roughness: 0.55, side: THREE.DoubleSide });
  const leafB = mat('#b9c95a', { roughness: 0.55, side: THREE.DoubleSide });
  const leaf = (x: number, y: number, z: number, s = 1) => {
    const l = sph(g, 0.026 * s, rnd() < 0.3 ? leafB : leafA, x, y, z, 1, 0.35, 1.4);
    l.rotation.set(rnd() * 1.2 - 0.6, rnd() * Math.PI * 2, rnd() * 0.8 - 0.4);
  };
  // touffe
  for (let k = 0; k < 18; k++) {
    const a = rnd() * Math.PI * 2;
    const r = 0.02 + rnd() * 0.07;
    leaf(Math.cos(a) * r, 0.11 + rnd() * 0.09, Math.sin(a) * r, 0.9 + rnd() * 0.4);
  }
  // lianes : de la touffe vers le bas, le long du côté de la colonne
  [-0.06, 0.04, 0.13].forEach((z0, v) => {
    const len = 0.55 + v * 0.18;
    const steps = 9 + v * 2;
    for (let k = 0; k < steps; k++) {
      const t = k / (steps - 1);
      // dehors de la colonne (demi-largeur 0,30 m depuis son centre, soit 0,12 m depuis le pot)
      const x = side * (0.07 + Math.min(t * 3, 1) * 0.1);
      const y = 0.1 - Math.max(0, t * 3 - 1) * (len / 2) - Math.min(t * 3, 1) * 0.02;
      const z = z0 + Math.sin(t * 5 + v) * 0.025;
      cyl(g, 0.002, 0.002, len / steps, '#5d7a3a', x, y, z, 5);
      leaf(x + side * 0.012, y, z, 0.8 + rnd() * 0.3);
    }
  });
}

/** Inclinaison du cadre photo (rad) : à ajuster si la photo ne colle pas au cadre. */
const TILT = 0.2; // face avant du cadre penchée vers l'arrière (normale mesurée : 0,2)

function beachHouseTexture(w = 256, h = 180): THREE.CanvasTexture {
  return canvasTexture(w, h, (g, w, h) => {
    const sky = g.createLinearGradient(0, 0, 0, h * 0.55);
    sky.addColorStop(0, '#8ea6bd');
    sky.addColorStop(1, '#d5dde3');
    g.fillStyle = sky;
    g.fillRect(0, 0, w, h);
    g.fillStyle = '#5f7f97';
    g.fillRect(0, h * 0.5, w, h * 0.14); // mer
    g.fillStyle = '#e7e2d6';
    g.fillRect(0, h * 0.64, w, h * 0.36); // sable
    // maison sur pilotis
    g.fillStyle = '#3d4a5c';
    g.fillRect(w * 0.38, h * 0.36, w * 0.26, h * 0.2);
    g.beginPath();
    g.moveTo(w * 0.35, h * 0.37);
    g.lineTo(w * 0.51, h * 0.24);
    g.lineTo(w * 0.67, h * 0.37);
    g.fill();
    g.fillStyle = '#e9dcc0';
    [0.42, 0.5, 0.58].forEach((x) => g.fillRect(w * x, h * 0.42, w * 0.035, h * 0.05));
    g.fillStyle = '#4a4a4a';
    [0.4, 0.62].forEach((x) => g.fillRect(w * x, h * 0.56, w * 0.012, h * 0.1));
  });
}

function textTexture(text: string, color: string): THREE.CanvasTexture {
  return canvasTexture(128, 90, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.fillStyle = color;
    g.font = '700 64px Georgia, serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(text, w / 2, h / 2 + 4);
  });
}
