const express = require("express");
const app = express();
var bodyParser = require("body-parser")

app.use(express.static("src/public"));

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//////////////////////////////////////
           // GET HOME PAGES//
/////////////////////////////////////           


app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get("/home", function(req, res){
    res.render("./home/home");   
});

app.get("/pt", function(req, res){
  res.render("./home/homept");   
});

app.get('/es', function(req, res){
  res.render('./home/homees')
})

/////////////////////////////////
      // GET RESUME PAGES//
/////////////////////////////////


////////////////////////////////

const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`Server has started at http://localhost:${port}`)
})