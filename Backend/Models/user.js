const mongoose = require('mongoose')
const { Schema } = mongoose; 

const userschema = new Schema({
    username:{
        type:String,
        unique:true
    }, 
    password:{
        type:String, 
    },
    companyStocks:{
        type:Array, 
    },
    cryptoStocks:{
        type:Array, 
    }
}) 

const User = mongoose.model("User", userschema);
module.exports = User; 