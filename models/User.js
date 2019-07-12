const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
   //une sorte d'id
   firstName: {
       type: String,
       required: true,
       max: 100
   },
   lastName: {
       type: String,
       required: true,
       max: 100
   },
   email: {
       type: String,
       required: true
   },
   projectName: {
       type :String,
       required: true,
       max: 200
   },
   textarea: {
       type: String,
       max: 500
   },
   created_date: {
       type: Date,
       default: Date.now // date right now
   }

});

//creation du model'user' à partir du schema 'UserSchema' 
const User = mongoose.model('User', UserSchema); 

//exportation de model pour q'on puisse l'utiliser dans les autre fichiers
module.exports = User;