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
    tagline: 'Ingénieure logiciel à Lyon',
    summary:
      'Ingénieure logiciel chez Hirsch Secure, je conçois des solutions de vidéosurveillance cloud ' +
      "de bout en bout : back-end en PHP et C#, interfaces en Angular et Electron, dessinées d'abord dans Figma. " +
      'Je maintiens aussi le UI kit Angular partagé par plusieurs produits de la holding.',
    sections: [
      {
        heading: 'Ce que je fais',
        items: [
          'Maquettes Figma de plusieurs produits de vidéoprotection',
          'Back-end PHP et C#, interfaces Angular et applications de bureau Electron',
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
    cover: {
      src: 'projects/hubtv.webp',
      alt: 'Trois écrans de la télécommande Android HubTV : Salon, Son et PC',
    },
    gallery: [
      { src: 'projects/hubtv-salon.webp', alt: 'Écran Salon : mode actuel, Jeux sur TV ou Bureau, profil de jeu', caption: 'Salon' },
      { src: 'projects/hubtv-son.webp', alt: 'Écran Son : volume du PC avec boutons −5, Muet et +5', caption: 'Son' },
      { src: 'projects/hubtv-pc.webp', alt: 'Écran PC : état du PC et allumage à distance par le réseau', caption: 'PC' },
    ],
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
    cover: {
      src: 'projects/azura.webp',
      alt: 'Maquette de l’application Azura : humeur du jour, courbe de la semaine, routines et journal, en mode hors ligne',
    },
    objectId: 'kallax-azura',
  },
  {
    id: 'league-of-stone',
    kind: 'archive',
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
    tagline: 'Tama·Sub : un requin-baleine virtuel à soigner, dans une console ocean tech',
    summary:
      "Un mini-jeu en JavaScript inspiré des Tamagotchi : on prend soin d'un petit requin-baleine virtuel en " +
      'répondant à ses besoins. Réalisé en trois heures dans le cadre d’un exercice, pour recréer ' +
      'en JavaScript un Tamagotchi développé d’abord en Python.',
    sections: [
      {
        heading: 'Comment jouer',
        items: [
          'Nourrir le requin-baleine, lui donner à boire, le faire dormir et jouer avec lui',
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
          'Une console ocean tech : coque bleu abysse au contour néon cyan, écran façon sonar avec ligne de balayage, boutons lumineux et bulles en fond',
          'Sur téléphone comme sur ordinateur, un sélecteur pour jouer dans la console ou en plein écran',
        ],
      },
      {
        heading: 'Émotions',
        items: [
          'Le requin-baleine change d’expression selon ses jauges : content, faim, soif, fatigué, ennui, malade et mort',
          'Sprites dessinés en SVG',
        ],
      },
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'SVG', 'Bulma'],
    repos: [
      { label: 'Version JavaScript', url: repoUrl('tamagotchi_js'), isPublic: true },
      { label: 'Version Python', url: repoUrl('Tamagotchi_PY'), isPublic: true },
    ],
    demo: 'https://nihirii.github.io/tamagotchi_js/',
    visual: 'pet',
    cover: {
      src: 'projects/tamagotchi.webp',
      alt: 'Tama·Sub sur téléphone : accueil, mode console et plein écran avec le requin-baleine Bubulle',
    },
    gallery: [
      { src: 'projects/tamagotchi-ecrans.webp', alt: 'Mode plein écran sur ordinateur : Bubulle dort, ses jauges au-dessus', caption: 'Plein écran sur ordinateur' },
      { src: 'projects/tamagotchi-console.webp', alt: 'Mode console : le requin-baleine est content', caption: 'Mode console' },
      { src: 'projects/tamagotchi-mobile.webp', alt: 'Plein écran sur téléphone : le requin-baleine a faim', caption: 'Plein écran sur téléphone' },
      { src: 'projects/tamagotchi-fin.webp', alt: 'Écran de fin de partie', caption: 'Écran de fin' },
      { src: 'projects/tamagotchi-emotions.webp', alt: 'Les 7 émotions du requin-baleine', caption: 'Les 7 émotions' },
    ],
    objectId: 'kallax-console',
  },
  {
    id: 'boba-panic',
    kind: 'project',
    title: 'Boba Panic',
    tagline: 'La mini-usine à bubble tea qui déraille, jouable sur ordinateur et téléphone',
    summary:
      'Un client passe commande, le gobelet avance sur le tapis roulant et on le prépare poste par poste : ' +
      'base, sirop, toppings, opercule, puis service. Les recettes peuvent être délicieuses… ou franchement ' +
      "dégueu (chocolat-cornichon, lait fraise aux perles wasabi, thé noir à l'ail).",
    sections: [
      {
        heading: 'Modes de jeu',
        items: [
          'Tranquille : huit commandes sans chrono, avec un retour immédiat et la possibilité de corriger',
          'Rush : la file s’impatiente, le verdict tombe quand le client reçoit son verre',
          'Labo : on mélange tout librement, le client goûte, donne une note et réagit à la recette',
        ],
      },
      {
        heading: 'Secrets',
        items: [
          '22 secrets cachés dans l’usine : recettes secrètes, réactions de clients et interactions avec le décor',
          'Un carnet garde la trace des découvertes ; progression et records restent dans le navigateur (localStorage)',
        ],
      },
      {
        heading: 'Direction artistique néon / nuit',
        items: [
          'Un boba shop ouvert tard le soir : fond bleu nuit, enseignes néon roses et cyan, grille rétro sous le menu',
          'Une couleur néon par machine et un tapis à LED',
        ],
      },
      {
        heading: 'Technique',
        items: [
          'Un seul fichier index.html autonome : HTML, CSS et JavaScript, sans dépendance',
          'Sons générés avec la Web Audio API',
        ],
      },
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Web Audio API'],
    repos: [{ label: 'Voir sur GitHub', url: repoUrl('boba-panic'), isPublic: true }],
    demo: 'https://nihirii.github.io/boba-panic/',
    visual: 'pet',
    cover: {
      src: 'projects/boba-panic.webp',
      alt: 'Menu de Boba Panic : enseigne néon au-dessus de trois gobelets et des modes Tranquille, Rush et Labo',
    },
    gallery: [
      { src: 'projects/boba-panic-usine.webp', alt: 'L’usine : trémies à perles, gobelet lumineux sur le tapis et ticket de commande', caption: 'L’usine' },
      { src: 'projects/boba-panic-resultat.webp', alt: 'Écran de résultat : le client compare le ticket et le verre', caption: 'Le verdict' },
      { src: 'projects/boba-panic-mobile.webp', alt: 'Boba Panic sur téléphone', caption: 'Sur téléphone' },
    ],
    // L'objet 3D du KALLAX pour Boba Panic n'est pas encore dans ce dépôt.
    objectId: null,
  },
  {
    id: 'ganeshka',
    kind: 'archive',
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
    kind: 'archive',
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
      'Icare Portal fait partie des produits de vidéoprotection sur lesquels je travaille : ' +
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
      'Moniteur Virtuel fait partie des produits de vidéoprotection sur lesquels je travaille : ' +
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
    id: 'dojo',
    kind: 'project',
    title: 'Ma-Aï Dôjô',
    tagline: 'Le site du club de Ninjutsu Bujinkan Ma-Aï Dôjô, à Lyon : vitrine et espace adhérent',
    summary:
      'Le site du Bujinkan Ma-Aï Dôjô, un club de Ninjutsu à Lyon : horaires, tarifs, galerie et contact, ' +
      'et un espace adhérent avec le programme technique, le suivi de progression et des documents réservés aux membres.',
    sections: [
      {
        heading: 'Espace adhérent',
        items: [
          'Programme technique réservé aux adhérents, présenté comme une carte des techniques',
          'Suivi du parcours : fiches « lues » et « travaillées », chaque élève ne voit que sa progression',
          'Documents privés, lisibles seulement par les adhérents dont l’accès est actif',
        ],
      },
      {
        heading: 'Choix techniques',
        items: [
          'HTML, CSS et JavaScript sans framework, publié sur GitHub Pages',
          'Supabase pour la connexion, la progression et le stockage, avec des règles d’accès en base',
        ],
      },
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    repos: [{ label: 'Voir sur GitHub', url: repoUrl('dojo'), isPublic: true }],
    demo: 'https://nihirii.github.io/dojo/',
    visual: 'swatches',
    cover: { src: 'projects/dojo.webp', alt: 'Accueil du site du Ma-Aï Dôjô' },
    objectId: null,
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
    title: 'Routine & Care',
    tagline: 'Des routines de soin et de maison qui s’adaptent à l’énergie du jour',
    summary:
      'Une application mobile pour organiser ses routines du quotidien, des soins du visage aux tâches ' +
      'de la maison, sans pression : la journée s’ajuste à l’énergie du moment et ce qui n’est pas fait attendra.',
    sections: [
      {
        heading: 'Le problème',
        items: ['Tenir ses routines au quotidien sans culpabiliser les jours où l’énergie manque'],
      },
      {
        heading: 'Fonctionnalités',
        items: [
          'Mode « Énergie basse » : un jour sans, la journée s’allège',
          'Routines en pause, à reprendre là où on les a laissées',
          'Progression du jour et temps restant estimé',
          'Routines favorites et routines du jour classées par moment : matin, soir…',
          'Six espaces : Accueil, Soins, Maison, Planning, Produits et Analyses',
        ],
      },
      {
        heading: 'Ton et UI',
        items: [
          'Des messages doux (« On commence doucement ? », « Rien n’est obligatoire »)',
          'Une interface sombre aux couleurs prune et lavande, avec une mascotte lapin',
        ],
      },
      { heading: 'Technique', items: ['Application développée en Flutter (Dart)'] },
    ],
    stack: ['Flutter', 'Dart', 'Android'],
    // Dépôt privé : le lien reste masqué tant que `isPublic` vaut false.
    repos: [{ label: 'Dépôt routine-care', url: repoUrl('routine-care'), isPublic: false }],
    visual: 'pet',
    cover: {
      src: 'projects/routine-care.webp',
      alt: 'Routine & Care : l’écran d’accueil avec le mode Énergie basse, une routine en pause et la progression du jour',
    },
    gallery: [
      { src: 'projects/routine-care-accueil.webp', alt: 'Écran d’accueil de Routine & Care sur téléphone', caption: 'Accueil' },
    ],
    objectId: 'kallax-routine',
  },
  {
    id: 'iut-blagnac',
    kind: 'archive',
    title: 'Créateur de portfolios gamifié',
    tagline: 'Projet d’équipe à l’IUT de Blagnac (2021–2022)',
    summary:
      'Pour le passage du DUT au BUT, un site qui permet aux élèves de concevoir leur portfolio au fur et ' +
      'à mesure de leurs projets scolaires et de valider leurs compétences sous forme gamifiée à la fin de chaque UE.',
    sections: [
      {
        heading: 'Contexte',
        items: ['Projet réalisé à l’IUT de Blagnac en équipe de 6', 'Mon rôle : développeuse web'],
      },
    ],
    stack: ['React', 'Sass'],
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
    tagline: 'Figma → token → composant Angular, pour plusieurs produits de vidéoprotection',
    summary:
      'Je conçois dans Figma les maquettes de plusieurs produits de vidéoprotection, je les développe ' +
      'en Angular et Electron, et je maintiens le UI kit Angular partagé par ces produits, avec ses design tokens.',
    sections: [
      {
        heading: 'Le problème',
        items: [
          'Plusieurs produits de vidéoprotection qui partagent les mêmes composants, de Figma au code',
        ],
      },
      {
        heading: 'Mon rôle',
        items: [
          'Maquettes Figma : parcours, écrans et prototypes pour les différents produits',
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
        items: ['Un même UI kit Angular pour tous les produits, cohérent entre Figma et le code'],
      },
    ],
    stack: ['Figma', 'Angular', 'Electron', 'TypeScript', 'SCSS', 'Design tokens'],
    repos: [],
    visual: 'work',
    cover: {
      src: 'projects/ui-kit.webp',
      alt: 'Du composant Figma au token puis au composant Angular, jusqu’au mur vidéo d’un produit de vidéoprotection',
    },
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
