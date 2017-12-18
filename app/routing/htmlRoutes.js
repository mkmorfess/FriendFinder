// var data = require("../data/friends.js");

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();




var appHome = function() {

  app.get("/", function(req, res) {

  	res.sendFile(path.join(__dirname, "../public/home.html"));

  });
}

var appSurvey = function() {

  app.get("/survey", function(req, res) {

  	res.sendFile(path.join(__dirname, "../public/survey.html"));

  })

}

module.exports = {
  appHome: appHome,
  appSurvey: appSurvey
}
  
  	


 







