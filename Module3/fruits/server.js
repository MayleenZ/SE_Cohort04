
//* == importing data using require, our own data(models) requires a relative file path
const fruits = require('./models/fruits')
const express = require("express");
//get cached into the memory of the application


const app = express();
const port = 3000;

//*====Setting up our view engine, must be done above our routes
app.set('view engine', 'jsx')
//run once and as long as application is running, only going to be required once
//this already knows to look inside the views folder
//this code sets up an express view engine for rendering JSX file using the jsx-view-engine libaray
//app.engine is a method in express framework that registers a view engine for rendering templates
app.engine('jsx', require('jsx-view-engine').createEngine())

//*==== MiddleWare (runs before routes), only needed when we need to create middleware, most already have middlewares, everytime we get a request this runs first on all endpoints
//will set the middleware in the app and runs in betweent he req and response cycle
//takes 3 parameters, req response and next property within the function
//when server gets a request, this gets executed
app.use((req,res,next) => {
    console.log(req.url);
    //the next will tell the next middleware to go, if there is no next middleware then it will send the following regular endpoints and rotues
    //next() to ensure that the request continues to be processed and that you get a  response.
    //will always send middleware before response to the client which is the routes below 
    next()
})

//* MIDDLEWARE that express provides for us, we are always going to use it like this
//parses the data from the request
//always needs to parse the data, default setting 
app.use(express.urlencoded({extended:false}))
//built in middleware funciton by express, parses incoming request bodies in URL encoded format



//* ENDPOINTS /ROUTES

app.get('/', (req, res)=> {
    res.send('<h1>Hello Fruits</h1>')
})

//? Index Route ==== (return a list/index of fruits)
app.get("/fruits", (req, res) => {
    //sending raw array with objects inside 
//   res.send(fruits);
res.render("Index", {fruits: fruits} )
});


//? New Route: (return a form to create a new fruit)
//why we put this above our show route is because our show route has a parameter and it will never reach the new page as it will think it is a parameter.
app.get('/fruits/new', (req, res) => {
    res.render('New')
})

//? POST method (accept data from the form), we created a new endpoint so our app can communicate with a new route
app.post("/fruits", (req, res) => {
    console.log(req.body);
    //the actual body is set after middleware is defined, url encoded middleware
    // === checks if checkbox is on or off and sets value to either true or false to match the data we are parsing
    // if(req.body.readyToEat === "on"){
    //     req.body.readyToEat = true;
    // } else {
    //     req.body.readyToEat = false;
    // }
    req.body.readyToEat === "on" ? req.body.readyToEat = true : req.body.readyToEat = false
    //push the new object to the fruits array
    fruits.push(req.body)
    // redirects the user to another page/endpoint in the app, in this case to the fruits index route/page/endpoint.
    res.redirect('/fruits')
})

//=====================
//? Show Route === (return a specific/single fruit) 
//This get put last because it has a more specific route since it takes the user parameters
app.get("/fruits/:indexOfFruit", (req, res) => {
  console.log(req.params);
//   res.send(fruits[req.params.indexOfFruit]);
    res.render('Show', {fruit: fruits[req.params.indexOfFruit]})
    //we are rendering the template Show.jsx

});

//**** Super Cool way to redirect user if they misspell the url , bc it will all get redirected, checks any of the routes and if the routes doesnt match until it reaches the end and redirects the user to /fruits */
//* Usually shows the user the 404 page and can create a new view and call it 404.jsx and create a new view and use res.render
app.get('/*', (req, res) => {
    //These are two different behaviors, the first one renders a view 404 we made; the second redirects user to the /fruits page
    res.render('404')
    // res.redirect('/fruits')
})


//* PORT LISTENING

app.listen(port, function () {
  console.log(`server running on port ${port}`);
});
