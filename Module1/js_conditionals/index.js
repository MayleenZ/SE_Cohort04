//* Global scope : any variable declaration at the top of the file and all sit within global scope and can acccess these variables

var userName = "may";
//var keyword can reassign so easily and doesnt respect global or local scope. The downside of using var keyword

var favColorbook = "green";
let favFood = "taco";
//let age = 23;

// IF statements - if condition is true it will execute
var favoriteColor = "red";

if (favoriteColor === "red") {
  var userName = "alex23";
  //reassigning userName which can cause bug within system
  // alert(userName);
} else {
  alert("nope");
}

if (favColorbook === "green") {
  //* local scope , if you use same name from global variable, this will live in its own scope
  let age = 32;
  // let age = 56;
  // can't use let twice within block of code
  // alert(age);
}
//if we declared let in both the global variable and local scope, it will not rewrite

//Now we are going to use let keyword and not var keyword
//*let keywords let you reassign values from global scope, also let is used once during global unless you are declaring a new value within another block of code which would be called a local scope and doesnt affect global scope.
favFood = "ipuddo";

//*const variable doesnt let you reassign value
// favRest = "golde";
//TYPE ERROR : assignment to constant variable
// we use const keyword when there are things that dont change such as account number, SSN; adds saftey to a program

///
const favRest = "ipuddo";

if (favRest === "ichiran") {
  //if true run this code
  // alert("nice rest")
} else {
  //else false run this code
  // alert("bad rest, don't go there")
  //using punctuation, wrap the string with double quotes
}
/// || is the OR operator - either side need to be true
/// && AND operator - both sides need to be true

const grade = 100;
const userLogIn = true;

if (grade >= 65 && grade <= 99) {
  // alert("You passed");
  //now both of these need to be true just added the && operator, is score less than or equal 99 its not so the first will be true and the second will be false, it wont run. both sides need to be true to run
  //as soon as it checks and the first condition is true, the code stops running and won't check or the next conditions
} else if (grade === 10 || grade === 20) {
  // alert("please see the teacher")
} else if (grade === 100 && userLogIn === true) {
  // alert("congrats you have the best grade")
} else {
  // alert("You failed");
}

/// Ex: 1

const num = 8;

if (num < 0) {
  //alert("num is neg")
} else if (num > 0) {
  //alert("num is pos")
} else {
  //alert( "either 0 or string")
}

/// Ex.2
//yay i fixed it
//let age = prompt("Enter age");

// if (age >= 18) {
     //alert("Welcome");
//     let username = prompt("Enter username");
//     if (username === "leslie") {
         //alert(`Welcome ${username}`)
//     }
//      else {
//     if (username != "leslie")
     //alert("Access Denied")
//      }
// } else {
//     age < 18
    //alert("Too young")
// }

//if statement is used to produce if it is true and run the code all the way through
// else if statement is when it will stop until the beginning true is true

////
//switch cases are for readability, test cases, and more right or wrong directly ; part of conditional statements
const color = "purple";

switch (color) {

  case "red":
    console.log("color is red");
    break;

  case "yellow":
    console.log("color is yellow");
    break;

  case "purple":
    console.log("color is purple");
    break;

  default:
    console.log("Please pick a color");
}

/// Loops 
//combine loops with conditionals
// sequnce of instructions that repeat for certain number of times or until coniditons are met 