const express = require('express');
const bodyParser = require('body-parser'); 
var cors = require('cors')
const connectToMongo = require('./db');

const flash  = require('connect-flash');
const app = express();
app.use(flash()) ;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectToMongo();


app.set('view engine', 'ejs')

app.use("/api/auth", require('./routes/auth'));
app.listen(5000, () => {
    console.log("Connected Successfully!")
})
