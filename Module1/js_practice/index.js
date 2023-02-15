
//* Creating Classes 
class Cat {
    tail = 1;
    paws = 4;
    ears = 2;
    lives = 9;

    constructor(name, age, furColor){
        this.name = name,
        this.age = age,
        this.furColor = furColor
    }

    attack(){
        console.log('Attacking you with my cuteness');
    }

    pur(){
        console.log(`Prepare to hear my pur`);
    }

    jump(furniture = "sofa"){
        console.log(`stop that or ill jump on ${furniture}`);
    }

}

const cat1 = new Cat("Henry", 3, "black and white")
const cat2 = new Cat("Louie", 5, "brown and white")

cat1.attack();
cat1. pur();
cat1. jump();

cat2.attack();
cat2.pur();
cat2.jump("bed");


console.log(cat1);
console.log(cat2);


//* Constructors 

class Pirate{
    constructor (name, age, beardColor){
        this.name = name,
        this.age = age,
        this.beardColor = beardColor
    }

    threat(){
        console.log("Walk the plank");
    }

    fearless(){
        console.log("Im not scared of no man or ship");
    }

    treasure(){
        console.log("There is buried treasure down here, I can feel it");
    }

}

const blackPearl = ["Joe", "Sweeny", "Louie"]
const jollyRoger = ["Kate", "Fred", "Henry "]

let i = 0;
while (i < blackPearl.length) {
    console.log(blackPearl[i]);
    i++
}

let x = 0;
while (x < jollyRoger.length) {
    console.log(jollyRoger[x]);
    x++
}

const pirate1 = new Pirate("Fred", 62, "black");
const pirate2 = new Pirate("Timothy", 53, "blonde");
const pirate3 = new Pirate("Joe", 45, "brunette");

console.log(pirate1);
console.log(pirate2);
console.log(pirate3);

