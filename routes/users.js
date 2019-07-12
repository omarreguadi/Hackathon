const express =require('express');
const router =express.Router();
const bcrypt =require('bcryptjs');

//User model

const User = require('../models/User')

//Login Page
router.get('/Login' , (req, res) => res.render('Login'));
//Register Page
router.get('/register' , (req, res) => res.render('Register'));
//Register Handle
router.post('/register',(req,  res) =>{
  console.log(req.body)  
  const { firstname, lastname, email, Nomprojet, description } = req.body;
  let errors = [];

  //check required fields
  if( !firstname || !lastname || !email || Nomprojet || description){
    errors.push({msg: 'Please fill in all fields'});
  }
  
  //chack passwords match
// if(password !== password2){
//   errors.push({msg: 'les deux passwords ne sont pas identiques'});

// }
//check pass length
// if(password.length < 6){
//   errors.push({msg: 'Password should be at least 6 characters'});
// }

if(errors.length > 0) {
   res.render('register', {
    errors,
     firstname,
     lastname,
     email,
     Nomprojet,
     description
   });
 }else{
   //Validation passed
   User.findOne({email: email })
    .then(user => {
      if(user){
        //User exists
        errors.push({ msg : 'Email is already registred'});

        res.render('register', {
           errors,
           firstname,
           lastname,
           email,
           Nomprojet,
           description
         }); 
        } else {
          const newUser = new User({
            firstname,
            lastname,
            email,
            Nomprojet,
            description
          });
        console.log(newUser)
        res.send('salut');
      }
    });
  
 }

});
module.exports =router;