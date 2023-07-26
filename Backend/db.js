const mongoose = require('mongoose');

const connectToMongo = ()=>{
    console.log("Connection with mongoDB ongoing"); 
    mongoose.connect("mongodb://127.0.0.1:27017/stockdb")
    .then(()=>{
        console.log("Connected to db successfully!!")
    }).catch(()=> {
        console.log("Connected with db failed");
    })
}
module.exports = connectToMongo; 