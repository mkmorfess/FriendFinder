$(document).ready(function(){
	// $(":selected")
	var matches = [];
	

	function NewFriend (name, photo, scores) {

		this.name = name;
		this.photo = photo;
		this.scores = scores;

		

	}

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
				var currentName = currentEntry.name;
				var currentScores = currentEntry.scores;
				// console.log(matches);
				// console.log(currentEntry);
				// console.log(currentName);
				// console.log(currentScores);

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

						$("#mymodal").show();
						
						alert("Your match is... " + names[0]);
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

							alert("Your match is... " + randomMatch);
						}

						else {
							alert("Your match is... " + names[0]);
						}

					}


				}

					
			}

			

			
		})

		$("#close").click(function(){
			$("#mymodal").hide();
		})

})