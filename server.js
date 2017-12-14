var express = require("express");
var body = require("body-parser");
var path = require("path");

var app = express();

var PORT = 3000;


module.exports = {
	express: express,
	body: body,
	path: path,
	app: app,
	PORT: PORT
}