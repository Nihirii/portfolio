import { repoUrl } from './profile';
import { Sheet, SheetId } from './types';

/**
 * Contenu éditorial des fiches.
 * Les résumés marqués « À relire » sont des brouillons à ajuster.
 * Les noms de dépôts (`repoUrl('…')`) sont à vérifier.
 */
export const SHEETS: readonly Sheet[] = [
  {
    id: 'about',
    kind: 'about',
    title: 'Léna Simonin',
    tagline: 'Développeuse front-end à Lyon',
    summary:
      "Je construis des interfaces avec Angular et Electron, et je les dessine d'abord dans Figma. " +
      'Au quotidien, je conçois les maquettes de trois produits de vidéoprotection, je les intègre, ' +
      'et je maintiens le UI kit Angular partagé et ses design tokens.',
    sections: [
      {
        heading: 'Ce que je fais',
        items: [
          'Maquettes Figma de trois produits de vidéoprotection',
          'Développement front Angular et applications de bureau Electron',
          'UI kit Angular partagé et design tokens',
        ],
      },
      {
        heading: 'Ce salon',
        items: [
          'Cliquez sur les écrans, le KALLAX, le carnet et la feuille de CV',
          'Hiki se laisse caresser',
          'Quelques objets cachent un petit secret',
        ],
      },
    ],
    stack: ['Angular', 'TypeScript', 'Electron', 'Figma', 'Design tokens', 'Three.js'],
    repos: [],
    visual: 'about',
    objectId: null,
  },
  {
    id: 'hubtv',
    kind: 'project',
    title: 'HubTV',
    tagline: 'Passer du bureau Windows au jeu sur la TV, sans se lever',
    summary:
      'HubTV fait basculer le PC entre le bureau Windows et une session de jeu sur la télévision. ' +
      'Un raccourci manette lance la bascule, Steam Big Picture prend le relais sur la TV, ' +
      "et une télécommande Android permet de piloter l'ensemble depuis le canapé.",
    // À relire : « Mon rôle » et « Résultat » reformulés à partir du résumé.
    sections: [
      {
        heading: 'Le problème',
        items: ['Passer du bureau Windows au jeu sur la TV, sans se lever du canapé'],
      },
      { heading: 'Mon rôle', items: ['Projet personnel : conception et développement'] },
      {
        heading: 'Choix techniques',
        items: [
          'Un raccourci manette déclenche la bascule entre bureau et TV',
          'Steam Big Picture prend le relais sur la TV',
          'Une télécommande Android pilote le PC depuis le canapé',
        ],
      },
      {
        heading: 'Résultat',
        items: ['Le PC passe du bureau Windows au jeu sur la TV, manette en main'],
      },
    ],
    stack: ['Windows', 'Steam Big Picture', 'Android'],
    // Dépôt privé : le lien reste masqué tant que `isPublic` vaut false.
    repos: [{ label: 'Dépôt HubTV', url: repoUrl('hubtv'), isPublic: false }],
    visual: 'hubtv',
    objectId: 'kallax-hubtv',
  },
  {
    id: 'azura',
    kind: 'project',
    title: 'Azura',
    tagline: 'Humeur, journal et routines, même sans réseau',
    summary:
      "Azura est une application Android de suivi d'humeur. Elle réunit un journal, des routines " +
      "et l'historique de l'humeur, et elle a été conçue pour fonctionner entièrement hors ligne.",
    // À relire : « Mon rôle » et « Résultat » reformulés à partir du résumé.
    sections: [
      {
        heading: 'Le problème',
        items: ['Suivre son humeur, tenir un journal et ses routines, même sans réseau'],
      },
      {
        heading: 'Mon rôle',
        items: ["Projet personnel : conception et développement de l'application Android"],
      },
      {
        heading: 'Choix technique : le hors-ligne',
        items: [
          "L'application fonctionne entièrement hors ligne : la saisie d'humeur, le journal et les routines restent disponibles sans connexion",
        ],
      },
      {
        heading: 'Résultat',
        items: [
          "Suivi de l'humeur au fil des jours, journal personnel et routines réunis dans une seule application",
        ],
      },
    ],
    stack: ['Android', 'Hors ligne'],
    // Dépôt privé : le lien reste masqué tant que `isPublic` vaut false.
    repos: [{ label: 'Dépôt Azura', url: repoUrl('azura'), isPublic: false }],
    visual: 'azura',
    objectId: 'kallax-azura',
  },
  {
    id: 'league-of-stone',
    kind: 'project',
    title: 'League of Stone',
    tagline: 'Un jeu de cartes',
    // À relire : résumé provisoire.
    summary:
      'League of Stone est un jeu de cartes, rangé dans le KALLAX sous la forme de sa boîte.',
    sections: [],
    stack: [],
    repos: [{ label: 'Voir sur GitHub', url: repoUrl('league-of-stone'), isPublic: true }],
    visual: 'cards',
    objectId: 'kallax-cards',
  },
  {
    id: 'tamagotchi',
    kind: 'project',
    title: 'Tamagotchi JS',
    tagline: 'Un animal virtuel à soigner, dans une petite console en œuf',
    summary:
      "Un mini-jeu en JavaScript inspiré des Tamagotchi : on prend soin d'un animal virtuel en " +
      'répondant à ses besoins. Réalisé en trois heures dans le cadre d’un exercice, pour recréer ' +
      'en JavaScript un Tamagotchi développé d’abord en Python.',
    sections: [
      {
        heading: 'Comment jouer',
        items: [
          'Le nourrir, lui donner à boire, le faire dormir et jouer avec lui',
          "S'il tombe malade, le soigner d'abord : les autres actions sont bloquées jusqu'à sa guérison",
        ],
      },
      {
        heading: 'Choix de jeu',
        items: ['La maladie, ajoutée pour donner une priorité aux actions du joueur'],
      },
      {
        heading: 'Interface',
        items: [
          'Une petite console en œuf, avec un écran LCD et une police pixel',
          'Sur téléphone comme sur ordinateur, un sélecteur pour jouer dans la console ou en plein écran',
        ],
      },
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Bulma'],
    repos: [
      { label: 'Version JavaScript', url: repoUrl('tamagotchi_js'), isPublic: true },
      { label: 'Version Python', url: repoUrl('Tamagotchi_PY'), isPublic: true },
    ],
    demo: 'https://claude.ai/artifact/JcxbSNqjeYFeHj7duPXHFE',
    visual: 'pet',
    cover: {
      src: 'projects/tamagotchi.webp',
      alt: "Tamagotchi JS : la console en œuf rose, l'écran LCD et Mochi le chaton en pleine forme",
    },
    gallery: [
      {
        src: 'projects/tamagotchi-ecrans.webp',
        alt: 'Sur téléphone : accueil, mode console et mode plein écran',
      },
    ],
    objectId: 'kallax-console',
  },
  {
    id: 'ganeshka',
    kind: 'project',
    title: 'Ganeshka',
    tagline: 'Un projet web',
    // À relire : résumé provisoire.
    summary:
      'Ganeshka est un projet web, rangé dans le KALLAX sous la forme d’un classeur d’échantillons.',
    sections: [],
    stack: [],
    repos: [{ label: 'Voir sur GitHub', url: repoUrl('ganeshka'), isPublic: true }],
    visual: 'swatches',
    objectId: 'kallax-binder',
  },
  {
    id: 'web-services',
    kind: 'project',
    title: 'Web services',
    tagline: 'Des API et services web',
    // À relire : résumé provisoire.
    summary:
      'Une série de services web : conception des routes, échanges de données et documentation.',
    sections: [],
    stack: [],
    repos: [{ label: 'Voir sur GitHub', url: repoUrl('web-services'), isPublic: true }],
    visual: 'server',
    objectId: 'kallax-server',
  },
  {
    id: 'icare-portal',
    kind: 'product',
    title: 'Icare Portal',
    tagline: 'Produit de vidéoprotection · maquettes Figma et front Angular',
    summary:
      'Icare Portal fait partie des trois produits de vidéoprotection sur lesquels je travaille : ' +
      "j'en conçois les maquettes dans Figma et je les intègre avec le UI kit Angular partagé.",
    sections: [
      {
        heading: 'Mon rôle',
        items: [
          'Maquettes Figma : parcours, écrans et prototypes',
          'Intégration front avec le UI kit Angular partagé',
        ],
      },
    ],
    stack: ['Figma', 'Angular', 'Design tokens'],
    repos: [],
    visual: 'work',
    objectId: 'monitor-left',
  },
  {
    id: 'moniteur-virtuel',
    kind: 'product',
    title: 'Moniteur Virtuel',
    tagline: 'Produit de vidéoprotection · maquettes Figma et front Angular',
    summary:
      'Moniteur Virtuel fait partie des trois produits de vidéoprotection sur lesquels je travaille : ' +
      "j'en conçois les maquettes dans Figma et je les intègre avec le UI kit Angular partagé.",
    sections: [
      {
        heading: 'Mon rôle',
        items: [
          'Maquettes Figma : parcours, écrans et prototypes',
          'Intégration front avec le UI kit Angular partagé',
        ],
      },
    ],
    stack: ['Figma', 'Angular', 'Design tokens'],
    repos: [],
    visual: 'work',
    objectId: 'monitor-right',
  },
  {
    id: 'salon',
    kind: 'project',
    title: 'Le salon de Léna',
    tagline:
      'Ce portfolio : une page 2D et une visite 3D de mon salon, où chaque objet ouvre une fiche',
    summary:
      'Ce portfolio se lit en 2D ou se visite en 3D : dans mon salon, les écrans, le KALLAX, le carnet ' +
      'et la feuille de CV ouvrent les mêmes fiches que le menu.',
    sections: [
      {
        heading: 'Choix de conception',
        items: [
          'La 2D par défaut, rapide et lisible ; la scène 3D se charge seulement quand on la visite',
          'Les mêmes fiches en 2D et en 3D, ouvertes depuis le menu ou depuis les objets du salon',
          'Lumière pré-calculée dans Blender (Cycles) : rendu doux, et léger pour le téléphone',
          'Navigation au clavier, lecteurs d’écran et réduction des animations pris en compte',
        ],
      },
      {
        heading: 'Technique',
        items: [
          'Angular 22 et TypeScript',
          'Three.js : pièce construite en code à partir des cotes de mon salon',
          'Contenu typé : fiches et objets cliquables décrits dans des fichiers de données',
        ],
      },
    ],
    stack: ['Angular', 'TypeScript', 'Three.js', 'Blender'],
    // Dépôt privé : le lien reste masqué tant que `isPublic` vaut false.
    repos: [{ label: 'Dépôt du portfolio', url: repoUrl('portfolio'), isPublic: false }],
    visual: 'work',
    cover: {
      src: 'projects/salon.webp',
      alt: "Le salon de Léna en 3D, vu d'en haut, à la lumière du jour",
    },
    objectId: 'kallax-salon',
  },
  {
    id: 'jellyfish',
    kind: 'project',
    title: 'Jellyfish',
    tagline: "Un petit jeu d'arcade : une méduse, du plancton lumineux et des tortues à éviter",
    summary:
      "Un jeu d'arcade dans le navigateur : on guide une méduse dans les profondeurs, on mange du " +
      'plancton lumineux et on évite les tortues de mer qui traversent l’écran. Il se joue sur ' +
      'ordinateur comme sur mobile.',
    sections: [
      {
        heading: 'Règles',
        items: [
          'Chaque plancton mangé rapporte 1 point',
          'Une tortue qui touche la méduse termine la partie',
          'Plus la partie dure, plus les tortues sont rapides et nombreuses',
          'Le meilleur score est gardé dans le navigateur (localStorage)',
        ],
      },
      {
        heading: 'Couleurs de la méduse',
        items: [
          'Plus elle mange, plus elle change de couleur : Bleu lune, Lagon (10 planctons), Rose aurore (25), Abysse violet (50) et Corail de feu (80)',
          "Chaque palier s'annonce à l'écran, et la couleur atteinte est rappelée en fin de partie",
        ],
      },
      {
        heading: 'Un secret dans les profondeurs',
        items: [
          'Un easter egg transforme la méduse en méduse lune dorée pendant 10 secondes : elle repousse les tortues et chaque plancton rapporte 2 points',
        ],
      },
      {
        heading: 'Choix technique',
        items: [
          'HTML, CSS et JavaScript vanilla avec <canvas> : pas de dépendance, pas de build',
          'Commandes à la souris, au doigt ou aux flèches du clavier',
        ],
      },
    ],
    stack: ['JavaScript', 'Canvas', 'HTML', 'CSS'],
    repos: [{ label: 'Voir sur GitHub', url: repoUrl('jellyfish'), isPublic: true }],
    visual: 'pet',
    cover: {
      src: 'projects/jellyfish.webp',
      alt: 'Jellyfish : une méduse lumineuse et des tortues dans les profondeurs',
    },
    gallery: [
      {
        src: 'projects/jellyfish-gameplay.webp',
        alt: "Une méduse turquoise nage entre le plancton lumineux pendant que deux tortues traversent l'écran",
        caption: 'En pleine partie',
      },
      {
        src: 'projects/jellyfish-golden.webp',
        alt: 'La méduse lune dorée, entourée de son anneau de temps, repousse une tortue',
        caption: 'La méduse lune dorée (easter egg)',
      },
      {
        src: 'projects/jellyfish-colors.webp',
        alt: 'Les cinq couleurs de la méduse, de Bleu lune à Corail de feu',
        caption: 'Les cinq couleurs de la méduse',
      },
    ],
    objectId: 'egg-aquarium',
  },
  {
    id: 'routine-carte',
    kind: 'project',
    title: 'Routine&Carte',
    tagline: 'Projet perso',
    // À compléter : description, stack et dépôt (aucune information fournie pour l'instant).
    summary: 'Un projet perso rangé dans le KALLAX. Sa présentation détaillée arrive bientôt.',
    sections: [],
    stack: [],
    repos: [],
    visual: 'pet',
    objectId: 'kallax-routine',
  },
  {
    id: 'iut-blagnac',
    kind: 'archive',
    title: 'Portfolio IUT de Blagnac',
    tagline: 'Mon ancien portfolio étudiant',
    summary:
      "Le portfolio que j'avais réalisé pendant mes études à l'IUT de Blagnac, gardé ici en archive.",
    sections: [],
    stack: [],
    // Dépôt privé. Ajouter un lien « Voir la démo » seulement si une URL publique existe.
    repos: [
      {
        label: 'Dépôt Portfolio_IUT_Blagnac',
        url: repoUrl('Portfolio_IUT_Blagnac'),
        isPublic: false,
      },
    ],
    visual: 'swatches',
    objectId: 'kallax-iut',
  },
  {
    id: 'work',
    kind: 'work',
    title: 'UI kit Angular partagé',
    tagline: 'Figma → token → composant Angular, pour trois produits de vidéoprotection',
    summary:
      'Je conçois dans Figma les maquettes de trois produits de vidéoprotection, je les développe ' +
      'en Angular et Electron, et je maintiens le UI kit Angular partagé par ces produits, avec ses design tokens.',
    sections: [
      {
        heading: 'Le problème',
        items: [
          'Trois produits de vidéoprotection qui partagent les mêmes composants, de Figma au code',
        ],
      },
      {
        heading: 'Mon rôle',
        items: [
          'Maquettes Figma : parcours, écrans et prototypes pour les trois produits',
          'Intégration des écrans en Angular, applications de bureau Electron',
          'Maintenance du UI kit Angular partagé et de ses design tokens',
        ],
      },
      {
        heading: 'Choix technique et UI',
        items: [
          'Des design tokens (couleurs, typographie, espacements) communs à Figma et au code',
          'Des composants Figma alignés sur le UI kit Angular',
        ],
      },
      {
        heading: 'Résultat',
        items: ['Un même UI kit Angular pour les trois produits, cohérent entre Figma et le code'],
      },
    ],
    stack: ['Figma', 'Angular', 'Electron', 'TypeScript', 'SCSS', 'Design tokens'],
    repos: [],
    visual: 'work',
    objectId: 'notebook',
  },
];

export function sheetById(id: SheetId): Sheet {
  const sheet = SHEETS.find((s) => s.id === id);
  if (!sheet) throw new Error(`Fiche inconnue : ${id}`);
  return sheet;
}

export const PROJECT_SHEETS = SHEETS.filter((s) => s.kind === 'project');

/** Réalisations mises en avant, dans cet ordre. */
export const FEATURED_SHEETS = (['work', 'hubtv', 'azura'] as const).map(sheetById);

/** Les autres projets, regroupés sous « Expérimentations ». */
export const EXPERIMENT_SHEETS = PROJECT_SHEETS.filter(
  (s) => !FEATURED_SHEETS.some((f) => f.id === s.id),
);

/** Anciens projets (« Archives »). */
export const ARCHIVE_SHEETS = SHEETS.filter((s) => s.kind === 'archive');

/** Produits sur lesquels je travaille (écrans du bureau), avec accès au UI kit. */
export const PRODUCT_SHEETS = SHEETS.filter((s) => s.kind === 'product');
