
//puts the focus on the 1st text input element on the page
$('input[type="text"]')[0].focus();

//hides the other title textbox on page load
$('#other-title').hide();

//hides and shows the other title textbox depending upon the select box value
$('#title').change(function(e) {
    console.log("inside other text field function");
    console.log(e);
    if ($(this).val() == "other") {
      console.log("inside if show other title function");
      $('#other-title').show();
//code for creating the text box dynamically. Removed as box needs to be available without JavaScript
//      var optionContainer = $("<div></div>");
//      var optionText = $("<input type='text' value=''/>").attr("id", "other-title").attr("placeholder","Your Job Role");
//       $(optionContainer).append(optionText);
//       $(optionContainer).appendTo('fieldset')[0];
   } else {
     $('#other-title').hide();
     console.log("inside if hide other title function");
   }
 });

//tshirt color options function
 $('#design').change(function(e){
   console.log("inside the tshirt color options function");
   if ($(this).val() == "js puns") {
      console.log('inside js puns');
      $('#color').children().hide();
      $('#color').children().slice(0,3).show();
   } else if ($(this).val() == "heart js"){
     console.log('inside heart js');
     $('#color').children().hide();
     $('#color').children().slice(-3).show();
   } else {
     $('#color').children().show();
   }
 });


$('.activities [type="checkbox"]').on('click', function(e) {
  console.log("inside activites function");
  console.log(e);
  var textArray = [];

   //remove all disabled on checkboxes
   clearDisabled();

  $("input:checked").each(function(index){
    console.log( index + ": " + $( this ).parent().text());
    textArray.push($(this).parent().text());
  });
  console.log("textArray: ", textArray);
  determineDisabled(textArray);
});

function clearDisabled () {
  $('.activities [type="checkbox"]').each(function(){
    $(this).removeAttr("disabled");
  });
}

function determineDisabled (textArray) {
  var dayOfWeek ="";
  var days = ["Tuesday", "Wednesday"];
  var timeOfDay = "";
  var matchArray = [];
  console.log("inside determineDisabled");


  jQuery.each(textArray, function(i){
  console.log("inside textArray push method");
  console.log(textArray[i]);
  var textString = textArray[i];
  console.log(textString);
  console.log(jQuery.type(textString));
  var textSplit = textString.split(" ");
  console.log(textSplit[5]);

  for ( var d = 0; d < textSplit.length; d++ ) {
   if (textSplit[d] == "Tuesday") {
     dayOfWeek = "Tuesday";
   }
   if (textSplit[d] == "Wednesday") {
     dayOfWeek = "Wednesday";
   }
   console.log(dayOfWeek);


  if (textSplit[d] == "9am-12pm,") {
    timeOfDay = "morning";
  }
  if (textSplit[d] == "1pm-4pm,") {
    timeOfDay = "afternoon";
  }
  console.log(dayOfWeek);
 }

  console.log(dayOfWeek);
  console.log(timeOfDay);
  matchArray.push(dayOfWeek);
  matchArray.push(timeOfDay);
  console.log(matchArray);

  costCompute(matchArray);

});
}

function costCompute (matchArray) {
  var baseNumber = matchArray.length;
  console.log("baseNumber: ", baseNumber);
  var main = 0;
  for ( var f = 0; f < matchArray.length; f++ ) {
   if (matchArray[f] === "") {
     main = 1;
   }
  }
  var cost = ((baseNumber / 2) + main) * 100;
  console.log(cost);
  $('#cost').remove();
  $('.activities').append("<div id='cost'>Total: $" + cost + "</div>");
}

  //find day of week (first letter is good enough)
  //find time slot (first letter is good enough)

//   for (var i=0;i<textArray[0].length;i++) {
//       if (textArray[0][i] == textArray[1][i]) {
//           //This will only run when the first element's data-tes attribute's value is equal to the second element's. In this case, that'll be for the third value - at i==2.
//       }
//   }
// }
