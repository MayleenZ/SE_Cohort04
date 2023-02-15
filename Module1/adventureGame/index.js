//*Defining a new class
//*Creating a parent class and sub classes, using extends keyword

class Player {
  leg = 2;
  arms = 2;
  eyes = 2;
  health = 500;
  damage = 100;
  //default values to take in for each character

  constructor(name, age, hairColor) {
    this.name = name;
    //this.name = name(from the parameter)
    this.age = age;
    this.hairColor = hairColor;
    this.lovesAdventure = true;
    //These properties are when we initialize the instance
  }

  greet(otherCharacter = "friend") {
    //within the parameter we created a default parameter equals to "friend"
    console.log(`Hello ${otherCharacter}`);
  }
  //creating a greet method (method = function inside an object)
  //By default it is an instance method, we call it with out instances (the new objects we created below)

  //overriding the attackmethod from parent class
  attack() {
    console.log(`${this.name} is attacking`);
  }

  takeDamage(damageLevel) {
    this.health -= damageLevel;
    console.log(`${this.name} now has a health level of ${this.health}`);
  }
}

//Here we instantiate new objects to the class by using the "new" keyword
//We are also passing the arguments from the parameters we set in the constructor method
const mario = new Player("Mario", 32, "black");
const princessPeach = new Player("Princess Peach", 28, "blonde");

//console.log(mario instanceof Player);
//would say true bc the instance `mario` belongs to the class `Player`

//Here we call the instance method we created to each of our objects
//We created our parameter and now using our method and passing the argument with the parameter below
mario.greet("Princess Peach");
princessPeach.greet("Mario");
mario.attack();

//Now we have the default properties that we set before the constructor method and we also have the properties from the constructor method
//Here we are console logging the objects
console.log(mario.age);

//****Creating a child/sub class
//*Once we add extends that will create a child class from whatever parent class you are extending from 
class Friend extends Player {
  //extends keyword inherits everything from Player and adds another class
  constructor(name, age, hairColor, ...skills){
    //created a skills array using ...skills
    //the rest operator ... will create an array for you and store the amount of skills you have in there (aka the rest of the arguments you passed through)
    super(name, age, hairColor);
    this.sklls = skills;
    //send the values we need to initialize to the parent class. and now the values will be sent to the super which is the parent class and initializing the skills in this subclass. 

  }

  fly() {
    console.log(`${this.name} is flying.. `);
  }
  attack() {
    console.log("FIREBALLL AHHH");
    //we overwrote the attack method and now taking it and using it with toad's phrase attack
  }

  doubleAttack() {
    //*The super keyword references the parent class from the child class
    super.attack();

    //when we do this.attack it refers to the one we have defined within our child class, friend
    this.attack();
  }
}

//* Child Class from parent Player Class
class Enemy extends Player {
  //inherting properties from player
  //creating enemy class
}

class Bestie extends Player {}

//*toad passed three new arguments that will now be stored in the skills array we created above using the rest operator (...) in front of skills parameter we put in the constructor to store our properties.
const toad = new Friend("Toad", 29, "mushroom", "runner", "jumper", "builder");
const bowser = new Enemy("bowser", 32, "spiky red");
const Luigi = new Bestie("Luigi", 30, "black");
//Creating a new object

console.log(mario);
console.log(princessPeach);
console.log(toad);

//*Changes the hair color, using the set method, dont have the set method here but in the below exercise I have an example of set and get that we can also add in here
//bowser.setHair("Hot Pink")
console.log(bowser);
console.log(Luigi);

toad.fly();
toad.attack();
toad.doubleAttack();
princessPeach.attack();

//* Using an if statement to use the object and properties to fight

//creating a conditional to use in our if statement
const randomNum = Math.floor(Math.random() * 2);
console.log(randomNum);

//Can put it in a loop till they fight and run out of damage, if we want
if (randomNum < 1) {
  bowser.takeDamage(mario.damage);
  //*mario.damage is the argument from take damage method. mario.damage takes from the damage property using dot notation
  //*take the enemy and use take damage method and the amount of damage will be the amount of damage mario has
} else {
  Luigi.takeDamage(bowser.damage);
}

//******/ My Exercise, using private key

class Lipstick {
  lips = 1;
  tube = 1;
  #stickColor; //this will create a private property
  //we can create default properties outside of the constructor

  constructor(tubeColor, stickColor) {
    this.tubeColor = tubeColor;
    this.#stickColor = stickColor;
  }
  welcome(phrase = "friend") {
    //console.log(`Welcome to your new lip color ${phrase}`);
  }
  tryOn() {
    //console.log(`Try on our lip color, You'll love it`);
  }

  //refers to a setter method, overwrite property in your class.
  //This provides security and protects our properties from being changed by a bug or dot notation
  setStickColor(newStickColor) {
    //update instance property
    this.#stickColor = newStickColor;
    //rewriting the object stickColor with our new property
  }
  //Getter method ; to retireve info on your instance
  getStickColor() {
    console.log(this.#stickColor);
    return this.stickColor;
  }
}

// const boldRed = new Lipstick("black", "red");
// const DynoBlue = new Lipstick("dark blue", "neon blue");

//when we have blueprint of class we get an object , in js everything is an object
// boldRed.welcome("girly");
//here we pass a new variable instead of phrase = friend we did phrase = girly. the welcome method will use girly
// DynoBlue.tryOn();

// boldRed.lips = 2;
//rewriting lips =1  using dot notation

//We are updating a property of the instance
//*Update the property using the set method
//boldRed.setStickColor("Berry Red")

//*here we are retrieving the color using get method
//console.log(boldRed.getStickColor())

//*Access a private prop
//*Cant read it, comes as undefined
//console.log(boldRed.stickColor);

//*update prop using dot notation , this wont update it will add another object called stickColor
//boldRed.stickColor = "blood"

//*We are adding a new stick color using the dot notation bc stickColor became a private property
//DynoBlue.stickColor = "green"

// console.log(DynoBlue);
// console.log(boldRed);
