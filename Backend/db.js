const mongoose = require('mongoose');

const connectToMongo = ()=>{
    mongoose.connect("mongodb://localhost:27017/stockdb")
    .then(()=>{
        console.log("Connected to db successfully!!")
    })
}
module.exports = connectToMongo; 