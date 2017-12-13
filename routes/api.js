const express = require('express');
const router = express.Router();

//get a list of users from db
router.get('/users', function(req, res){
    res.send({type:'Get'});
});

//add a new user to db
router.post('/users', function(req, res){
    res.send({type:'POST'});
});

//update users in db
router.put('/users/:id', function(req, res){
    res.send({type:'PUT'});
});

//delete user from db
router.delete('/users/:id', function(req, res){
    res.send({type:'DELETE'});
});


module.exports=router;


//
//var path = require("path");
//var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
//var ObjectID = mongodb.ObjectID;
//
//var USERS_COLLECTION = "users";
//
//
//var app = express();
//app.use(express.static(__dirname + "/public"));
//app.use(bodyParser.json());
//
//// Create a database variable 
//var db;
//
//// Connect to the database before starting the application server.
//mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
//  if (err) {
//    console.log(err);
//    process.exit(1);
//  }
//
//  // Save database object from the callback for reuse.
//  db = database;
//  console.log("Database connection ready");
//
//  // Initialize the app.
//  var server = app.listen(process.env.PORT || 8080, function () {
//    var port = server.address().port;
//    console.log("App now running on port", port);
//  });
//});
//
//// Generic error handler used by all endpoints.
//function handleError(res, reason, message, code) {
//  console.log("ERROR: " + reason);
//  res.status(code || 500).json({"error": message});
//}
//
///*  "users"
// *    GET: finds 10  users top 10 w high scores
// *    POST: creates a new user
// */
//
//app.get("/leaderboard", function(req, res) {
//	db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
//    if (err) {
//      handleError(res, err.message, "Failed to get users.");
//    } else {
//      res.status(200).json(docs);
//    }
//  });
//});
//
//app.post("/register", function(req, res) {
//
//
//	var newUser = req.body;
//  newUser.createDate = new Date();
//
//  if (!(req.body.firstName || req.body.lastName)) {
//    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
//  }
//
//  db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
//    if (err) {
//      handleError(res, err.message, "Failed to register new user.");
//    } else {
//      res.status(201).json(doc.ops[0]);
//    }
//  });
//});
//
//