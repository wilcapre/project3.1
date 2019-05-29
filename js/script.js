/******************************************
Treehouse Techdegree:
FSJS project 3 - Interaction Form
******************************************/

//When the page loads, the first text field needs be in focus.

loads = function (){
document.getElementById("name").focus();
}
//Include a text field that will be revealed when the "Other"
// option is selected from the "Job Role" drop down menu.


//var jobRoleSelect = document.getElementById('other-title');

document.getElementById("other-title").addEventListener("change", function(){
	var infoSection = document.querySelector('.basics');
    var jobSelected = jobRoleSelect.value;

    if(jobSelected === 'other'){
        var textField = document.createElement('input');

    textField.attribute('id', 'other-title');
	textField.attribute('type', 'text');
	textField.attribute('name', 'jod_role_other');
	textField.attribute('placeholder', 'Other');

	infoSection.appendChild(textField);

    }
    if(jobSelected !== 'Other'){
		if(document.getElementById("other-title")) {
			infoSection.removeChild(document.getElementById("other-title"));
		}
	}
});

//For the T-Shirt "Color" menu, only display the color options that match 
//the design selected in the "Design" menu.

document.getElementById("design").addEventListener("color", function () {
var designMenu = menuDesign.options[menuDesign.selectedIndex].value;
var jsPuns = document.getElementById("design").value;
var iHeartJs = document.getElementById("design").value;

//whichever design has been selected, match color will be displayed, if it doesn't macth color will be hiding.
if (designMenu === jsPuns) {
    var onColors = document.getElementsByClassName("puns");
    onColors.style.display = 'block';
    
    var offColors = document.getElementsByName("heart");
    offColors.style.display = 'none';
}

if (designMenu === iLoveJs) {
    var onColors = document.getElementsByClassName("heart");
    onColors.style.display = 'block';
    var offColors = document.getElementsByName("puns");
    offColors.style.display = 'none';
}
});

//Register for activities.

document.querySelector(".activities").addEventListener("change", function(){
    var main = document.getElementById("all");
    var frameworks = document.getElementById("js-frameworks");
    var libs = document.getElementById("js-libs");
    var express = document.getElementById("express");
    var node = document.getElementById("node");
    var build = document.getElementById("build-tools");
    var npm = document.getElementById("npm");

//This is no longer disabled when a user unchecks an activity.

    if(frameworks.checkBox == false){
        express.unCheck = false;
    } else if(express.checkBox == false) {
        frameworks.unCheck = false;
    } else if(libs.checkBox == false) {
        node.unCheck = false;
    } else if(node.checkBox == false) {
        libs.unCheck = false;
    } else if(build.checkBox == false) {
        npm.unCheck = false;
    } else if(npm.checkBox == false){
        build.unCheck = false;
    }

    //As a user selects activities, a running total should display below the list of checkboxes. 

    if(framework.checkBox == true) {
        express.unCheck = true;
    } else if(express.checkBox == true) {
        framework.unCheck=  true;
    } else if(libs.checkBox == true) {
        node.unCheck= true;
    } else if(node.checkBox == true) {
        libs.unCheck = true;
    } else if(build.checkBox == false) {
        npm.unCheck = false;
    }  else if(npm.checkBox == false){
        build.unCheck = false;
    }
});

//This will shows payment Informations.

document.getElementById("payment options").addEventListener("change", function(){

    var creditCard = document.getElementById("creditcard");
    var paypal = document.getElementById("paypal");
    var bitcoin = document.getElementById("bitcoin");


    if ($("#payment").list() === "credit card") {creditCard.show()}
    else creditCard.hide();
    if ($("#payment").list() === "paypal") {paypal.show()}
    else paypal.hide();
    if ($("#payment").list() === "bitcoin") {bitcoin.show()}
    else bitcoin.hide();
    
}


// this is to create a validation errors that would exist, prevent the user from submitting the form.
//email, Credit Card= 13 and 16 digits., Zip=5-digit and  CVV=3 digits long.

// Name must be entered can't leave it blank.
$('#userName').on('input', function() {
});
$('#userName').on('input', function() {
	var input=$(this);
	var name=input.val();
	if(name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

//  Must enter a valid email address.
$('#emailAddress').on('input', function() {
	var input=$(this);
	var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var email=regex.test(input.val());
	if(email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

//must make a payment, if paying with credit card,
//Credit Card number, a Zip Code, and a 3 number CVV value 
//before the form can be submitted.

$('#paymenyOptions').on('input', function(); {
    var input=$(this);
    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    var postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
    var CVV = /^[0-9]{3,4}$/;
    var payment=input.val();

    if (payment){input.removeClass("invalid").addClass("valid");
}
    else{input.removeClass("valid").addClass("invalid");
}
function cardnumber(inputtxt){

  var cardnumbers = /^(?:3[47][0-9]{13})$/;

  if(inputtxt.value.match(cardnumbers))
     {
      return true;
        }
    else{
        alert("Not a valid Amercican Express credit card number!");
        return false;
        }
}

function cardnumber(inputtxt){

  var cardnumbers = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  if(inputtxt.value.match(cardnumbers)){
      return true;
        }
      else{
        alert("Not a valid Visa credit card number!");
        return false;
        }
}
function cardnumber(inputtxt){

  var cardnumbers = /^(?:5[1-5][0-9]{14})$/;
  if(inputtxt.value.match(cardnumbers)){
      return true;
        }
      else{
        alert("Not a valid Mastercard number!");
        return false;
        }
}
function cardnumber(inputtxt){

  var cardnumbers = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  if(inputtxt.value.match(cardnumbers)) {
      return true;
        }
      else{
        alert("Not a valid Discover card number!");
        return false;
        }
}

      //length: function(value) {
        //if (value) {
          // Amex
          //if ((/^(34|37).*$/).test(value)) return {is: 15};
          // Visa, Mastercard
          //if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
        //}
        // Unknown card, don't validate length
       // return false;
      //}
    };
    function is_usZipCode(str){

        postalCodeRegex  = /^[0-9]{5}(?:-[0-9]{4})?$/;
  
        if (postalCodeRegex.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
  };
  
  validate({creditCardNumber: "4"}, constraints);
  // => {"creditCardNumber": ["Credit card (should be 16 characters)"]}
  
  validate({creditCardNumber: "9999999999999999"}, constraints);
  // => {"creditCardNumber": ["9999999999999999  not a valid credit card number"]}
  
  validate({creditCardNumber: "4242424242424242"}, constraints);
  // => undefined
  
  validate({creditCardNumber: "340000000000000"}, constraints);

  confirmButton.click(function(e) {
    e.preventDefault();

    var cardValid = $.payform.validateCardNumber(cardNumber.val());
    var cvvValid = $.payform.validateCardCVC(CVV.val());

    if(owner.val().length < 5){
        alert("wrong name");
    } else if (!cardValid) {
        alert("invalide card number");
    } else if (!cvvValid) {
        alert("Enter valid CVV");
    } else {
        // Everything is correct. Add your form submission code here.
        alert("Everything is correct");
    }
});
// must enter a message, this can't leave blank
//$('#contact_message').keyup(function(event) {
//	var input=$(this);
//	var message=$(this).val();
//	console.log(message);
//	if(message){input.removeClass("invalid").addClass("valid");}
//	else{input.removeClass("valid").addClass("invalid");}	
//});
//var jquery=$;
//$.payment.validateCardNumber('4242 4242 4242 4242'); 
//$.payment.validateCardCVC('123', 'amex'); 
//$.payment.validateZip('05', 'numeric'); 



//var ccNum = document.getElementById("cc-num");
  //  var ccNumLbl = document.getElementById("cc-numLbl");
    //function valid_credit_card(value) {



//function validate_form (){

  //  valid = true;

    //if ( document.contact_form.contact_name.value == "" )
    //{
     //   alert ( "Please fill in the 'Your Name' box." );
       // valid = false;
    //}

    //return valid;
//}
//var uzip = document.registration.zip;
//var uemail = document.registration.email;
//var $name = $("#name");
//var $mail = $("#mail");
//var $payment = $("#payment");
// Zip: {
    //required: true,
    //regex: /^\d{5}(?:[-\s]\d{4})?$/
//}
// email:
//{
  //  required: true,
    //email: true,
    //regex: /^[A-Za-z0-9_]+\@[A-Za-z0-9_]+\.[A-Za-z0-9_]+/,
//},