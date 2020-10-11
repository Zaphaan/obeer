//Stockage des variables globales dans notre .env
const dotenv = require('dotenv');
dotenv.config();
// Variable qui stock notre PORT 
const PORT = process.env.PORT || 3000;
//Création de notre serveur Express
const express = require('express');
const app = express();
// Configuration de nos ressources statiques
app.use(express.static('./public'));
app.set('view engine', 'ejs');
// Ajout du router 
const router = require('./router');
app.use(router);
// On lance l'écoute de notre serveur sur le port 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
}); 