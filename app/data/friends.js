$(document).ready(function(){


//This function creates the 10 drop downs for the questions each with 5 numbers to choose from

	function createQuestions() {
		var idNum = 1;


		for (var i = 0; i < 10; i++) {

			var newSelect = $("<select>");
			newSelect.addClass("form-control")
		
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

	}

	createQuestions();

	//here is the submit button function which takes in the user values and posts them...

	$("form").submit(function(event){

		event.preventDefault();
			
		var newPerson = {
			name: $("#name").val().trim(),
			photo: $("#photo").val().trim(),
			scores: []
		}
			

		for (var i = 1; i < 11; i++) {

			newPerson.scores.push($("#q" + i).val())
			console.log(newPerson.scores)
		}

		if (newPerson.scores.includes("Please Choose A Number")) {

			alert("Please Answer All The Questions")
			newPerson.scores = [];

		}

		else {

			var matches = [];

			// var newFriend = new NewFriend(newPerson.name, newPerson.photo, newPerson.scores);

			// matches.push(newFriend);

			
			// console.log(matches);
			// console.log(currentEntry);
			// console.log(currentName);
			// console.log(currentScores);

			// var currentEntry = data.matches[matches.length -1];
			// var currentName = currentEntry.name;
			// var currentScores = currentEntry.scores;

			var currentEntry;
			var currentName;
			var currentScores;

			$.post("/api/new", newPerson)
  				.done(function(data) {
  					// console.log("This is POST data log __")
    			// 	console.log(data);
    			// 	alert("Adding character...");
  			});

  			$.get("/api/" + newPerson.name, function(newData) {
  				// console.log("This is GET data log __")
    			// console.log(data.name);
    			currentEntry = newData;
    			currentName = newData.name;
    			currentScores = newData.scores;
 				// console.log(currentEntry);
				// console.log(currentName);
				// console.log(currentScores);
    			
    		

    			$.get("/api", function(data) {
    			// console.log("This is the 2nd GET request");
    			// console.log(data);
	    			for (var i = 0; i < data.length - 1; i++) {
	    				matches.push(data[i]);
	    			}
	    			// console.log("This is the matches")
	    			// console.log(matches)
	    			


	    		

		    		console.log("THIS IS THE STUFF OUTSIDE THE GET STUFF")
		    		console.log(currentEntry);
		    		console.log(matches);
		    		console.log("______________________________________")

		    		

					$("#name").val("")
					$("#photo").val("")

					for (var i = 1; i < 11; i++) {
						$("#q" + i).val("Please Choose A Number");
					}

					if (matches.length < 2) {

						alert("Not enough friends have entered in... ")
					}

					else {

						var names = [];
						var scores = [];
						var add = 0

						for (var i = 0; i < matches.length - 1; i++){

							var currentMatch = matches[i];
							names.push(currentMatch.name);
							console.log(currentMatch);

							for (var j = 0; j < currentMatch.scores.length; j++) {

								add += Math.abs(currentEntry.scores[j] - currentMatch.scores[j])

							}

							scores.push(add);

							add = 0;
							// console.log(names);
							// console.log(scores);


						}

						//https://forums.adobe.com/thread/1062126 -- Nice bubble sort code

						bubbleSort(scores,names);  

						function bubbleSort(a,b)  {  
						    var swapped;  
						    do {  
						        swapped = false;  
						        for (var i=0; i < a.length-1; i++) {  
						            if (a[i] > a[i+1])   
						            {  
						                var temp = a[i];  
						                a[i] = a[i+1];  
						                a[i+1] = temp;  
						  
						  
						  
						  
						                var temp = b[i];  
						                b[i] = b[i+1];  
						                b[i+1] = temp;  
						                swapped = true;  
						            }  
						        }  
						    } while (swapped);  
						}  

							// console.log(names);
							// console.log(scores);


						if (scores.length === 1) {
							$("#friend").html(names[0] + "!")
							$("#mymodal").show();
							
							// alert("Your match is... " + names[0]);
						}

						else if (scores.length > 1) {
							var closerMatches = [];
							for (var i = 0; i < scores.length; i++) {
								if (scores[i] === scores[i + 1]) {
									closerMatches.push(names[i]);
									
								}
								else {
									closerMatches.push(names[i]);
									break;
								}

							}

							if (closerMatches.length > 0) {
								// console.log(closerMatches);
								var randomMatch = closerMatches[Math.floor(Math.random() * closerMatches.length)];

								$("#friend").html(randomMatch + "!")
								$("#mymodal").show();
								// alert("Your match is... " + randomMatch);
							}

							else {
								$("#friend").html(names[0] + "!")
								$("#mymodal").show();
								// alert("Your match is... " + names[0]);
							}

						}

					}
				})
			})
			
		}

			

			
		})

		$("#close").click(function(){
			$("#mymodal").hide();
		})

})
