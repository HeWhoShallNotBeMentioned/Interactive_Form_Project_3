
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
