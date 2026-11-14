import { EasterEgg, InteractiveObject, InteractiveObjectId } from './types';

/**
 * Objets cliquables du salon.
 * - `action` relie l'objet à une fiche, au CV, à la TV, à Hiki ou à un easter egg.
 * - `focus.offset` règle le cadrage caméra (décalage depuis l'objet, en mètres).
 * L'ordre du tableau est aussi l'ordre de tabulation au clavier.
 * Les positions des meubles sont dans `scene/room-layout.ts`.
 */
export const INTERACTIVE_OBJECTS: readonly InteractiveObject[] = [
  {
    id: 'monitor-left',
    label: 'Écran gauche — Icare Portal',
    action: { type: 'sheet', sheetId: 'icare-portal' },
    primary: true,
    focus: { offset: [0.25, 0.55, 1.3] },
  },
  {
    id: 'monitor-right',
    label: 'Écran droit — Moniteur Virtuel',
    action: { type: 'sheet', sheetId: 'moniteur-virtuel' },
    primary: true,
    focus: { offset: [-0.2, 0.55, 1.3] },
  },
  {
    id: 'notebook',
    label: 'Carnet — UI kit Angular partagé',
    action: { type: 'sheet', sheetId: 'work' },
    primary: true,
    focus: { offset: [0.35, 0.75, 0.75] },
  },
  {
    id: 'cv-sheet',
    label: 'CV — Léna Simonin',
    action: { type: 'cv' },
    primary: true,
    focus: { offset: [0.1, 1.1, 1.5] },
  },
  {
    id: 'kallax-cards',
    label: 'Boîte de cartes — League of Stone',
    action: { type: 'sheet', sheetId: 'league-of-stone' },
    primary: true,
    focus: { offset: [1.25, 0.2, 0.15] },
  },
  {
    id: 'kallax-console',
    label: 'Console de poche — Tamagotchi',
    action: { type: 'sheet', sheetId: 'tamagotchi' },
    primary: true,
    focus: { offset: [1.25, 0.2, -0.15] },
  },
  {
    id: 'kallax-binder',
    label: "Classeur d'échantillons — Ganeshka",
    action: { type: 'sheet', sheetId: 'ganeshka' },
    primary: true,
    focus: { offset: [1.25, 0.1, 0.15] },
  },
  {
    id: 'kallax-server',
    label: 'Mini-serveur — Web services',
    action: { type: 'sheet', sheetId: 'web-services' },
    primary: true,
    focus: { offset: [1.25, 0.1, -0.15] },
  },
  {
    id: 'kallax-hubtv',
    label: 'Mini-TV et manette — HubTV',
    action: { type: 'sheet', sheetId: 'hubtv' },
    primary: true,
    focus: { offset: [1.25, -0.1, 0.1] },
  },
  {
    id: 'kallax-azura',
    label: 'Téléphone — Azura',
    action: { type: 'sheet', sheetId: 'azura' },
    primary: true,
    focus: { offset: [1.25, -0.1, -0.1] },
  },
  {
    id: 'kallax-routine',
    label: 'Carnet et cartes — Routine&Carte',
    action: { type: 'sheet', sheetId: 'routine-carte' },
    primary: true,
    focus: { offset: [1.25, 0.25, 0.1] },
  },
  {
    id: 'kallax-salon',
    label: 'Mini-salon — Le salon de Léna',
    action: { type: 'sheet', sheetId: 'salon' },
    primary: true,
    focus: { offset: [1.25, 0.15, 0.1] },
  },
  {
    id: 'kallax-iut',
    label: "Boîte d'archives — Portfolio IUT de Blagnac",
    action: { type: 'sheet', sheetId: 'iut-blagnac' },
    primary: true,
    focus: { offset: [1.25, -0.1, 0.1] },
  },
  {
    id: 'tv',
    label: 'TV TCL — allumer / éteindre',
    action: { type: 'tv-toggle' },
    primary: true,
    focus: null,
  },
  {
    id: 'lava-lamp',
    label: 'Lampe à lave — allumer / éteindre',
    action: { type: 'lava-toggle' },
    primary: true,
    focus: null,
  },
  {
    id: 'hiki',
    label: 'Caresser Hiki',
    action: { type: 'pet' },
    primary: true,
    focus: null,
  },
  {
    id: 'egg-controller',
    label: 'Manette — aperçu HubTV sur la TV',
    action: { type: 'easter-egg', eggId: 'controller' },
    primary: true,
    focus: null,
  },
  {
    id: 'egg-plush',
    label: 'Peluche Cinnamoroll',
    action: { type: 'easter-egg', eggId: 'plush' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-guitar',
    label: 'Guitare — jouer un air',
    action: { type: 'easter-egg', eggId: 'guitar' },
    primary: true,
    focus: null,
  },
  {
    id: 'egg-aquarium',
    label: 'Aquarium à méduses — Jellyfish',
    // ouvre la fiche du jeu ; les méduses forment toujours leur cœur (room-view.ts)
    action: { type: 'sheet', sheetId: 'jellyfish' },
    primary: true,
    focus: { offset: [0.15, 0.1, -0.9] },
  },
  {
    id: 'egg-sunflowers',
    label: 'Tournesols',
    action: { type: 'easter-egg', eggId: 'sunflowers' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-stars',
    label: 'Étoiles au mur',
    action: { type: 'easter-egg', eggId: 'stars' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-bowl',
    label: 'Gamelle de Hiki',
    action: { type: 'easter-egg', eggId: 'bowl' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-retro',
    label: 'Console rétro',
    action: { type: 'easter-egg', eggId: 'retro' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-teardown',
    label: 'Console en cours de démontage',
    action: { type: 'easter-egg', eggId: 'teardown' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-duck',
    label: 'Canard de débogage',
    action: { type: 'easter-egg', eggId: 'duck' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-consoles',
    label: 'Collection de consoles',
    action: { type: 'easter-egg', eggId: 'consoles' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-eva-figure',
    label: 'Figurine Evangelion',
    action: { type: 'easter-egg', eggId: 'eva-figure' },
    primary: false,
    focus: null,
  },
];

/** Messages des easter eggs (à personnaliser). */
export const EASTER_EGGS: readonly EasterEgg[] = [
  {
    id: 'controller',
    title: 'Manette',
    message: "C'est elle qui déclenche HubTV : un raccourci, et le PC passe du bureau à la TV.",
  },
  {
    id: 'plush',
    title: 'Cinnamoroll',
    message: 'Mon petit chien nuage veille sur le salon depuis l’étagère.',
  },
  {
    id: 'guitar',
    title: 'Guitare',
    message: 'Un petit air composé pour le salon. Le son se coupe avec le bouton « Son ».',
  },
  {
    id: 'aquarium',
    title: 'Méduses',
    message: 'Les méduses t’envoient un cœur… et Hiki accourt pour les regarder.',
  },
  {
    id: 'sunflowers',
    title: 'Tournesols',
    message: 'Des tournesols, pour garder un peu de soleil dans le salon toute l’année.',
  },
  {
    id: 'stars',
    title: 'Étoiles phosphorescentes',
    message: 'On les remarque à peine le jour. Passez en mode nuit pour les voir briller.',
  },
  {
    id: 'bowl',
    title: 'La gamelle de Hiki',
    message: 'Il suffit de toucher sa gamelle pour que Hiki arrive.',
  },
  {
    id: 'retro',
    title: 'Console rétro',
    message:
      'Une cartouche, un bouton, et la TV repart dans les années 90. Je collectionne les consoles rétro.',
  },
  {
    id: 'teardown',
    title: 'Atelier démontage',
    message:
      "J'adore ouvrir les consoles pour voir comment elles marchent, les nettoyer et les remonter.",
  },
  {
    id: 'duck',
    title: 'Canard de débogage',
    message: 'Quand un bug résiste, je l’explique à ce canard. Ça marche presque toujours.',
  },
  {
    id: 'consoles',
    title: 'Ma collection',
    message:
      'GameCube, Nintendo 64, PSP et 3DS : des consoles que je garde, que je répare et sur lesquelles je joue encore.',
  },
  {
    id: 'eva-figure',
    title: 'Figurine Evangelion',
    message: 'L’Unité 01 veille sur le KALLAX. Evangelion fait partie de mes séries préférées.',
  },
];

export function objectById(id: InteractiveObjectId): InteractiveObject {
  const o = INTERACTIVE_OBJECTS.find((x) => x.id === id);
  if (!o) throw new Error(`Objet inconnu : ${id}`);
  return o;
}

/** Objet de scène qui ouvre une fiche donnée (pour la navigation « Projets »). */
export function objectForSheet(sheetId: string): InteractiveObject | undefined {
  return INTERACTIVE_OBJECTS.find((o) => o.action.type === 'sheet' && o.action.sheetId === sheetId);
}
