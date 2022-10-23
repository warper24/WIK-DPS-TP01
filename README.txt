Début de Projet, création du répertoire WIK-DPS-TP01
Utilisation du gestionnaire de dépendance npm et création de fichiers package json +gestion des dépendances :
    npm init -y     
On utilise le gestionnaire de dépendance npm pour télécharger TypeScript dans notre projet :
    npm install typescript --save-dev
On utilise le gestionnaire de dépendance npm pour télécharger Node JavaScript dans notre projet :
    npm install @types/node --save-dev
On éxecute le compilateur TypeScript : 
    npc tsc 
Création d'un répertoire src et d'un fichier TypeScript dans le répertoire crée : 
    mdkir src
    src/index.ts
Création d'un répertoire build et d'un fichier JavaScript dans le répertoire crée :
    node build/index.js
Installation du module Node.js express : 
    npm install express
API qui retourne au format JSON les headers de la requête quand il y une requête HTTP GET sur /ping (dans le fichier index.ts) + npx tsc index.ts + vérification :
    app.get('/ping', (req,res) => {
        res.send(req.headers);
    })
Ajout de la variable d'environnement PING_LISTEN_PORT pour que le serveur ecoute sur le port configurable via cette variable + npx tsc index.ts + vérification :
    app.listen(process.env.PING_LISTEN_PORT, () => {
    console.log('The application is listening on port'+process.env.PING_LISTEN_PORT+'!');
})
Mise en place de la réponse vide '404' si jamais la requête ne se fait pas sur GET/PING ou '500' si erreur inconnue + npx tsc index.ts + vérification :
    app.get('*', (req,res) =>{
        res.send('404');
    })
    app.get('*',(req,res)=>{
        res.send('500')
    })

