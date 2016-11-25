
//puts the focus on the 1st text input element on the page
$('input[type="text"]')[0].focus();

//hides the other title textbox on page load
$('#other-title').hide();

//hides and shows the other title textbox depending upon the select box value
$('#title').change(function(e) {
    //console.log("inside other text field function");
    //console.log(e);
    if ($(this).val() == "other") {
      //console.log("inside if show other title function");
      $('#other-title').show();
   } else {
     $('#other-title').hide();
     //console.log("inside if hide other title function");
   }
 });

//tshirt color options function
 $('#design').change(function(e){
   //console.log("inside the tshirt color options function");
   if ($(this).val() == "js puns") {
      //onsole.log('inside js puns');
      $('#color').children().hide();
      $('#color').children().slice(0,3).show();
   } else if ($(this).val() == "heart js"){
     //console.log('inside heart js');
     $('#color').children().hide();
     $('#color').children().slice(-3).show();
   } else {
     $('#color').children().show();
   }
 });


$('.activities [type="checkbox"]').on('click', function(e) {
  //console.log("inside activites function");
  //console.log(e);
  var textArray = [];

   //remove all disabled on checkboxes
   clearDisabled();

  $("input:checked").each(function(index){
    //console.log( index + ": " + $( this ).parent().text());
    textArray.push($(this).parent().text());
    //console.log($(this).parent().name);
    //console.log(textArray);
  });
  //console.log("textArray: ", textArray);
  determineDisabled(textArray);

});

function clearDisabled () {
  $('.activities [type="checkbox"]').each(function(){
    $(this).removeAttr("disabled");
  });
    $('#cost').remove();
}

function determineDisabled (textArray) {
  var dayOfWeek ="";
  var days = ["Tuesday", "Wednesday"];
  var timeOfDay = "";
  var matchArray = [];
  //console.log("inside determineDisabled");


  jQuery.each(textArray, function(i){
  //console.log("inside textArray push method");
  //console.log(textArray[i]);
  var textString = textArray[i];
  //console.log(textString);
  //console.log(jQuery.type(textString));
  var textSplit = textString.split(" ");
  //console.log(textSplit[1]);

  for ( var d = 0; d < textSplit.length; d++ ) {
   if (textSplit[d] == "Tuesday") {
     dayOfWeek = "Tuesday";
   }
   if (textSplit[d] == "Wednesday") {
     dayOfWeek = "Wednesday";
   }
   //console.log(dayOfWeek);


  if (textSplit[d] == "9am-12pm,") {
    timeOfDay = "morning";
  }
  if (textSplit[d] == "1pm-4pm,") {
    timeOfDay = "afternoon";
  }
  //console.log(dayOfWeek);
 }

  //console.log(dayOfWeek);
  //onsole.log(timeOfDay);
  matchArray.push(dayOfWeek);
  matchArray.push(timeOfDay);
  matchArray.push(textSplit[1]);
  //console.log(matchArray);
  costCompute(matchArray);
  });

  $('.activities [type="checkbox"]').each( function () {
    var thissy = $(this);
    var dayOfWeek2 = "";
    var alltext = "";
        allText = $(this).parent().text();
    var allTextSplit = allText.split(" ");
    //console.log("all text split ", allTextSplit);
    for (var m=0; m < allTextSplit.length; m++) {
      //console.log(allTextSplit[5]);
      if (allTextSplit[m] == "Tuesday") {
         dayOfWeek2 = "Tuesday";
      }
      if (allTextSplit[m] == "Wednesday") {
        dayOfWeek2 = "Wednesday";
      }
      if (allTextSplit[m] == "9am-12pm,") {
        timeOfDay = "morning";
      }
      if (allTextSplit[m] == "1pm-4pm,") {
        timeOfDay = "afternoon";
      }
    }
      for ( var z = 0; z < matchArray.length; z+=3 ) {
          // console.log("dayofweek2 ===" , dayOfWeek2);
          // console.log("matchArray[z] " , matchArray[z]);
          // console.log("allTextSplit[1]   !==", allTextSplit[1]);
          // console.log("matchArray[z+2]  ",matchArray[z+2]);
          // console.log("time of day:   ===", timeOfDay);
          // console.log("matchArray[z+1]  ",matchArray[z+1]);


        if  ((timeOfDay === matchArray[z+1]) && (dayOfWeek2 === matchArray[z])) {
          if ( allTextSplit[1]  !== matchArray[z+2]) {
          //console.log("thissy in the hizzy:   *******************   ",thissy);
               (thissy).attr("disabled", true);
          }
        }
      }

  });

}

function costCompute (matchArray) {
  var baseNumber = matchArray.length;
  //console.log("baseNumber: ", baseNumber);
  var main = 0;
  for ( var f = 0; f < matchArray.length; f++ ) {
   if (matchArray[f] === "") {
     main = 1;
   }
  }
  var cost = ((baseNumber / 3) + main) * 100;
  //console.log(cost);
  $('#cost').remove();
  $('.activities').append("<p id='cost'>Total: $" + cost + "</p>");
}

//sets the credit card as default payment option and hides paypl & coinbase
$(function() {
    //var paymentFieldSet = $('body').find('fieldset')[3];
    var payment="credit card";
     $('#payment').val(payment);
     $('#paypal').hide();
     $('#coinbase').hide();
});

//shows the payment method chosed and hides the other 2
$('#payment').change(function(e) {

    if ($(this).val() == "credit card") {

      $('#paypal').hide();
      $('#coinbase').hide();
      $('#credit-card').show();

   } else if ($(this).val() == "paypal") {
     $('#credit-card').hide();
     $('#coinbase').hide();
     $('#paypal').show();
   } else if ($(this).val() == "bitcoin") {
     $('#credit-card').hide();
     $('#paypal').hide();
     $('#coinbase').show();
   }
 });
