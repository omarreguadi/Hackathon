const express = require('express');
const router = express.Router();


//User model
const User = require('../models/User'); // ../ mean out side of model

// page d'inscription
router.get('/register', (req, res) => res.render('register')); 

// Manipulation de register
router.post('/register', (req, res) =>{
    const {firstName, lastName , email , projectName , textarea} = req.body;
    let errors = [];
    console.log("firstname: ", firstName)
    console.log("lastname: ", lastName)
    console.log("email: ", email)
    console.log("projectName: ", projectName)
    console.log("textarea: ", textarea)

    // vérification si tous les champs sont remplis
//not firstname not lastname ...
if(!firstName || !lastName || !email || projectName || textarea){
    errors.push ({msg: 'Rempli tous les champs'}) // on push object msg d'erreur 
}     
//  else{
//     res.send('pass')
// }

//Validation des donnees
User.findOne({email: email}) //vérification si l'email existe déja dans la base
    .then(user => {
        if(user) {
            console.log("yes")
            //user existe déja
            errors.push({ msg: 'Cet email existe déjà'})
            res.render('register',{
                errors,
                firstName, 
                lastName , 
                email , 
                projectName , 
                textarea  
            });
        }   else {
            const newUser = new User(req.body);
console.log("toto", req.body)
            //enregistrer user
            newUser.save()
            .then(user => {
                console.log("saved user", user)
                res.redirect('/users/register')
            })
            .catch(err => console.log(err));

            // console.log(newUser);
            // res.send('hello');
        }
    });
});

module.exports = router;