/**
 * Types partagés entre les données éditoriales (fiches, objets) et la scène 3D.
 * Modifier un texte, un lien ou l'objet associé à une fiche se fait dans
 * `sheets.ts` et `interactive-objects.ts`, sans toucher au code de la scène.
 */

/** Identifiant d'une fiche HTML. */
export type SheetId =
  | 'about'
  | 'hubtv'
  | 'azura'
  | 'league-of-stone'
  | 'tamagotchi'
  | 'ganeshka'
  | 'web-services'
  | 'work'
  | 'icare-portal'
  | 'moniteur-virtuel'
  | 'salon'
  | 'routine-carte'
  | 'jellyfish'
  | 'iut-blagnac';

/** Illustrations originales disponibles pour les fiches (dessinées en CSS/SVG). */
export type SheetVisual =
  'hubtv' | 'azura' | 'cards' | 'pet' | 'swatches' | 'server' | 'work' | 'about';

export interface RepoLink {
  label: string;
  /** URL complète du dépôt. `null` tant qu'elle n'est pas connue. */
  url: string | null;
  /**
   * Le lien n'est affiché que si le dépôt est public.
   * HubTV et Azura restent `false` tant que leurs dépôts sont privés.
   */
  isPublic: boolean;
}

export interface SheetSection {
  heading: string;
  items: string[];
}

export interface Sheet {
  id: SheetId;
  /**
   * `project` : projet perso (Réalisations / Expérimentations) ; `archive` : ancien projet ;
   * `product` : produit sur lequel je travaille (écrans du bureau) ; `work` : le UI kit.
   */
  kind: 'project' | 'work' | 'about' | 'product' | 'archive';
  title: string;
  /** Une ligne d'accroche sous le titre. */
  tagline: string;
  summary: string;
  sections: SheetSection[];
  stack: string[];
  repos: RepoLink[];
  visual: SheetVisual;
  /**
   * Vraie capture (servie depuis `public/`), en couverture de la carte et en grand dans la fiche.
   * Absente : l'illustration `visual` la remplace.
   */
  cover?: { src: string; alt: string };
  /** Objet de la scène associé (pour la caméra et la vue 2D). */
  objectId: InteractiveObjectId | null;
}

/** Identifiant d'un objet cliquable dans le salon. */
export type InteractiveObjectId =
  | 'monitor-left'
  | 'monitor-right'
  | 'kallax-cards'
  | 'kallax-console'
  | 'kallax-binder'
  | 'kallax-server'
  | 'kallax-salon'
  | 'kallax-iut'
  | 'kallax-hubtv'
  | 'kallax-azura'
  | 'kallax-routine'
  | 'notebook'
  | 'cv-sheet'
  | 'tv'
  | 'hiki'
  | 'egg-controller'
  | 'egg-plush'
  | 'egg-guitar'
  | 'egg-aquarium'
  | 'egg-sunflowers'
  | 'egg-stars'
  | 'egg-bowl'
  | 'egg-retro'
  | 'egg-teardown'
  | 'egg-duck'
  | 'egg-consoles'
  | 'egg-eva-figure'
  | 'lava-lamp';

/** Ce qui se passe quand on active un objet. */
export type ObjectAction =
  | { type: 'sheet'; sheetId: SheetId }
  | { type: 'cv' }
  | { type: 'tv-toggle' }
  | { type: 'lava-toggle' }
  | { type: 'pet' }
  | { type: 'easter-egg'; eggId: EasterEggId };

export type EasterEggId =
  | 'controller'
  | 'plush'
  | 'guitar'
  | 'aquarium'
  | 'sunflowers'
  | 'stars'
  | 'bowl'
  | 'retro'
  | 'teardown'
  | 'duck'
  | 'consoles'
  | 'eva-figure';

export interface InteractiveObject {
  id: InteractiveObjectId;
  /** Nom affiché au survol / focus et lu par les lecteurs d'écran. */
  label: string;
  action: ObjectAction;
  /** Objet « principal » : reçoit contour + étiquette. Les easter eggs restent discrets. */
  primary: boolean;
  /**
   * Cadrage caméra quand l'objet est sélectionné, exprimé en décalage
   * depuis le centre de l'objet (mètres, repère de la pièce).
   * `null` = pas de rapprochement.
   */
  focus: { offset: [number, number, number]; distanceScale?: number } | null;
}

export interface EasterEgg {
  id: EasterEggId;
  title: string;
  message: string;
}

export interface Like {
  /** Petit pictogramme (émoji) affiché devant le libellé. */
  icon: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  city: string;
  /** Pseudo GitHub. Laisser vide pour masquer les liens GitHub. */
  githubUsername: string;
  /** Chemin public du CV (servi depuis `public/`). */
  cvPdfPath: string;
  cvDownloadName: string;
  /** Avatar affiché dans « À propos » (servi depuis `public/`). */
  avatarPath: string;
  /** Ce que j'aime : affiché dans « À propos » et la version 2D. */
  likes: Like[];
}
