var express = require("express");
var body = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

var app = express();



// var publicConnection = app.use(express.static(__dirname + "app/public"));;

var PORT = 3000;


// module.exports = {
// 	express: express,
// 	body: body,
// 	path: path,
// 	app: app,
// 	PORT: PORT,
// 	publicConnection: publicConnection
// }
htmlRoutes.htmlRouting();

app.listen(PORT, function(){

	console.log("Listening on port: " + PORT);

});

module.exports = {
	app: app,
	PORT: PORT,
	express: express,
	body: body,
	path: path

}