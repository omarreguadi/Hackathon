const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
       //une sorte d'id
       firstName: {
           type: String,
           required: true,
           
       },
       lastName: {
           type: String,
           required: true,
           
       },
       email: {
           type: String,
           required: true ,
       },
       project: {
           type :String,
           required: true,
           
       },
       text: {
           type: String,
           required: true,
         
       },
      
    });

    const User = mongoose.model('User', UserSchema)
