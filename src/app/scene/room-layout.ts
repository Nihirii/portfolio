/**
 * Proportions du salon, en mètres, d'après le plan « Mon salon en 3D ».
 * Origine : coin entre le mur du bureau (z = 0) et le mur du KALLAX (x = 0).
 *   x → vers la fenêtre, z → vers la porte-fenêtre du balcon et le mur TV.
 * Ajuster une valeur ici suffit : la scène se reconstruit à partir de ces cotes.
 */
export const ROOM = {
  width: 6.0, // x
  depth: 3.4, // z
  height: 2.5,
  wallThickness: 0.08,
  doorRecessDepth: 0.35,
};

export const DESK = {
  x: 2.25, // centre du plateau
  z: 0.4,
  width: 2.0,
  depth: 0.8,
  height: 0.75,
  drawerX: 3.0,
};

/** Deux écrans Acer, posés sur le bureau. */
export const MONITORS = {
  left: { x: 1.85, rotY: 0.15 },
  right: { x: 2.5, rotY: -0.15 },
  z: 0.2,
  centerY: 1.02,
  width: 0.64,
  height: 0.37,
};

export const DESK_ITEMS = {
  keyboard: { x: 2.1, z: 0.5 },
  notebook: { x: 1.58, z: 0.52, rotY: 0.25 },
  cvSheet: { x: 2.72, z: 0.56, rotY: -0.18 },
  lamp: { x: 1.42, z: 0.2 },
};

export const CHAIRS = {
  gaming: { x: 2.3, z: 1.3, rotY: 0.15 },
  white: { x: 1.35, z: 1.55, rotY: -0.9 },
};

/** KALLAX 5 × 5 contre le mur x = 0, ouvert vers la pièce. */
export const KALLAX = {
  z: 2.45,
  size: 1.82,
  depth: 0.39,
  cells: 5,
  /** Cases des objets-projets : [colonne, rangée] (0,0 = en bas, côté bureau). */
  projectCells: {
    'kallax-cards': [1, 3],
    'kallax-console': [3, 3],
    'kallax-binder': [1, 2],
    'kallax-server': [3, 2],
  } as Record<string, [number, number]>,
  /** Case de la figurine Evangelion. */
  evaFigureCell: [2, 3] as [number, number],
};

/** Meuble TV IKEA blanc (3 × BESTÅ) et TV TCL, contre le mur du balcon. */
export const TV = {
  x: 4.5,
  cabinetWidth: 1.8,
  cabinetHeight: 0.48,
  cabinetDepth: 0.42,
  screenWidth: 1.2,
  screenHeight: 0.68,
};

/** Canapé YULIN 270 × 173, bouclette beige, méridienne côté PC. */
export const SOFA = {
  x0: 3.3,
  x1: 6.0,
  z0: 0.2,
  seatDepth: 0.87,
  chaiseDepth: 1.73,
  chaiseWidth: 0.94,
  armWidth: 0.25,
  fabric: '#efe4d3',
  fabricLight: '#f5ecdf',
};

/** Table basse recentrée devant l'assise. */
export const COFFEE_TABLE = { x: 5.12, z: 1.8 };

/** Grand tapis crème qui relie canapé et coin TV. */
export const RUG = { x: 4.55, z: 2.1, width: 2.5, depth: 1.75 };

/** Colonnes BESTÅ vitrées de part et d'autre du meuble TV, reliées par une étagère à affiches. */
export const MEDIA_WALL = {
  columnsX: [3.3, 5.7],
  columnWidth: 0.6,
  columnHeight: 1.92,
  ledgeY: 1.465,
};

/** Arbre à chat, un peu écarté du KALLAX pour ne plus masquer ses cases du bas. */
export const CAT_TREE = { x: 1.25, z: 2.95 };

/** Aquarium à méduses, sur l'étagère du milieu de la colonne BESTÅ gauche. */
export const AQUARIUM = { x: 3.3, z: 3.2, shelfY: 0.988, width: 0.42, height: 0.32 };

/** Easter eggs : vase de tournesols, gamelle de Hiki, étoiles phosphorescentes. */
/** Tournesols : sur le rebord derrière le canapé (hauteur du rebord : 0,875 m). */
export const SUNFLOWERS = { x: 4.05, y: 0.875, z: 0.1 };
export const BOWL = { x: 0.72, z: 1.05 };
export const STARS = { y: 2.25, z0: 1.6, z1: 3.25 };

/** Fenêtre du mur x = largeur (lumière du jour), avec le hamac à chat sur le radiateur. */
export const WINDOW = { z: 2.0, width: 1.2, height: 1.2, sill: 0.95 };

/** Porte-fenêtre du balcon (mur z = profondeur). */
export const BALCONY_DOOR = { x0: 1.4, x1: 2.7 };

/** Apparence et trajets de Hiki. À ajuster d'après ses photos. */
export const HIKI = {
  coat: '#7a6150',
  coatLight: '#9c7d66',
  belly: '#c9b3a0',
  nose: '#c98b88',
  eyes: '#d8c24a',
  scale: 1,
  /** Points de passage ; `y` > 0 = Hiki saute dessus. */
  spots: {
    rug: { x: 3.05, y: 0, z: 2.45 },
    middle: { x: 2.15, y: 0, z: 2.3 },
    cosy: { x: 1.75, y: 0, z: 2.6 },
    catTree: { x: 1.3, y: 1.47, z: 2.95 },
    bowl: { x: 0.97, y: 0, z: 1.05 },
    desk: { x: 1.9, y: 0, z: 1.05 },
    tvFront: { x: 3.9, y: 0, z: 2.62 },
    corridor: { x: 4.9, y: 0, z: 2.55 },
    window: { x: 5.55, y: 0, z: 2.55 },
    hammock: { x: 5.66, y: 0.76, z: 2.0 },
    sofaFoot: { x: 4.05, y: 0, z: 2.22 },
    sofa: { x: 4.0, y: 0.49, z: 1.45 },
  },
  /** Liaisons possibles entre points (graphe non orienté). */
  links: [
    ['rug', 'middle'],
    ['middle', 'cosy'],
    ['cosy', 'catTree'],
    ['desk', 'bowl'],
    ['middle', 'desk'],
    ['rug', 'tvFront'],
    ['tvFront', 'corridor'],
    ['corridor', 'window'],
    ['window', 'hammock'],
    ['rug', 'sofaFoot'],
    ['tvFront', 'sofaFoot'],
    ['sofaFoot', 'sofa'],
  ] as [string, string][],
  /** Endroits où elle peut dormir ; la nuit, elle reste près du canapé. */
  sleepSpots: { day: ['hammock', 'rug', 'sofa', 'catTree'], night: ['sofa', 'sofaFoot'] },
};

/** Vue d'ensemble (repère de la pièce). */
export const OVERVIEW = {
  target: [3.05, 0.35, 1.75] as [number, number, number],
  /** Direction de la caméra depuis la cible (normalisée ensuite). */
  direction: [0.66, 0.7, 0.3] as [number, number, number],
  distance: 9.6,
  fov: 34,
};

/** Vue de la pièce (par défaut) : à la première personne, on démarre près de l'entrée. */
export const INSIDE = {
  /** Position de départ au sol (x, z), dans le renfoncement de l'entrée. */
  start: { x: 0.55, z: 0.12 },
  /** Point regardé au départ : le salon. */
  lookAt: [3.6, 1.15, 2.3] as [number, number, number],
  /** Hauteur des yeux (m). */
  eyeHeight: 1.6,
  /** Allure de marche (m/s). */
  walkSpeed: 1.35,
  /** Rayon du « corps » pour les collisions (m). */
  bodyRadius: 0.26,
  fov: 66,
  /** Champ de vision en portrait (téléphone). */
  fovPortrait: 80,
};

/** Obstacle rectangulaire au sol (x, z). */
export interface RectCollider {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}
/** Obstacle circulaire au sol (chaise, vase…). */
export interface CircleCollider {
  x: number;
  z: number;
  r: number;
}

/**
 * Collisions de la vue à la première personne : murs et gros meubles.
 * Déduites des cotes ci-dessus ; les petits objets (gamelle, tapis) se franchissent.
 */
export function colliders(): { rects: RectCollider[]; circles: CircleCollider[] } {
  const far = 50;
  const W = ROOM.width;
  const D = ROOM.depth;
  const deskHalfW = DESK.width / 2;
  const seatEnd = SOFA.z0 + SOFA.seatDepth;
  const chaiseEnd = SOFA.z0 + SOFA.chaiseDepth;
  const chaiseX1 = SOFA.x0 + SOFA.armWidth + SOFA.chaiseWidth;
  const rects: RectCollider[] = [
    // murs (le renfoncement de la porte d'entrée fait 1 m de large)
    { minX: -far, maxX: 0, minZ: -far, maxZ: far },
    { minX: W, maxX: far, minZ: -far, maxZ: far },
    { minX: -far, maxX: far, minZ: D, maxZ: far },
    { minX: 1.0, maxX: far, minZ: -far, maxZ: 0 },
    { minX: -far, maxX: far, minZ: -far, maxZ: -ROOM.doorRecessDepth },
    // meubles
    { minX: DESK.x - deskHalfW, maxX: DESK.x + deskHalfW, minZ: 0, maxZ: DESK.z + DESK.depth / 2 },
    { minX: 0, maxX: 0.12, minZ: 0.74, maxZ: 1.36 }, // miroir
    {
      minX: 0,
      maxX: KALLAX.depth + 0.02,
      minZ: KALLAX.z - KALLAX.size / 2,
      maxZ: KALLAX.z + KALLAX.size / 2,
    },
    {
      minX: CAT_TREE.x - 0.25,
      maxX: CAT_TREE.x + 0.25,
      minZ: CAT_TREE.z - 0.23,
      maxZ: CAT_TREE.z + 0.23,
    },
    { minX: SOFA.x0, maxX: SOFA.x1, minZ: 0, maxZ: seatEnd }, // canapé + rebord
    { minX: SOFA.x0, maxX: chaiseX1, minZ: seatEnd, maxZ: chaiseEnd }, // méridienne
    {
      minX: COFFEE_TABLE.x - 0.5,
      maxX: COFFEE_TABLE.x + 0.5,
      minZ: COFFEE_TABLE.z - 0.28,
      maxZ: COFFEE_TABLE.z + 0.28,
    },
    // meuble TV + colonnes BESTÅ
    {
      minX: MEDIA_WALL.columnsX[0] - MEDIA_WALL.columnWidth / 2,
      maxX: MEDIA_WALL.columnsX[1] + MEDIA_WALL.columnWidth / 2,
      minZ: D - TV.cabinetDepth,
      maxZ: D,
    },
    { minX: W - 0.15, maxX: W, minZ: WINDOW.z - 0.55, maxZ: WINDOW.z + 0.55 }, // radiateur
  ];
  const circles: CircleCollider[] = [
    { x: CHAIRS.gaming.x, z: CHAIRS.gaming.z, r: 0.33 }, // chaise gaming
  ];
  return { rects, circles };
}
