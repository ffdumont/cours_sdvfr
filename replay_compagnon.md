# Replay commenté du cours SDVFR Next

> Compagnon du **replay de la session en présentiel** (6 juin 2026, 1 h 31).
> Le cours est découpé en démonstrations : chacune renvoie au **moment exact de la vidéo** (cliquez sur l'horodatage pour y sauter dans le lecteur ci-dessus) et à la **fiche fonctionnalité** correspondante du [plan du cours](index.html).

Le cours suit la logique réelle du vol, en **deux temps** :

1. **AU SOL — préparer.** L'essentiel de la séance. On configure tout ce qui peut l'être ; *« on règle ça maintenant, on n'y touche plus en vol »*.
2. **EN VOL.** Court. Le pilote **regarde** ce que l'appli fait pour lui et minimise les interactions pour garder les yeux dehors.

---

## Mise en route

### 1. Tour d'horizon de l'interface
**[▶ 02:16](#t=136)** · Fiche : [A1](index.html#A1)

François situe les repères de l'écran de démarrage : en haut, les **4 boutons** (menu utilisateur, gestion de la route, fonction *Direct To* — la seule prévue pour le vol, et l'engrenage des réglages) ; en dessous, le **bandeau des métriques** (détaillé plus tard en vol) ; au centre, la **carte**. Deux ordinateurs sont utilisés : l'un émet un signal GPS simulé pour rejouer un vol réel et montrer le comportement « en l'air ».

### 2. Menu utilisateur & fiche appareil
**[▶ 03:35](#t=215)** · Fiche : [A6](index.html#A6)

La toute première configuration à faire : **renseigner son appareil**. On reprend dans le manuel de vol les vitesses (croisière, montée, descente), la consommation et les **points du centrogramme** (couples bras de levier / poids définissant l'enveloppe), plus la masse à vide et les bras de levier équipage/bagages. Si l'on a plusieurs avions, on en désigne un **par défaut** repris à chaque nouvelle navigation. *« On associe la nav à un appareil, sinon tout est faux. »*

---

## AU SOL — Préparer

### 3. La carte vectorielle : le concept
**[▶ 06:23](#t=383)** · Fiche : [B1](index.html#B1)

La grande différence de SDVFR **Next** : la carte est **vectorielle**, pas une simple numérisation de carte papier. Chaque information est un objet vivant, configurable. Deux avantages immédiats : quand on tourne la carte, **les écritures restent horizontales** ; et l'affichage est **entièrement configurable** couche par couche — à faire **au sol**.

### 4. Configurer les couches : auto-centrage & orientation
**[▶ 07:16](#t=436)** · Fiche : [B1](index.html#B1)

Le bouton des couches (en bas à droite) déploie la configuration. **Auto-centrage** : la carte suit l'avion en vol (à désactiver parfois à l'approche pour figer la vue du tour de piste). **Orientation** : Nord fixe ou rotation 2 doigts dans le sens de la route — au choix. *« L'auto-centrage fait partie des choses à vérifier avant de décoller, sinon en vol la carte reste au point de départ. »*

### 5. Profil de vol vs profil de navigation
**[▶ 10:28](#t=628)** · Fiches : [D3](index.html#D3) · [F4](index.html#F4)

Distinction clé : le **profil de navigation** (au sol) affiche la coupe verticale de toute la route préparée ; le **profil de vol** (en vol) affiche ce qui arrive devant l'avion depuis la position courante. François charge la navigation exemple **Les Mureaux → Châteauneuf-sur-Cher** (~1 h 20) qui servira de fil rouge. *« Au moment d'être sur le parking, pensez à basculer sur profil de vol. »*

### 6. METAR & TAF sur la carte
**[▶ 12:38](#t=758)** · Fiches : [C1](index.html#C1) · [C2](index.html#C2)

Affichage des stations **METAR** avec le code couleur standard (vert VFR, rouge IFR, violet marginal) à l'instant T. Avec les **TAF**, la pastille est **partagée** : condition actuelle + évolution (ex. VFR maintenant puis IFR). Rappel : ces données s'actualisent en temps réel et nécessitent une connexion internet (carte SIM ou partage de connexion en vol).

### 7. Radar météo & satellite
**[▶ 13:58](#t=838)** · Fiche : [C6](index.html#C6)

À consulter **avant de partir** pour repérer les précipitations qui arrivent. Le radar montre des *snapshots* de l'heure passée (il n'anticipe pas le futur) ; la vue satellite est un complément (parfois capricieuse). *« S'il y a un truc qui nous vient dessus, ce n'est pas le moment de partir. »*

### 8. Fonds de carte (OACI, SIA, AbOACI)
**[▶ 15:19](#t=919)** · Fiche : [B4](index.html#B4)

On peut acheter et activer des fonds de carte image. SDVFR fournit la **SD-OACI** vectorielle ; la SIA 1/1 000 000 et la 250 k Paris sont disponibles. François recommande de **rester sur la carte vectorielle livrée** : un fond image n'est pas vectoriel et duplique les informations sans valeur ajoutée si on superpose les couches.

### 9. Filtre de plafond & zones temporaires
**[▶ 16:14](#t=974)** · Fiches : [E1](index.html#E1) · [B1](index.html#B1)

Le **filtre de plafond** masque les zones définies au-dessus de votre altitude pratique (ex. FL60) — très utile en ce moment avec les nombreuses zones militaires en altitude. La couche **zones temporaires** affiche les ZRT du SUP AIP (avec filtre plafond et dates). **Attention :** les ZRT définies par NOTAM (activées au dernier moment) **n'y figurent pas** — il faut continuer à lire les NOTAM. Référence conseillée : le site bénévole **sup-aip.fr**.

### 10. NOTAM graphiques & leurs limites
**[▶ 18:30](#t=1110)** · Fiche : [D8](index.html#D8)

La couche **NOTAM graphiques** dessine des cercles sur la carte, mais François la juge **peu fiable** : l'affichage est intermittent et SDVFR ne restitue que le point d'application + rayon, **pas le polygone réel** défini dans le NOTAM. Conclusion : pour préparer, vérifier le jour même sur SUP AIP / Sofia Briefing plutôt que de s'y fier.

### 11. Les couches d'objets : configurer sans surcharger
**[▶ 21:09](#t=1269)** · Fiche : [B1](index.html#B1)

On active objet par objet selon son profil (aérodromes, bases ULM, points VFR, stations…). Le piège : **tout activer surcharge la carte** et fait perdre en lisibilité. *« C'est une activité qu'on fait au sol ; intégrez à votre checklist que SDVFR est bien configuré. J'ai déjà décollé en ayant oublié d'activer mon profil de vol — et on le fait en vol, ce qu'on veut éviter. »*

### 12. Personnaliser la barre supérieure
**[▶ 23:21](#t=1401)** · Fiche : [A2](index.html#A2)

Dans les paramètres, on peut ajouter des **raccourcis** dans la barre du haut (profils, etc.) pour éviter de passer par le menu des couches. François nuance : en vol, **garder une interface épurée** ; par défaut la seule fonction utilisée en vol est *Direct To*. Certains raccourcis ciblés (ex. Auto-VAC) restent pertinents.

### 13. Le profil de navigation : configuration (appui long)
**[▶ 27:22](#t=1642)** · Fiche : [D3](index.html#D3)

Geste **non intuitif** : on configure le profil par un **appui long** dessus. On y règle la marge (ex. 1000 ft), l'horizon (ex. 15 NM), la fréquence de rafraîchissement, et surtout **quelles catégories de zones afficher** : TMA/CTA, classes A, zones D/P/R, RTBA, zones temporaires, et les **SIV** (pour savoir quand on croise un secteur d'info vol). Conseil : tout activer au début, quitte à épurer ensuite. La config carte et la config profil sont **découplées** (le profil sert en vol, on le veut le plus léger possible).

### 14. Interroger l'empilement vertical des espaces
**[▶ 32:21](#t=1941)** · Fiche : [B2](index.html#B2)

En **double-tap** sur la carte (ou un clic n'importe où), on obtient l'**empilement de tous les espaces** sur la verticale : SIV, TMA, classes E… Un tap sur un bloc ouvre sa définition (classe, plafond/plancher). Utile **pour analyser pendant la préparation**, mais à ne pas utiliser en vol (représentation décalée pour éviter les superpositions, donc peu lisible en l'air).

### 15. Zones urbaines & règles de survol
**[▶ 36:51](#t=2211)** · Fiche : [B1](index.html#B1)

La carte vectorielle affiche les **zones urbaines** avec un code couleur lié aux hauteurs minimales de survol (500 m / 1000 m / 1500 m selon l'agglomération), ainsi que lignes HT, restrictions de survol et zones naturelles (Natura 2000). **Limite importante :** SDVFR **ne calcule pas** le statut « agglomération de plus de X » — au pilote de connaître ses hauteurs réglementaires.

### 16. VAC & informations terrain (TAP sur un aérodrome)
**[▶ 38:59](#t=2339)** · Fiches : [B3](index.html#B3) · [B8](index.html#B8)

Un **TAP sur un aérodrome** ouvre des bulles : **PDF** (la carte VAC), **i** (infos issues des bases SIA : pistes, fréquences), et les **NOTAM**. Point souvent oublié, soulevé en séance : pour que le PDF VAC s'affiche, l'aérodrome doit être **dans le filtre d'affichage** ET les documents à jour (classeur « documents » du profil, mise à jour en Wifi à la maison). François réaffirme que les NOTAM se préparent sur **Sofia Briefing**, seule source officielle complète.

### 17. Auto-VAC
**[▶ 43:48](#t=2628)** · Fiche : [B7](index.html#B7)

Quand on zoome suffisamment sur un terrain et qu'Auto-VAC est actif, la **carte VAC s'affiche en surimpression** automatiquement. Très utile quand le **circuit de piste est publié** (se rassurer qu'on est bien dans le circuit). Réserve : ça masque parfois le fond ; c'est un bon candidat à un raccourci pour l'activer/désactiver vite.

### 18. Créer une route : appui long & aimant
**[▶ 45:14](#t=2714)** · Fiche : [D1](index.html#D1)

Pour tracer la route, **appui long** pour poser le point de départ : SDVFR cherche les éléments alentour et **aimante** le point sur l'aérodrome / point VFR choisi. Sur la nav exemple, départ aimanté sur **Les Mureaux**, arrivée sur **Châteauneuf-sur-Cher (LFFQ)**. Une ligne droite est créée entre les deux.

### 19. Le log de nav & les altitudes par segment
**[▶ 48:32](#t=2912)** · Fiches : [D2](index.html#D2) · [D3](index.html#D3)

Le bouton route génère le **log**. Un **appui long sur la colonne Z vol** propose une altitude pour toute la nav (ex. 3000 ft). On crée ensuite des **points de report** par appui long sur la route (points tournants verts ; départ/arrivée rouges). On fixe l'**altitude de chaque segment** en tirant le palier sur le profil — ou directement depuis le log si la poignée du profil est « coquine ».

### 20. Renommer les points & gérer les zones
**[▶ 51:10](#t=3070)** · Fiche : [D2](index.html#D2)

Les points peuvent être **renommés** (pratique pour les reporter ensuite dans un GPS). En tirant les paliers, on ajuste l'altitude pour éviter les zones traversées (ex. zones de Chevreuse : descendre à ~1400 ft, puis remonter à 3000 ft après Étampes). Cas piégeux montré : la **ZRT « Veille parisienne » (LF-R 324)** apparaît comme une fausse classe A et ne peut pas être masquée isolément.

### 21. Épurer le profil : filtrer les SIV
**[▶ 54:22](#t=3262)** · Fiche : [D3](index.html#D3)

Les **SIV** étant très étendus (Paris Nord/Sud), les afficher dans le profil le surcharge. François préfère les **retirer du profil** (il les a déjà sur le log pour les contacts radio) et n'y garder que l'essentiel — classes D, classes A, R activées. *« Moins il y a d'information, plus l'information ressort. »*

### 22. Altitude minimale de survol (le code rouge)
**[▶ 56:36](#t=3396)** · Fiche : [D3](index.html#D3)

Quand un segment passe **sous l'altitude minimale calculée**, le profil le colore en **rouge**. Démonstration sur une route vers Le Havre (segment à 900 ft → rouge ; seuil constaté ~1000 ft). **Réserve majeure :** ce calcul **ne tient pas compte des agglomérations** — François recommande de calculer soi-même ses hauteurs mini de survol.

### 23. Sauvegarder, inverser & exporter la route
**[▶ 62:27](#t=3747)** · Fiches : [D2](index.html#D2) · [D9](index.html#D9) · [D11](index.html#D11)

La gestion de route passe par l'**engrenage** (peu intuitif, source de questions fréquentes) : inverser, supprimer, **sauvegarder / charger**. La route remonte sur les **serveurs SDVFR** (rechargeable sur un autre appareil). On peut aussi **exporter** (ex. format FPL pour un Garmin) — usage avancé.

---

## Pivot — Du sol vers le vol
**[▶ 63:45](#t=3825)**

> *« Tout ce qu'on vient de faire — choisir l'avion, tracer la route, remplir le log, fixer les altitudes, sélectionner les dégagements, configurer Auto-VAC, consulter la météo — vous ne le refaites plus en vol. La règle d'or : préparation au sol = vol serein. Maintenant on décolle et on regarde ce que l'appli fait pour vous. »*

---

## EN VOL

### 24. Passer en vol : profil de vol & barre de métriques
**[▶ 63:45](#t=3825)** · Fiches : [F1](index.html#F1) · [F3](index.html#F3) · [F4](index.html#F4)

La nav exemple est rejouée : l'avion est au roulage sur la 10 (visible sur fond satellite). On bascule sur le **profil de vol**. La **barre de métriques** affiche position, route, cap magnétique, vitesse ; un appui dessus fait défiler les affichages (dérive et **vent estimé** déduits de la route sol). Le profil affiche des **bulles de temps** (où serez-vous dans 2/3/5 min) et un vecteur.

### 25. Suivi de vol & point courant
**[▶ 67:18](#t=4038)** · Fiche : [F2](index.html#F2)

On suit la progression vers Chavenay puis la zone « chaude » de Paris 10. Le **passage de point** est en principe automatique (un double-tap force le point courant). François insiste : SDVFR est **une aide à la navigation, pas un pilote auto** — *« moins vous y touchez, mieux vous vous portez »*. Il y a toujours un écart visible entre la route prévue et la route réelle ; on l'observe, on ne le corrige pas dans l'appli.

### 26. L'horizon du profil dynamique
**[▶ 71:08](#t=4268)** · Fiche : [F4](index.html#F4)

SDVFR **ne génère pas d'alerte** (contrairement à SkyDemon, jugé « énervant » avec ses alertes incessantes) mais rend les choses **visibles** : on voit qu'on entre dans la TMA d'Orléans dans 30 s. L'horizon du profil (ex. 15 ou 30 NM) se **configure au sol** et est **découplé du zoom** de la carte, pour donner un aperçu du long-cours.

### 27. Déroutement : la fonction Direct
**[▶ 73:23](#t=4403)** · Fiche : [D10](index.html#D10)

**Le seul geste « actif » utile en vol.** *Direct To* cherche intelligemment les aérodromes autour, les classe par distance, et propose un « faire direct » — déclenchable depuis le menu **ou directement sur la carte**. Démonstration des limites (un terrain privé non public n'est pas cliquable). *« Ça doit prendre quelques secondes, on ne passe pas son temps sur la tablette. »*

### 28. Devis carburant & dégagements
**[▶ 76:35](#t=4595)** · Fiche : [D4](index.html#D4)

Dans le menu carburant, on **sélectionne des aérodromes de dégagement** parmi ceux proposés sur la route (ex. Étampes, Bourges) ; SDVFR **recalcule la réserve de dégagement** en conséquence et l'intègre au devis. *« Même si on est censé faire son devis soi-même, c'est bien fait. »*

### 29. Arrivée sur le terrain & auto-VAC
**[▶ 78:25](#t=4705)** · Fiches : [B7](index.html#B7) · [F2](index.html#F2)

À l'arrivée (Châteauneuf, circuit non publié), peu d'aide automatique — mais on **repère la manche à air**. On désactive l'**auto-centrage** pour figer la vue de la verticale. Rappel : à l'arrivée on doit avoir sa VAC de destination sous les yeux ; si le circuit est publié, la VAC géoréférencée aide.

### 30. Points personnalisés : matérialiser son circuit
**[▶ 79:46](#t=4786)** · Fiches : [H1](index.html#H1) · [F1](index.html#F1)

Astuce de François pour les terrains qu'il ne connaît pas : créer des **points personnalisés** matérialisant son circuit standard (ex. « FU-D08-Eco » = fin de vent arrière, début de finale avec l'altitude visée), car les flèches des VAC sans circuit publié sont trompeuses. Combiné aux **bulles de temps**, cela permet d'anticiper l'annonce radio (« à 4 min de tel point »).

### 31. Wintem & TEMSI Météo France
**[▶ 82:30](#t=4950)** · Fiches : [C4](index.html#C4) · [C5](index.html#C5)

Dans les infos météo, les **vrais Wintem Météo France** par niveau de vol : on choisit son niveau (ex. 3000 ft → FL030/050), la validité en cours apparaît en rouge, un clic donne vent et température exacts (ex. 27 kt du 263). *« Bien mieux que d'imprimer le PDF tout petit d'Aeroweb. »* Les **TEMSI** Météo France sont accessibles de la même façon.

---

## Après le vol & divers

### 32. Traces enregistrées & centralisation
**[▶ 84:26](#t=5066)** · Fiche : [G1](index.html#G1)

Chaque vol s'enregistre en **trace** (menu utilisateur → traces). On peut revisualiser n'importe quelle trace et, par **appui long**, demander sa **synchronisation** sur le serveur SDVFR (conservée pour une nouvelle tablette). Logs de nav et avions sont déjà centralisés ; les traces, elles, doivent être remontées **explicitement**.

### 33. Transférer une nav (compte club) & export GPX
**[▶ 86:14](#t=5174)** · Fiche : [D11](index.html#D11)

Pour partager une nav avec la tablette du club (compte SDVFR commun), le plus simple est de la **préparer directement** sur cette tablette. Sinon, **export GPX** envoyé par Gmail vers l'adresse du club, puis rechargé. Démonstration de l'export (GPX = format universel de points GPS).

### 34. Mises en garde finales
**[▶ 89:33](#t=5373)**

Trois rappels pour conclure : la **qualité du signal GPS** (brouillage / leurrage en hausse), la **surchauffe** de la tablette (arrêt vers 51 °C en plein soleil), et surtout que SDVFR reste **une aide à la navigation** — *« il est hors de question de passer son temps de pilote à pianoter dessus ; tout se prépare au sol. »*

---

> **Source :** transcript automatique de la session Teams du 6 juin 2026, synthétisé par démonstration. Les horodatages renvoient au moment correspondant de l'enregistrement. Voir aussi le [plan complet du cours](index.html), le [script 60 min](script_60min.html) et le [diaporama](slides_60min.html).
