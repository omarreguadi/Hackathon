
// attributs
const mongoose = require('mongoose');
//schema de nos blocks
const schema = mongoose.Schema;

let formSchema = new schema({
    //une sorte d'id
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,  
        required: 'Enter a last name'          
    },
    project: {
        type :String,
    },
    text: {
        type: String,           
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Forms', formSchema);