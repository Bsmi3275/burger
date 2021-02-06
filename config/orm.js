var connection = require ("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i=0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    //selectAll js function
    selectAll: function (tableInput, cb) {
        
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //insertOne placeheld
    insertOne: function (table, cols, vals, cb) {
        
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ");";
        console.log(table, cols, vals)

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //updateOne placeholder
    updateAll: function (condition, cb) {
        
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = " + condition + ";";
        console.log(condition);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result)
        });
    },

};

module.exports = orm;