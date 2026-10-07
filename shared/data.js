/* Contenu commun aux trois versions du site « Ma rue, mon respect ».
   Chaque chiffre et chaque peine vient de docs/research/stats.md ou docs/research/lois.md.
   État du droit vérifié au 7 octobre 2026. */
window.MRMR = {
  campagne: {
    nom: 'Ma rue, mon respect',
    instagram: 'maruemonrespect',
    instagramUrl: 'https://www.instagram.com/maruemonrespect/',
    annee: 2026
  },

  /* ---------- CHIFFRES CLÉS (gros nombres) ---------- */
  stats: {
    "s86": {"value": 86, "unit": "%", "label": "des femmes en France ont subi au moins une fois dans leur vie une atteinte ou une agression sexuelle dans la rue.", "source": {"org": "Ifop pour la Fondation Jean-Jaurès et la FEPS", "name": "Observatoire européen du harcèlement de rue, 6 025 femmes dans 6 pays", "year": 2018, "url": "https://www.jean-jaures.org/publication/les-femmes-face-aux-violences-sexuelles-et-au-harcelement-dans-la-rue/"}},
    "s81": {"value": 81, "unit": "%", "label": "des femmes de 15 ans et plus ont déjà été confrontées à une atteinte ou agression sexuelle dans la rue ou les transports.", "source": {"org": "Ifop pour la Fondation Jean-Jaurès", "name": "Les Françaises et le harcèlement dans les lieux publics, 2 008 femmes", "year": 2018, "url": "https://www.ifop.com/wp-content/uploads/2018/05/harcelement_public_resultats_ifop.pdf"}},
    "s61": {"value": 61, "unit": "%", "label": "des femmes de moins de 25 ans ont subi au moins une atteinte dans un lieu public au cours des 12 derniers mois.", "source": {"org": "Ifop pour la Fondation Jean-Jaurès", "name": "Les Françaises et le harcèlement dans les lieux publics, 2 008 femmes", "year": 2018, "url": "https://www.ifop.com/wp-content/uploads/2018/05/harcelement_public_resultats_ifop.pdf"}},
    "s63": {"value": 63, "unit": "%", "label": "des lycéennes et étudiantes ont été victimes dans les lieux publics au cours des 12 derniers mois.", "source": {"org": "Ifop pour la Fondation Jean-Jaurès", "name": "Les Françaises et le harcèlement dans les lieux publics, 2 008 femmes", "year": 2018, "url": "https://www.ifop.com/wp-content/uploads/2018/05/harcelement_public_resultats_ifop.pdf"}},
    "s74": {"value": 74, "unit": "%", "label": "des lycéennes d'Île-de-France déclarent subir des violences sexistes et sexuelles dans leur quotidien (56 % des lycéens).", "source": {"org": "OpinionWay pour le Centre Hubertine Auclert", "name": "sondage auprès des lycéen·nes d'Île-de-France", "year": 2021, "url": "https://www.centre-hubertine-auclert.fr/sites/default/files/medias/CP%20Opinionway.pdf"}},
    "s3m": {"value": 3, "unit": "millions", "label": "de femmes de 20 à 69 ans sont touchées chaque année en France par la « drague importune » dans l'espace public.", "source": {"org": "Ined", "name": "enquête Virage 2015, Population & Sociétés n° 550", "year": 2017, "url": "https://www.ined.fr/fr/publications/editions/population-et-societes/violences-sexistes-sexuelles-espaces-publics/"}},
    "s86banal": {"value": 86, "unit": "%", "label": "des sifflements et interpellations dans la rue sont décrits par les femmes elles-mêmes comme « sans gravité ». C'est ça, la banalisation.", "source": {"org": "Ined", "name": "enquête Virage 2015, Population & Sociétés n° 550", "year": 2017, "url": "https://www.ined.fr/fr/publications/editions/population-et-societes/violences-sexistes-sexuelles-espaces-publics/"}},
    "s88inconnu": {"value": 88, "unit": "%", "label": "des faits subis par les femmes dans l'espace public sont commis par un inconnu.", "source": {"org": "Ined", "name": "enquête Virage 2015, Population & Sociétés n° 550", "year": 2017, "url": "https://www.ined.fr/fr/publications/editions/population-et-societes/violences-sexistes-sexuelles-espaces-publics/"}},
    "s3900": {"value": 3900, "unit": "", "label": "infractions d'outrage sexiste et sexuel enregistrées par la police en 2025 (+ 17 % en un an). Contre 3 millions de femmes touchées chaque année.", "source": {"org": "Ministère de l'Intérieur (SSMSI)", "name": "Interstats Info rapide n° 63, outrages sexistes et sexuels enregistrés en 2025", "year": 2026, "url": "https://www.interieur.gouv.fr/Interstats/Actualites/Infractions-pour-outrage-sexiste-et-sexuel-enregistrees-en-2025-hausse-de-17-sur-un-an"}},
    "s90": {"value": 90, "unit": "%", "label": "des victimes d'outrage sexiste et sexuel enregistrées en 2025 sont des femmes.", "source": {"org": "Ministère de l'Intérieur (SSMSI)", "name": "Interstats Info rapide n° 63, outrages sexistes et sexuels enregistrés en 2025", "year": 2026, "url": "https://www.interieur.gouv.fr/Interstats/Actualites/Infractions-pour-outrage-sexiste-et-sexuel-enregistrees-en-2025-hausse-de-17-sur-un-an"}},
    "s97": {"value": 97, "unit": "%", "label": "des personnes mises en cause pour outrage sexiste et sexuel en 2023 sont des hommes.", "source": {"org": "Ministère de l'Intérieur (SSMSI)", "name": "communiqué du 31 juillet 2024 sur les outrages sexistes enregistrés en 2023", "year": 2024, "url": "https://www.macommune.info/une-hausse-des-infractions-pour-outrage-sexiste-et-sexuel-en-2023"}},
    "s36": {"value": 36, "unit": "%", "label": "des victimes des outrages sexistes aggravés (délits) enregistrés en 2025 avaient moins de 18 ans.", "source": {"org": "Ministère de l'Intérieur (SSMSI)", "name": "Interstats Info rapide n° 63, outrages sexistes et sexuels enregistrés en 2025", "year": 2026, "url": "https://www.interieur.gouv.fr/Interstats/Actualites/Infractions-pour-outrage-sexiste-et-sexuel-enregistrees-en-2025-hausse-de-17-sur-un-an"}},
    "s20": {"value": 20, "unit": "%", "label": "des victimes de harcèlement dans l'espace public, en France, disent avoir été aidées par un témoin.", "source": {"org": "Ipsos pour L'Oréal Paris", "name": "enquête Stand Up, 8 pays, résultats France", "year": 2019, "url": "https://www.ipsos.com/fr-fr/node/692306"}},
    "s86temoins": {"value": 86, "unit": "%", "label": "des Français disent ne pas savoir comment réagir face à une situation de harcèlement dans l'espace public.", "source": {"org": "Ipsos pour L'Oréal Paris", "name": "enquête Stand Up, 8 pays, résultats France", "year": 2019, "url": "https://www.ipsos.com/fr-fr/node/692306"}},
    "s100": {"value": 100, "unit": "%", "label": "des femmes interrogées par le Haut Conseil à l'Égalité disent avoir subi au moins une fois du harcèlement sexiste ou une agression sexuelle dans les transports (consultation citoyenne, non représentative).", "source": {"org": "Haut Conseil à l'Égalité", "name": "avis n° 2015-04-16-VIO-16, consultations citoyennes (non représentatives)", "year": 2015, "url": "https://www.haut-conseil-egalite.gouv.fr/sites/hce/files/files-spip/pdf/hcefh_avis_harcelement_2015-04-16-vio-16.pdf"}},
    "s38": {"value": 38, "unit": "%", "label": "des femmes ont déjà subi une agression sexuelle (frottement, attouchement, viol) dans les transports en commun, contre 21 % dans la rue.", "source": {"org": "Ifop pour la Fondation Jean-Jaurès", "name": "Les Françaises et le harcèlement dans les lieux publics, 2 008 femmes", "year": 2018, "url": "https://www.ifop.com/wp-content/uploads/2018/05/harcelement_public_resultats_ifop.pdf"}},
    "s30fra": {"value": 30, "unit": "%", "label": "des Françaises de 18 à 74 ans ont subi du harcèlement sexuel au cours des 12 derniers mois, contre 21 % en moyenne dans l'Union européenne.", "source": {"org": "FRA (Agence des droits fondamentaux de l'UE)", "name": "Violence against women: an EU-wide survey, 42 000 femmes", "year": 2014, "url": "https://fra.europa.eu/sites/default/files/fra-2014-vaw-survey-at-a-glance-oct14_en.pdf"}},
    "sGeneve15": {"value": 75.9, "unit": "%", "label": "des femmes de 15 à 24 ans du canton de Genève (Suisse) ont subi du harcèlement de rue au cours des 5 dernières années (61,7 % des 25-34 ans).", "source": {"org": "République et canton de Genève (Suisse)", "name": "Diagnostic local de sécurité 2023", "year": 2023, "url": "https://www.ge.ch/document/33226/telecharger"}}
  },

  /* ---------- SÉRIES POUR GRAPHIQUES ---------- */
  series: {
    "age": {"title": "Victimes d'au moins une atteinte dans un lieu public au cours des 12 derniers mois, par âge (femmes, France)", "unit": "%", "source": {"org": "Ifop pour la Fondation Jean-Jaurès", "name": "Les Françaises et le harcèlement dans les lieux publics, 2 008 femmes", "year": 2018, "url": "https://www.ifop.com/wp-content/uploads/2018/05/harcelement_public_resultats_ifop.pdf"}, "items": [{"label": "Moins de 25 ans", "value": 61}, {"label": "25-34 ans", "value": 37}, {"label": "35-49 ans", "value": 24}, {"label": "50-64 ans", "value": 17}, {"label": "65 ans et plus", "value": 8}]},
    "actes": {"title": "Ce que les femmes ont déjà subi dans la rue ou les transports, au moins une fois dans leur vie (France)", "unit": "%", "source": {"org": "Ifop pour la Fondation Jean-Jaurès", "name": "Les Françaises et le harcèlement dans les lieux publics, 2 008 femmes", "year": 2018, "url": "https://www.ifop.com/wp-content/uploads/2018/05/harcelement_public_resultats_ifop.pdf"}, "items": [{"label": "Regardée avec insistance", "value": 68}, {"label": "Sifflée", "value": 68}, {"label": "Abordée avec insistance malgré un refus", "value": 45}, {"label": "Suivie sur une partie du trajet", "value": 44}, {"label": "Contact sexuel imposé (frottement, attouchement)", "value": 41, "alt": true}, {"label": "Remarques ou insultes sexistes", "value": 34}, {"label": "Gestes grossiers à connotation sexuelle", "value": 32}, {"label": "Exhibition sexuelle", "value": 28, "alt": true}]},
    "virage": {"title": "Au moins un fait de violence dans l'espace public au cours des 12 derniers mois (France, 20-69 ans)", "unit": "%", "source": {"org": "Ined", "name": "enquête Virage 2015, Population & Sociétés n° 550", "year": 2017, "url": "https://www.ined.fr/fr/publications/editions/population-et-societes/violences-sexistes-sexuelles-espaces-publics/"}, "items": [{"label": "Femmes 20-24 ans", "value": 58}, {"label": "Hommes 20-24 ans", "value": 30, "alt": true}, {"label": "Femmes, toutes (20-69)", "value": 25}, {"label": "Hommes, tous (20-69)", "value": 14, "alt": true}, {"label": "Femmes 65-69 ans", "value": 8}, {"label": "Hommes 65-69 ans", "value": 7, "alt": true}]},
    "lieux": {"title": "Agressions sexuelles subies au cours de la vie : dans les transports (orange) et dans la rue (vert)", "unit": "%", "source": {"org": "Ifop pour la Fondation Jean-Jaurès", "name": "Les Françaises et le harcèlement dans les lieux publics, 2 008 femmes", "year": 2018, "url": "https://www.ifop.com/wp-content/uploads/2018/05/harcelement_public_resultats_ifop.pdf"}, "items": [{"label": "Au moins une agression sexuelle, transports", "value": 38}, {"label": "Au moins une, rue", "value": 21, "alt": true}, {"label": "Frottements, transports", "value": 30}, {"label": "Frottements, rue", "value": 13, "alt": true}, {"label": "Attouchements, transports", "value": 26}, {"label": "Attouchements, rue", "value": 15, "alt": true}]},
    "outrage": {"title": "Infractions d'outrage sexiste et sexuel enregistrées par la police, par an (≈ : valeur reconstituée à partir des taux d'évolution publiés)", "unit": "", "source": {"org": "Ministère de l'Intérieur (SSMSI)", "name": "Interstats Info rapide n° 63, outrages sexistes et sexuels enregistrés en 2025", "year": 2026, "url": "https://www.interieur.gouv.fr/Interstats/Actualites/Infractions-pour-outrage-sexiste-et-sexuel-enregistrees-en-2025-hausse-de-17-sur-un-an"}, "items": [{"label": "2019", "value": 930}, {"label": "2020", "value": 1400}, {"label": "2021 (≈)", "value": 2300, "alt": true}, {"label": "2022 (≈)", "value": 2800, "alt": true}, {"label": "2023", "value": 3400}, {"label": "2024 (≈)", "value": 3300, "alt": true}, {"label": "2025", "value": 3900}]},
    "temoins": {"title": "Les témoins, en France", "unit": "%", "source": {"org": "Ipsos pour L'Oréal Paris", "name": "enquête Stand Up, 8 pays, résultats France", "year": 2019, "url": "https://www.ipsos.com/fr-fr/node/692306"}, "items": [{"label": "Ne savent pas comment réagir", "value": 86}, {"label": "Trouvent risqué d'intervenir", "value": 87}, {"label": "Victimes qui ont été aidées par un témoin", "value": 20, "alt": true}]},
    "evitement": {"title": "Ce que les femmes changent pour éviter d'être harcelées (moyenne de 14 pays dont la France)", "unit": "%", "source": {"org": "Ipsos pour L'Oréal Paris", "name": "enquête Stand Up, 14 pays dont la France", "year": 2021, "url": "https://www.ipsos.com/fr-fr/node/774446"}, "items": [{"label": "Évitent certains lieux", "value": 75}, {"label": "Adaptent leurs vêtements et leur apparence", "value": 59}, {"label": "Évitent certains transports", "value": 54}]},
    "europe": {"title": "Harcèlement sexuel au cours des 12 derniers mois, femmes de 18 à 74 ans (les pays où l'on en parle plus déclarent aussi plus)", "unit": "%", "source": {"org": "FRA (Agence des droits fondamentaux de l'UE)", "name": "Violence against women: an EU-wide survey, 42 000 femmes", "year": 2014, "url": "https://fra.europa.eu/sites/default/files/fra-2014-vaw-survey-at-a-glance-oct14_en.pdf"}, "items": [{"label": "Danemark", "value": 37}, {"label": "Suède", "value": 32}, {"label": "Pays-Bas", "value": 32}, {"label": "France", "value": 30, "alt": true}, {"label": "Belgique", "value": 30}, {"label": "Royaume-Uni", "value": 25}, {"label": "Allemagne", "value": 22}, {"label": "Moyenne UE", "value": 21, "alt": true}, {"label": "Espagne", "value": 18}, {"label": "Italie", "value": 18}]},
    "geneve": {"title": "Harcèlement de rue subi au cours des 5 dernières années, canton de Genève (Suisse)", "unit": "%", "source": {"org": "République et canton de Genève (Suisse)", "name": "Diagnostic local de sécurité 2023", "year": 2023, "url": "https://www.ge.ch/document/33226/telecharger"}, "items": [{"label": "Femmes 15-24 ans", "value": 75.9}, {"label": "Femmes 25-34 ans", "value": 61.7}, {"label": "Toutes les femmes", "value": 34.6}]}
  },

  /* ---------- AGIR ---------- */
  actions: {
    victimes: [
      { icon: '🗣️', titre: 'En parler, à quelqu\'un, n\'importe qui', texte: 'Un ami, un parent, un prof, le 3919 (24h/24, gratuit, anonyme) ou le tchat d\'<a href="https://arretonslesviolences.gouv.fr/" target="_blank" rel="noopener">arretonslesviolences.gouv.fr</a> avec des policiers formés. Ce qui est arrivé n\'est pas « rien » et ce n\'est pas de votre faute.' },
      { icon: '🚶‍♀️', titre: 'Ne pas renoncer à sortir', texte: 'Changer de trajet, d\'heure ou de tenue, c\'est déjà ce que font des millions de femmes. La rue est à tout le monde : les applis UMAY ou The Sorority, les « safe places » dans les commerces et la descente à la demande dans les bus de nuit existent pour sortir sans se cacher.' },
      { icon: '📝', titre: 'Noter ce qui s\'est passé', texte: 'Date, heure, lieu, ligne de bus ou de métro, description, témoins. Les vidéos de vidéoprotection sont effacées en quelques jours : les demander vite. Ça sert si vous décidez de porter plainte, maintenant ou plus tard (6 ans pour un délit).' },
      { icon: '⚖️', titre: 'Porter plainte, c\'est un droit', texte: 'Dans n\'importe quel commissariat ou gendarmerie (ils ne peuvent pas refuser), ou par courrier au procureur. On peut venir accompagné. Dans les transports : 3117 par téléphone, 31177 par SMS.' }
    ],
    temoins: [
      { icon: '🎭', titre: 'Distraire', texte: 'Créer une diversion sans affronter le harceleur : demander l\'heure, son chemin, faire semblant de connaître la victime, faire tomber quelque chose.' },
      { icon: '📣', titre: 'Déléguer', texte: 'Demander de l\'aide à quelqu\'un qui a une autorité : chauffeur, agent, commerçant, autre passager. Ou appeler le 17, le 112, le 3117.' },
      { icon: '📱', titre: 'Documenter', texte: 'Filmer ou noter discrètement la scène (heure, lieu, description). Donner la vidéo à la victime, jamais la diffuser sans son accord.' },
      { icon: '✋', titre: 'Diriger', texte: 'Si c\'est sans danger, intervenir directement en nommant le comportement : « Laissez-la tranquille. » Sans entrer dans une dispute.' },
      { icon: '💬', titre: 'Dialoguer', texte: 'Après coup, aller voir la victime : « Ça va ? Vous voulez que je vous accompagne ? » Souvent, c\'est ce geste-là qui compte le plus.' }
    ],
    tous: [
      { icon: '🙅', titre: 'Ce n\'est pas un compliment', texte: 'Un compliment, ça se refuse sans conséquence. Si la personne doit baisser les yeux, accélérer ou changer de trottoir, c\'était une intimidation.' },
      { icon: '🔁', titre: 'Ce n\'est pas « normal »', texte: 'Entendre la même chose tous les jours ne la rend pas acceptable : ça la rend juste invisible. Banaliser, c\'est laisser faire.' },
      { icon: '🤝', titre: 'Ne pas rire avec', texte: 'Un sifflement ou une remarque en groupe « pour rigoler », c\'est déjà une infraction, aggravée justement parce qu\'on est plusieurs. Dire « arrête » à un pote, ça marche.' },
      { icon: '📲', titre: 'Partager la campagne', texte: 'Suivre et relayer <a href="https://www.instagram.com/maruemonrespect/" target="_blank" rel="noopener">@maruemonrespect</a>. Plus on en parle, moins ça passe.' }
    ]
  },

  /* ---------- NUMÉROS ET DISPOSITIFS ---------- */
  contacts: [
    { numero: '17', nom: 'Police / gendarmerie', quand: 'Urgence, 24h/24, gratuit' },
    { numero: '112', nom: 'Urgences européennes', quand: 'Partout en Europe, même sans crédit' },
    { numero: '114', nom: 'Urgence par SMS', quand: 'Quand on ne peut pas parler' },
    { numero: '3919', nom: 'Violences Femmes Info', quand: '24h/24, gratuit, anonyme' },
    { numero: '3018', nom: 'Jeunes, violences en ligne', quand: '7j/7 de 9h à 23h, tchat et appli' },
    { numero: '3117 / 31177', nom: 'Alerte trains, gares, RATP', quand: 'Appel 3117 ou SMS 31177, 24h/24' }
  ],
  dispositifs: [
    { nom: 'Tchat arretonslesviolences.gouv.fr', texte: 'Policiers et gendarmes formés, 24h/24, anonyme, pour les victimes et les témoins. Bouton de sortie rapide.', url: 'https://arretonslesviolences.gouv.fr/' },
    { nom: 'Descente à la demande', texte: 'Dans tous les bus d\'Île-de-France après 22h (et dans d\'autres villes) : demander au conducteur de s\'arrêter entre deux arrêts.', url: 'https://www.iledefrance-mobilites.fr/' },
    { nom: 'Formation Stand Up (10 min, gratuite)', texte: 'La méthode des 5D pour les témoins, par la Fondation des Femmes et Right To Be.', url: 'https://www.standup-international.com/fr/fr/training/landing' },
    { nom: 'Applis UMAY et The Sorority', texte: 'Partage d\'itinéraire, 8 500 « safe places », alerte aux membres à proximité.', url: 'https://www.umay.fr/' }
  ],

  /* ---------- LA LOI ---------- */
  lois: {
    outrage: {
      nom: 'Outrage sexiste et sexuel',
      article: 'Code pénal, art. R625-8-3 (contravention) et art. 222-33-1-1 (délit aggravé)',
      nature: 'contravention, délit si aggravé',
      definition: 'C\'est le « harcèlement de rue » au sens de la loi : imposer à quelqu\'un un propos ou un comportement à connotation sexuelle ou sexiste qui soit l\'humilie, soit crée une situation intimidante, hostile ou offensante. <strong>Une seule fois suffit.</strong> Créé en 2018, renforcé en 2023 et en août 2026.',
      exemples: ['Siffler, faire des bruits de baiser, commenter le corps ou la tenue', 'Insister pour un numéro après un « non »', 'Gestes obscènes, propositions sexuelles', 'Suivre quelqu\'un quelques dizaines de mètres en faisant des remarques'],
      peine: 'Jusqu\'à 1 500 € d\'amende (amende forfaitaire : 150 €), stage de sensibilisation, travail d\'intérêt général de 20 à 120 h',
      peineAggravee: 'Délit : 2 mois de prison et 3 750 € d\'amende (amende forfaitaire : 300 €)',
      aggravants: ['la victime est mineure', 'dans un bus, un métro, un train, une gare ou un quai', 'à plusieurs', 'personne vulnérable', 'en raison de l\'orientation sexuelle ou de l\'identité de genre', 'récidive'],
      source: { org: 'Légifrance', name: 'art. 222-33-1-1 C. pén., en vigueur depuis le 20 août 2026', year: 2026, url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000047048864/' }
    },
    harcelement: {
      nom: 'Harcèlement sexuel',
      article: 'Code pénal, art. 222-33',
      nature: 'délit',
      definition: 'Imposer <strong>de façon répétée</strong> des propos ou comportements à connotation sexuelle <strong>ou sexiste</strong> qui humilient ou créent une situation intimidante, hostile ou offensante. Depuis 2018, c\'est aussi du harcèlement quand <strong>plusieurs personnes</strong> s\'y mettent, même si chacune n\'agit qu\'une fois (la bande à la sortie du lycée, le « raid » en ligne). Une seule pression grave pour obtenir un acte sexuel suffit aussi.',
      exemples: ['La même personne qui commente ton corps chaque matin au même arrêt de bus', 'Un groupe qui encercle quelqu\'un dans un wagon en enchaînant les propositions', 'Les messages insistants après avoir obtenu un numéro dans la rue'],
      peine: '2 ans de prison et 30 000 € d\'amende',
      peineAggravee: '3 ans de prison et 45 000 € d\'amende',
      aggravants: ['victime de moins de 15 ans', 'à plusieurs', 'dans les transports ou leurs accès (depuis août 2026)', 'par internet ou les réseaux', 'personne vulnérable', 'un mineur a assisté aux faits'],
      source: { org: 'Légifrance', name: 'art. 222-33 C. pén., en vigueur depuis le 20 août 2026', year: 2026, url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165281/' }
    },
    agression: {
      nom: 'Agression sexuelle',
      article: 'Code pénal, art. 222-22 et 222-27 à 222-29-1',
      nature: 'délit',
      definition: 'Tout <strong>contact physique de nature sexuelle non consenti</strong>, sans pénétration. Depuis la loi du 6 novembre 2025, le consentement doit être « libre et éclairé, spécifique, préalable et révocable » et ne se déduit jamais du silence ou de l\'absence de réaction. Pas besoin de coups : la « surprise » dans une foule ou la « contrainte » d\'un wagon bondé suffisent.',
      exemples: ['Main aux fesses, sur la poitrine ou l\'entrejambe dans le métro', 'Frottements contre quelqu\'un dans un bus bondé', 'Baiser forcé'],
      peine: '5 ans de prison et 75 000 € d\'amende',
      peineAggravee: '7 ans et 100 000 € ; 10 ans et 150 000 € sur un mineur de 15 ans',
      aggravants: ['à plusieurs', 'dans les transports ou leurs accès (depuis août 2026)', 'avec une arme', 'auteur ivre ou drogué', 'personne vulnérable', 'blessures'],
      source: { org: 'Légifrance', name: 'art. 222-22 C. pén. (loi n° 2025-1057 du 6 nov. 2025) et 222-27 à 222-29-1', year: 2026, url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000052535583/2025-11-08' }
    },
    viol: {
      nom: 'Viol',
      article: 'Code pénal, art. 222-23 et 222-24',
      nature: 'crime',
      definition: 'Tout acte de pénétration sexuelle ou acte bucco-génital <strong>non consenti</strong>. C\'est un crime, jugé par une cour d\'assises ou une cour criminelle départementale. Une victime majeure a 20 ans pour porter plainte.',
      exemples: [],
      peine: '15 ans de réclusion criminelle',
      peineAggravee: '20 ans de réclusion criminelle ; 30 ans si la victime meurt ; perpétuité avec tortures ou actes de barbarie',
      aggravants: ['victime de moins de 15 ans', 'à plusieurs', 'avec une arme', 'dans les transports ou leurs accès (depuis août 2026)', 'personne vulnérable'],
      source: { org: 'Légifrance', name: 'art. 222-23 et 222-24 C. pén.', year: 2026, url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165281/' }
    },
    exhibition: {
      nom: 'Exhibition sexuelle',
      article: 'Code pénal, art. 222-32',
      nature: 'délit',
      definition: 'Montrer volontairement ses parties sexuelles, ou mimer explicitement un acte sexuel, à des gens qui n\'ont rien demandé, dans un lieu accessible aux regards (rue, parc, wagon, voiture garée). Depuis 2021, c\'est puni <strong>même sans nudité</strong>.',
      exemples: ['Ouvrir son manteau devant des lycéennes à la sortie du lycée', 'Se masturber dans un wagon ou dans une voiture garée devant un arrêt de bus'],
      peine: '1 an de prison et 15 000 € d\'amende',
      peineAggravee: '2 ans et 30 000 € si la victime a moins de 15 ans',
      aggravants: [],
      source: { org: 'Légifrance', name: 'art. 222-32 C. pén.', year: 2021, url: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165281/' }
    },
    images: {
      nom: 'Photos ou vidéos sous les vêtements (« upskirting »)',
      article: 'Code pénal, art. 226-3-1',
      nature: 'délit',
      definition: 'Utiliser n\'importe quel moyen (téléphone, miroir, caméra) pour voir ou filmer les parties intimes qu\'une personne a cachées par ses vêtements, sans son accord. Créé par la loi du 3 août 2018.',
      exemples: ['Photographier sous une jupe dans un escalator du métro', 'Filmer dans une cabine d\'essayage ou des toilettes'],
      peine: '1 an de prison et 15 000 € d\'amende',
      peineAggravee: '2 ans et 30 000 € d\'amende',
      aggravants: ['victime mineure', 'à plusieurs', 'dans les transports ou leurs accès', 'images enregistrées ou envoyées'],
      source: { org: 'Légifrance', name: 'art. 226-3-1 C. pén.', year: 2018, url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037288087/2026-04-26' }
    },
    injure: {
      nom: 'Injure publique sexiste',
      article: 'Loi du 29 juillet 1881, art. 33',
      nature: 'délit',
      definition: 'Insulter quelqu\'un à cause de son sexe, de son orientation sexuelle ou de son identité de genre, dans un lieu public ou sur un réseau ouvert. Même peine que l\'injure raciste. Attention : il faut porter plainte dans l\'année.',
      exemples: ['Crier une insulte sexiste à une femme dans la rue devant d\'autres personnes', 'Insultes homophobes ou transphobes dans un bus'],
      peine: '1 an de prison et 45 000 € d\'amende (une injure publique « ordinaire » : 12 000 €)',
      peineAggravee: '',
      aggravants: [],
      source: { org: 'Légifrance', name: 'loi du 29 juillet 1881, art. 33, version du 23 mars 2024', year: 2024, url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049312747' }
    },
    temoin: {
      nom: 'Non-assistance à personne en danger',
      article: 'Code pénal, art. 223-6',
      nature: 'délit',
      definition: 'Ne pas aider, alors qu\'on pouvait le faire <strong>sans risque</strong>, une personne en péril grave (agression physique ou sexuelle en cours, personne blessée). Soyons honnêtes : un témoin de sifflements n\'est pas obligé par la loi d\'intervenir. Mais face à une agression, appeler le 17 ou le 112 suffit à remplir son devoir. Et la règle n° 1 des témoins reste : ne pas se mettre en danger.',
      exemples: [],
      peine: '5 ans de prison et 75 000 € d\'amende',
      peineAggravee: '7 ans et 100 000 € si la personne en péril a moins de 15 ans',
      aggravants: [],
      source: { org: 'Légifrance', name: 'art. 223-6 C. pén.', year: 2026, url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037289588' }
    }
  },

  loiNote: 'Les peines indiquées sont les maximums prévus par la loi ; le juge peut prononcer moins. Rappel : une contravention est jugée par le tribunal de police (amende), un délit par le tribunal correctionnel (jusqu\'à 10 ans de prison), un crime par la cour d\'assises ou la cour criminelle départementale (15 ans à perpétuité). État du droit au 7 octobre 2026 ; une proposition de loi sur les violences sexistes et sexuelles est en discussion à l\'Assemblée nationale et pourrait modifier certains points.'
};
