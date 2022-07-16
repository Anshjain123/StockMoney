const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.post("/addstock", async (req, res) => {
    User.findOne({ username: req.body.username }, async (err, found) => {
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
router.post("/getallstocks", (req, res) => {
    const username = req.body.username;

    User.findOne({ username: username }, (err, found) => {

        if (err) {
            res.send({ "ispresent": null });
        } else {
            if (!found) {
                res.send({ "ispresent": null });
            } else {
                res.send({ companyStocks: found.companyStocks, cryptoStocks: found.cryptoStocks });
            }
        }
    })
})
router.post("/deleteStock", (req, res) => {
    const username = req.body.username;
    let obj = {
        type: (req.body.type),
        symbol: (req.body.symbol),
    }
    User.findOne({ username: username }, (err, found) => {
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