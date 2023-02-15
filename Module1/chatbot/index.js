// prompt
//Ask user for input 
// var UserName = prompt("Hey, What is your name?");
// console.log("Welcome" + " " + UserName); 
//The console goes to console, i wrote it seperate from chatbot

//alert()//
// alert("How are you " + UserName + "?");
// var mood = prompt("What is your mood " + UserName + "?");

// alert(UserName + " you are feeling " + mood);

//variables, string concatenation, alerts and prompt

//My Script - Foodie Chat
//  var userCuisine = prompt("Hello, I am your foodie chatbot, tell me your favorite cuisine");
 
//  alert("Ah that sounds yummy I also love " + userCuisine);

//  var userRestaurant = prompt("Where do you go to eat " + userCuisine + "?");

//  alert("You have to take me to " + userRestaurant + " someday");

//  var userFavRest = prompt("What is your favorite restaurant?");

//  alert("I now want to go to " + userFavRest + "..if only I had feet");
 
//Ask user input (typeof) number//
var userName = prompt("hello, what is your name?");
//everything that comes into the prompt has to be number

console.log(typeof userName);

var favNum = prompt(userName + " what is your favorite number?");

console.log( typeof favNum / 1 );

// alert("Cool " + userName + " nice favorite number" + favNum);

//== Template String : //==
// created using backticks `` and insert any variable by using ${}. to have in one single string, I am able to remove the spaces and the + (concatenator)
alert(`cool ${userName} nice favorite number \n ${favNum}`);