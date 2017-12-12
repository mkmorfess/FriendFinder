$(document).ready(function(){
	var idNum = 1;
// $(":selected")

	for (var i = 0; i < 11; i++) {

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

})