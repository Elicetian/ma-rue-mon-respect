# Spec — Site « Ma rue, mon respect » (campagne EMC, harcèlement de rue)

Date : 2026-10-07. Statut : validé oralement (« fais les trois et on choisira sur pièce »).

## Intention

Campagne de sensibilisation au harcèlement de rue menée par un groupe de terminale en EMC,
notée au 1er trimestre. Deux supports : Instagram (@maruemonrespect, déjà créé) et un site web.
Le prof aime l'original et le drôle : la forme est décalée, le fond est sérieux et sourcé.
Règle du ton : on rit **des harceleurs et de la banalisation**, jamais des victimes.

Trois concepts sont construits en parallèle pour choisir « sur pièce » :
1. **Le guide du parfait relou** — faux mode d'emploi ironique, chaque « technique » est démontée
   par les chiffres, le ressenti des victimes et la loi.
2. **Bingo du harcèlement de rue** — grille interactive des phrases entendues dans la rue ; cocher
   fait apparaître chiffres et loi ; un « bingo » déclenche un message qui rappelle que ce n'est pas
   un jeu.
3. **Météo de la rue** — faux bulletin météo (« risque de sifflements : 86 % ») qui sert de fil
   rouge vers les chiffres, les conseils et la loi.

## Contenu commun (identique dans les trois versions)

- **Chiffres** : 86 % (Ifop 2018), 75,9 % des 15-24 ans et 61,7 % des 25-34 ans sur 5 ans, plus
  6 à 8 chiffres sourcés (docs/research/stats.md). Chaque chiffre porte sa source.
- **Agir** : victimes (en parler, ne pas renoncer à sortir, numéros utiles) ; témoins (méthode des
  5D) ; tout le monde (ne pas banaliser, répondre aux « c'est juste un compliment »).
- **La loi** : outrage sexiste et sexuel, harcèlement sexuel, agression sexuelle, viol, exhibition,
  captation d'images, injure sexiste, avec article, définition simple, exemples et peines
  (docs/research/lois.md).
- Lien Instagram @maruemonrespect, crédits, sources.

## Architecture

Site statique, zéro outil de build, doit s'ouvrir en double-clic (`file://`) et se déployer tel
quel sur GitHub Pages ou Netlify. Donc : scripts classiques (pas de modules ES), polices avec
repli système, images en SVG locaux.

```
index.html            sélecteur des trois versions (3 cartes) — sera remplacé par la version retenue
guide/index.html      concept 1
bingo/index.html      concept 2
meteo/index.html      concept 3
shared/base.css       tokens de couleur (clair/sombre), reset, composants communs
shared/data.js        window.MRMR = { stats, series, actions, lois, contacts } — contenu sourcé
shared/charts.js      graphiques en barres en HTML (texte hors SVG), compteurs animés
shared/render.js      rendu commun des sections « Chiffres », « Agir », « Loi » depuis data.js
shared/img/*.svg      illustrations maison (rue, témoin, mégaphone, balance)
docs/research/        stats.md, lois.md (sources)
README.md             ouvrir en local, mettre en ligne, modifier les textes
```

Chaque version a son propre HTML, son propre CSS de thème et son propre JS d'interaction ; les
trois consomment `shared/data.js` via `shared/render.js` pour ne maintenir les chiffres et les lois
qu'à un seul endroit. Les sections communes sont rendues dans des conteneurs `data-section="..."`.

## Composants partagés

- `MRMR.stats[]` : `{ id, value, unit, label, source: { org, name, year, url } }`
- `MRMR.series[]` : `{ id, title, unit, source, items: [{ label, value }] }`
- `MRMR.lois[]` : `{ id, nom, article, nature, definition, exemples[], peine, peineAggravee,
  aggravants[], source }`
- `MRMR.actions` : `{ victimes[], temoins[], tous[] }` (titre + texte + icône)
- `MRMR.contacts[]` : `{ numero, nom, quand }`
- `Charts.bars(el, series)`, `Charts.counter(el, value)` ; animation à l'apparition
  (IntersectionObserver) ; tout texte en HTML, barres en `div`.

## Interaction par version

- Guide : chapitres « Leçon n° » avec bouton « Et en vrai ? » qui retourne la carte (chiffre +
  ressenti + article de loi). Un « relou-mètre » cumulatif à la fin.
- Bingo : grille 4×4 de phrases ; cocher révèle une info ; ligne complète → bandeau « Bingo. Et ce
  n'est pas un jeu. » avec le 86 % ; bouton « réinitialiser » ; grille exportable en capture pour
  Instagram (mise en page carrée).
- Météo : bulletin du jour avec « indices » par lieu (rue, transports, bar, en ligne) tirés des
  chiffres ; « alertes » cliquables ; prévisions « demain » = les actions à mener.

## Hors périmètre

Pas de back-end, pas de formulaire, pas de collecte de données, pas de tracking.

## Vérification

Ouvrir chaque page en `file://` et via un serveur local ; vérifier affichage mobile (375 px) ;
vérifier que chaque chiffre affiché existe dans docs/research/stats.md avec sa source ; vérifier
que chaque peine affichée correspond à docs/research/lois.md.
