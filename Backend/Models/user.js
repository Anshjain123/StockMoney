const mongoose = require('mongoose')
const { Schema } = mongoose; 

const userschema = new Schema({
    username:{
        type:String,  
    }, 
    password:{
        type:String, 
    },
    stocks:{
        type:Array, 
    }, 
    ispresent:{
        type:Array, 
    }
}) 

const User = mongoose.model("User", userschema);
module.exports = User; 