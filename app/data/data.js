	var matches = [];
	

	function NewFriend (name, photo, scores) {

		this.name = name;
		this.photo = photo;
		this.scores = scores;

		

	}

	function createFriends() {



		var name = ["Mike", "Chris", "Collin", "Ferenc", "Lloyd", "Brad", "Brandon", "Victor", "Adrian", "Xavier", "Matthew"];
		var pics = ["mike.jpg", "chris.png", "collin.jpeg", "ferenc.jpg", "lloyd.png", "brad.jpg", "brandon.jpg", "victor.png", "adrian.png", "xavier.jpg", "matthew.png"]
		var theScores = [1, 2, 3, 4, 5];
		var randomScores = [];
		



		for (var i = 0; i < 10; i++) {
			for (var j = 0; j < 10; j++) {

				var randomScore = theScores[Math.floor(Math.random() * theScores.length)]
				randomScores.push(randomScore);
			}


			var newFriend = new NewFriend(name[i], pics[i], randomScores);
			matches.push(newFriend);
			randomScores = [];

		}

		// console.log(matches);

	}

	createFriends();

	module.exports = {
		matches: matches
	}

