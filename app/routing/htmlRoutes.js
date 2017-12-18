var appHome = function(app, path) {

  app.get("/", function(req, res) {

  	res.sendFile(path.join(__dirname, "../public/home.html"));

  });
}

var appSurvey = function(app, path) {

  app.get("/survey", function(req, res) {

  	res.sendFile(path.join(__dirname, "../public/survey.html"));

  })

}

module.exports = {
  appHome: appHome,
  appSurvey: appSurvey,
}
  
  	


 







