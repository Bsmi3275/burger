var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        var condition = id;
        orm.updateOne(condition, function (res) {
            console.log("res: ", res)
            cb(res)
        });
    }

};

module.exports = burger;