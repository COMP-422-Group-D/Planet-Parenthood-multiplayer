const express = require('express');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

// set up express app
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

//connect to mongodb
//mongoose.connect('mongodb://appUser:password@ds133136.mlab.com:33136/planet-parenthood');

var promise = mongoose.connect('mongodb://localhost/game_app', {
 useMongoClient: true,
});

//mongoose.connect('mongodb://localhost/game_app')
mongoose.Promise=global.Promise;


//  html engin-----------
var cons = require('consolidate');
// view engine setup
app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); 

// other middleware
app.use(express.static('public'));
app.use(express.static('www'));
//app.use("/www/html",express.static(path.join(__dirname + '/www/html')));
//app.use("/www/bs",express.static(path.join(__dirname + '/www/bs')));
//app.use("/www/css",express.static(path.join(__dirname + '/www/css')));
//app.use("/www/js",express.static(path.join(__dirname + '/www/js')));
//app.use("/www/media",express.static(path.join(__dirname + '/www/media')));
app.use(express.static(path.join(__dirname + '/html/')));
app.use(express.static(path.join(__dirname + '/res/')));
app.use(express.static(path.join(__dirname + '/plugins/')));
app.use(express.static(path.join(__dirname + '/platforms')));
app.use(express.static(path.join(__dirname + '/node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//initialize routes
app.use('/api',require('./api'));


//error handling middleware
app.use(function(err,req,res,next){
//  console.log(err);
    res.status(422).send({error:err.message});
    
});


//app.set('www', path.join(__dirname, 'www'))
//  app.set('view engine', 'ejs')
//  // app.get('/', (req, res) => res.render('pages/index'))
//  //  html engin-----------
//var cons = require('consolidate');
//// view engine setup
//app.engine('html', cons.swig)
//// app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'html'); 


// change from express to app 
//  app.use(express.static(path.join(__dirname, 'public')))
//
//  app.use(express.static(path.join(__dirname, 'www')));
//app.use(express.static(path.join(__dirname, 'html')));
//app.use(express.static(path.join(__dirname, 'res')));
//app.use(express.static(path.join(__dirname, 'plugins')));
//app.use(express.static(path.join(__dirname, 'platforms')));
//app.use(express.static(path.join(__dirname, 'node_modules')));

//app.set('views', path.join(__dirname, 'views'))

//



// listen for requests
  app.listen(PORT, () => console.log(`The Game Server has started & Listening on ${ PORT }`))


