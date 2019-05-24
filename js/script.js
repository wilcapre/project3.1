/******************************************
Treehouse Techdegree:
FSJS project 3 - Interaction Form
******************************************/

//When the page loads, the first text field needs be in focus.

//document.getElementById("page").focus();

//Include a text field that will be revealed when the "Other"
// option is selected from the "Job Role" drop down menu.


//var jobRoleSelect = document.getElementById('other-title');

document.getElementById("other-title").addEventListener("change", function(){
	var section = document.querySelector('.basics');
    var jobSelected = jobRoleSelect.value;

    if(jobSelected === 'other'){
        var textField = document.createElement('input');

    textField.setAttribute('id', 'other-title');
	textField.setAttribute('type', 'text');
	textField.setAttribute('name', 'fields');
	textField.setAttribute('placeholder', 'Your Job Role');

	section.appendChild(textField);

    }
    if(jobSelected !== 'other'){
		if(document.getElementById("other-title")) {
			section.removeChild(document.getElementById("other-title"));
		}
	}
});

//For the T-Shirt "Color" menu, only display the color options that match 
//the design selected in the "Design" menu.

document.getElementById("design").addEventListener("color", function () {
var selectedDesign = designSelection.options[designSelection.selectedIndex].value;
var jsPuns = document.getElementById("design").options[value="js puns"];
var iHeartJs = document.getElementById("design").options[value="heart js"];

//whichever design has been selected, match color will be displayed, does that doesn't macth will be hiding.
if (selectedDesign === jsPuns) {
    var showColors = document.querySelector("select#color option[value=cornflowerblue, darkslategrey, gold]");
    showColors.style.display = 'block';
    var hideColors = document.getElementsByName("heart");
    hideColors.style.display = 'none';
}

});

var $name = $("#name");
var $mail = $("#mail");
var $payment = $("#payment");
