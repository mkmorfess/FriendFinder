var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

var PORT = 3000;


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'app/public')))
app.use('/survey/', express.static(path.join(__dirname, 'app/public')))
// ...
// ...
htmlRoutes.appHome(app, path);
htmlRoutes.appSurvey(app, path);
htmlRoutes.appCatchAll(app, path);

apiRoutes.appPost(app);
apiRoutes.appGet(app);


app.listen(process.env.PORT || PORT, function(){

	console.log("Listening on port: " + PORT);
	
});


