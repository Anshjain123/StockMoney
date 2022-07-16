const mongoose = require('mongoose')
const { Schema } = mongoose; 

const userschema = new Schema({
    username:{
        type:String,  
    }, 
    password:{
        type:String, 
    },
    companyStocks:{
        type:Array, 
        unique:true
    },
    cryptoStocks:{
        type:Array, 
        unique:true
    }
}) 

const User = mongoose.model("User", userschema);
module.exports = User; 