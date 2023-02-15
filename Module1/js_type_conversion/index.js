//Variables become used anywhere now 
var value;
var result;
var favNum;
//variables that we use below but stated above
//var only needed to create variable for the first time
//we use variable we already made no need to type var


favNum = 12;
value = "33";
//this is string type in quotes

result = Number(value);
//the value converts from string to number
//if js cant convert string to number it will give NaN (not a number)
favNum = String(favNum)
//this converts number to string

// console.log(typeof favNum);
// console.log(value);
// console.log(result);
// console.log(typeof result);

// == parseInt and parseFloat == //
// value = 100.50
// value = parseInt(value)
//to make it into an integer, parseInt also parses a string argument and return a whole number in this case 100

value = "33.6577"
value = Number(value)

console.log(value);
console.log(typeof value);


//