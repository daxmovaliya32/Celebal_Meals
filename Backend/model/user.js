const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({

    fname:{
        type:String,
        require:true,
    },
    lname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        require:true
    }
},
 {timestamps:true}
)

module.exports = new mongoose.model('userregister',registerSchema)