
//here we are importing the express module
const express = require('express')

console.log(typeof express);
//express is a function

//create an instance of the express application
const app = express();

//=========Define our routes 

//root or main route 
//we create our route directly on the app
//req = request (is req coming in) and res = response (is our response)
app.get('/', function(req, res){
    // use the response object to send back some data 
    //each callback function to take in a req and a response
    //browser makes get requestion
    res.send('<h2>Hey World</h2>');
    //so the browser can receive and render
    //browser making the request and our response is sending some html back to browser
})

app.get('/home', function(req, res){
    res.send('<h1>Home Page</h1>')
})

app.get('/cars', function(req, res) {
    res.send("Here's a list of my cars...");
  });

// This is like our event listener, we pass the port number and a call back funciton that says the server is running on port 4000
//we want our app.listen at the bottom 
app.listen(3000, function(){
    console.log('Server is listening and running on port 3000...');
})

