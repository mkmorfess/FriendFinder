var data = require("../data/friends.js");
// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");


// var app = express();

var appPost = function(app){

	app.post("/api/new", function(req, res) {

		var newfriend = req.body;
		newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

		// console.log(newfriend);
		// console.log("^ This is new friend");

		data.UserFriend(newfriend.name, newfriend.photo, newfriend.scores)

		res.json(newfriend);
	});
}


var appGet = function(app){
	app.get("/api/:friend?", function(req, res) {

	  	var chosen = req.params.friend;

	    if (chosen) {
	      // console.log("THIS IS THE CHOSEN")
	      console.log(chosen);

	      var friendChosen = [];
	      for (var i = 0; i < data.matches.length; i++) {
	        data.matches[i].name = data.matches[i].name.replace(/\s+/g, "").toLowerCase();
	        if (chosen === data.matches[i].name) {
	          // return res.json(data.matches[i]);
	          friendChosen.push(data.matches[i]);
	        }
	      }

	      if (friendChosen.length === 0) {
	        return res.json(false);
	      }
	      else {
	        return res.json(friendChosen)
	      }
	    }
	    return res.json(data.matches);
	});
}

module.exports = {
	appPost: appPost,
	appGet: appGet
}