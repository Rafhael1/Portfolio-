const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const favicon = require('serve-favicon')


app.use(express.static("src/public"));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(__dirname + '/src/public/imgs/icon.png'));


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))


//////////////////////////////////////
           // GET HOME PAGES//
/////////////////////////////////////           


app.get('/', (req, res) => {
  res.redirect('/pt');
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

app.get('/curriculo', function(req, res){
  res.render('./resume/resumePT')
})

app.get('/curriculum', function(req, res){
  res.render('./resume/resumeES')
})

////////////////////////////////
/////////////////////////////////
      // Privacy Policy//
/////////////////////////////////

app.get('/privacy-policy', function(req, res){
  res.render('./privacyPolicy')
})

////////////////////////////////

////////////////////////////////
/////////////////////////////////
      // Contact Page //
/////////////////////////////////

app.get('/contact', function(req, res){
  res.render('./contact/contactEN')
})

app.get('/contato', function(req, res){
  res.render('./contact/contactPT')
})

app.get('/contacto', function(req, res){
  res.render('./contact/contactES')
})

////////////////////////////////

////////////////////////////////
/////////////////////////////////
      //  //
/////////////////////////////////


////////////////////////////////

const port = process.env.PORT || 8080
app.listen(port, function(){
    console.log(`Server has started at http://localhost:${port}`)
  })
