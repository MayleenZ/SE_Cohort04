
//* for loop and if statements share syntax
//if () {}
//for() {}

//for (iterator; condition; incrementor) {
//   console.log(variable)
//}

// for (let i = 0; i < 10; i ++) {
//   console.log(i);
// }
// i will equal 0; i is less than 10 ; i will increase by 1 each loop
// i starts at 0 and will stop until 10 but not include 10 and will be increased by 1 each loop until it reaches up to 10
//const will not work with loops , only let works with for loops
// telling loop when to start and for how long and how many times we are incrementing 


// EX: Write loop iterate from 1-20, print "prime" for prime and "even" for all even and "odd" for all odd


//Can put breakpoints in the program to debug
//for loop for even and odd
// for (let i = 1; i <= 20; i++) {
//   //console.log(i);

//   if(i % 2 === 0) {
//     console.log(`${i} is even`);

//   } else if (i % 2 !== 0) {
//     console.log(`${i} is odd`);
//   }
// }

//Prime number for loop
// for (let i = 2; i <= 20; i++) {
//   //console.log(i);

//     let isPrime = true;

//     for(let j = 2; j < i; j++) {
//       // console.log(j, "-", i);
//         if (i % j === 0) {
//           //console.log(i + " not a prime number");
//           isPrime = false;
//       } 
//   }

//     if (isPrime) {
//       //console.log(i + " is prime");
//   }

// }

//Nested for loop, the inner for loop with run as many times as it is true 
for (let i = 0; i < 3; i++) {
  //console.log(i + " Outter Loop");

    for (let j=0; j < 3; j++){
        //console.log(j + " Inner Loop");
    }
}


//* While Loop
//variable outside of loop and then pass the conditions, could be add, or, <,> = 

// let cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// while (cars[i]) {
//   text += cars[i];
//   i++;
  //console.log(text)


//* countdown
// variable definition
// let countdown = 10;

// //condition
// while(countdown >= 0) {
//   //console.log(countdown);

//   //decrementor
//   countdown-=2;
  //does the countdown 2 by 2 and if you want 1 by 1 take off 2 and its just (--)


//*Exercise 1,2,3

//Ex:1
// let i = 3;
// while (i < 35) {
//   console.log(i);
//   i+=3
// }

//Here's a way to do exercise 1 like you originally had:
// i = 1
// while (i < 35 / 3)
// {
//     console.log(i * 3)
//     i++
// }

//Ex:2
let x = 5;
while (x < 100) {
  console.log(x);
  x+=5
}

//Ex:3

let num = 2;

while(num <= 20) {
  let isPrime = true;
  let i =2;
  //
  while(i < num){
      if (num % i === 0){
          isPrime = false;
          break;
      }
      i++
  }
  if (isPrime){
      console.log(num);
  }
  num++
}


