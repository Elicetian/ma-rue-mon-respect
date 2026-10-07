# Brief de construction d'une version du site « Ma rue, mon respect »

## Contexte
Campagne de sensibilisation au harcèlement de rue, projet d'EMC en terminale, notée. Le prof aime
l'original et le drôle. Public : le prof et des lycéens. Compte Instagram : @maruemonrespect
(https://www.instagram.com/maruemonrespect/).

**Règle de ton, non négociable** : on rit DES harceleurs, de leurs excuses et de la banalisation.
JAMAIS des victimes. Aucune blague sur une agression sexuelle ou un viol. Le fond (chiffres, lois,
conseils) est sérieux et sourcé. L'humour est dans la forme, le concept et les titres. Le site doit
rester présentable devant une classe et des parents.

## Contraintes techniques (vérifiées, ne pas s'en écarter)
- Site statique, s'ouvre en double-clic (`file://`) ET sur GitHub Pages / Netlify. Donc : pas de
  module ES (`type="module"` est bloqué en `file://`), pas de `fetch`, pas d'outil de build, pas de
  dépendance npm. Liens entre pages avec `index.html` explicite (ex. `../index.html`).
- Un seul fichier `index.html` par version, dans son dossier (`guide/`, `bingo/` ou `meteo/`),
  avec son CSS et son JS inline (dans `<style>` et `<script>`), ou dans `style.css` / `app.js` à
  côté. Charger dans cet ordre, en chemin relatif :
  ```html
  <link rel="stylesheet" href="../shared/base.css">
  ...
  <script src="../shared/charts.js"></script>
  <script src="../shared/data.js"></script>
  <script src="../shared/render.js"></script>
  <script> /* code de la version */ </script>
  ```
- Polices : `<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;700&family=Nunito:wght@400;700;800&display=swap" rel="stylesheet">`
  (repli système prévu dans base.css). Possible d'ajouter une police Google propre à la version.
- base.css fournit les jetons `--bg --bg-2 --ink --ink-2 --muted --accent --accent-ink --accent-2
  --warn --card --line --shadow --radius --font --font-display`, un mode sombre automatique, et les
  composants `.nav .wrap .btn .btn.ghost .card .grid .grid-2 .grid-3 .stat-big .chart .law .action
  .contacts .contact footer .reveal .section-title .tag .lead .source`. Surcharger les jetons dans
  `:root` de la version pour lui donner sa palette (ET redéfinir sous
  `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {...} }`).
- Illustrations disponibles dans `../shared/img/` : `rue.svg` (rue de nuit, personne suivie,
  16:9), `temoin.svg` (témoin qui s'interpose, 16:9), `megaphone.svg`, `balance.svg`, `bingo.svg`,
  `meteo.svg` (carrés). Les utiliser en `<img>`. On peut ajouter d'autres SVG dessinés à la main
  dans le dossier de la version (jamais de texte dans un SVG : le rendu est flou ; mettre les
  libellés en HTML). Pas d'images téléchargées d'Internet (licence et hors ligne).
- Pas de texte SVG, pas de `-webkit-font-smoothing: antialiased`, tailles de police en px entiers
  ou en rem qui tombent sur des px entiers.
- Mobile : tout doit tenir à 375 px de large, gouttière 16 px, pas de défilement horizontal.
- Échapper tout texte injecté dynamiquement avec `Charts.esc()`.

## API du contenu commun (`shared/data.js` → `window.MRMR`)
- `MRMR.campagne` : `{ nom, instagram, instagramUrl, annee }`
- `MRMR.stats[id]` : `{ value, unit ('%' | 'millions' | ''), label, source }`.
  Ids : `s86` (86 % rue, vie), `s81` (81 % rue ou transports, vie), `s61` (61 % des moins de 25
  ans sur 12 mois), `s63` (63 % lycéennes/étudiantes), `s74` (74 % lycéennes IdF), `s3m` (3
  millions de femmes/an), `s86banal` (86 % des sifflements jugés « sans gravité »), `s88inconnu`,
  `s3900` (infractions 2025), `s90` (victimes femmes), `s97` (mis en cause hommes), `s36` (victimes
  mineures des délits), `s20` (victimes aidées par un témoin), `s86temoins` (ne savent pas réagir),
  `s100` (HCE transports, non représentatif), `s38` (agressions sexuelles transports vs rue),
  `s30fra` (France 30 % vs UE 21 %), `sGeneve15` (75,9 % à Genève, Suisse).
- `MRMR.series[id]` : `{ title, unit, source, items: [{ label, value, alt? }] }`.
  Ids : `age`, `actes`, `virage`, `lieux`, `outrage`, `temoins`, `evitement`, `europe`, `geneve`.
- `MRMR.actions.victimes[]`, `.temoins[]` (les 5D), `.tous[]` : `{ icon, titre, texte (HTML) }`
- `MRMR.contacts[]` : `{ numero, nom, quand }` ; `MRMR.dispositifs[]` : `{ nom, texte, url }`
- `MRMR.lois[id]` : `{ nom, article, nature, definition (HTML), exemples[], peine, peineAggravee,
  aggravants[], source }`. Ids dans l'ordre : `outrage`, `harcelement`, `agression`, `viol`,
  `exhibition`, `images`, `injure`, `temoin`.
- `MRMR.loiNote` : phrase à afficher sous la section loi.

## Fonctions de rendu (`shared/render.js` → `window.Render`, `shared/charts.js` → `window.Charts`)
- `Render.bigStats(container, ['s86', 's61'])` : cartes « gros chiffre » animées.
- `Render.charts(container, ['age', 'actes'])` : cartes graphiques en barres animées.
- `Render.actions(container, 'victimes' | 'temoins' | 'tous')`
- `Render.contacts(container)` : à mettre dans un `<div class="contacts">`.
- `Render.lois(container, ids?)` : fiches de loi complètes.
- `Render.sources(container)` : liste numérotée de toutes les sources (pour le pied de page).
- `Render.el(html)` : crée un élément depuis une chaîne.
- `Charts.bars(el, series)`, `Charts.counter(el, value, unit)`, `Charts.fmt(value, unit)`,
  `Charts.esc(str)`, `Charts.onReveal(el, fn)`, `Charts.revealAll()` (à appeler en fin de script
  pour animer les `.reveal` ajoutés à la main).

## Sections obligatoires (dans cet ordre, avec une nav collante qui pointe dessus)
1. **Accueil / concept** : le hook de la version, le nom « Ma rue, mon respect », une phrase qui
   explique le second degré (une ligne, pas un disclaimer lourd), bouton vers les chiffres.
2. **Les chiffres** (`id="chiffres"`) : au moins 3 gros chiffres dont `s86`, et au moins 4
   graphiques dont `age` et `actes`. Montrer aussi `s86banal` (banalisation) et le contraste
   `s3900` vs `s3m`. Un encart sur les chiffres genevois (`geneve`) présenté honnêtement comme
   comparaison suisse : « À Genève aussi… ».
3. **Agir** (`id="agir"`) : trois blocs, « Si ça t'arrive » (victimes), « Si tu es témoin »
   (les 5D, avec `temoin.svg`), « Pour tout le monde » (ne pas banaliser). Puis les contacts et
   les dispositifs.
4. **La loi** (`id="loi"`) : intro courte dans le ton de la version, puis `Render.lois`, puis
   `MRMR.loiNote` en petit. Idéalement un petit « quiz » ou tableau rapide « ça coûte combien ? »
   en plus des fiches, propre à la version.
5. **Instagram** (`id="insta"`) : appel à suivre @maruemonrespect, avec 2-3 idées de posts tirées
   du concept de la version (texte seulement).
6. **Pied de page** : « Campagne réalisée par des élèves de terminale, EMC, 2026 », lien
   `../index.html` « voir les autres versions », liste des sources via `Render.sources`.

## Vérification obligatoire avant de rendre
1. Ouvrir la page en `file://` avec Chrome headless et capturer deux captures :
   ```bash
   S=/tmp/claude-1000/-home-tpot-code-Alexandre/718f2721-c7d1-4ceb-9065-9174a2853927/scratchpad
   google-chrome --headless=new --disable-gpu --no-sandbox --hide-scrollbars --window-size=1280,4000 --screenshot=$S/<version>-desktop.png "file:///home/tpot/code/Alexandre/<version>/index.html"
   google-chrome --headless=new --disable-gpu --no-sandbox --hide-scrollbars --window-size=375,6000 --screenshot=$S/<version>-mobile.png "file:///home/tpot/code/Alexandre/<version>/index.html"
   ```
   Regarder les deux images (outil Read) et corriger ce qui est cassé. Les animations au
   défilement ne se déclenchent pas en capture : pour la vérification, forcer `.reveal { opacity: 1 }`
   via un paramètre, ou vérifier que les éléments existent dans le DOM.
2. Vérifier l'absence d'erreur JS : ajouter temporairement
   `window.onerror = function (m) { document.title = 'ERR ' + m; };` en tête, lancer
   `google-chrome --headless=new --disable-gpu --no-sandbox --dump-dom <url> | grep -o '<title>[^<]*'`,
   puis retirer la ligne.
3. Vérifier qu'aucun chiffre écrit « en dur » dans le HTML ne contredit `shared/data.js` : tout
   chiffre cité dans un texte doit exister dans `docs/research/stats.md`. Ne pas inventer de
   chiffre. Toute peine citée doit correspondre à `MRMR.lois`.
4. Pas de défilement horizontal à 375 px (`document.documentElement.scrollWidth <= 375`).
