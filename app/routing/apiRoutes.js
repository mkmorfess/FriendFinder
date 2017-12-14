var server = require("../../server.js")

function apiRoute() {

	server.app.get("/api/friends", function(req, res) {

		res.send("this works");

	});

}

module.exports = {
	apiRoute: apiRoute
}