const express = require('express');
const router = express.Router();
const User = require('../Models/user');
const authenticate = require("../Middleware/authenticate")


router.post("/addstock",authenticate, async (req, res) => {
    console.log(req.userid);  
    User.findOne({ _id: req.userid }, async (err, found) => {
        if (err) {
            res.send({ "Status": 400 });
        } else {
            if (!found) {
                res.send({ "Status": 400 });
            } else {
                if (req.body.type === "crypto") {
                    if (found.cryptoStocks.indexOf(req.body.symbol) === -1) {
                        found.cryptoStocks.push(req.body.symbol);
                        found.save();
                    }
                } else {
                    if (found.companyStocks.indexOf(req.body.symbol) === -1) {
                        found.companyStocks.push(req.body.symbol);
                        found.save();
                    }
                }
                res.send({ "Status": 200 });
            }
        }
    })
})
router.post("/getallstocks",authenticate, (req, res) => {
    // const username = req.body.username;

    User.findOne({ _id: req.userid }, (err, found) => {

        if (err) {
            res.send({ "ispresent": null });
        } else {
            if (!found) {
                res.send({ "ispresent": null });
            } else {
                // companyStocks = []
                // cryptoStocks = []

                // (found.companyStocks.map((el) => {
                //     if(el != req.userid) {
                //         companyStocks.push(el);
                //     }
                // }))


                // (found.cryptoStocks.map((el) => {
                //     if(el != req.userid) {
                //         cryptoStocks.push(el);
                //     }
                // }))
                // console.log(req.userid); 
                // companyStocks.filter((el)=> el != req.userid);
                // cryptoStocks.filter((el)=> el != found._id);
                // console.log(found.companyStocks); 
                // console.log(found.cryptoStocks); 

                res.send({ companyStocks: found.companyStocks, cryptoStocks: found.cryptoStocks });
            }
        }
    })
})
router.post("/deleteStock",authenticate, (req, res) => {
    const username = req.body.username;
    let obj = {
        type: (req.body.type),
        symbol: (req.body.symbol),
    }
    User.findOne({ _id: req.userid }, (err, found) => {
        if (err) {
            res.send({ "Status": 401 });
            console.log("Some error occured!")
        } else {

            if (!found) {
                res.send({ "Status": 401 });
                console.log("No such user exists!");
            } else {
                if (req.body.type === "crypto") {
                    User.updateOne({ username: username }, { $pull: { cryptoStocks: req.body.symbol } }, (err, data) => {
                        if (err) {
                            return err;
                        }
                    })
                } else {
                    User.updateOne({ username: username }, { $pull: { companyStocks: req.body.symbol } }, (err, data) => {
                        if (err) {
                            return err;
                        }
                    })
                }
                res.send({ "Status": 200 });

            }
        }
    })
})


module.exports = router