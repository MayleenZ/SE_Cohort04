        //==Lab 1==//

typeof(15)
// Prediction: Number
// Actual: Number 
console.log( typeof 15)

typeof(5.5)
// Prediction: Number
// Actual: Number
console.log(typeof 5.5);

typeof(NaN)
// Prediction: Number
// Actual: Number
console.log(typeof NaN);

typeof("hello")
// Prediction: String
// Actual: String
console.log(typeof "hello");

typeof(true)
// Prediction: Boolean
// Actual: Boolean
console.log(typeof true);

typeof(1 != 2)
// Prediction: true
// Actual: true
console.log(typeof 1 !=2);

"Ostentatiou" + "s"
// Prediction: string
// Actual: strings
console.log(typeof "Ostentatiou" + "s");

"Facetious" - "s"
// Prediction: NaN and typeof NaN is number
// Actual: NaN
console.log(typeof "Facetious" - "s");

"1" + "5"
// Prediction: string
// Actual:string
console.log(typeof ("1" + "5"));

"1" - "5"
// Prediction: Number
// Actual: number
console.log(typeof ("1" - "5"));
//the - number is turning into operator

"ivory" + "5"
// Prediction: string
// Actual:string
console.log(typeof "ivory" + "5");

"ivory" - "5"
// Prediction: NaN
// Actual: NaN
console.log("ivory" - "5");

99 - "cheese rolling"
// Prediction: NaN
// Actual: NaN
console.log(99 - "cheese-rolling");


console.log(typeof "1" + 3); //string1, string concatenation is done with + so Javacript will convert the first number 1 to a string and concatenate "1" and "1" making 11
console.log(typeof "1" - 1); // NaN, cannot perform substration on strings so converts seond 1 to a number and subtracts 1 resulting in zero

        // ==  Lab 2 == //
// Uncomment the lines below to see examples of strings
console.log('A string can be written inside of single quotes.');
console.log("It can also be written inside of double quotes.");
console.log(`Backticks work, too.`);

// ADD CODE BELOW
var mySingleString = ''
var myDoubleString = ""
var myBackString = ``
 


// Uncomment the line below to check your work!
console.log(mySingleString);
console.log(myDoubleString);
console.log(myBackString);



        // == Lab 3 == //
var one;
var two;
var sum;
var three;
var four;
var five;
var avgOne;
var avgTwo;
var totalAvg;

one = 1;
two = 2;
three = 3;
four = 4;
five = 5;
avgOne = null;
avgTwo = null;
totalAvg = null;

sum = one + two - three;
sum = one - two * five;
sum = one * two / three;
sum = one / two - four;
sum = one % two + three;
avgOne = (one + two) / 2;
avgTwo = (three + four) / 2;
totalAvg = (avgOne + avgTwo) / 4;

console.log(Math.round(totalAvg));

        // ==  Lab 4 == //
//Assignment Operator 
// Arithmetic 
// let num = 5;

// num += 10
// console.log(num) // => 15

let num1 = 32;
num1 += 17;
console.log(num1);


let num2 = 25;
num2 -= 14;
console.log(num2);


let num3 = 64;
num3 *=11;
console.log(num3);

        // == Lab 5 == //
//Comparison operators
// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
isSmaller = small < large;

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
isLooselyEqual = (num == string); //it will use type coersion and say they are both loosley equal
isStrictlyEqual = (num === string); //this will strictly check and realize it is a string and number which will return false
//best practice is to use === 
 

// 3.
const isTrue = true;
const isFalse = false;
// ADD CODE BELOW (isTrueNotFalse)
isTrueNotFalse = (isTrue !== isFalse);


// Uncomment these to check your work! 
console.log('Is 2 < 5342?');
console.log(isSmaller);
console.log('Is 45 loosely equal to "45"?'); 
console.log(isLooselyEqual);
console.log('Is 45 strictly equal to "45"?');
console.log(isStrictlyEqual);
console.log('Is true not equal to false?');
console.log(isTrueNotFalse);



