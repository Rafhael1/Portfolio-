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
  res.redirect('/en');
});

app.get("/en", function(req, res){
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

app.get('/resume', function(req, res){
  res.render('./resume/resumeEN')
})


////////////////////////////////
/////////////////////////////////
      // Privacy Policy//
/////////////////////////////////

app.get('/privacy-policy', function(req, res){
  res.render('./privacyPolicy')
})

////////////////////////////////

const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log(`Server has started at http://localhost:${port}`)
})