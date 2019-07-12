const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
  
// creation du serveur
const app = express();

// configuration DB
const db = require('./config/keys');
console.log(db);
//se connecter à la DB
mongoose.connect(db.MongoURI, { useNewUrlParser: true })
     .then(() => console.log('MongoDB connected...')) 
     .catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false}));

// port
const PORT = process.env.PORT || 5000;
//Routes
// app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


app.listen(PORT, console.log(`port serveur :  ${PORT} `)); 