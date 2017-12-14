$(document).ready(function(){
	// $(":selected")
	var matches = [];
	//{NewFriend: {name: "Mike", photo: "picture", scores:["1", "3", "4", "5", "2", "3", "5", "1", "2", "5"]}}
	// console.log(matches);

	function NewFriend (name, photo, scores) {

		this.name = name;
		this.photo = photo;
		this.scores = scores;

		// this.checkBestMatch = function(){

		// 	for (var i = 0; i < matches.length; i++) {
		// 		for (var j = 0; j < matches[i].scores.length; j++) {
		// 			var userAdd += Math.abs(currentEntry.scores[j] - matches[i].scores[j]);
		// 		}
		// 	}
		// }

	}

	var idNum = 1;


	for (var i = 0; i < 10; i++) {

		var newSelect = $("<select>");

		newSelect.attr("id", "q" + idNum);

		$("#chooseSelect-" + idNum).html(newSelect);

		for (var j = 0; j < 6; j++) {

			if (j === 0) {
				var options = $("<option>");
				options.text("Please Choose A Number");
				newSelect.append(options);
			}
			else if (j === 1) {
				var options = $("<option>");
				options.attr("value", j);
				options.text(j + " - (Strongly Disagree)");
				newSelect.append(options);
			}

			else if (j === 5) {
				var options = $("<option>");
				options.attr("value", j);
				options.text(j + " - (Strongly Agree)");
				newSelect.append(options);
			}

			else{

				var options = $("<option>");
				options.attr("value", j);
				options.text(j);
				newSelect.append(options);
			}
			
		}
		idNum++
	}



		$("form").submit(function(event){
			event.preventDefault();

			var name = $("#name").val().trim()
			var photo = $("#photo").val().trim()
			var scores = [];

			for (var i = 1; i < 11; i++) {

				scores.push($("#q" + i).val())
			}

			if (scores.includes("Please Choose A Number")) {

				alert("Please Answer All The Questions")
				scores = [];

			}

			else {

			

				var newFriend = new NewFriend(name, photo, scores);

				matches.push(newFriend);

				var currentEntry = matches[matches.length -1];

				console.log(matches);
				console.log(currentEntry);

				$("#name").val("")
				$("#photo").val("")

				for (var i = 1; i < 11; i++) {
					$("#q" + i).val("Please Choose A Number");
				}

				//add modal here

				alert("Submitted");

				if (matches.length < 2) {

					alert("Not enough friends have entered in... ")
				}

				else {

					var currentName;
					var otherName;
					var compareName1;
					var compareName2;

					var nameArray = [];

					// var potentialMatches = [];

					var userCompare1 = [];
					var userCompare2 = [];

					var add1 = 0;
					var add2 = 0;				

						var currentUser = currentEntry.scores

						for (var j = 0; j < matches.length - 1; j++) {

							var otherUsers = matches[j];
							currentName = currentEntry.name
							otherName = matches[j].name;
							console.log(otherName);
							console.log(currentName);

							

								if (userCompare1.length === 0) {

									for (var i = 0; i < 10; i++) {
										userCompare1.push(Math.abs(currentUser[i] - otherUsers.scores[i]));
										compareName1 = otherName;

										
									}

								
									console.log(userCompare1);
									console.log(compareName1);
									
								}

								else {
									for (var i = 0; i < 10; i++) {
										userCompare2.push(Math.abs(currentUser[i] - otherUsers.scores[i]));
										compareName2 = otherName;
										
									}
									console.log(userCompare2);
									console.log(compareName2);

									for (var i = 0; i < 10; i++) {
										add1 += userCompare1[i];
										add2 += userCompare2[i];
									}

									console.log(add1);
									console.log(add2);

									if (add1 > add2) {

										userCompare1 = [];

										for (var i = 0; i < 10; i++) {
											
											userCompare1.push(userCompare2[i]);
											compareName1 = compareName2;
										}
										userCompare2 = [];
										console.log(userCompare1);
										console.log(compareName1);
										
									}

									if (add2 > add1) {
										userCompare2 = [];
										compareName2 = ""
									}

									

									if (add1 === add2) {

										// nameArray.push(compareName1);
										// nameArray.push(compareName2);

									}

									add1 = 0;
									add2 = 0;

								}


							}

							
							alert("Your match is... " + compareName1);
						}

					
				}

			

			
		})

})