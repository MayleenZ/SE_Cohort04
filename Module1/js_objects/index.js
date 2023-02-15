//* Primitive Types 

const str = "Hello";
const num = 5;
const isAdmin = false;

let CopyofStr = str;
CopyofStr = "World"

console.log(str);
console.log(CopyofStr)

//we just copy the value 

//* Reference Types 
// const colors = ["red", "blue", "white"]
// const copyOfColors = colors;

// console.log(colors);
// console.log(copyOfColors);

//*Objects 
// const car = {
//     color: "Blue",
//     hp: 4000,
//     year: 1989,
// };

// console.log(car);
// console.log(car.year);

//In this object, we have a nested object for our following key value pairs
// const user = {
    // username: "user1",
    // id: 34,
    // isAdmin : true,
    // address:{
    //     street: "123 Main st",
    //     apt: 122,
    //     state: "NY",
    //     zipcode: 1033
//     },
//     hobbies: ["rock climbing", "walking"]
// }

// console.log(user.isAdmin);
// console.log(user.address.state);
// console.log(user.hobbies[1]);


//*Objects and adding key pairs, reassigning key pairs within object
const house = {
    address:{
        street: "123 Main st",
        apt: 122,
        state: "NY",
        zipcode: 1033
    },
};
 house.rooms = 4;
 house.hasPool = true;
 house.address.state = "NJ"

 console.log(house);

 //* Define an object here

 const pet = {
    fur: "Brown and Black",
    tail: 1,
    address: {
        house: "A blue house"
    },
    nice : true,
    barks: true,
    paws: "cute",
 };

 //* Reassigning key value pairs and adding key value pairs 
 pet.legs = 4
 pet.address.house = "a black house"
 console.log(pet);

 //* IF statement using object 
 if (pet.nice || pet.paws == "cute") {
    console.log("Hello Rocky");
 } else {
    console.log("Hello dog");
 }

 
 
 
 //* Putting functions, objects within array objects
 const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],

 }
//* The same for loops written differently 
for (let i = 0; i < adventurer.belongings.length; i++) {
    //console.log(adventurer.belongings[i]);
}

//* for of loop 
for (item of adventurer.belongings) {
    //console.log(item);
}

//* for in loop
for (prop in adventurer) {
    console.log(prop);
}
//so a prop is short for properties and those are the key value pairs we create in an object.

console.log("name" in adventurer);
//Does this object have a property called name? TRUE and thats what shows up on the console

adventurer.health = 1000;
adventurer.sayHi = function () {
    console.log("heyyy");
}
//now the function is a part of an object it is called a method 

adventurer.isHungy = true;

//* Added an object within the adventurer object including a companion 
adventurer["companion"] = {
    name : "Valentine",
    type: "heart"
}

//* You have a nested object so it is okay 
adventurer.companion.belongings = ["bugs", "sunglasses"]
adventurer.companion.sayHi = function() {
    console.log("weeeee");
}
adventurer.height = 5.6
console.log(adventurer);
adventurer.sayHi()
adventurer.companion.sayHi()

//* My creation 

const friends = {
    fromCollege: 3,
    friendly: true,
    names: ["Dee", "Charlie" , "Henry"]
}



//* Movie arrays filled with objects , 
const movies = [
    {title : "Toy Story", minutes: 190},
    {title : "Boo", minutes: 190},
    {title: "Avatar", minutes: 190 }
];
// console.log(movies);
// console.log(movies[2].title);
//Using the property inside of the object, going to movies array accessing objects sitting at index 2 and accessing properties within
//*Looping over objects and key value pairs 
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    console.log(movies[i].title);
    console.log(movies[i].minutes);

}
//we now console log everything in the array , we can also focus in and single out the properties using .title and .minutes


///************'This' keyword/
//* the THIS keyword is a reference keyword will point to an object , since we are just console logging this it will point to the reference window of the browser.
console.log(this);

const player = {
    name: "Josh",
    health: 1000,
    power: 500,
    stamina: 300,
    sayHi: function(){
        console.log("Hello, My name is  " + this.name);
        //the this keyword will point to the object. 
        //I think of this as "In THIS instance of" 
        //Because multiple players all have the same properties, so we are clarifying which property we want with 'this'
    }
}

const enemy = {
    name: "Josh 2.0",
    health: 6000,
    power: 1000,
    stamina: 3000,
    sayHi: function () {
        console.log("I am the supreme " + this.name + " beat me if you dare");
        //The this keyword will refer to the object living inside of the codeblock. 
    }
}


console.log(player);
//we are logging everything within the object player
player.sayHi()
//we are logging the funciton within player
console.log(enemy);
//logging everything within enemy object
enemy.sayHi()
//logging the function sayHi within enemy 


