
var num1;
var num2;
var value;

num1 = 100;
num2 = 50;

value = num1 + num2;
value = num1 * num2;
value = num1 - num2;

value = num1 / num2;
// division

value = num1 % num2; 
// modulo division just gives remainder , useful for odd or even number 
// value = 6 % 2 (useful to say this is even then a function flow could work) from left hand operant to right hand opertor ,  


value = (num1 + num2) / 2;

// == Math Object == //

value = Math.PI
//tells the pi number using .PI using Math
value = Math.round(2.2)
//rounds to nearest integer
value = Math.floor(3.7)
//rounds down
value = Math.ceil(2.2)
//rounds up 
value = Math.max(9,3,66,4,2)
//finds the max number within
value = Math.min(9,1,5,6,7,8)
//finds the min
value = Math.random()
//returns random number between 0 and 1
value = Math.floor(Math.random() * 10) + 1;
//up to 10 bc we multiplied by 10 and added 1 which equals 11 bc it does not include 11,  but now its a whole integer , [up to 10 not including 10 until we add 1 , we could also just put * 11 
value = 4;
value += 2;
value -= 2;
value++
//shorthand to add 1 each time it runs
value--
//shorthand to take one off 

console.log(value);




