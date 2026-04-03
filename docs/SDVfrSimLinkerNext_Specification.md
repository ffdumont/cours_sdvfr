# SDVfrSimLinkerNext - Spécification Technique

## 1. Informations Générales

| Propriété | Valeur |
|-----------|--------|
| **Nom** | SDVfrSimLinkerNext |
| **Développeur** | SkyDreamSoft |
| **Version** | 1.0.0.0 |
| **Framework** | .NET Core 3.1 |
| **Interface** | WPF (Windows Presentation Foundation) |
| **Plateforme** | Windows |
| **Dépendance** | SimConnect SDK (Microsoft Flight Simulator) |

## 2. Description Fonctionnelle

SDVfrSimLinkerNext est une application pont (bridge) qui :

1. Se connecte aux simulateurs de vol Microsoft (FSX, Prepar3D, MSFS 2020) via l'API SimConnect
2. Extrait les données de position et d'attitude de l'aéronef en temps réel
3. Transmet ces données via UDP vers l'application SDVFR (carte VFR électronique) tournant sur un appareil distant (tablette, iPad, etc.)

## 3. Architecture

```
┌─────────────────────────┐
│    Flight Simulator     │
│  (FSX / P3D / MSFS2020) │
└───────────┬─────────────┘
            │ SimConnect API
            │ (Named Pipe / TCP)
            ▼
┌─────────────────────────┐
│   SDVfrSimLinkerNext    │
│                         │
│  ┌───────────────────┐  │
│  │  SimConnectFSX    │  │
│  │  (FlightConnect)  │  │
│  └─────────┬─────────┘  │
│            │            │
│  ┌─────────▼─────────┐  │
│  │   FlightStatus    │  │
│  │   (Data Model)    │  │
│  └─────────┬─────────┘  │
│            │            │
│  ┌─────────▼─────────┐  │
│  │    UDP Client     │  │
│  │  (Broadcast/IP)   │  │
│  └───────────────────┘  │
└───────────┬─────────────┘
            │ UDP Port 49002
            │ Protocole XGPS/XATT
            ▼
┌─────────────────────────┐
│        SDVFR            │
│   (iPad / Tablette)     │
│                         │
│   Carte VFR avec        │
│   position temps réel   │
└─────────────────────────┘
```

## 4. Protocole de Communication

### 4.1 Transport

| Paramètre | Valeur |
|-----------|--------|
| **Protocole** | UDP (User Datagram Protocol) |
| **Port** | 49002 |
| **Encodage** | UTF-8 |
| **Format numérique** | InvariantCulture (séparateur décimal : point) |

### 4.2 Modes de Transmission

#### Mode Broadcast
- Envoi sur l'adresse de broadcast du réseau local
- Toutes les machines du réseau reçoivent les paquets
- Utilisé par défaut quand aucune IP n'est spécifiée

#### Mode IP (Unicast)
- Envoi vers une adresse IP spécifique
- Configuration manuelle dans l'interface
- Recommandé pour une transmission plus fiable

### 4.3 Découverte Automatique de l'Émetteur

SDVFR détecte automatiquement l'adresse IP de la machine exécutant SDVfrSimLinkerNext grâce au mécanisme standard du protocole UDP.

#### Principe

Chaque paquet UDP contient dans son en-tête l'adresse IP source de l'émetteur. Lorsque SDVFR reçoit un paquet, le système d'exploitation lui fournit automatiquement cette information.

```
┌─────────────────────────────┐
│  SDVfrSimLinkerNext         │
│  IP: 192.168.0.21           │
└─────────────┬───────────────┘
              │
              │ Paquet UDP
              │ ┌─────────────────────────────┐
              │ │ En-tête IP                  │
              │ │  - Source: 192.168.0.21     │
              │ │  - Dest: 255.255.255.255    │
              │ ├─────────────────────────────┤
              │ │ En-tête UDP                 │
              │ │  - Port src: 49152          │
              │ │  - Port dst: 49002          │
              │ ├─────────────────────────────┤
              │ │ Données                     │
              │ │  XGPS2,48.85,2.35,...       │
              │ └─────────────────────────────┘
              ▼
       ═══════════════════════
         Réseau (Broadcast)
       ═══════════════════════
              │
              ▼
┌─────────────────────────────┐
│  SDVFR (iPad/Tablette)      │
│  Écoute sur port 49002      │
│                             │
│  recvfrom() retourne:       │
│  ┌─────────────────────┐    │
│  │ data: "XGPS2,..."   │    │
│  │ addr: 192.168.0.21  │◄───┼── IP source extraite
│  └─────────────────────┘    │    automatiquement
│                             │
│  → Affiche: "Connecté à     │
│     192.168.0.21"           │
└─────────────────────────────┘
```

#### Flux de Découverte

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  SDVfrSimLinker  │     │     Réseau       │     │      SDVFR       │
└────────┬─────────┘     └────────┬─────────┘     └────────┬─────────┘
         │                        │                        │
         │  1. Envoi broadcast    │                        │
         │  UDP src=192.168.0.21  │                        │
         ├───────────────────────►│                        │
         │                        │  2. Diffusion          │
         │                        ├───────────────────────►│
         │                        │                        │
         │                        │           3. Réception │
         │                        │              recvfrom()│
         │                        │                        │
         │                        │  4. Extraction IP src  │
         │                        │     = 192.168.0.21     │
         │                        │                        │
         │                        │  5. Affichage IP dans  │
         │                        │     l'interface SDVFR  │
         │                        │                        │
```

#### Implémentation Côté Récepteur

```python
import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind(("0.0.0.0", 49002))

while True:
    # recvfrom() retourne les données ET l'adresse source
    data, (source_ip, source_port) = sock.recvfrom(1024)

    # source_ip contient l'IP de l'émetteur (ex: "192.168.0.21")
    print(f"Données reçues de {source_ip}:{source_port}")
    print(f"Message: {data.decode('utf-8')}")
```

#### Utilisation Pratique

1. **Découverte** : SDVFR écoute en broadcast et affiche l'IP source du premier paquet reçu
2. **Affichage** : L'utilisateur voit l'IP de l'émetteur dans l'interface SDVFR
3. **Optimisation** : L'utilisateur peut recopier cette IP dans SDVfrSimLinkerNext pour passer en mode unicast (plus fiable)

> **Note** : Si la réception est irrégulière en mode broadcast, la documentation recommande de configurer explicitement l'IP dans le linker pour utiliser le mode unicast.

### 4.4 Format des Messages

L'application utilise le protocole **X-Plane GPS/Attitude**, un standard de facto pour la communication entre simulateurs et applications de navigation.

#### 4.4.1 Message XGPS2 (Position GPS)

**Format :**
```
XGPS2,{longitude},{latitude},{altitude},{heading},{groundSpeed}
```

**Champs :**

| Index | Nom | Type | Unité | Description |
|-------|-----|------|-------|-------------|
| 0 | Préfixe | string | - | Identifiant du message : `XGPS2` |
| 1 | longitude | double | degrés | Longitude en degrés décimaux (positif = Est, négatif = Ouest) |
| 2 | latitude | double | degrés | Latitude en degrés décimaux (positif = Nord, négatif = Sud) |
| 3 | altitude | double | mètres | Altitude MSL (Mean Sea Level) |
| 4 | heading | double | degrés | Cap magnétique (0-360°) |
| 5 | groundSpeed | double | m/s | Vitesse sol en mètres par seconde |

> **Attention** : Ce format suit la convention X-Plane (longitude avant latitude), à l'inverse de la convention GPS habituelle.

**Exemple :**
```
XGPS2,2.352222,48.856614,1524.0,270.5,82.3
```

*Interprétation : Aéronef au-dessus de Paris (lon 2.35°E, lat 48.86°N), altitude 1524m, cap 270° (Ouest), vitesse sol 82.3 m/s (~160 kts)*

#### 4.4.2 Message XATT2 (Attitude)

**Format :**
```
XATT2,{trueHeading},{pitch},{bank}
```

**Champs :**

| Index | Nom | Type | Unité | Description |
|-------|-----|------|-------|-------------|
| 0 | Préfixe | string | - | Identifiant du message : `XATT2` |
| 1 | trueHeading | double | degrés | Cap vrai (0-360°) |
| 2 | pitch | double | degrés | Assiette (positif = nez en haut, négatif = nez en bas) |
| 3 | bank | double | degrés | Inclinaison (positif = aile droite basse, négatif = aile gauche basse) |

**Exemple :**
```
XATT2,268.3,5.2,-15.0
```

*Interprétation : Cap vrai 268.3°, assiette cabrée de 5.2°, virage à gauche avec 15° d'inclinaison*

### 4.5 Fréquence de Transmission

Les messages sont envoyés à chaque mise à jour reçue de SimConnect, typiquement :
- **Fréquence nominale** : ~20 Hz (toutes les 50 ms)
- **Variable** selon la charge du simulateur

### 4.6 Séquence de Messages

```
┌──────────────────────────────────────────────────────────┐
│ Trame UDP typique                                        │
├──────────────────────────────────────────────────────────┤
│ XGPS2,48.856614,2.352222,1524.0,270.5,82.3              │
│ XATT2,268.3,5.2,-15.0                                   │
└──────────────────────────────────────────────────────────┘
       │
       │ ~50ms plus tard
       ▼
┌──────────────────────────────────────────────────────────┐
│ XGPS2,48.856701,2.351988,1526.0,271.0,82.5              │
│ XATT2,269.0,4.8,-14.5                                   │
└──────────────────────────────────────────────────────────┘
```

## 5. Modèle de Données

### 5.1 Classe FlightStatus

Structure interne représentant l'état de l'aéronef :

```csharp
public class FlightStatus
{
    // Position
    public double Latitude { get; set; }      // Degrés décimaux
    public double Longitude { get; set; }     // Degrés décimaux
    public double Altitude { get; set; }      // Mètres MSL

    // Vitesse
    public double GroundSpeed { get; set; }   // Knots (converti en m/s à l'envoi)

    // Orientation
    public double Heading { get; set; }       // Cap magnétique (degrés)
    public double TrueHeading { get; set; }   // Cap vrai (degrés)

    // Attitude
    public double Pitch { get; set; }         // Assiette (degrés)
    public double Bank { get; set; }          // Inclinaison (degrés)
}
```

### 5.2 Conversions

| Donnée | Entrée (SimConnect) | Sortie (UDP) | Facteur |
|--------|---------------------|--------------|---------|
| Vitesse sol | Knots | m/s | × 0.514444 |
| Altitude | Pieds | Mètres | × 0.3048 |
| Angles | Degrés | Degrés | × 1 |

## 6. Interface SimConnect

### 6.1 Variables Demandées

L'application s'abonne aux variables SimConnect suivantes :

| Variable SimConnect | Unité | Mapping |
|---------------------|-------|---------|
| `PLANE LATITUDE` | degrees | FlightStatus.Latitude |
| `PLANE LONGITUDE` | degrees | FlightStatus.Longitude |
| `PLANE ALTITUDE` | feet → meters | FlightStatus.Altitude |
| `GROUND VELOCITY` | knots | FlightStatus.GroundSpeed |
| `PLANE HEADING DEGREES MAGNETIC` | degrees | FlightStatus.Heading |
| `PLANE HEADING DEGREES TRUE` | degrees | FlightStatus.TrueHeading |
| `PLANE PITCH DEGREES` | degrees | FlightStatus.Pitch |
| `PLANE BANK DEGREES` | degrees | FlightStatus.Bank |

### 6.2 Événements

| Événement | Description |
|-----------|-------------|
| `FlightStatusUpdated` | Déclenché à chaque mise à jour des données de vol |
| `SimConnect_Closed` | Déclenché à la déconnexion du simulateur |
| `Connected` | Connexion établie avec SimConnect |
| `Disconnected` | Connexion perdue |

## 7. Configuration

### 7.1 Registre Windows

**Clé :** `HKEY_CURRENT_USER\SOFTWARE\SDVfrSimLinkerNext`

| Valeur | Type | Description |
|--------|------|-------------|
| IpAddress | REG_SZ | Adresse IP de destination (vide = broadcast) |
| IsCompact | REG_DWORD | Mode compact de l'interface (0/1) |

### 7.2 Fichier de Configuration

**Fichier :** `appsettings.json`

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  }
}
```

### 7.3 Journalisation

**Fichier :** `SDVfrSimLinkerNext.log`

**Format (Serilog) :**
```
{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level:u3}] {Message:lj}{NewLine}{Exception}
```

**Exemple :**
```
2026-03-01 21:36:21.180 +01:00 [INF] IP has been updated
2026-03-01 21:36:21.189 +01:00 [INF] UDP Client / IP mode : 192.168.0.126
2026-03-01 21:36:21.569 +01:00 [INF] Connected
```

## 8. États de l'Application

### 8.1 SimConnectionState

| État | Description |
|------|-------------|
| `Disconnected` | Non connecté au simulateur |
| `Connected` | Connecté et réception des données |

### 8.2 Messages de Log

| Message | Signification |
|---------|---------------|
| `IP has been updated` | L'adresse IP de destination a changé |
| `UDP Client / Broadcast mode` | Mode broadcast activé |
| `UDP Client / IP mode : X.X.X.X` | Mode unicast vers l'IP spécifiée |
| `Close existing UDP Client` | Fermeture du client UDP existant |
| `Connected` | Connexion SimConnect établie |
| `Cannot send flight status!` | Erreur d'envoi UDP |

## 9. Gestion des Erreurs

### 9.1 Erreurs Réseau

| Code | Message | Cause |
|------|---------|-------|
| 10022 | Invalid argument | Socket non initialisé correctement |
| - | Network unreachable | IP de destination invalide ou réseau non accessible |
| - | Invalid IP address | Format d'adresse IP incorrect |

### 9.2 Comportement en Cas d'Erreur

- Les erreurs d'envoi sont journalisées mais n'interrompent pas l'application
- L'application tente de renvoyer à la prochaine mise à jour
- Pas de mécanisme de reconnexion automatique pour UDP (stateless)

## 10. Compatibilité

### 10.1 Simulateurs Supportés

| Simulateur | Support | Notes |
|------------|---------|-------|
| Microsoft Flight Simulator 2020 | ✅ | SimConnect natif |
| Prepar3D (toutes versions) | ✅ | SimConnect compatible |
| FSX (Flight Simulator X) | ✅ | SimConnect original |
| FSX Steam Edition | ✅ | SimConnect compatible |

### 10.2 Applications Réceptrices

Le protocole XGPS2/XATT2 est compatible avec :

| Application | Plateforme | Support |
|-------------|------------|---------|
| SDVFR | iOS / Android | ✅ Cible principale |
| ForeFlight | iOS | ✅ Compatible |
| SkyDemon | iOS / Android | ✅ Compatible |
| X-Plane (réception) | Multi | ✅ Protocole natif |

## 11. Prérequis Système

### 11.1 Logiciels

- Windows 10/11 (64-bit recommandé)
- .NET Framework 3.5 ou .NET Core 3.1 Runtime
- SimConnect SDK (installé via `SimConnect.msi` fourni)

### 11.2 Réseau

- Pare-feu Windows : autoriser SDVfrSimLinkerNext en sortie UDP
- Port 49002 ouvert pour le trafic UDP sortant
- Réseau local accessible (même sous-réseau pour le broadcast)

## 12. Annexes

### A. Diagramme de Séquence

```
┌─────────┐          ┌──────────────────┐          ┌─────────┐
│  MSFS   │          │ SDVfrSimLinker   │          │  SDVFR  │
└────┬────┘          └────────┬─────────┘          └────┬────┘
     │                        │                         │
     │  SimConnect Connect    │                         │
     │◄───────────────────────│                         │
     │                        │                         │
     │  Subscribe Variables   │                         │
     │◄───────────────────────│                         │
     │                        │                         │
     ├───────────────────────►│                         │
     │  FlightStatusUpdated   │                         │
     │  (lat,lon,alt,hdg...)  │                         │
     │                        │                         │
     │                        │  UDP: XGPS2,48.8,2.3... │
     │                        ├────────────────────────►│
     │                        │  UDP: XATT2,268,5,-15   │
     │                        ├────────────────────────►│
     │                        │                         │
     │        ...             │         ...             │
     │  (répétition ~20Hz)    │                         │
```

### B. Exemple de Code - Récepteur Python

```python
import socket

UDP_IP = "0.0.0.0"
UDP_PORT = 49002

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((UDP_IP, UDP_PORT))

print(f"Écoute sur le port {UDP_PORT}...")

while True:
    data, addr = sock.recvfrom(1024)
    message = data.decode('utf-8')

    if message.startswith("XGPS2"):
        parts = message.split(',')
        lat = float(parts[1])
        lon = float(parts[2])
        alt = float(parts[3])
        hdg = float(parts[4])
        spd = float(parts[5])
        print(f"Position: {lat:.6f}, {lon:.6f} | Alt: {alt:.0f}m | Hdg: {hdg:.1f}° | Spd: {spd:.1f}m/s")

    elif message.startswith("XATT2"):
        parts = message.split(',')
        true_hdg = float(parts[1])
        pitch = float(parts[2])
        bank = float(parts[3])
        print(f"Attitude: TrueHdg: {true_hdg:.1f}° | Pitch: {pitch:.1f}° | Bank: {bank:.1f}°")
```

### C. Exemple de Code - Émetteur Python (Simulation)

```python
import socket
import time
import math

UDP_IP = "192.168.0.126"  # IP de destination
UDP_PORT = 49002

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Position initiale (Paris - Tour Eiffel)
lat = 48.8584
lon = 2.2945
alt = 300.0  # mètres
hdg = 0.0
spd = 50.0   # m/s

while True:
    # Simulation d'un vol circulaire
    hdg = (hdg + 1) % 360
    lat += 0.0001 * math.cos(math.radians(hdg))
    lon += 0.0001 * math.sin(math.radians(hdg))

    # Message XGPS2
    xgps = f"XGPS2,{lat:.6f},{lon:.6f},{alt:.1f},{hdg:.1f},{spd:.1f}"
    sock.sendto(xgps.encode('utf-8'), (UDP_IP, UDP_PORT))

    # Message XATT2
    pitch = 2.0
    bank = 15.0 if hdg % 90 < 45 else -15.0
    xatt = f"XATT2,{hdg:.1f},{pitch:.1f},{bank:.1f}"
    sock.sendto(xatt.encode('utf-8'), (UDP_IP, UDP_PORT))

    time.sleep(0.05)  # 20 Hz
```

---

*Document généré par rétro-ingénierie le 2026-03-01*
*Basé sur l'analyse de SDVfrSimLinkerNext.exe v1.0.0.0*
