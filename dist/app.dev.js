"use strict";

var express = require("express");

var app = express();

var bodyParser = require("body-parser");

app.use(express["static"]("src/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.get('/', function (req, res) {
  res.redirect('/home');
});
app.get("/home", function (req, res) {
  res.render("./home/home");
});
app.get("/pt", function (req, res) {
  res.render("./home/homept");
});
app.get('/es', function (req, res) {
  res.render('./home/homees');
}); ////////////////////////////////

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server has started at http://localhost:".concat(port));
});