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
    sections: [
      {
        heading: 'Fonctionnement',
        items: [
          'Raccourci manette pour basculer entre bureau et TV',
          'Ouverture de Steam Big Picture sur la TV',
          'Télécommande Android pour piloter le PC depuis le canapé',
        ],
      },
    ],
    stack: ['Windows', 'Steam Big Picture', 'Android'],
    // Dépôt privé : le lien reste masqué tant que `isPublic` vaut false.
    repos: [{ label: 'Dépôt HubTV', url: repoUrl('hubtv'), isPublic: false }],
    visual: 'hubtv',
    objectId: 'monitor-left',
  },
  {
    id: 'azura',
    kind: 'project',
    title: 'Azura',
    tagline: 'Humeur, journal et routines, même sans réseau',
    summary:
      "Azura est une application Android de suivi d'humeur. Elle réunit un journal, des routines " +
      "et l'historique de l'humeur, et elle a été conçue pour fonctionner entièrement hors ligne.",
    sections: [
      {
        heading: 'Fonctionnalités',
        items: [
          "Suivi de l'humeur au fil des jours",
          'Journal personnel',
          'Routines',
          'Fonctionne hors ligne',
        ],
      },
    ],
    stack: ['Android', 'Hors ligne'],
    // Dépôt privé : le lien reste masqué tant que `isPublic` vaut false.
    repos: [{ label: 'Dépôt Azura', url: repoUrl('azura'), isPublic: false }],
    visual: 'azura',
    objectId: 'monitor-right',
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
    title: 'Tamagotchi JS et Python',
    tagline: 'Le même animal virtuel, écrit dans deux langages',
    // À relire : résumé provisoire.
    summary:
      'Un animal virtuel à nourrir, faire jouer et coucher, développé une fois en JavaScript ' +
      'et une fois en Python pour comparer les deux approches.',
    sections: [{ heading: 'Deux versions', items: ['JavaScript', 'Python'] }],
    stack: ['JavaScript', 'Python'],
    repos: [
      { label: 'Version JavaScript', url: repoUrl('tamagotchi-js'), isPublic: true },
      { label: 'Version Python', url: repoUrl('tamagotchi-python'), isPublic: true },
    ],
    visual: 'pet',
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
    id: 'work',
    kind: 'work',
    title: 'Mon travail',
    tagline: 'Maquettes, front Angular/Electron et design system',
    summary:
      'Je conçois dans Figma les maquettes de trois produits de vidéoprotection, je les développe ' +
      'en Angular et Electron, et je maintiens le UI kit Angular partagé par ces produits, avec ses design tokens.',
    sections: [
      {
        heading: 'Maquettes Figma',
        items: [
          'Parcours, écrans et prototypes pour trois produits',
          'Composants Figma alignés sur le UI kit Angular',
        ],
      },
      {
        heading: 'Front Angular / Electron',
        items: ['Intégration des écrans à partir des maquettes', 'Applications de bureau Electron'],
      },
      {
        heading: 'Design system',
        items: [
          'Maintenance du UI kit Angular partagé',
          'Design tokens : couleurs, typographie, espacements',
          'Cohérence entre Figma et le code',
        ],
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
