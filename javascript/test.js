//var first_name = "Evelyn"; //two forward slashes mean a single line comment
//var last_name = "Devaraj";

/*
BLOCK COMMENT

*/

var test; //default value is null
var greeting = "Hello!";
var first_name = "Evelyn"; 
var last_name = "Devaraj";
var message1 = "dont forget to pick up these items";
var message2 = "also make sure to gather wood for dooms day prepping";
var favoriteQuote = "\"Four Score...\"";
var goodbye = "see you later";
var my_image = "<img src=\"images/myImage.png\" /> ";

//use single quotes if you have a lot of illegal characters
var my_image = '<img src=\"images/myImage.png\" /> ';

//BAD variable names (errors!!!)
//var first name
//var 2first_name
//var time //reserved word

//operators
// =, += (concatenation assignment operator, operates on strings)

//output variables to the console!!!
/* console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye); */

console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoriteQuote + " " +goodbye);

//"My fellow *Americans*, ask not what your *country* can do for *you* — ask what *you* can do for your *country*."  

var static_words1 = "My fellow ";
var static_words2 = ", ask not what your ";
var static_words3 = " can do for ";
var static_words4 = " - ask what ";
var static_words5 = " can do for your ";

//"If you can’t *stand* the *heat*, get out of the *kitchen*."//
var static_words6 = "If you can't ";
var static_words7 = " the ";
var static_words8 = " get out of the ";


var button = document.getElementById("submit");
var reset_button = document.getElementById("reset");

button.addEventListener("click", onClick, false);
reset_button.addEventListener("click", onReset, false);

function onClick(evt)
{
  evt.preventDefault();
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  var element6 = document.getElementById("form1").elements.item(5).value;
  var element7 = document.getElementById("form1").elements.item(6).value;
  var element8 = document.getElementById("form1").elements.item(7).value;
  
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
  
  console.log(static_words6 + element6 + static_words7 + element7 + static_words8 + element8);
  
  
}

function onReset(evt)
{
  console.log("inside onReset function");
  
}