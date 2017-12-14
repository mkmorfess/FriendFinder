var server = require("../../server.js");
var api = require("./apiRoutes.js");


server.app.get("/", function(req, res) {

	res.sendFile(server.path.join(__dirname, "../public/home.html"));

});

server.app.get("/survey", function(req, res) {

	res.sendFile(server.path.join(__dirname, "../public/survey.html"));

})

api.apiRoute();


server.app.listen(server.PORT, function(){

	console.log("Listening on port: " + server.PORT);

});

