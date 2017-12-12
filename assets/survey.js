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

				console.log(matches);

				$("#name").val("")
				$("#photo").val("")

				for (var i = 1; i < 11; i++) {
					$("#q" + i).val("Please Choose A Number");
				}

				//add modal here

				alert("Submitted");

			}

			
		})

})