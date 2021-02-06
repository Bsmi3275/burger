var express = require("express")

var router = express.Router();






var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = req.params.id;
    console.log("condition: ", condition);

    burger.updateOne(condition, function (result) {
        if (result.affectedRows == 0) { 
            return res.status(404).end();
        } else {
            res.status(200).end();        
        }
    });
});

module.exports = router;