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
    label: 'Écran gauche — HubTV',
    action: { type: 'sheet', sheetId: 'hubtv' },
    primary: true,
    focus: { offset: [0.25, 0.55, 1.3] },
  },
  {
    id: 'monitor-right',
    label: 'Écran droit — Azura',
    action: { type: 'sheet', sheetId: 'azura' },
    primary: true,
    focus: { offset: [-0.2, 0.55, 1.3] },
  },
  {
    id: 'notebook',
    label: 'Carnet — Mon travail',
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
    id: 'tv',
    label: 'TV TCL — allumer / éteindre',
    action: { type: 'tv-toggle' },
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
    id: 'egg-eva-jacket',
    label: 'Mini-veste sur la chaise',
    action: { type: 'easter-egg', eggId: 'eva-jacket' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-controller',
    label: 'Manette près du canapé',
    action: { type: 'easter-egg', eggId: 'controller' },
    primary: false,
    focus: null,
  },
  {
    id: 'egg-plush',
    label: 'Peluche Cinnamoroll',
    action: { type: 'easter-egg', eggId: 'plush' },
    primary: false,
    focus: null,
  },
];

/** Messages des easter eggs (à personnaliser). */
export const EASTER_EGGS: readonly EasterEgg[] = [
  {
    id: 'eva-jacket',
    title: 'Mini-veste violette',
    message:
      "Une petite veste aux couleurs de l'Unité 01. Evangelion fait partie de mes séries préférées.",
  },
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
