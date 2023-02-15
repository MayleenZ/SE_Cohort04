//* What is a function?
//* A function is a block of code designed to perform a particular task


sayHello()
//This can get called before it is initialized because of hoisting. Hoisting only happens with function declarations/defintions. 

//sayBye()
//Cannot access the second function before it is initialized bc it is a function expression

//sayHelloWorld()
//Cannot access before it is initialized. Not hoisted.

//* Function Declaration/Definition , This one get hoisted to top of scope.
function sayHello() {
  console.log("Hello" + "!");
};


//* Function Expression: where you declare a variable and assign a function to that variable,  this function cannot be called until it is defined.
const sayBye = function() {
    console.log("Hello" + "hehe");
};

//* Arrow Functions 
// const add = (a,b) => a + b;

const sayHelloWorld = () => {
    
}; 
//arrow function syntax 

sayHelloWorld()
//if we move function to after we initialized, it will work 


//* Two different ways to declare the same function (Declaration and Arrow)
// Function declaration - returns bc it says to return 
function add(a,b) {
    return a +b;
}
//arrow function - will return automatically bc it is a singleline 
const addTwo = (a,b) => a + b;



//*parameter & arguments
//this function shows the placeholders function, two parameters
//returns the subtraction of two numbers 
function minus(num1, num2){
    return num1 - num2;
}


//This calls the function minus and now uses new parameters to substitute num1 and num2. the result gets saved in the variable result 
const result = minus(9,3)
console.log(result);


// Both sides have to be true 
// function areBothEven(n1, n2){
//     return ((n1 % 2) && (n2 % 2))
// }   //making it a boolean if we add === 0 

// const isEven = areBothEven(2,4);
// console.log(isEven);
//our function can give bugs: n1, n2 

// Functions where the typeof has to be an integer, this is how we program our functions to get the output we are expecting and can return out of the function 
//only one return keyword inside function but if you ahve if statement can have multiple
function areBothEven(n1, n2){
    if (typeof(n1) !== "number" || typeof(n2) !== "number" ) {
        //console.log("arguments must be a type number");
        return;
    }
    return !(n1 % 2) && !(n2 % 2);
} 

const isEven = areBothEven("2", 4);
//console.log(isEven);


// Creating an object in the return and within the parameters. the skills would be the arguments. the name parameter takes the first argument bc it starts at 1 and not 0. 
// function getDevObject(name) {
//     const skills = [];

//     for (let i = 1; i < arguments.length; i++){
//         skills.push(arguments[i])
//     }

//     return {
//         devName: name,
//         jobSkills: skills
//     };
// }

// const devObj = getDevObject("Maria", "Html", "CSS", "Javascript")
// console.log(devObj);

//* Rest Parameter,three dots in front of a parameter . Makes the above function very simple with this syntax. It puts all the rest of the parameters in skills. the rest parameter has to be at the end of the parameters. 
function getDevObject(name, lastName, ...skills) {
    return {
      devName: name, lastName,
      jobSkills: skills
    };
  }
  const getDev = getDevObject("maria","smith", "html","css","js")
  //console.log(getDev);

//*An object with a default parameter, the default parameter has to be at the end. 
function setColor(bike,color= "purple", size=20){
  return {
    bikeType: bike,
    bikeColor: color,
    bikeSize: size,
  }
}
const myBike = setColor("Tbird")
//The default value to a parameter, in this case would be purple bc we changed it in the arguments and the size would be 20
//console.log(myBike);

//* Anonymous Parameter array , a method is a fucntion that is gonna be a part of the object 
const colorsArr = ['red','blue','green'];
//*colorsArr.forEach( (color) => console.log(color) )
//for.Each expects a function , we are using an arrow function (just a personal preference)

//for.Each (higher order function)
//for.Each looping over the array and console logging each color
colorsArr.forEach( function (color) {
  //console.log(color.toUpperCase())
})
//This function has no name, specific to this array and after it will be wiped out of memory


//* Exercise 1: Write a function declaration

function computeArea(width,height) {
    let sum = width * height
    //console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${sum} square units`)
}

const Rect = computeArea(10,12)

//* Exercise 2: Write a function expression

const planet = function planetHasWater(planet) {
    planet = planet.toUpperCase()
    //redefining without declaring a second variable 
    if (planet == "EARTH"|| planet == "MARS"){
        //changes variable string to all uppercase as the dev
        //userinput now can use any type case but as the dev I changed it because I declared it originally all to be uppercase ~behind the scenes~
        return true
    } else {
        return false
    }
}

//console.log(planet("Earth", "mars"));

//*Global Variables (not good practice to have a lot)
//window is its own thing and we can access it but just using window
console.log(window);
var pollution = "this is bad"
