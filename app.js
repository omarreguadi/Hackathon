
// fichier de configuration
//librarie express
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
//connecter coursnodedb database
mongoose.connect ('mongodb://localhost/Tpnodedb', { useNewUrlParser: true });


//possibilités de lire tous les instru imbriqués le use pour lui dire que tu utilise telle librairie
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//creer un module
const routes = require('./api/routes/formRoutes');
// particularites du node  maniere de definir les routes dans sa globalité
routes(app);
//ip du serveur
const hostname = '127.0.0.1';
//port
const port = 3600;
// on ecoute bien sur le port et sur le hostname
app.listen(port, hostname);