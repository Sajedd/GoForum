GoForum est un projet de forum réalisé par un groupe de 5 personnes dans le cadre de notre cours en utilisant Go, HTML, CSS et JavaScript. Ce forum a été spécifiquement conçu pour notre université, Paris Ynov Campus, et comprend également un blog contenant des informations liées à notre université.

Fonctionnalités:

Inscription et Connexion: Les utilisateurs peuvent créer un compte sur GoForum en fournissant leurs informations de base telles que le nom d'utilisateur, l'adresse e-mail et le mot de passe. Ils peuvent ensuite se connecter à l'aide de leurs identifiants pour accéder à toutes les fonctionnalités du forum.

Gestion des profils: Les utilisateurs peuvent personnaliser leur profil en ajoutant une photo, une description et d'autres informations pertinentes.

Forums et Discussions: Les utilisateurs peuvent créer de nouveaux forums pour des sujets spécifiques et participer à des discussions existantes. Ils peuvent afficher les sujets les plus récents, trier les discussions par popularité ou par date et effectuer des recherches dans les forums.

Publication de messages: Les utilisateurs peuvent publier des messages dans les discussions. Ils peuvent formater leur texte et des liens pour enrichir leurs messages.

Blog universitaire(Y'Blog): GoForum inclut également un blog où nous publions des informations sur Paris Ynov Campus. Les utilisateurs peuvent consulter les articles, laisser des commentaires et partager les articles sur les réseaux sociaux.

Installation :

Pour installer et exécuter GoForum sur votre propre environnement de développement, suivez les étapes ci-dessous :

Clonez le référentiel GitHub de GoForum :

bash
Copy code
git clone https://github.com/votre-utilisateur/GoForum.git
Accédez au répertoire du projet :

bash
Copy code
cd GoForum
Installez les dépendances :

arduino
Copy code
go get ./...
Configurez la base de données :

Créez une base de données MySQL ou PostgreSQL.
Copiez le fichier .env.example en tant que .env et mettez à jour les informations de connexion à la base de données.
Exécutez les migrations de la base de données :

go
Copy code
go run migrations.go
Démarrez l'application :

go
Copy code
go run main.go
Accédez à l'application dans votre navigateur à l'adresse http://localhost:8000.

Contributeurs :

Ben Youssef Sajed
Camara Abdoulaye
Kassouri Rachid
Bonhomme Nathan
Lounes

Technologies utilisées
Go
HTML5
CSS3
Java-Script

sources consulté:
pub ytb sur page y'blog : "https://youtu.be/RJSzo1AfBuo"
Readme Chat Gpt réedité
