var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection (process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection ({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

connection.connect (function (err) {
    if (err) {
        console.log("error occurred while connecting");
    }
    else {
        console.log("connection successful!");
    }
});

module.exports = connection;