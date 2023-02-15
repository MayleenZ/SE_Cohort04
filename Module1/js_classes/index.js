
//* Create a new class
class Vehicle {
    constructor(vin, make, model,) {
        this.vin = vin;
        this.make = make;
        //this refers to the objects 
        this.model = model;
        this.running = false;
        //These are all properties of the class Vehcile using constructor
        //dindt have to pass bc we have our default value equal to false
    }
    //instance method: this specific function will start the vehicle
    start(){
        this.running = true;
        console.log("Vehicle running");
    }

    //static method
    static vehicleInfo(){
        console.log("Vehile class...");
    }

}

const car1 = new Vehicle("78938XL", "BMW", "m3");
const car2 = new Vehicle("98953Q", "Volks", "Buggy");
//the car 1 variable is an instance of the Vehicle class 
//the new keyword will call the constructor 
//the vehicle instance has property make and vin 
// now we put our vin and make that gets added 

console.log(car1);
console.log(car2);

//Calling an instance method of vehicle 
car1.start()

//Calling a static method of vehicle
Vehicle.vehicleInfo()



//* Creating a subclass 
//* Creating a new class called electric and our subclass is Vehicle. It will inherit from the previous Vehicle class we made. 
class Electric extends Vehicle {

}

const car3 = new Electric(); 
console.log(car3);




//instance method
const color = []
//color.forEach()

//static method
Math.random();