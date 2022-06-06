require('dotenv').config(); 
const express = require('express');
const router = express.Router();
const User = require('../Models/user');
var jwt = require('jsonwebtoken');
const authenticate = require("../Middleware/authenticate")
var bcrypt = require('bcryptjs');
const JWT_SECRET = process.env.JWT_SECRET; 



router.post("/register", async (req, res) => {
    User.findOne({ username: req.body.username }, async (err, found) => {
        if (err) {
            res.send({authtoken:null});
        } else {
            if (found) {
                res.json({authtoken:null});
            } else {
                const salt = await bcrypt.genSalt(10);
                const hash = await bcrypt.hash(req.body.password, salt);

                const newuser = new User({
                    username: req.body.username,
                    password: hash
                })
                newuser.save();
                const data = {
                    user: {
                        id: newuser.id,
                    }
                }
                const authtoken = jwt.sign(data, JWT_SECRET);
                res.send({ authtoken:authtoken, user:newuser.username });
            }
        }
    })
})
router.post("/login", async (req, res) => {
    User.findOne({ username: req.body.username }, async (err, found) => {
        if (err) {
            console.log("Some error occurred pls try again")
            res.send({authtoken:null})
        } else {
            if (!found) {
                console.log("no such user exists")
                res.send({authtoken:null})
            } else {
                const passwordcompare = await bcrypt.compare(req.body.password, found.password);
                if (!passwordcompare) {
                    console.log("Incorrect password")
                    res.send({authtoken:null})
                } else {
                    const data = {
                        user: {
                            id: found.id,
                        }
                    }
                    const authtoken = jwt.sign(data, JWT_SECRET);
                     
                    res.send({authtoken:authtoken, user:found.username});
                    
                }
            }
        }
    })
})

router.get("/getuser", authenticate, async(req, res)=>{
    User.findOne({_id:req.userid}, (err, found) =>{
        if(err){
            res.send({user:null}); 
        } else {
            if(!found){
                res.send({user:null}); 
            } else {
                res.send({user:found.username});
            }
        }
    })
})

module.exports = router