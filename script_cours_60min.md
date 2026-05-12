# Script de cours SDVFR Next — Format 60 minutes (présentiel)

> Dérivé de [script_cours_75min.md](script_cours_75min.md) selon deux décisions d'architecture :
> 1. Le cours est structuré en deux macro-phases pour insister sur la séparation **préparation au sol** / **exécution en vol**. Objectif pédagogique : que les pilotes minimisent leurs interactions avec l'appli en vol.
> 2. Les aspects périphériques (compte SkyDreamSoft, sélection des régions) ne sont pas traités en présentiel ; ils sont renvoyés aux vidéos.

> Le script reste **strictement fidèle au contenu des 47 vidéos sources** — rien n'est inventé.

---

## Vue d'ensemble

| Bloc | Macro-phase | Thème | Durée | Fonctionnalités |
|:---:|---|---|:---:|---|
| 1 | Mise en route | Interface et appareil | 5 min | A1, A6 |
| 2 | **AU SOL — Préparer** | La carte | 10 min | B1, B2, B3, B7, E1 |
| 3 | **AU SOL — Préparer** | Météo | 6 min | C1+C2, C4, C6 |
| 4 | **AU SOL — Préparer** | La navigation | 22 min | D1, D2, D3, D6/D7/D8, D4, D9, D10 |
| — | *Pivot* | *Du sol vers le vol* | 1 min | *transition* |
| 5 | **EN VOL — Exécuter** | Suivi de vol | 10 min | F1, F2, F3, F4 |
| 6 | Après le vol | Traces | 3 min | G1 |
| 7 | Bonus (mention) | Pour aller plus loin | 2 min | H1, B4, I1/I2 |
| | Conclusion | | 1 min | |
| | **TOTAL** | | **60 min** | |

**Convention typographique :** les *rappels-clé sol → vol* sont signalés par l'encadré **🔧 Préparé maintenant, plus touché en vol** dans le corps du texte.

---

## BLOC 1 — Mise en route (5 min)

---

### A1 — Tour d'horizon de l'interface (3 min)

**À montrer :** Écran carte principal. Pointer chaque zone de l'écran au fur et à mesure.

On est devant l'écran principal de SDVFR Next. On arrive directement sur la carte, prêt à voler. Reprenons ensemble les grandes zones de l'écran.

**À montrer :** Montrer la barre de métriques en bas de l'écran.

En bas, la barre de métriques affiche en permanence les informations clés de vol. On y reviendra largement dans le bloc « en vol ».

**À montrer :** Cliquer sur le bouton layers à droite, faire défiler les options.

Sur la droite, ce bouton donne accès aux layers — les couches cartographiques. C'est là que vous allez pouvoir personnaliser votre carte : modes de carte, options de comportement, chronomètres, profil de vol, profil de navigation, météo avec les METAR et les Wintem, cartes en ligne et hors ligne, et toutes les couches de données pour customiser la SD OACI vectorielle. Vous avez aussi en bas le basculement entre mode clair et mode sombre de la carte.

**À montrer :** Cliquer sur chacun des quatre boutons du haut, montrer brièvement le contenu de chaque écran.

En haut de l'écran, vous avez quatre boutons d'action — qu'on peut d'ailleurs masquer si besoin. De gauche à droite :

Premier bouton : l'écran utilisateur. C'est là que vous trouvez votre compte, vos appareils, vos traces, vos documents, les cartes embarquées, vos points personnalisés.

Deuxième bouton : l'écran navigation. On y trouve le log de nav, le profil de navigation, le devis carburant, le masse et centrage, les terrains et NOTAM sur la route, et les options pour charger ou sauvegarder une navigation. C'est le bloc qu'on va le plus utiliser aujourd'hui pour la prépa.

Troisième bouton : la fonction Direct — elle permet de lancer une navigation directe vers un point, de rechercher un point ou même une commune si vous avez une connexion internet.

Quatrième bouton : la roue crantée des options générales. Beaucoup de paramètres qu'on explorera au fil des blocs.

> *Transition : Avant d'attaquer la carte, un préalable indispensable à toute prépa de nav : votre fiche appareil.*

---

### A6 — La gestion des appareils (2 min)

**À montrer :** Bouton utilisateur > onglet "Appareils". Montrer la liste des appareils.

Via le bouton utilisateur en haut, deuxième onglet en partant de la gauche, vous accédez à la liste de vos appareils. Par défaut, il y a un DR400 de démonstration que vous pouvez modifier ou supprimer.

**À montrer :** Ouvrir la fiche d'un appareil, faire défiler les champs principaux.

Si j'ouvre une fiche, je retrouve les informations essentielles : immatriculation, modèle, unité de vitesse avec les vitesses de croisière, de montée et de descente — c'est très utile pour affiner les temps dans le log de nav. On a aussi les taux de montée et de descente, la consommation horaire, la densité du carburant, et toute la partie masse et centrage avec les points du centrogramme et les stations de chargement — appareil à vide, rang pilote, rang passagers, bagages, carburant.

**À montrer :** Montrer l'étoile bleue de l'appareil par défaut, faire un appui long sur un autre appareil pour changer le défaut.

La petite étoile bleue indique votre appareil par défaut, celui qui sera automatiquement sélectionné pour chaque nouvelle navigation. Pour changer l'appareil par défaut, faites un appui long sur un autre appareil dans la liste.

> **🔧 Préparé maintenant, plus touché en vol :** la fiche appareil alimente automatiquement les temps du log de nav, le devis carburant et le centrage. Tout est lié. Vous configurez votre avion une fois, et vous ne vous reposez plus la question avant chaque prépa.

> *Fin du Bloc 1. Transition : Maintenant qu'on a posé l'interface et notre avion, on entre dans la première grande phase : la préparation au sol. Et ça commence par la carte.*

---

## BLOC 2 — AU SOL : la carte (10 min)

---

### B1 — La carte vectorielle et les couches de données (2 min 30)

**À montrer :** Ouvrir la carte vectorielle par défaut. Ouvrir le panneau latéral, replier les accordéons pour ne garder que "Couches de données".

Quand vous ouvrez SDVFR Next, vous arrivez sur une carte vectorielle. L'avantage de cette carte vectorielle, c'est qu'elle est identique quel que soit le pays : France, Espagne, Suisse, vous retrouvez toujours le même style.

**À montrer :** Décocher NDB, VOR, hélistations, bases ULM — montrer que la carte se nettoie.

Le gros intérêt du vectoriel, c'est qu'on peut personnaliser l'affichage. Si vous ne faites pas de radionavigation, enlevez les NDB et VOR. Si les hélistations ou les bases ULM ne vous concernent pas, décochez-les. La carte se nettoie immédiatement. Point important : ce réglage affecte aussi les résultats quand vous tapez sur la carte. Si vous désactivez les hélistations, elles n'apparaîtront plus dans les résultats au clic.

**À montrer :** Utiliser le slider de filtre de plafond. Passer du FL115 au FL050, puis au FL030.

Ensuite, une fonction très utile : le filtre de plafond. Un curseur permet de dire « je ne veux voir que les espaces dont le plancher est en dessous de tel niveau ». Si vous savez que vous ne volerez pas au-dessus de 3000 pieds, mettez le curseur sur le niveau 030. Les espaces dont le plancher est plus haut vont disparaître. Ça désencombre énormément la carte dans les zones contraintes.

**À montrer :** Passer du thème clair au thème sombre via le panneau latéral en bas.

Dernier point : vous pouvez changer le thème de la carte. En bas du panneau latéral, vous passez du mode clair au mode sombre — utile pour le vol de nuit.

> *Transition : Maintenant qu'on sait personnaliser notre carte, voyons comment interroger les espaces aériens qu'on y voit.*

---

### B2 — Le double tap : explorer les espaces aériens (2 min 30)

**À montrer :** Double taper dans une zone contrainte (ex. R105B près de Poitiers). Montrer la boîte d'information qui s'ouvre.

On passe à une fonction essentielle : le double tap. Vous double-tapez n'importe où sur la carte, et SDVFR vous montre l'empilement complet des espaces aériens à cet endroit. En bas de la boîte, vous avez l'élévation du sol — par exemple 148 mètres soit 486 pieds. Le sol est d'ailleurs dessiné tout en bas de la vue en coupe.

**À montrer :** Parcourir la vue en coupe : CTR, TMA, zone réglementée, SIV, LTA. Cliquer sur un espace pour afficher ses détails.

Au-dessus, tous les espaces triés par plancher, dessinés les uns à côté des autres. On voit la CTR, la TMA, la zone réglementée, le SIV, jusqu'à la LTA France. Si on clique sur un espace, on obtient le détail : la classe, le type, le plancher, le plafond, les fréquences, et les remarques d'activation issues de l'AIP.

**À montrer :** Cliquer sur la petite loupe à côté d'un espace. Montrer que la carte zoome sur cet espace.

Il y a une petite loupe à côté de chaque espace. Cliquez dessus : la boîte se ferme et la carte zoome sur l'espace en question. Un double tap et vous revenez à la vue d'empilement.

**À montrer :** Cliquer directement dans la vue d'aperçu en haut pour faire défiler la liste en bas.

Petite astuce : dans la vue d'aperçu en haut, vous pouvez cliquer directement sur un espace et la liste en dessous défile automatiquement à la bonne position. Et si une zone vient d'un SUP AIP, vous aurez un bouton PDF qui donne un lien direct vers le document.

> *Transition : On sait lire les espaces aériens. Voyons ce que la carte nous dit sur les terrains.*

---

### B3 — Les informations terrain (2 min)

**À montrer :** Simple clic sur un terrain (ex. Poitiers). Montrer le code OACI, le nom, les boutons d'action (PDF, +, Direct).

Quand vous faites un simple clic sur un terrain, vous obtenez son code OACI et son nom, avec des boutons d'action : PDF pour la VAC, le bouton « + » pour ajouter un point de navigation, et la flèche pour faire un direct vers ce terrain.

**À montrer :** Cliquer sur le bouton "i". Faire défiler rapidement les 4 onglets : pistes/fréquences, météo, position/éphémérides, NOTAM.

Le bouton « i » comme information ouvre une boîte à quatre onglets, que je vous parcours rapidement :
- **Pistes et fréquences** : altitude du terrain, accès VAC, fréquences approche/ATIS/info/tour.
- **Météo** : METAR et TAF du terrain — ou du terrain le plus proche avec distance si pas de station.
- **Position** : coordonnées dans plusieurs formats, bouton pour définir le terrain comme position par défaut au lancement, éphémérides (lever, coucher, nuit aéro, jour aéro).
- **NOTAM** : par défaut, seulement les NOTAM VFR. Si vous voulez aussi voir les NOTAM IFR, cochez l'option dans la roue crantée.

> *Transition : Une fois en approche, on veut le tour de piste sous les yeux. C'est là que les VAC géoréférencées entrent en jeu.*

---

### B7 — Les VAC géoréférencées (1 min 30)

**À montrer :** Clic sur un terrain (ex. La Rochelle). Montrer les boutons APP, ATT, PDC. Activer APP puis ATT.

Quand vous cliquez sur un terrain, vous voyez des boutons sous les informations : APP pour la carte d'approche, ATT pour atterrissage et tour de piste, PDC pour les parkings. Vous cliquez, la carte se plaque directement sur la carte vectorielle. On peut zoomer, voir le tour de piste, les parkings.

**À montrer :** Activer "Mode Auto VAC" dans les options. Zoomer sur un terrain et montrer que les VAC apparaissent automatiquement.

Mais le vrai plus, c'est le mode automatique. Dans les options, activez « Auto VAC ». Quand vous zoomez suffisamment sur un terrain, la carte d'atterrissage et de tour de piste s'affiche toute seule. Vous dézoomez, elle disparaît.

> **🔧 Préparé maintenant, plus touché en vol :** activez Auto-VAC au sol. En vol, avec l'autocentrage, les VAC de tour de piste apparaîtront automatiquement quand vous vous rapprocherez du terrain. Plus besoin de les chercher manuellement, plus besoin de fouiller dans les documents en finale.

Petit rappel : synchronisez les documents Geomap avant le vol pour pouvoir les afficher hors ligne (bouton utilisateur, onglet Document, nœud Geomap).

> *Transition : Dernière fonctionnalité de ce bloc carte, et pas des moindres : les zones temporaires.*

---

### E1 — Les zones temporaires en mode automatique (1 min 30)

**À montrer :** Vue d'ensemble avec des zones rouges visibles (RTBA + ZRT). Montrer les numéros de SUP AIP affichés.

Par défaut, SDVFR affiche automatiquement les zones temporaires actives. Deux types : les activations du réseau très basse altitude — le RTBA — et les zones issues des SUP AIP, les ZRT, ZDT, ZIT. Vous les reconnaissez sur la carte en rouge, avec les numéros de SUP AIP affichés.

**À montrer :** Roue crantée > "Paramètres zone temporaire automatique". Montrer les options : plafond, délai anticipé 30 min, switch RTBA et SUP AIP.

Dans les paramètres, section « Zone temporaire automatique », plusieurs réglages. Un plafonnement : si vous ne volez pas au-dessus du niveau 050, filtrez pour ne plus voir les zones trop hautes. Un délai d'affichage anticipé, 30 minutes par défaut : les zones qui vont devenir actives dans ce délai s'affichent en orange. Très utile pour les activations RTBA — vous voyez ce qui va se passer avant que ça se passe. Et deux interrupteurs : RTBA seul, SUP AIP seul, ou les deux.

Et comme pour tout espace aérien, le double tap fonctionne sur ces zones : vous verrez en magenta le détail des activations connues avec les horaires.

> **🔧 Préparé maintenant, plus touché en vol :** vos seuils (plafond, délai d'anticipation) sont à régler au sol selon votre profil de vol habituel. En vol, vous voyez juste les zones rouges (actives) et oranges (à venir).

> *Fin du Bloc 2. Transition : On maîtrise la carte. Passons à la météo.*

---

## BLOC 3 — AU SOL : météo (6 min)

---

### C1 + C2 — METAR et TAF (2 min 30)

**À montrer :** Activer la couche METAR dans le panneau latéral. Zoomer pour montrer les pastilles de couleur sur les aérodromes. Cliquer sur un aérodrome.

On commence par les METAR. Je clique sur « METAR » dans le panneau, et apparaissent les pastilles de couleur sur tous les terrains qui émettent un METAR — l'intégralité de l'Europe est couverte.

Quand je clique sur un terrain, j'obtiens le détail :
- L'**ancienneté** du METAR — par exemple « il y a 7 minutes », c'est récent, c'est fiable.
- La **couleur** qui donne immédiatement la catégorie de vol.
- Le METAR brut, codé, tel qu'il est émis, et juste en dessous la version décodée, lisible.

Détail à connaître : quand le METAR rapporte un vent supérieur à 20 nœuds, en vent soutenu ou en rafale, une petite manche à air s'affiche sur la pastille. Alerte visuelle sur les conditions de vent fort.

**À montrer :** Désactiver la couche METAR, activer la couche TAF. Cliquer sur un terrain pour montrer le détail avec les deux couleurs.

Point important : METAR et TAF ne s'affichent pas en même temps. C'est un choix volontaire pour ne pas surcharger la carte. Soit l'un, soit l'autre.

Je désactive le METAR, j'active le TAF. Regardez bien : sur certains terrains, **deux couleurs**. La couleur principale correspond au temps principal du TAF. La couleur secondaire représente la **pire condition** annoncée dans les évolutions — BECMG, TEMPO, PROB. C'est très précieux pour anticiper.

Quand je clique, comme pour le METAR, j'ai le TAF brut puis le TAF décodé, avec l'ancienneté de l'émission.

Petit complément : si un terrain n'a pas de station, l'appli affiche le METAR/TAF du terrain le plus proche avec distance indiquée.

> *Transition : Météo observée et météo prévue au terrain, c'est posé. Passons aux vents en altitude.*

---

### C4 — Les Wintem : vents et températures en altitude (1 min 30)

**À montrer :** Ouvrir la couche Wintem. Montrer la liste des niveaux de vol (FL005 à FL150) et les tranches horaires. Sélectionner une couche (ex. FL030). Cliquer sur une barbule de vent.

Les Wintem, ce sont les cartes de vents et températures prévus en altitude. Dans le panneau, les niveaux de vol disponibles vont du FL005 au FL150, et pour chaque niveau, plusieurs tranches horaires sur 24 heures. L'application met en évidence la tranche horaire la plus proche de l'heure actuelle — pas besoin de calcul mental.

Je sélectionne par exemple le FL030 à 15 Zoulou. Les barbules de vent s'affichent sur toute l'Europe. Si je clique sur une barbule, j'obtiens l'information exacte : direction du vent, vitesse en nœuds, et température. Petit rappel sur la convention : les températures négatives n'ont pas de signe ; quand la température est positive, un « + » apparaît.

> **🔧 Préparé maintenant, plus touché en vol :** ces couches Wintem sont utilisées **automatiquement** par l'appli pour ajuster les temps de votre log de navigation. En vol, vous verrez la dérive estimée et le vent effectif dans la barre inférieure — sans aucune intervention de votre part.

> *Transition : Dernier outil météo : le radar de précipitations.*

---

### C6 — Le radar météo et satellite (2 min)

**À montrer :** Activer la couche Radar. Montrer le bandeau en bas (Play, slider, Radar/Satellite, horaires UTC/locale). Zoomer sur une zone avec précipitations. Lancer l'animation.

Quand j'active le radar, un bandeau apparaît en bas de la carte : bouton Play, barre d'avancement, choix entre Radar et Satellite, horaires en UTC et heure locale.

Je zoome sur une zone où il y a des précipitations. Les couleurs : bleu pour les précipitations faibles, jaune, et rouge pour les précipitations intenses.

Si je fais Play, l'application joue les couches successives en partant du passé et en avançant vers l'heure actuelle. Ça vous montre comment les précipitations évoluent et se déplacent. En mode radar, vous avez même une vingtaine de minutes de **prévision** au-delà de l'heure actuelle.

Je peux faire Pause et déplacer moi-même le slider pour naviguer librement dans le temps. Le mode Satellite affiche l'imagerie satellite — pas de prévision dans ce mode, mais une vue d'ensemble de la couverture nuageuse.

> *Transition : En résumé pour votre prépa météo : METAR pour le présent, TAF pour les prévisions aux terrains, Wintem pour les vents en altitude, radar pour les précipitations. On passe maintenant au bloc principal : la préparation de la navigation.*

---

## BLOC 4 — AU SOL : préparer la navigation (22 min)

*C'est le cœur de la prépa. La consigne pédagogique pendant tout ce bloc : on configure, on fige, et en vol on ne refera rien de tout ça.*

---

### D1 — Créer sa route (3 min)

**À montrer :** Carte SDVFR Next ouverte, création d'une navigation entre deux terrains (ex. La Roche-sur-Yon LFRI et Niort LFBN).

On entre dans le cœur du sujet : la préparation de navigation avec SDVFR Next. On va suivre ensemble le fil logique d'une vraie prépa, du début à la fin.

Tout commence sur la carte. Pour créer une navigation, c'est simple : appui long sur le terrain de départ. L'application propose d'aimanter le point sur un point remarquable à proximité — ici LFRI. On valide, le point est placé pile sur le terrain.

**À montrer :** Appui long sur le terrain d'arrivée, segment tracé automatiquement.

On fait pareil pour la destination. Appui long à proximité de Niort, un segment se trace, on aimante sur LFBN. Voilà, on a déjà une route.

**À montrer :** Ajout d'un point intermédiaire par appui long sur le segment, puis déplacement par appui long sur le point.

Pour altérer la route — par exemple passer par une verticale terrain — on fait un appui long sur le segment. Ça le découpe. Ensuite, appui long sur ce nouveau point, on laisse le doigt appuyé, et on le déplace à proximité du terrain souhaité. La fonction aimant propose de coller le point sur le terrain. Très intuitif.

On peut aussi ajouter un point en cliquant sur un terrain sur la carte, puis en utilisant le bouton « + ». Et pour supprimer un point : soit clic puis poubelle, soit slide dans le log de nav.

**À montrer :** Bouton "Nav" pour ouvrir l'écran de navigation.

Une fois la route tracée, tout le travail d'enrichissement va se faire via ce bouton Nav, qui nous ouvre l'écran de navigation avec tous ses onglets.

> *Transition : La route est créée. On enrichit le log.*

---

### D2 — Le log de navigation (4 min 30)

**À montrer :** Onglet "Log" de l'écran navigation, avec segments, points de report, colonnes CM/RM/TSV/TAV.

On est dans le log de nav. **C'est le cœur de votre préparation.** Structure familière : segments, points de report, et colonnes avec cap magnétique, route magnétique, temps avec et sans vent.

**À montrer :** Double-tap sur les en-têtes CM/RM pour changer l'information principale.

Premier réflexe : personnaliser l'affichage. Double-tap sur les en-têtes pour choisir si on affiche le cap magnétique ou la route magnétique en information principale.

**À montrer :** Double-tap sur l'altitude d'un segment, modification à 5000 ft. Appui long pour appliquer partout.

Pour les altitudes, double-tap sur la colonne ZV : on définit l'altitude de vol. Astuce très pratique : un **appui long** dans n'importe quelle cellule d'altitude applique la même altitude sur toute la navigation d'un coup. Par exemple 6500 pieds partout, puis on affine segment par segment.

**À montrer :** Double-tap sur la zone sous le nom du point de report, sélection d'une fréquence.

Sous chaque point de report, zone de texte personnalisable. Double-tap : on accède aux fréquences. L'application propose les fréquences des terrains à proximité. On sélectionne par exemple la fréquence de Châteauroux, elle s'inscrit automatiquement. On peut ajouter du texte libre en complément.

**À montrer :** Double-tap dans la colonne Observation, association d'un VOR pour recoupement.

Dans la colonne Observation, double-tap : on associe une balise de radionavigation pour un recoupement. On sélectionne par exemple le VOR de Poitiers, l'appli calcule automatiquement le QDM/QDR.

En dessous de chaque observation, l'application affiche automatiquement le vent et une estimation de la dérive et du vent effectif (T pour tailwind, H pour headwind).

**À montrer :** Colonne Notes, saisie de texte libre.

La colonne Notes permet d'écrire ce qu'on veut par point de report. Texte libre — checklist, consignes locales, points de vigilance.

**À montrer :** Double-tap dans la colonne HR pour flagger l'heure de décollage.

Dernier point : les colonnes HR et HE.

> **🔧 Préparé maintenant, plus touché en vol :** au sol, vous remplissez le log (altitudes, fréquences, VOR, notes). En vol, vous double-tapez **une seule fois** sur HR au premier point au moment du décollage : SDVFR Next calcule alors toutes les heures estimées de passage, et remplira automatiquement les heures réelles à chaque passage de point. Vous n'avez plus rien à toucher dans le log.

> *Transition : Notre log est rempli. Regardons le profil vertical.*

---

### D3 — Le profil de navigation (2 min 30)

**À montrer :** Onglet "Profil" de l'écran navigation, vue en coupe des espaces aériens.

L'onglet Profil, c'est la vue en coupe de votre navigation. On voit tous les espaces aériens qu'on va traverser, dans l'ordre. Les couleurs et les styles — pointillés, trait plein — aident à identifier le type d'espace.

**À montrer :** Slider pour étirer/comprimer le profil, double-tap sur un espace pour afficher ses informations.

On peut étirer ou comprimer le profil avec le slider. Un double-tap sur un espace donne ses informations détaillées.

**À montrer :** Modification de l'altitude d'un segment en glissant directement sur le profil.

On peut modifier l'altitude d'un segment **directement depuis le profil**, en glissant la branche du segment vers le haut ou le bas. C'est plus visuel que de modifier les chiffres dans le log.

**À montrer :** Activation du profil sur la carte via le panneau latéral.

Fonctionnalité puissante : on peut afficher le profil directement sur la carte, via le panneau latéral. Ça permet de modifier la route en 2D et de voir en temps réel l'impact en 3D sur les espaces.

> **🔧 Préparé maintenant, plus touché en vol :** ajustez les altitudes ici, au sol, à partir du profil. En vol, le profil dynamique (qu'on verra plus tard) prendra le relais — sans intervention.

> *Transition : Le profil est bon. Point critique suivant : terrains et NOTAM.*

---

### D6 / D7 / D8 — Terrains sur la route et NOTAM (5 min)

**À montrer :** Onglet "Route" de l'écran navigation, liste des terrains le long de la route.

L'onglet Route liste tous les terrains situés dans un couloir de part et d'autre de votre navigation. La demi-largeur du couloir est paramétrable — par défaut 15 nautiques. Pour chaque terrain, on voit sa distance latérale par rapport à la route, à gauche ou à droite.

**À montrer :** Clic sur un terrain, affichage du METAR/TAF et des NOTAM du terrain, accès à la VAC en PDF.

En cliquant sur un terrain, accès direct à sa fiche : NOTAM du terrain, METAR, TAF avec traduction, et bouton PDF pour la VAC. Accès rapide à tout ce qu'il faut pour évaluer un terrain de dégagement.

**À montrer :** Onglet "NOTAM" de l'écran navigation, compteur, puis activation des filtres un par un.

Onglet NOTAM. Sur une nav de taille moyenne, on peut avoir 50, 60 NOTAM ou plus. Sur notre démo entre Châteauroux et Saint-Flour, on en a 66.

C'est là que les filtres deviennent **essentiels**. Trois filtres :
- **Filtre 1** : ne garder que les NOTAM dont la validité commence dans les 6 prochaines heures. On priorise les NOTAM déjà actifs.
- **Filtre 2** : retirer les NOTAM dont le plancher est au-dessus de votre navigation, avec une marge de sécurité de 1000 pieds.
- **Filtre 3** : retirer les NOTAM d'obstacles.

**À montrer :** Résultat avec les trois filtres activés — 13 NOTAM prioritaires en tête.

Avec les trois filtres, on descend à 13 NOTAM vraiment pertinents en tête de liste. Les NOTAM filtrés ne sont **pas supprimés** mais déplacés en bas de la liste, avec indication du motif. On ne perd rien, on priorise.

**À montrer :** Panneau latéral sur la carte, activation de la couche NOTAM graphiques.

En complément, les NOTAM graphiques, activables depuis le panneau latéral sur la carte. Cercles directement sur la carte — actifs d'une couleur, inactifs d'une autre. Double-tap pour le détail, filtres pour le rayon max, plancher, plafond.

Attention : les NOTAM graphiques ne **remplacent pas** le briefing NOTAM via les onglets Route et NOTAM. Complément visuel, pas substitut.

> **🔧 Préparé maintenant, plus touché en vol :** les 3 filtres NOTAM sont réglés ici, au sol, en fonction des paramètres de votre vol (validité, altitude max, obstacles). Une fois dans le PDF du dossier de vol, c'est figé. En vol, vous ne refaites pas un briefing NOTAM.

> *Transition : Les NOTAM sont briefés. On passe au devis carburant.*

---

### D4 — Le devis carburant (3 min)

**À montrer :** Onglet "Carburant" de l'écran navigation, tableau avec roulage, délestage, réserves.

L'onglet Carburant présente le devis de manière structurée. En haut, rappel du départ, de l'arrivée, de la distance, du temps avec et sans vent, et de la consommation horaire de l'appareil sélectionné.

En dessous, le tableau avec des valeurs par défaut : roulage 2 × 10 minutes, délestage 100 minutes, réserve de dégagement 15 minutes, réserve finale 30 minutes. Toutes ces valeurs sont modifiables en tapant dessus, et le total en litres se recalcule automatiquement.

**À montrer :** Bouton roue crantée pour modifier les valeurs par défaut.

Les valeurs par défaut se paramètrent via la roue crantée. Si vous volez toujours avec les mêmes réserves, configurez-les une fois pour toutes.

**À montrer :** Bouton "Sélectionner" les dégagements, sélection de plusieurs terrains, temps de dégagement recalculé.

Le point fort, c'est la **gestion intelligente des dégagements**. En cliquant sur « Sélectionner », on voit la liste des terrains sur la route. On en sélectionne trois par exemple. L'application calcule alors, pour chaque point de la navigation, quel est le terrain de dégagement **le plus éloigné**, et elle prend le **pire cas**. Résultat : 26 minutes au lieu de 15. Plus réaliste, plus sûr.

Et si on ajoute des terrains intermédiaires, le temps diminue parce qu'on a plus d'options. Logique. Pour supprimer un dégagement : appui long sur le bouton bleu du terrain.

> **🔧 Préparé maintenant, plus touché en vol :** la sélection de dégagements et le calcul du pire cas se font ici. Pas en vol.

> *Transition : Devis bouclé. Dernière étape : on fige tout.*

---

### D9 — Le dossier de vol (1 min 30)

**À montrer :** Bouton roue crantée en bas du log > "Générer le dossier de vol".

Toute cette préparation, on veut la figer dans un document. Via la roue crantée en bas du log de nav, le bouton « Générer le dossier de vol ». Un clic, on confirme, et l'application génère un PDF complet envoyé par notification.

**À montrer :** Récupération du dossier dans l'onglet "Doc perso", défilement du PDF.

On le récupère dans le bouton utilisateur, onglet « Doc perso ». Le PDF contient tout : log de nav, devis carburant, centrage, terrains sur la route avec leurs METAR/TAF et NOTAM, NOTAM de route avec les filtres appliqués, et en fin de document les Wintem et la TNI.

L'intérêt : mettre dans le marbre ce qu'on a vu au moment de la préparation. D'un point de vue réglementaire, c'est quand même mieux.

> *Transition : Un mot sur la fonction Direct avant de conclure ce bloc.*

---

### D10 — La fonction Direct et utilitaires (1 min 30)

**À montrer :** Bouton Direct (flèche), recherche d'un terrain, boutons "Voir" et "Dérouter".

Le bouton avec la flèche sert aussi de **moteur de recherche** : on peut chercher un terrain par code OACI ou par nom, filtrer par type — aérodrome, base ULM, VOR, NDB, points VFR. On peut soit « Voir » pour se déplacer sur la carte, soit « Dérouter » pour créer une navigation directe vers ce point. Recherche par commune disponible si connexion internet.

**À montrer :** Bouton roue crantée, fonctions Inverser, Sauvegarder, Exporter.

Quelques fonctions pratiques pour finir : on peut inverser la navigation pour le retour, sauvegarder et charger des navigations, et exporter en plusieurs formats — GPX, KML, PLN pour Flight Simulator, FPL pour Garmin.

> *Fin du Bloc 4. Fin de la phase de préparation au sol.*

---

## PIVOT — Du sol vers le vol (1 min)

**À montrer :** Revenir à la carte, navigation complète tracée, dossier de vol PDF visible, paramètres Auto-VAC et zones temporaires activés. Marquer un temps de pause.

Stop. Faisons le point.

Tout ce qu'on vient de faire pendant 38 minutes :
- Choisir l'avion
- Tracer la route avec ses points intermédiaires
- Remplir le log : altitudes, fréquences, VOR, notes
- Vérifier le profil vertical
- Identifier les terrains de la route
- Filtrer les 66 NOTAM en 13 prioritaires
- Sélectionner les dégagements et obtenir le pire cas carburant
- Activer Auto-VAC, zones temporaires automatiques, profil dynamique
- Figer le tout dans un PDF

**Tout ça, vous ne le refaites plus en vol.**

C'est la règle d'or de SDVFR Next : **préparation au sol = exécution sereine en vol**. Si vous vous surprenez en vol à fouiller dans les menus, à filtrer des NOTAM, à modifier votre log, à activer une couche : c'est que vous avez sauté une étape au sol.

Maintenant on décolle, et on regarde ce que l'appli fait pour vous.

---

## BLOC 5 — EN VOL : exécuter (10 min)

*Ton du bloc : on identifie les automatismes. Les seuls gestes utiles en vol sont clairement signalés.*

---

### F1 — Vue d'ensemble du suivi de vol (3 min)

**À montrer :** Icône de l'appareil sur la carte, panneau des options, vecteur vitesse avec bulles de temps, autocentrage, orientation de carte.

On passe au suivi de vol en temps réel. C'est là que SDVFR Next prend tout son sens.

Première chose : l'icône de votre appareil sur la carte. Dans les options (au sol, évidemment), choix entre avion et hélicoptère, couleur de l'icône. Cosmétique, mais aide à bien repérer sa position.

**À montrer :** Montrer les bulles de temps 2, 3, 5, 10 minutes sur le vecteur vitesse.

Dès qu'on prend de la vitesse, le **vecteur vitesse** apparaît avec ses bulles de temps : où vous serez dans 2, 3, 5, 10 minutes. Outil essentiel pour anticiper votre trajectoire et vos traversées d'espaces. L'épaisseur du vecteur est configurable dans les options.

**À montrer :** Activer l'autocentrage, effectuer un virage et observer le recentrage intelligent.

Ensuite, l'**autocentrage**. L'application suit votre appareil de manière intelligente : l'avion n'est pas forcément pile au centre de l'écran. Si vous virez à gauche, l'avion se décale pour vous montrer un maximum de carte **devant vous**. Beaucoup plus malin qu'un simple centrage fixe.

**À montrer :** Activer l'orientation de carte, montrer que les labels restent lisibles même quand la carte pivote.

Dernier point : l'**orientation de carte**. Par défaut, Nord en haut. Mais vous pouvez passer en mode « direction de l'avion » : la carte pivote pour que votre route soit toujours vers le haut. Grâce à la carte vectorielle, les labels restent toujours lisibles — ils ne se retrouvent jamais à l'envers, même quand la carte pivote.

> *Transition : Voyons comment l'application gère votre progression sur la route.*

---

### F2 — Le point courant et la navigation (2 min 30)

**À montrer :** Naviguer vers un point, montrer le point courant en vert et les autres en rouge, les infos distance/temps en bas à droite.

Quand vous suivez votre navigation, le **point courant** — celui vers lequel vous naviguez — est affiché en **vert** sur la carte. Les autres restent en rouge. En bas à droite, en permanence : nom du point courant, distance et temps estimé.

**À montrer :** Arriver à proximité d'un point et observer le passage automatique au point suivant.

Le **passage au point suivant est automatique**. Règle par défaut : moins de 2 nautiques OU moins d'une minute trente du point. Dès qu'une condition est remplie, l'application bascule. Le point passe du vert au rouge, et le nouveau point courant s'affiche en vert. **Vous n'avez rien à faire.**

**Mais** — il y a un mais — en vol, on a parfois besoin de sauter un point. Deux gestes simples sont autorisés ici, et seulement ceux-là :

**À montrer :** Cliquer sur un point de la carte, utiliser le bouton drapeau pour forcer le point courant.

**Geste autorisé n° 1** : sur la carte, vous tapez sur le point que vous voulez, puis vous utilisez le bouton drapeau. Le point passe immédiatement en vert.

**À montrer :** Ouvrir le log de nav, double-taper sur la colonne HE d'un point pour le définir comme point courant.

**Geste autorisé n° 2** : depuis le log de nav. Le segment en cours est sur fond vert. Pour sauter en avant ou revenir en arrière, double-tap sur la colonne HE du point souhaité. L'application propose de le définir comme point courant.

C'est tout. En vol, ces deux gestes — drapeau ou double-tap HE — suffisent à gérer 99 % des situations.

> *Transition : On sait naviguer. Voyons les informations affichées en permanence.*

---

### F3 — La barre inférieure (2 min 30)

**À montrer :** Montrer la barre inférieure avec ses métriques par défaut (vitesse sol, altitude, route, point courant).

La barre inférieure. Par défaut : vitesse sol GPS, altitude GPS — corrigée du géoïde sur Android —, route GPS magnétique, route à prendre vers le point courant, et à droite nom du point, distance, temps estimé.

**À montrer :** Appui long sur la barre pour ouvrir les paramètres, montrer les 6 emplacements configurables.

Personnalisation : appui long n'importe où sur la barre, accès aux paramètres. Six emplacements : gauche haut/bas, milieu haut/bas, droite haut/bas. Pour chacun, vous choisissez la métrique voulue.

**À montrer :** Changer un métrique, montrer les métriques vent, dérive et vent effectif.

Métriques disponibles, abondantes : vitesse, altitude, vitesse verticale, route magnétique GPS, route magnétique nav, estimation de hauteur, nom du point, distance et temps vers le point. Et surtout : **vent estimé, dérive et vent effectif**. Calculés à partir des prévisions Wintem embarquées. Par exemple un vent effectif de 23 nœuds de face (H pour headwind) et une dérive gauche de 11 degrés. C'est une estimation, mais c'est très précieux en vol.

L'heure estimée d'arrivée et le temps de vol estimé sont également disponibles. Chaque métrique est personnalisable en couleur. On peut aussi cacher complètement la barre.

> **🔧 Préparé maintenant, plus touché en vol :** vos 6 métriques sont choisies au sol, en fonction de votre style de vol. En vol, vous **lisez** la barre, vous ne la modifiez pas.

> *Transition : Dernière fonctionnalité majeure en vol : le profil dynamique.*

---

### F4 — Le profil dynamique (2 min)

**À montrer :** Ouvrir le panneau latéral, activer le profil de vol. Montrer le profil en bas de la carte.

Dernière fonctionnalité majeure en vol : le profil dynamique. Activez-le dans le panneau latéral. Le profil s'affiche en bas de la carte. Votre avion est collé à gauche, et **devant vous**, vous voyez le relief et les espaces aériens sur votre route. Les bulles de temps 2, 3, 5, 10 minutes sont là aussi. Par défaut, 20 nautiques devant.

**À montrer :** Appui long sur "profil de vol" pour les réglages : marge au-dessus, distance devant, rafraîchissement.

Par appui long, on accède aux réglages. Marge au-dessus de votre altitude — 2000 ou 4000 pieds. Distance devant — 20, 40 ou 60 nautiques. Taux de rafraîchissement — laissez à 3 secondes par défaut, pour préserver la batterie.

Filtres : possibilité de retirer les espaces de classe E, afficher ou non les LTA, les zones naturelles, l'aéromodélisme, les avertissements à la navigation (axes voltige, parachutages).

**À montrer :** Taper sur une zone dans le profil pour l'identifier, double-taper pour obtenir les infos complètes.

Le profil est **interactif**. Tap sur une zone colorée : elle s'affiche en surbrillance sur la carte avec son nom. Double-tap : informations complètes et zoom carte. Outil très puissant pour identifier rapidement ce qui arrive sur votre route.

> **🔧 Préparé maintenant, plus touché en vol :** marge, distance et filtres se règlent au sol selon votre profil de vol. En vol, le profil dynamique **se met à jour seul** — vous regardez ce qui arrive, vous ne configurez plus.

> *Fin du Bloc 5. Voilà pour le vol. Voyons l'après-atterrissage.*

---

## BLOC 6 — Après le vol (3 min)

---

### G1 — Traces enregistrées (3 min)

**À montrer :** Rappel de la trace jaune en vol, puis bouton utilisateur > onglet Trace.

Une fois le vol terminé, SDVFR Next conserve vos traces. Le trait jaune derrière votre appareil pendant le vol, c'est la trace en temps réel. En parallèle, l'application fonctionne comme une **boîte noire** : enregistrement régulier de points pour générer des traces exploitables après le vol (comptage d'heures, débriefing).

**À montrer :** Options > "Options des traces" — bref survol des paramètres d'enregistrement.

Les paramètres d'enregistrement sont dans les options : limite de vitesse taxi/croisière, distance entre points (30 m au sol, 500 m en l'air par défaut), virage minimum (5°), variation d'altitude minimum (100 ft), délai de fermeture (5 min). Pour des rallyes très détaillés, diminuez ces seuils. Pour du comptage d'heures, valeurs par défaut.

**À montrer :** Onglet Trace, cliquer sur l'œil pour afficher une trace, basculer en 3D avec deux doigts.

Trois façons de clôturer une trace : automatiquement après 5 min d'inactivité GPS, à la fermeture de l'appli, ou manuellement (bouton « Fermer la trace » dans l'onglet Trace).

Pour visualiser : bouton utilisateur, onglet Trace, cliquez sur l'œil à côté de la trace. Elle s'affiche sur la carte. Si vous basculez la carte avec deux doigts, vous voyez la hauteur de vol représentée en **3D**. Plusieurs traces affichables simultanément.

**À montrer :** Appui long sur une trace, exporter en GPX ou KML.

Export : appui long sur une trace, deux formats — GPX et KML. KML particulièrement intéressant pour Google Earth. Formats standards, partageables.

> *Transition : Pour finir, quelques fonctionnalités de personnalisation à mentionner pour orienter ceux qui veulent aller plus loin.*

---

## BLOC 7 — Pour aller plus loin (2 min — mention, sans démo)

**À montrer :** Revenir à la carte. Pas de démo, juste évoquer.

Trois fonctionnalités méritent d'être citées même si on ne va pas les détailler ici. Toutes ont une vidéo dédiée sur la chaîne SDVFR.

**Points personnalisés** : créez vos repères perso — un château, un terrain privé, un point de report local que vous utilisez souvent. Forme, couleur, type libre, filtrage à l'affichage. Import/export CSV. Utile pour les vols répétés sur les mêmes zones.

**Mode hybride** : si la carte vectorielle SDACI ne vous suffit pas, vous pouvez télécharger des cartes additionnelles — OACI image classique, SIA 250, cartes étrangères comme la FOCA suisse — et les superposer aux couches vectorielles. Bouton utilisateur, onglet Produit, vous installez ce que vous voulez.

**Détection de trafic** : SDVFR Next sait afficher les autres avions. Deux options. Soit un **boîtier** type Stratux, PilotAware, SkyEcho — protocole GDL 90. Soit **SafeSky**, sans boîtier — l'app SafeSky partage votre position et reçoit le trafic, et c'est SDVFR qui l'affiche. Losanges avec delta d'altitude et tendance C (climbing) / D (descending) sur la carte.

Si l'une de ces fonctionnalités vous intéresse, regardez la vidéo correspondante sur la chaîne YouTube SDVFR.

---

## Conclusion (1 min)

**À montrer :** Revenir à la carte avec la navigation affichée, le profil dynamique visible, les zones temporaires actives.

Voilà qui conclut cette présentation de SDVFR Next.

Ce que j'aimerais que vous reteniez par-dessus tout, c'est la **séparation sol / vol**. SDVFR Next est conçu pour qu'au sol vous configuriez, vous filtriez, vous prépariez — et qu'en vol vous **regardiez** ce que l'appli fait pour vous : suivi automatique du point courant, vent et dérive estimés, profil dynamique qui se met à jour seul, VAC qui apparaissent à l'approche, zones temporaires qui passent en orange quand elles deviennent imminentes. Vous gardez la tête en dehors du cockpit.

Si vous vous retrouvez en vol à fouiller dans les menus, c'est que vous avez sauté une étape au sol. Préparation au sol = exécution sereine en vol.

Toutes les vidéos détaillées sont disponibles sur la chaîne YouTube SDVFR, dans la playlist « Tutoriels SDVFR Next ». Pour toute question, n'oubliez pas : info@skydreamsoft.fr.

Merci de votre attention.

---

## Récapitulatif des durées

| Bloc | Macro-phase | Contenu | Durée |
|:---:|---|---|:---:|
| 1 | Mise en route | Interface, appareil | 5 min |
| 2 | **AU SOL** | Carte (vectorielle, double-tap, terrain, VAC, zones temp.) | 10 min |
| 3 | **AU SOL** | Météo (METAR/TAF, Wintem, radar) | 6 min |
| 4 | **AU SOL** | Préparer la nav (route, log, profil, NOTAM, carburant, dossier, direct) | 22 min |
| — | *Pivot* | *Du sol vers le vol* | 1 min |
| 5 | **EN VOL** | Suivi, point courant, barre, profil dynamique | 10 min |
| 6 | Après le vol | Traces | 3 min |
| 7 | Bonus | Points perso, hybride, trafic (mention) | 2 min |
| | Conclusion | | 1 min |
| | **TOTAL** | | **60 min** |

**Répartition macro :**
- Mise en route : 5 min (8 %)
- **AU SOL : 38 min (63 %)** — préparation
- Pivot : 1 min
- **EN VOL : 10 min (17 %)** — exécution
- Après-vol + bonus + conclusion : 6 min

---

## Différences clés vs. script 75 min

| Élément | 75 min | 60 min | Décision |
|---|---|---|---|
| A3 Compte SkyDreamSoft | 2 min 30 | — | **Retiré** (périphérique) |
| A4 Régions | 2 min 30 | — | **Retiré** (périphérique) |
| Bloc 1 | 10 min | 5 min | Recentré sur A1, A6 |
| C1 + C2 | 2 min + 1 min 30 | 2 min 30 fusionné | Bascule unique METAR/TAF |
| Pivot sol → vol | implicite | **1 min explicite** | Cœur du nouveau message |
| F1-F4 | 4 + 3 + 4 + 4 | 3 + 2:30 + 2:30 + 2 | Tightening + ton « regarder ≠ manipuler » |
| Bloc 7 | 8 min avec démo | 2 min en mention | Cible bonus, pas démo |
| Rappels « 🔧 sol → vol » | absent | 9 rappels ciblés | Fil rouge architectural |

---

## Vidéos sources par bloc

| Bloc | Vidéos | Liens |
|:---:|---|---|
| 1 | Tour d'horizon, Appareils | [#7](https://www.youtube.com/watch?v=Eog2pOmTPNg) [#11](https://www.youtube.com/watch?v=7aXPhnJoLdk) |
| 2 | Carte vectorielle, Double tap, Info terrain, VAC géoréf., Zones temp. auto | [#15](https://www.youtube.com/watch?v=NPpOz2QoQAU) [#16](https://www.youtube.com/watch?v=0bhb7_Kw7tM) [#22](https://www.youtube.com/watch?v=JWLg73giPmQ) [#18](https://www.youtube.com/watch?v=GK0HQRX5S1Y) [#25](https://www.youtube.com/watch?v=CCDwFP4t9oc) |
| 3 | METAR/TAF/Wintem, Radar | [#12](https://www.youtube.com/watch?v=DBpg-528GTI) [#14](https://www.youtube.com/watch?v=cpN4zFha8xo) |
| 4 | My first nav, Log nav, Profil nav, NOTAM graph., NOTAM route, Terrains route, Devis carburant, Dossier de vol, Fonction Direct | [#19](https://www.youtube.com/watch?v=uLL34-HW6cs) [#34](https://www.youtube.com/watch?v=LaeT193P_YI) [#35](https://www.youtube.com/watch?v=Dh0QeSm9utY) [#4](https://www.youtube.com/watch?v=DPel0USDr1U) [#39](https://www.youtube.com/watch?v=LtbkUsFacnY) [#38](https://www.youtube.com/watch?v=5397ioPcp1k) [#36](https://www.youtube.com/watch?v=9VFfay-Wt1U) [#2](https://www.youtube.com/watch?v=-DdKcyj2Rzs) [#21](https://www.youtube.com/watch?v=v0DZfFlCQaU) |
| 5 | Flight tracking, Point courant, Barre inférieure, Profil dynamique | [#27](https://www.youtube.com/watch?v=bXg575c_Enw) [#28](https://www.youtube.com/watch?v=-S3SoU66FNY) [#29](https://www.youtube.com/watch?v=HfrN1wpN74E) [#30](https://www.youtube.com/watch?v=BPaK71fnur0) |
| 6 | Traces enregistrées | [#33](https://www.youtube.com/watch?v=pux80Scm5uU) |
| 7 (mention) | Custom Points, Mode hybride, Détection trafics | [#41](https://www.youtube.com/watch?v=SE0pmn-9n-U) [#20](https://www.youtube.com/watch?v=SD8dcfpadGI) [#46](https://www.youtube.com/watch?v=0-cStHF6P2g) [#47](https://www.youtube.com/watch?v=jjhPh_TtRC8) |
