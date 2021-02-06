//Dependencies
var express = require("express");
var exphbs = require ("express-handlebars");

const app = express ();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//invoking the assets
app.use(express.static("public"));

//APP GET was attempted
//ENGINE an set were better methods -- handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//files, actions
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//PORT function
app.listen(PORT, function () {
    console.log("App now listening on http://localhost:" + PORT);
});
