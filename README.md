# Multi-rooms App 🚀
> **Plateforme de discussion en temps réel structurée par salons thématiques.**

---

## 2️⃣ Présentation générale

### Objectif du projet
Le projet **Multi-rooms App** est une application web de messagerie instantanée conçue pour faciliter la communication collaborative. L'objectif est d'offrir une plateforme fluide où les utilisateurs peuvent rejoindre des salons de discussion spécifiques (rooms) pour échanger des messages en temps réel.

### Problématique technique
La gestion de la communication bidirectionnelle et persistante dans un environnement web classique (HTTP) présente des limites en termes de latence. Ce projet répond à cette problématique en exploitant les **WebSockets**, permettant une interaction instantanée sans rafraîchissement de page, tout en isolant les flux de données par canal (room).

### Valeur ajoutée
- **Isolation des échanges** : Chaque salon est un espace indépendant.
- **Interactivité riche** : Indicateurs de saisie et statuts de connexion en temps réel.
- **Sécurité de base** : Authentification par jeton (token) lors de la poignée de main (handshake) Socket.io.

---

## 3️⃣ Fonctionnalités principales

### 💬 Communication & Temps Réel
- **Multi-Salons (Rooms)** : Possibilité de créer ou rejoindre dynamiquement une salle spécifique.
- **Messagerie Instantanée** : Envoi et réception de messages avec horodatage.
- **Indicateur de Saisie** : Notification visuelle lorsqu'un utilisateur écrit un message.
- **Chat Privé** : Système de messagerie directe entre utilisateurs via une interface modale.

### 👥 Gestion des Utilisateurs
- **Statut de Connexion** : Liste dynamique des utilisateurs en ligne par salon.
- **Authentification Simple** : Validation par token pour sécuriser l'accès au namespace `/chat`.

---

## 4️⃣ Architecture du projet

L'application repose sur une architecture client-serveur événementielle :

```bash
Multi-rooms-App/
├── app.js              # Point d'entrée Backend (Express + Socket.io)
├── package.json        # Gestion des dépendances et scripts
├── public/             # Assets statiques et logique Client
│   ├── index.html      # Page de connexion et sélection de salon
│   ├── chat.html       # Interface principale de discussion
│   ├── css/            # Feuilles de style (Bootstrap + custom)
│   └── js/
│       └── chat.js     # Logique client-side Socket.io
└── .gitignore          # Exclusion des modules et fichiers système
```

- **Backend** : Un serveur Node.js gère les namespaces et le routage des messages via Socket.io.
- **Frontend** : Utilisation de jQuery pour la manipulation du DOM et de Bootstrap pour un rendu responsive et moderne.

---

## 5️⃣ Technologies & outils

### 🛠 Backend
- **Node.js** : Environnement d'exécution JavaScript.
- **Express.js** : Framework web pour le service des fichiers statiques.
- **Socket.io** : Bibliothèque pour la communication bidirectionnelle en temps réel.

### 🎨 Frontend
- **HTML5 / CSS3** (Bootstrap 5) : Structure et design.
- **JavaScript (ES6+)** : Logique applicative.
- **jQuery** : Simplification des interactions DOM et gestion des modales.

### 🔧 Outils supplémentaires
- **Nodemon** : Automatisation du redémarrage serveur en développement.
- **Git** : Versionnage du code.

---

## 6️⃣ État d’avancement du projet

| Module | Statut | Maturité |
| :--- | :---: | :--- |
| Core Backend (Express/Socket.io) | ✅ | Finalisé |
| Gestion des Salons (Rooms) | ✅ | Finalisé |
| Messagerie de Groupe | ✅ | Production |
| Messagerie Privée (PV) | ⚠️ | En test |
| Authentification Token | ✅ | Audit de base |

*Le projet est actuellement dans un état fonctionnel stable, prêt pour une démonstration technique.*

---

## 7️⃣ Installation & exécution

### Prérequis
- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (inclus avec Node.js)

### Étapes d'installation
1. **Cloner le repository** :
   ```bash
   git clone https://github.com/ELODM/Multi-rooms-App.git
   cd Multi-rooms-App
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer l'application** :
   ```bash
   # Pour le développement (avec nodemon)
   npm start
   
   # Ou lancement classique
   node app.js
   ```

4. **Accéder à l'application** :
   Ouvrez votre navigateur sur `http://localhost:4000`.

---

## 8️⃣ Utilisation du projet

### Cas d'usage : Collaboration en équipe
1. L'utilisateur saisit un **nom d'utilisateur** et choisit un **nom de salon** (ex: "Projet-Master").
2. Il entre dans l'espace de chat où il voit les membres de son équipe actuellement connectés.
3. Il peut envoyer des messages globaux ou cliquer sur le nom d'un membre pour initier une discussion privée.

---

## 9️⃣ Bonnes pratiques & choix techniques

- **Low Latency** : Le choix de **Socket.io** a été dicté par le besoin de performances élevées et de reconnexion automatique.
- **Namespacing** : Utilisation du namespace `/chat` pour isoler la logique de messagerie du reste de l'application potentielle.
- **Separation of Concerns** : Séparation claire entre le point d'entrée (`app.js`) et la logique client (`public/js/chat.js`).
- **Responsive Design** : Intégration de Bootstrap pour assurer une utilisation confortable sur mobile et desktop.

---

## 🔟 Améliorations futures

- [ ] **Persistance des données** : Intégration de MongoDB pour stocker l'historique des messages.
- [ ] **Sécurité avancée** : Mise en œuvre de JWT (JSON Web Tokens) pour une authentification Robuste.
- [ ] **Multimédia** : Support de l'envoi de fichiers et d'images.
- [ ] **UI/UX** : Ajout d'un mode sombre (Dark Mode) et de notifications push.

---

## 1️⃣1️⃣ Auteur & contact

**Salma El-Odmi**  
*Étudiante passionnée par le développement Web & Réseaux.*

- **GitHub** : [@ELODM](https://github.com/ELODM)
- **LinkedIn** : [Salma El-Odmi](https://github.com/ELODM)

---
*Ce projet a été réalisé dans un cadre académique pour démontrer la maîtrise des architectures n-tiers et des technologies temps réel.*
