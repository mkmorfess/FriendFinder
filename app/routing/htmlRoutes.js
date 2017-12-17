// var server = require("../../server.js");
// var api = require("./apiRoutes.js");
var data = require("../data/data.js")
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {

	res.sendFile(path.join(__dirname, "../public/home.html"));

});

app.get("/survey", function(req, res) {

	res.sendFile(path.join(__dirname, "../public/survey.html"));

})

app.get("/api/:friend?", function(req, res) {

	var chosen = req.params.friend;

  if (chosen) {
    console.log("THIS IS THE CHOSEN")
    console.log(chosen);


    for (var i = 0; i < data.matches.length; i++) {
      data.matches[i].name = data.matches[i].name.replace(/\s+/g, "_").toLowerCase();
      if (chosen === data.matches[i].name) {
        return res.json(data.matches[i]);
      }
    }
    return res.json(false);
  }
  return res.json(data.matches);
});
	


app.post("/api/new", function(req, res) {
 
  var newfriend = req.body;
  // newfriend.name = newfriend.name.replace(/\s+/g, "_").toLowerCase();

  console.log(newfriend);
  console.log("^ This is new friend");

 data.UserFriend(newfriend.name, newfriend.photo, newfriend.scores)

  res.json(newfriend);
});





app.listen(PORT, function(){

	console.log("Listening on port: " + PORT);

});

