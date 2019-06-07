/******************************************
Treehouse Techdegree:
FSJS project 3 - Interaction Form
******************************************/

//When the page loads, the first text field needs be in focus.


document.getElementById("name").focus();
//Include a text field that will be revealed when the "Other"
// option is selected from the "Job Role" drop down menu.

const $otherJobInput = $('#other-title');
var infoSection = $('.basics');
  
    $("#other-title").hide();
      $("#title").change(function() {
          if($(this).val() == "other") {
              $("#other-title").show();
            }
            else {
                $("#other-title").hide();  
            }
      });

//For the T-Shirt "Color" menu, only display the color options that match 
//the design selected in the "Design" menu.
//whichever design has been selected, match color will be displayed, if it doesn't macth color will be hiding.
$("#design").change(function() {
    if($(this).val() == "js puns") {
        
        $("#color").find("option[value='cornflowerblue']").show();
        $("#color").find("option[value='darkslategrey']").show();
        $("#color").find("option[value='gold']").show();

        $("#color").find("option[value='tomato']").hide();
        $("#color").find("option[value='steelblue']").hide();
        $("#color").find("option[value='dimgrey']").hide();
    } else {
        $("#color").find("option[value='cornflowerblue']").hide();
        $("#color").find("option[value='darkslategrey']").hide();
        $("#color").find("option[value='gold']").hide();

        $("#color").find("option[value='tomato']").show();
        $("#color").find("option[value='steelblue']").show();
        $("#color").find("option[value='dimgrey']").show();
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
});


//This is no longer disabled when a user unchecks an activity. 

$('.checked_all').on('change', function() { 
    $('.checkbox').prop('checked', $(this).prop("checked")); 
});

$('.activities').change(function(){
    var price = 0;
    $(this).find('input:checkbox').each(function() {
        $(this).attr('disabled', false);
    });

    $(this).find('input:checkbox').each(function() {
        if ($(this).prop('checked')) {
            var inputText = $(this).parent().text();
            var index = inputText.indexOf("$");
            price += parseInt(inputText.substring(index+1));

            var startDate = inputText.indexOf("—");
            var endDate = inputText.indexOf(",");
            selectedDate = inputText.substring(startDate, endDate);

            $('.activities').find('input:checkbox').each(function() {
                if ($(this).parent().text().indexOf(selectedDate) != -1 
                    && $(this).parent().text().indexOf(inputText) == -1) {
                    $(this).attr('disabled', true);
                }
            });
        }
    });

    //As a user select activities, a running total should display below the list of checkboxes. 
    $("#cost").val(price);
    if (price > 0) {
        $("#cost").removeClass("invalid").addClass("valid");
    } else {
        $("#cost").removeClass("valid").addClass("invalid");
    }
    
    if($('.checkbox:checked').length == $('.checkbox').length){
        $('.checked_all').prop('checked',true);
    }else{
        $('.checked_all').prop('checked',false);
    }
});

//This will shows payment Informations.

//document.getElementById("payment").addEventListener("change", function(){

   // var creditCard = document.getElementById("credit-card");
    //var paypal = document.getElementById("paypal");
    //var bitcoin = document.getElementById("bitcoin");

    $(document).ready(function(){ 
        $('#payment').change(function(){
          alert($(this).val());  
          
          const paragraphs = $("p"); 
          const paypal = $(paragraphs[0]); 
          const bitcoin = $(paragraphs[1]);
       
//const div = ("creditCard");
    //console.log($("#payment").val());

    if ($("#payment").val() === "credit card") {
        $("#credit-card").show();
    } else {
        $("#credit-card").hide();
    }
    if ($("#payment").val() === "paypal") {
        $("#paypal").hide();
    } else {
        $("#paypal").hide();
        }

    if ($("#payment").val() === "bitcoin") {
        $("#bitcoin").hide();
    } else {
        $("#bitcoin").hide();
    }
  
});
});


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

//  Must enter a valid email address, dave@teamtreehouse.com for example.
$('#mail').on('input', function() {
    var input=$(this);
	var email=mailcheck(input.val());
    
	if(email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

function mailcheck(inputtxt){
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    return regex.test(inputtxt);
  }

// Must select at least one checkbox
function box() {
    // Get the checkbox
    var checkBox = document.getElementById("check");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
//must make a payment, if paying with credit card,
//Credit Card number, a Zip Code, and a 3 number CVV value 
//before the form can be submitted.

$('#cc-num').on('input', function() {
    var input=$(this);
    // var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    // var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    // var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    // var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    //var postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
     //var payment = visaRegEx.test(input.val()) && mastercardRegEx.test(input.val());
     var paymentIsGood = cardnumber(input.val());
     //|| cardnumber2(input.val()) 
      //|| cardnumber3(input.val()) || cardnumber4(input.val());



    if (paymentIsGood){input.removeClass("invalid").addClass("valid");
}
    else{input.removeClass("valid").addClass("invalid");
}
});

$('#cvv').on('input', function() {
    var input=$(this);
    var payment = cvvTest(input.val());
    if (payment){input.removeClass("invalid").addClass("valid");
}
    else{input.removeClass("valid").addClass("invalid");
}
});


function cvvTest(inputtxt){
    var CVV = /^[0-9]{3,4}$/;
    return CVV.test(inputtxt);
  }

function cardnumber(inputtxt){    //4222222222222
  var cardnumbers = /^\d{13,16}$/;         ///^(?:3[47][0-9]{13,16})$/; 
  return cardnumbers.test(inputtxt);
}

/***
function cardnumber2(inputtxt){  //5105105105105100
  var cardnumbers = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  return cardnumbers.test(inputtxt);
}

function cardnumber3(inputtxt){  //378282246310005
  var cardnumbers = /^(?:5[1-5][0-9]{14})$/;
  return cardnumbers.test(inputtxt);
}

function cardnumber4(inputtxt){ //6011000990139424
  var cardnumbers = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
 // if(inputtxt.value.match(cardnumbers)) {

      return cardnumbers.test(inputtxt);
     // else{
      //  alert("Not a valid Discover card number!");
       // return hide;
        //}


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

***/

    $('#zip').on('input', function() {
        var input=$(this);
        var payment = usZipCode(input.val());
        if (payment){input.removeClass("invalid").addClass("valid");
    }
        else{input.removeClass("valid").addClass("invalid");
    }
    });

    function usZipCode(str){
        postalCodeRegex  = /^[0-9]{5}(?:-[0-9]{4})?$/;
        return postalCodeRegex.test(str);
  };
  
  $("#formSubmit").on ("focusout", function(e) {
    var paymentIsGood = true;
    if ($("#payment").val() === "credit card") {
// validate all credit card fields only if cc is selected

paymentIsGood = cardnumber($("#cc-num").val()) 
        // && cardnumber2($("#cc-num").val()) 
        // && cardnumber3($("#cc-num").val()) 
        // && cardnumber4($("#cc-num").val()) 
     && usZipCode($("#zip").val())
     && cvvTest($("#cvv").val());

//var paymentIsGood = cardnumber(input.val());
//|| cardnumber2(input.val())
//|| cardnumber3(input.val())
//|| cardnumber4(input.val());

paymentIsGood = cardnumber($("#cc-num").val())
//|| cardnumber2($("#cc-num").val()) 
//|| cardnumber3($("#cc-num").val())
//||cardnumber4($("#cc-num").val()))
  && usZipCode($("#zip").val())
  && cvvTest($("#cvv").val());

    } 
    
    if ( paymentIsGood ||
        mailcheck($("#mail").val()) ||
        $("#cost").val(price) > 0) {
        //console.log("yay");
    } else {
        //console.log("no");
        e.preventDefault();
    }
  });
  
  function validation(){
  confirmButton.click(function(e) {
    e.preventDefault();

    var cardValid = $.payform.validateCardNumber(cardNumber.val());
    var cvvValid = $.payform.validateCardCVC(CVV.val());

    if(owner.val().length < 5){
        alert("wrong name");
    } else if (!cardValid) {
        alert("invalide card number");
    } else if (!cvvValid) {
        alert("Enter valid 3 digit CVV");
    } else {
 // Everything is correct. Add your form submission code here.
        alert("Everything is correct");
    }
 });
}

/***
// must enter a message, this can't leave blank
$('#contact_message').keyup(function(event) {
	var input=$(this);
	var message=$(this).val();
	console.log(message);
	if(message){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}	
});
***/
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