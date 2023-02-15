
// == Primitive Types == //

//Type string
var message = "hello world";
var firstLetter = "a";
// This is an expression. var is a keyword and teling js you are creating a variable/container called in this case, message ,where you store the string. = is an assignment property 
// Can just declare behavior and store any value doesnt matter if num or string and can switch it later 
console.log(message);
// You use the var called message, console log is mainly for testing

// console.log("hello world");
// Console.log is a very common command that is for developers to display messages on the terminal. So it is visible to developers, not necessarily something your users might need to see on the front end.

// has all the features we need to control features and css , full access for everything you need to do within the browser

//Type number
var age = 6;

//Boolean - Either True or False
//Name of variable or function will use camel case oKay
var isAdult = true;
var isChild = false;

console.log(age);
console.log(typeof isAdult);

//Null Value 
var accountNumber = null;
//var only needed to create variable for the first time
//reassigning value of the variable 
//useful to have placeholder for value you will get later, such as user will sign up and take payment into and needs their account number that the user will insert 
accountNumber = 12345678;
//we use variable we already made no need to type var
console.log(accountNumber);
//in the console it says file name and line of code that it has 

//Undefined Values
var userAddress;
console.log(userAddress);
//Null is the value of nothing, undefined is absent. Null can be used and has some properties, undefined does not.

// ==Reference Types ==//

//Arrays ; collection of different values 
var namesArray = ['Mayleen', "Anthony", "JJ", "Randy"];
//the brackets tell js that it is an array , can put different values in an array , its a collection of different values and can 
var agesArray = [23, 17, 8, 11];

//Objects
var userDetails = {
    userName: "Jon",
    userLastName: "Lawrence",
    age: 22,
    hobbies: ["swimming", "rock climbing"],
};
//the curly braces tell JS we have created an object, it is a type of data structure . These are key pair values and we are storing data. Seperating the values with a comma. objects collect data.

console.log(typeof userDetails);
//typeof check what type each of these structures are in this case it is a object , every type usually gets wrapped into an object 

