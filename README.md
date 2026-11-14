# Le salon de Léna — portfolio 3D
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/bdea5cf8-8bd5-4575-9fa2-296d215f05e8" />
<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/f33f9350-8483-4f9c-a28a-ff1847ea7252" />



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
La pièce pré-calculée (`public/room/`, ≈ 4 Mo : géométrie Draco 3,3 Mo + deux atlas WebP de 350 ko)
est chargée avec la vue 3D, pendant le message « Le salon s'installe… ».

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

- **Portfolio 2D (par défaut)** : accueil (portrait, présentation), réalisations mises en avant (UI kit Angular
  partagé, HubTV, Azura), « Au quotidien » (Icare Portal, Moniteur Virtuel), Expérimentations, Archives.
  La scène 3D n’est chargée qu’au clic sur **Visiter le salon en 3D**.
- **Dans le salon** : trois repères au départ (Mon travail, Projets perso, CV ; épinglés au bord s’ils sont
  hors champ) et une barre **Entrée · Bureau · KALLAX · TV** pour s’y rendre d’un clic (`PLACES` dans
  `room-layout.ts`).
- **Captures des fiches** : champ `cover` dans `sheets.ts` (fichier dans `public/projects/`). Sans capture,
  l’illustration dessinée reste affichée.

- **Vue de la pièce** (par défaut) : à la première personne. On démarre près de l’entrée, tourné vers
  le salon, à hauteur d’yeux.
  - Ordinateur : **ZQSD**, **WASD** ou les **flèches** pour avancer, reculer et se déplacer de côté ;
    **cliquer-glisser** pour regarder autour de soi.
  - Mobile : **joystick** en bas à gauche pour marcher ; **glisser** sur la scène pour regarder
    (les deux en même temps avec deux doigts).
  - Collisions avec les murs et les gros meubles (bureau, canapé, KALLAX, chaise gaming, table basse,
    meuble TV et BESTÅ…) : on glisse le long d’un meuble sans le traverser ni rester coincé.
    Les obstacles sont déduits des cotes, dans `colliders()` de `room-layout.ts`.
  - Léger balancement de marche, coupé en mouvement réduit. Allure, hauteur des yeux et rayon du corps
    se règlent dans `INSIDE` (`room-layout.ts`).
  - Une aide discrète aux commandes s’affiche au premier lancement ; le bouton **?** la rouvre.
- **Vue d’ensemble** (bouton dans la barre) : diorama en trois-quarts, on peut orienter légèrement la caméra
  et zoomer un peu. Les murs côté caméra disparaissent. Au retour dans la pièce, on reprend sa dernière
  position.
- **Survol / focus clavier** : contour rose et nom de l’objet. Les easter eggs restent discrets.
- **Sélection** : un clic (ou un toucher) ouvre la fiche ; un glissement pour regarder autour ne compte pas
  comme un clic. La caméra se rapproche, la fiche s’ouvre à droite (en bas sur mobile) ; la fermer
  (bouton, Échap ou clic à côté) rend exactement la position et l’orientation d’avant, et le focus à l’objet.
- **Jour / Nuit** : transition progressive des lumières. Le jour, le soleil entre par la fenêtre ; la nuit,
  la lumière vient de la lampe du bureau, des écrans, du ruban LED et du halo du meuble TV.
- **TV TCL** : un clic l’allume ou l’éteint. Ouvrir HubTV depuis l’écran gauche l’illumine brièvement
  en « mode TV » ; la manette près du canapé aussi.
- **Hiki** marche, s’assoit, dort. **Caresser Hiki** : maintenir le clic et frotter son dos (ou glisser le
  doigt sur mobile) ; un simple clic, un toucher ou Entrée au clavier suffit aussi. Elle s’arrête, ferme
  les yeux et remue doucement la queue ; si elle dort, elle bouge une oreille. Pendant la caresse, la caméra
  reste immobile (ni rotation ni marche) jusqu’au relâchement. Ronronnement synthétisé, coupé par défaut (bouton **Son**).
- **CV** : feuille « CV — Léna Simonin » près du clavier, distincte du carnet « Mon travail ». La fenêtre
  affiche le PDF (rendu avec pdf.js, lisible aussi sur mobile, en plein écran), avec **Télécharger le PDF**.
- **Lampe à lave** (bureau) : allumée automatiquement le soir ; un clic l’allume ou l’éteint
  (le choix vaut jusqu’au prochain passage jour / nuit).
- **Easter eggs** : guitare (petit air original synthétisé ; un clic active le son), figurine Evangelion
  dans le KALLAX, aquarium à méduses dans la colonne BESTÅ à droite de la TV, consoles GameCube, Nintendo 64, PSP
  et 3DS dans celle de gauche, console rétro branchée sur la TV (jeu en pixel art), console en
  cours de démontage et manette sur la table basse, canard de débogage, gamelle (Hiki accourt),
  étoiles phosphorescentes visibles la nuit, tournesols et peluche Cinnamoroll sur le rebord derrière
  le canapé, mini-veste violette, pixel arts au-dessus du bureau, affiches minimalistes au-dessus de la TV.
  Les autres cases du KALLAX restent éclairées et vides pour de futures figurines.
- **Liens directs** : `#about`, `#hubtv`, `#azura`, `#league-of-stone`, `#tamagotchi`, `#ganeshka`,
  `#web-services`, `#work`, `#cv`, `#projets`.

## Lumière pré-calculée (Blender)

Comme les scènes 3D « baked » (pièce modélisée, éclairage calculé à l'avance), la lumière du salon est
pré-calculée dans **Blender (Cycles)** puis chargée par le site :

- `public/room/room.glb` : la pièce reconstruite dans Blender (arêtes biseautées) avec un second jeu de
  coordonnées de texture pour l'atlas de lumière (compression Draco) ;
- `public/room/light-day.webp` et `light-night.webp` : l'éclairage du jour (soleil par la fenêtre, ciel par
  les vitres) et du soir (lampes, LED, écrans), avec rebonds, ombres douces et occlusion. Le site passe de
  l'un à l'autre en douceur au changement jour / nuit.

Les objets pré-calculés passent en matériau sans éclairage temps réel (couleur × lumière de l'atlas) :
rendu doux, et beaucoup moins de calcul pour le téléphone (plus d'ombres temps réel ni d'occlusion
ambiante). Les objets lumineux, transparents ou animés par leur matériau (écrans, TV, LED, vitres, lampe
à lave, aquarium, étoiles) et Hiki gardent leur rendu temps réel. Si les fichiers manquent, la pièce
s'affiche comme avant, en temps réel.

**Après une modification de la pièce** (cotes, objets, couleurs), il faut refaire le pré-calcul ; sinon les
objets modifiés gardent leur rendu temps réel (un avertissement s'affiche dans la console en développement).

Prérequis : Python 3.13 avec le module de Blender (`pip install bpy pillow numpy`), Playwright avec
Chromium (`npx playwright install chromium`), et sous Linux sans écran les bibliothèques EGL
(`libegl1 libegl-mesa0`) pour le débruitage.

```bash
npm start
```

Puis, dans un autre terminal :

```bash
npm run bake
```

`npm run bake` exporte la description de la pièce depuis le serveur de développement
(`tools/bake/export.cjs` → `tools/bake/room.json`), puis lance `tools/bake/bake.py` (environ 1 h sur un
processeur 4 cœurs). Options utiles : `python tools/bake/bake.py --preview` (rapide, pour régler la
lumière), `--only day`, `--save-blend` (ouvre ensuite `tools/bake/room.blend` dans Blender).
Les intensités se règlent dans `LIGHT`, en haut de `bake.py`.

## Modèles 3D libres

Quelques objets du salon viennent de [Poly Haven](https://polyhaven.com) (licence CC0) : la manette NES,
le canard en caoutchouc et le cadre photo des tablettes d'angle. Ils sont allégés par
`tools/assets/prepare.py` et rangés dans `public/models/` (sources et auteurs : `public/models/CREDITS.md`).
Si un fichier manque, la version dessinée en code s'affiche à la place.

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

Tous les visuels sont originaux et dessinés en code (la lumière est calculée dans Blender) : écrans, TV, affiches, maquettes Figma **fictives**
de « Mon travail » (aucun vrai produit n’est reproduit), illustrations des fiches.
