const mongoose = require('mongoose');
const {Schema} = mongoose; 

const stockschema = new Schema ({
    username:{
        type:String,  
    }, 
    stocks:{
        type:Array, 
    }
}) 

const Stock = mongoose.model("Stock", stockschema); 
module.exports = Stock; 