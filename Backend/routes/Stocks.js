const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.post("/addstock", (req, res) => {
    User.findOne({ username: req.body.username }, (err, found) => {
        if (err) {
            res.send({ "Status": 400 });
        } else {
            if (!found) {
                res.send({ "Status": 400 });
            } else {
                if (found.ispresent.indexOf(req.body.symbol) === -1) {
                    console.log("added")
                    found.stocks.push({ type: req.body.type, symbol: req.body.symbol });
                    found.ispresent.push(req.body.symbol);
                    found.save();
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
                res.send({ AllStocks: found.ispresent });
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
                User.updateOne({ username: username }, { $pull: { stocks: { type: req.body.type, symbol: req.body.symbol } } }, (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                });
                User.updateOne({ username: username }, { $pull: { ispresent: req.body.symbol } }, (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                });
                res.send({ "Status": 200 });

            }
        }
    })
})







module.exports = router