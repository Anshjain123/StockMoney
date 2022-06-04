const mongoose = require('mongoose')
const { Schema } = mongoose; 
const LocalStrategy = require('passport-local');
const passport = require('passport');
const passportlocalmongoose = require('passport-local-mongoose'); 

const userschema = new Schema({
    username:{
        type:String,  
    }, 
    password:{
        type:String, 
    }
}) 

// userschema.plugin(passportlocalmongoose)
const User = mongoose.model("User", userschema);

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());      //session encoding
// passport.deserializeUser(User.deserializeUser());   //session decoding
module.exports = User; 