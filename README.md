# Le salon de Léna — portfolio 3D

Portfolio de **Léna Simonin**, développeuse front-end à Lyon, présenté sous la forme d’un salon 3D interactif.
Construit avec **Angular 22**, **TypeScript** et **Three.js**.

La disposition reprend la version « Idéal » de la maquette *Mon salon en 3D* : bureau avec les deux écrans
Acer, KALLAX 5 × 5 éclairé, meuble TV IKEA blanc et TV TCL entre deux colonnes BESTÅ, canapé YULIN,
coin cosy, hamac à chat sous la fenêtre… et Hiki.

## Lancer le projet

Prérequis : Node.js 20.19+ ou 22.12+ (testé avec Node 22) et npm.

```bash
npm install
```

```bash
npm start
```

Le site est servi sur <http://localhost:4200> et se recharge à chaque modification.

## Build de production

```bash
npm run build
```

Le site statique est généré dans `dist/portfolio/browser/`. Il peut être hébergé tel quel (GitHub Pages,
Netlify, Vercel, un serveur nginx…) : aucune route côté serveur n’est nécessaire.
Pour un hébergement dans un sous-dossier (ex. GitHub Pages `https://<pseudo>.github.io/portfolio/`) :

```bash
npx ng build --base-href /portfolio/
```

Poids : environ 60 ko (gzip) au premier chargement. Three.js (≈ 135 ko gzip) n’est chargé que pour la vue 3D,
et pdf.js (≈ 110 ko gzip) seulement à l’ouverture du CV.

## À compléter avant la mise en ligne

| Quoi | Où |
| --- | --- |
| Pseudo GitHub (bouton **GitHub** et liens des dépôts) | `src/app/data/profile.ts` → `githubUsername` |
| CV public | déposer le PDF dans `public/cv/lena-simonin-cv.pdf` |
| Noms exacts des dépôts | `src/app/data/sheets.ts` → `repoUrl('…')` |
| Résumés marqués « À relire » (League of Stone, Tamagotchi, Ganeshka, Web services) | `src/app/data/sheets.ts` |
| Textes des easter eggs | `src/app/data/interactive-objects.ts` → `EASTER_EGGS` |
| Avatar (« À propos » et version 2D) | déposer l'image dans `public/me/lena-avatar.png` |
| Ce que j'aime | `src/app/data/profile.ts` → `likes` |

Tant que le pseudo GitHub ou le CV manquent, l’interface reste propre : le bouton GitHub est masqué en
production (une pastille « à configurer » apparaît seulement en développement) et la fenêtre du CV indique
qu’il sera bientôt disponible.

## Modifier le contenu sans toucher à la scène

Tout le contenu est dans des données typées (`src/app/data/`) :

- **`sheets.ts`** : les fiches (titre, accroche, résumé, sections, outils, dépôts).
  Un dépôt n’est affiché que si `isPublic: true` **et** son URL est connue : HubTV et Azura gardent
  `isPublic: false` tant que leurs dépôts sont privés, leurs fiches restent visibles.
- **`interactive-objects.ts`** : les objets cliquables du salon, leur nom au survol, l’action déclenchée
  (`sheet`, `cv`, `tv-toggle`, `pet`, `easter-egg`) et le cadrage caméra (`focus.offset`).
  Pour qu’un objet ouvre une autre fiche, il suffit de changer son `sheetId`.
- **`profile.ts`** : nom, rôle, ville, pseudo GitHub, chemin du CV.
- **`types.ts`** : les types qui garantissent la cohérence de l’ensemble.

## Ajuster le salon (photos, proportions)

Les cotes sont en mètres dans **`src/app/scene/room-layout.ts`** : pièce, bureau, écrans, KALLAX
(et la case de chaque objet-projet via `projectCells`), meuble TV, canapé, table basse, tapis, fenêtre,
caméra de la vue d’ensemble. Hiki y a aussi ses couleurs (`HIKI.coat`, `belly`, `eyes`…), ses points de
passage, ses liaisons et ses endroits de sieste (le canapé est privilégié la nuit).

## Fonctionnement

- **Vue de la pièce** (par défaut) : à hauteur d’yeux, au milieu du salon ; glisser pour regarder autour de soi.
- **Vue d’en haut** (bouton dans la barre) : diorama en trois-quarts, on peut orienter légèrement la caméra
  et zoomer un peu. Les murs côté caméra disparaissent.
- **Survol / focus clavier** : contour rose et nom de l’objet. Les easter eggs restent discrets.
- **Sélection** : la caméra se rapproche, la fiche s’ouvre à droite (en bas sur mobile) ; fermer la fiche
  (bouton, Échap ou clic à côté) ramène à la vue précédente et rend le focus à l’objet.
- **Jour / Nuit** : transition progressive des lumières. Le jour, le soleil entre par la fenêtre ; la nuit,
  la lumière vient de la lampe du bureau, des écrans, du ruban LED et du halo du meuble TV.
- **TV TCL** : un clic l’allume ou l’éteint. Ouvrir HubTV depuis l’écran gauche l’illumine brièvement
  en « mode TV » ; la manette près du canapé aussi.
- **Hiki** marche, s’assoit, dort. **Caresser Hiki** : maintenir le clic et frotter son dos (ou glisser le
  doigt sur mobile) ; un simple clic, un toucher ou Entrée au clavier suffit aussi. Elle s’arrête, ferme
  les yeux et remue doucement la queue ; si elle dort, elle bouge une oreille. Le geste suspend la rotation
  de la caméra jusqu’au relâchement. Ronronnement synthétisé, coupé par défaut (bouton **Son**).
- **CV** : feuille « CV — Léna Simonin » près du clavier, distincte du carnet « Mon travail ». La fenêtre
  affiche le PDF (rendu avec pdf.js, lisible aussi sur mobile, en plein écran), avec **Télécharger le PDF**.
- **Easter eggs** : guitare (survol = petit air original synthétisé si le son est activé ; un clic
  active le son), aquarium à méduses dans une colonne BESTÅ, console rétro branchée sur la TV
  (la TV lance un jeu en pixel art), console en cours de démontage sur la table basse, canard de
  débogage, gamelle (Hiki accourt), étoiles phosphorescentes visibles la nuit, tournesols, mini-veste
  violette, manette, peluche Cinnamoroll, pixel arts (méduse, Hiki, manette) au-dessus du bureau.
  Le KALLAX garde ses cases éclairées et vides pour de futures figurines.
- **Liens directs** : `#about`, `#hubtv`, `#azura`, `#league-of-stone`, `#tamagotchi`, `#ganeshka`,
  `#web-services`, `#work`, `#cv`, `#projets`.

## Accessibilité

- Chaque objet du salon a un vrai bouton HTML positionné au-dessus de lui : navigation au **Tab**,
  activation avec **Entrée**, noms lus par les lecteurs d’écran.
- Fiches dans des `<dialog>` modales : focus piégé, Échap, focus rendu à l’objet d’origine.
- **Mouvement réduit** : suit la préférence système et un bouton dédié. Caméra sans animation, Hiki reste
  sur place, animations CSS coupées.
- **Version 2D** : bouton dans la barre, et bascule automatique si WebGL est indisponible. Même contenu
  (fiches, CV, GitHub), sans 3D.
- Annonces discrètes (`aria-live`) pour le jour/nuit, la TV et les caresses.

## Structure

```
src/app/
  data/        contenu typé : fiches, objets interactifs, profil
  scene/       Three.js : cotes du salon, construction, textures, Hiki, orchestration
  core/        état global (signals) et son
  ui/          composants Angular : barre, salon 3D, fiches, CV, projets, version 2D
```

## Visuels

Tous les visuels sont originaux et dessinés en code : écrans, TV, affiches, maquettes Figma **fictives**
de « Mon travail » (aucun vrai produit n’est reproduit), illustrations des fiches.
