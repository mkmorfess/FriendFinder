var express = require("express");
var body = require("body-parser");
var path = require("path");

var app = express();

var publicConnection = app.use(express.static(__dirname + "app/public"));;

var PORT = 3000;


module.exports = {
	express: express,
	body: body,
	path: path,
	app: app,
	PORT: PORT,
	publicConnection: publicConnection
}