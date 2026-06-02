# SDVFR Next

Cours 60 minutes — présentiel

Note: Source : script_cours_60min.md, dérivé des 47 tutoriels vidéo SDVFR. Fil rouge de toute la présentation : tout ce qui se prépare au sol ne se touche plus en vol.

---

## Vue d'ensemble

| Phase | Contenu | Durée |
|---|---|:---:|
| Mise en route | Interface, appareil | 5 min |
| **AU SOL** | Carte | 10 min |
| **AU SOL** | Navigation | 21 min |
| **AU SOL** | Météo | 6 min |
| *Pivot* | *Du sol vers le vol* | 1 min |
| **EN VOL** | Suivi & déroutement | 11 min |
| Après-vol + bonus | Traces, pour aller plus loin | 6 min |

Note: 62 % du temps au sol (préparation), 18 % en vol. C'est volontaire : la prépa porte tout le vol.

---

<!-- .slide: data-background-color="#2d5aa0" -->

# Bloc 1
## Mise en route
5 min

---

## A1 — Tour d'horizon de l'interface

- On arrive **directement sur la carte**, prêt à voler
- En bas : **barre de métriques** (clé en vol)
- À droite : bouton **layers** → couches cartographiques, météo, profils, clair/sombre
- En haut, 4 boutons : **Utilisateur · Navigation · Direct · Options**

Note: À montrer : écran carte principal, pointer chaque zone. Cliquer le bouton layers et faire défiler. Cliquer les 4 boutons du haut. Le bloc le plus utilisé aujourd'hui = Navigation (prépa).

---

## A6 — La gestion des appareils

- Bouton **Utilisateur > Appareils** — un DR400 de démo par défaut
- Fiche : immat, vitesses (croisière/montée/descente), taux, conso, densité carburant, **masse & centrage**
- **Étoile bleue** = appareil par défaut ; appui long pour le changer

> 🔧 **Préparé au sol, plus touché en vol** — la fiche appareil alimente automatiquement les temps du log, le devis carburant et le centrage. On configure l'avion une fois.

Note: À montrer : ouvrir une fiche, faire défiler les champs ; montrer l'étoile bleue, appui long pour changer le défaut.

---

<!-- .slide: data-background-color="#2d5aa0" -->

# Bloc 2
## AU SOL — La carte
10 min

---

## B1 — Carte vectorielle & couches de données

- Même style **quel que soit le pays**
- On **décoche** ce qui ne sert pas : NDB, VOR, hélistations, bases ULM → carte plus lisible (et résultats au clic filtrés)
- **Filtre de plafond** : ne voir que les espaces sous un niveau (ex. FL030)
- Thème **clair / sombre** (vol de nuit)

Note: À montrer : replier les accordéons sur « Couches de données ». Décocher NDB/VOR/hélistations/ULM. Jouer le slider de plafond FL115 → FL030. Basculer le thème.

---

## B2 — Le double tap : explorer les espaces

- Double tap → **empilement complet** des espaces à cet endroit
- En bas : **élévation du sol** ; au-dessus, espaces triés par plancher
- Clic sur un espace → classe, type, plancher/plafond, fréquences, remarques AIP
- **Loupe** → zoome sur l'espace ; bouton **PDF** si SUP AIP

Note: À montrer : double tap dans une zone contrainte (ex. R105B près de Poitiers). Parcourir CTR/TMA/zone régl./SIV/LTA. Cliquer la loupe. Astuce : cliquer dans la vue d'aperçu fait défiler la liste.

---

## B3 — Les informations terrain

- **Simple clic** : code OACI, nom, boutons **PDF (VAC) · + · Direct**
- Bouton **« i »** → 4 onglets :
  - **Pistes & fréquences**
  - **Météo** (METAR / TAF)
  - **Position** (coordonnées, éphémérides)
  - **NOTAM** (VFR par défaut ; IFR via options)

Note: À montrer : clic sur Poitiers, puis bouton « i », défiler les 4 onglets rapidement.

---

## B7 — Les VAC géoréférencées

- Sur un terrain : boutons **APP · ATT · PDC** → la carte se plaque sur le vectoriel
- **Mode Auto VAC** : en zoomant assez, la VAC de tour de piste s'affiche seule
- ⚠️ Synchroniser les documents **Geomap** avant le vol (hors ligne)

> 🔧 **Préparé au sol, plus touché en vol** — Auto-VAC activé au sol → en vol, avec l'autocentrage, les VAC apparaissent toutes seules à l'approche.

Note: À montrer : La Rochelle, activer APP puis ATT. Activer « Mode Auto VAC » dans les options, zoomer/dézoomer.

---

## E1 — Les zones temporaires (mode auto)

- Affichage **automatique** des zones actives : **RTBA** + **ZRT/ZDT/ZIT** (SUP AIP)
- En **rouge** sur la carte, avec n° de SUP AIP
- Réglages : plafond, **délai anticipé 30 min** (zones à venir en **orange**), switch RTBA / SUP AIP
- Double tap → détail des activations + horaires (magenta)

> 🔧 **Préparé au sol, plus touché en vol** — seuils réglés au sol ; en vol on voit juste rouge (actif) et orange (à venir).

Note: À montrer : vue d'ensemble avec zones rouges. Roue crantée > « Paramètres zone temporaire automatique ».

---

<!-- .slide: data-background-color="#2d5aa0" -->

# Bloc 3
## AU SOL — Préparer la navigation
21 min · le cœur de la prépa

---

## D1 — Créer sa route

- **Appui long** sur le terrain de départ → **aimant** sur le point remarquable
- Idem à l'arrivée → segment tracé automatiquement
- **Appui long sur un segment** : le découpe → déplacer le point (aimant)
- Ajout via clic terrain + bouton **« + »** ; suppression : poubelle ou slide dans le log
- Bouton **« Nav »** → écran de navigation et ses onglets

Note: À montrer : créer une nav LFRI → LFBN, ajouter un point intermédiaire par verticale terrain. Tout l'enrichissement se fait via le bouton Nav.

---

## D2 — Le log de navigation

- **Cœur de la préparation** : segments, points de report, CM/RM/TSV/TAV
- **Double-tap en-têtes** : choisir l'info principale (CM ou RM)
- Altitudes : double-tap colonne ZV ; **appui long = même altitude partout**
- Sous chaque point : **fréquences** ; colonne **Observation** = VOR (QDM/QDR auto) ; **Notes** libres

> 🔧 **Préparé au sol, plus touché en vol** — au sol on remplit le log. En vol, **un seul double-tap sur HR au décollage** : toutes les heures estimées et réelles se calculent seules.

Note: À montrer : personnaliser l'affichage, altitude 6500 ft partout puis affiner, fréquence Châteauroux, VOR Poitiers. Vent/dérive affichés sous l'observation (T/H).

---

## D3 — Le profil de navigation

- Onglet **Profil** = vue en coupe des espaces traversés (couleurs/styles)
- **Slider** pour étirer/comprimer ; double-tap → infos
- Modifier l'altitude **en glissant** directement le segment
- **Filtres d'affichage** : classe E, LTA, zones naturelles, aéromodélisme, axes voltige, parachutages
- Affichable **sur la carte** (impact 3D en temps réel)

> 🔧 **Préparé au sol, plus touché en vol** — altitudes **et filtres** réglés ici ; le profil dynamique en vol reprend ces mêmes filtres.

Note: À montrer : réglages du profil avec les filtres par catégorie. Glisser une branche de segment pour changer l'altitude.

---

## D6 / D7 / D8 — Terrains & NOTAM

- Onglet **Route** : terrains dans un couloir (½-largeur **15 NM** par défaut), distance latérale G/D
- Clic terrain → NOTAM, METAR, TAF traduit, VAC PDF
- Onglet **NOTAM** : démo = **66 NOTAM**. Trois filtres :
  - validité < **6 h** · plancher au-dessus de la nav (+1000 ft) · obstacles
- Résultat : **13 NOTAM** prioritaires ; les autres en bas (motif), **rien n'est perdu**
- NOTAM **graphiques** sur la carte = complément, **pas un substitut**

> 🔧 **Préparé au sol, plus touché en vol** — briefing NOTAM figé au sol. En vol, on ne le refait pas.

Note: À montrer : compteur 66, activer les 3 filtres un par un → 13. Activer la couche NOTAM graphiques.

---

## D4 — Le devis carburant

- Onglet **Carburant** : rappel départ/arrivée/distance/temps/conso
- Valeurs par défaut modifiables : roulage 2×10 min, délestage 100 min, dégagement 15 min, finale 30 min
- Roue crantée → régler ses **valeurs par défaut**
- **Gestion intelligente des dégagements** : sélection multi-terrains → **pire cas** (ex. 26 min au lieu de 15)

> 🔧 **Préparé au sol, plus touché en vol** — sélection des dégagements et pire cas calculés ici, pas en vol.

Note: À montrer : « Sélectionner » trois terrains, voir le temps recalculé. Appui long sur le bouton bleu pour supprimer un dégagement.

---

## D9 — Le dossier de vol

- Roue crantée du log > **« Générer le dossier de vol »** → PDF complet par notification
- Récupéré dans **Utilisateur > Doc perso**
- Contient tout : log, devis, centrage, terrains route (METAR/TAF/NOTAM), NOTAM filtrés, Wintem, TNI
- Utilitaires : **Inverser**, Sauvegarder/Charger, **Exporter** (GPX, KML, PLN, FPL)

Note: À montrer : générer le PDF, le récupérer dans Doc perso, défiler. Mettre la prépa « dans le marbre » — intérêt réglementaire. La fonction Direct se verra en vol.

---

<!-- .slide: data-background-color="#2d5aa0" -->

# Bloc 4
## AU SOL — Météo
6 min

---

## C1 + C2 — METAR et TAF

- **METAR** : pastilles de couleur (toute l'Europe). Détail : **ancienneté**, couleur = catégorie de vol, brut + décodé
- Vent > 20 kt → **manche à air** sur la pastille
- **METAR et TAF ne s'affichent pas en même temps** (choix volontaire)
- **TAF** : 2e couleur = **pire condition** annoncée (BECMG/TEMPO/PROB)
- Pas de station → terrain le plus proche, avec distance

Note: À montrer : activer METAR, cliquer un terrain. Désactiver, activer TAF, montrer les deux couleurs. Pratique pour vérifier les dégagements sélectionnés.

---

## C4 — Les Wintem (vents & T° en altitude)

- Niveaux **FL005 → FL150**, tranches horaires sur 24 h
- L'appli **met en évidence la tranche la plus proche** de l'heure courante
- Clic barbule → direction, vitesse (kt), température (le **« + »** apparaît si positive)

> 🔧 **Préparé au sol, plus touché en vol** — les Wintem ajustent **automatiquement** les temps du log. En vol : dérive et vent effectif dans la barre, sans intervention.

Note: À montrer : sélectionner FL030 à 15Z, cliquer une barbule.

---

## C6 — Le radar météo & satellite

- Bandeau bas : **Play**, slider, **Radar / Satellite**, horaires UTC + locale
- Couleurs : bleu (faible) → jaune → rouge (intense)
- **Play** rejoue le passé vers maintenant ; en radar, **~20 min de prévision**
- Satellite : couverture nuageuse, **pas de prévision**

Note: À montrer : activer Radar, zoomer sur une zone de précipitations, lancer l'animation, pause + slider. Fin de la phase de préparation au sol.

---

<!-- .slide: data-background-color="#1a1a2e" -->

# ⏸ PIVOT
## Du sol vers le vol

**Tout ça, vous ne le refaites plus en vol.**

Note: Faire le point. 37 min au sol : avion, route, log, profil, terrains, 66→13 NOTAM, dégagements/pire cas, Auto-VAC + zones temp + profil dynamique, PDF figé, météo. Règle d'or : préparation au sol = vol serein. Si vous fouillez les menus en vol, vous avez sauté une étape au sol.

---

<!-- .slide: data-background-color="#2d5aa0" -->

# Bloc 5
## EN VOL
11 min · on regarde, on ne manipule plus

---

## F1 — Vue d'ensemble du suivi de vol

- **Icône appareil** (avion/hélico, couleur — réglé au sol)
- **Vecteur vitesse** + bulles de temps **2 · 3 · 5 · 10 min**
- **Autocentrage** intelligent : montre un max de carte **devant** vous
- **Orientation de carte** : Nord en haut ou route en haut ; labels **toujours lisibles** (vectoriel)

Note: À montrer : bulles de temps, autocentrage en virage, orientation de carte qui pivote. C'est là que SDVFR prend tout son sens.

---

## F2 — Le point courant & la navigation

- Point courant en **vert**, les autres en **rouge** ; bas-droite : nom, distance, temps
- **Passage automatique** au point suivant : < 2 NM **OU** < 1 min 30 → **rien à faire**
- Pour sauter un point, **2 gestes autorisés seulement** :
  - **① Carte** : taper le point → bouton **drapeau**
  - **② Log** : double-tap colonne **HE** du point voulu

Note: À montrer : point vert/rouge, passage auto. Forcer le point courant via drapeau, puis via HE. Ces deux gestes suffisent à 99 % des cas.

---

## D10 — Le déroutement Direct en vol

- Besoin de rejoindre un terrain **hors nav** (météo, ATC, plan modifié)
- Bouton **Direct** (flèche) → recherche OACI / nom / type
- **« Voir »** (déplace la carte) vs **« Dérouter »** (nav directe en ligne droite)
- Recherche par **commune** si connexion internet

> 🔧 **L'exception au « préparé au sol »** — Direct est l'**outil de secours en vol**. Si vous l'utilisez, c'est que la situation a changé.

Note: À montrer : ouvrir Direct, rechercher un terrain, « Voir » puis « Dérouter ».

---

## F3 — La barre inférieure

- Par défaut : vitesse sol GPS, altitude GPS, route GPS, route vers point courant, + nom/distance/temps
- **Appui long** → réglages, **6 emplacements** configurables
- Métriques riches : vitesse, altitude, Vz, routes, hauteur estimée… et surtout **vent estimé, dérive, vent effectif** (Wintem embarqués)
- ETA et temps de vol estimé ; couleurs personnalisables ; barre masquable

> 🔧 **Préparé au sol, plus touché en vol** — 6 métriques choisies au sol. En vol, on **lit**, on ne modifie pas.

Note: À montrer : appui long, changer une métrique, montrer vent/dérive/vent effectif (ex. 23 kt de face H, dérive gauche 11°).

---

## F4 — Le profil dynamique

- Activé dans le panneau latéral → profil en bas de carte
- Avion à gauche, **relief + espaces devant vous** ; bulles 2/3/5/10 min ; **20 NM** par défaut
- Réglages (appui long) : **marge** au-dessus, **distance** devant (20/40/60 NM), rafraîchissement (3 s)
- **Mêmes filtres qu'en D3** ; **interactif** : tap = surbrillance carte, double-tap = infos + zoom

> 🔧 **Préparé au sol, plus touché en vol** — réglé au sol ; en vol, il **se met à jour seul**.

Note: À montrer : activer le profil de vol, appui long pour les réglages, taper/double-taper une zone.

---

<!-- .slide: data-background-color="#2d5aa0" -->

# Bloc 6
## Après le vol — Traces
3 min

---

## G1 — Traces enregistrées

- Trait **jaune** en temps réel ; l'appli fait **boîte noire** (comptage d'heures, débriefing)
- Réglages (Options > Options des traces) : limites taxi/croisière, distance (30 m sol / 500 m air), virage 5°, alti 100 ft, fermeture 5 min
- Clôture : auto (5 min sans GPS), fermeture appli, ou manuelle
- **Visualisation** : œil → carte, **3D** à deux doigts ; export **GPX / KML**

Note: À montrer : onglet Trace, œil pour afficher, bascule 3D, appui long pour exporter. KML pour Google Earth.

---

<!-- .slide: data-background-color="#2d5aa0" -->

# Bloc 7
## Pour aller plus loin
2 min — mention (vidéos dédiées)

---

## Pour aller plus loin

- **Points personnalisés** — repères perso, forme/couleur/type, import/export CSV
- **Mode hybride** — cartes additionnelles (OACI image, SIA 250, FOCA suisse) superposées au vectoriel
- **Détection de trafic** — boîtier GDL 90 (Stratux, PilotAware, SkyEcho) ou **SafeSky** sans boîtier ; losanges + tendance C/D

Note: À montrer : juste évoquer, pas de démo. Vidéos correspondantes sur la chaîne YouTube SDVFR.

---

<!-- .slide: data-background-color="#1a1a2e" -->

## La règle d'or

> **Au sol** : on configure, on filtre, on prépare.
> **En vol** : on **regarde** ce que l'appli fait pour soi.

Suivi automatique · vent & dérive · profil dynamique · VAC à l'approche · zones temporaires en orange

**Seule exception en vol : le bouton Direct (Dérouter).**

Note: Garder la tête en dehors du cockpit. Si vous fouillez les menus en vol, vous avez sauté une étape au sol.

---

# Merci

Playlist **« Tutoriels SDVFR Next »** sur YouTube

Questions → **info@skydreamsoft.fr**

Note: Fin de la présentation.
