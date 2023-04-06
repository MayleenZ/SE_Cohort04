console.log('running script...')

//import or require a module , no path bc its a built in module
const fs = require('fs')
const request = require('request');
// console.log(typeof request);
//=================REQUEST PACKAGE====================
request(
    'https://jsonplaceholder.typicode.com/users',
    function(err, response, body){
        // console.log(response);
        // console.log(body);
        if(err){
            console.log(err);
        }
    }
)
//======Our own module======

const random = require('./utils/random');
const circle = require('./utils/circle')

  for (let i = 0; i < 10; i++) {
    console.log( random(100, 200) );
  }

console.log(circle);
circle.area()
circle.circumference()

//===================OUR OWN MODULE==========================

//import module
const daysOfWeek = require("./days-of-week.js");
//anything we create we have to pass relative path so node finds it

//using the daysOfWeek module 
console.log(daysOfWeek.weekdays);
const day = daysOfWeek.getWeekday(1)
console.log(day);


//====================NODE FS MODULE=========================
//Write a new file 
//default is asynchronous 
fs.writeFile('', 'hello world node js', function(e){
    if(e) {
        // console.log(e);
        // throw Error(e.message)
        //explicitly throw an error and inform user abut the error , made to stop our program 
    }
    console.log("done writing file");
})
//Its going to write data to the file you specifiy, if the file doesnt exist it will create the file for you and you can update the content 

fs.appendFile('./hello.txt', "some more", function(){
    console.log('done');
})
