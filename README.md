# Ma rue, mon respect

Site de la campagne de sensibilisation au harcèlement de rue (projet d'EMC, terminale).
Compte Instagram : [@maruemonrespect](https://www.instagram.com/maruemonrespect/).

## Ouvrir le site

Double-cliquer sur `index.html`. Aucune installation n'est nécessaire : tout fonctionne hors ligne,
depuis une clé USB ou un ordinateur. Seules les polices (Google Fonts) ont besoin d'Internet ; sans
connexion, le navigateur utilise une police de remplacement.

La page d'accueil est la version retenue, « Le guide du parfait relou ». Les deux autres versions
sont conservées et accessibles depuis `versions.html` :

- `bingo/index.html` : Bingo du harcèlement de rue
- `meteo/index.html` : Météo de la rue

(`guide/index.html` redirige simplement vers la page d'accueil.)

## Site en ligne

https://elicetian.github.io/ma-rue-mon-respect/ (GitHub Pages, dépôt
https://github.com/Elicetian/ma-rue-mon-respect). Chaque `git push` sur `main` met le site à jour en
une à deux minutes.

## Autres façons de mettre en ligne (gratuit)

**Netlify Drop** (le plus simple) : aller sur https://app.netlify.com/drop et glisser-déposer le
dossier entier. Une adresse publique est créée immédiatement.

**GitHub Pages** : créer un dépôt, y envoyer ce dossier, puis dans *Settings → Pages* choisir la
branche `main` et le dossier `/ (root)`.

## Modifier les textes et les chiffres

- Chiffres, graphiques, conseils, lois, numéros utiles : `shared/data.js` (un seul endroit pour les
  trois versions). Chaque chiffre a sa source dans `docs/research/`.
- Textes du guide (leçons, relou-mètre) : `index.html` à la racine. Textes des autres versions
  (cases du bingo, bulletin météo) : dans le `index.html` de leur dossier.
- Illustrations : `shared/img/` (SVG dessinés pour le projet, libres d'utilisation).

## Sources

Voir `docs/research/stats.md` et `docs/research/lois.md`.
