const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser")

app.use(express.static("src/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get("/home", function(req, res){
    res.render("home");   
});

app.get("/pt", function(req, res){
  res.render("homept");   
});

////////////////////////////////


app.listen(port, function(){
    console.log(`Server has started at http://localhost:${port}`)
})