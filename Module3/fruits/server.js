require("dotenv").config(); // require and configure your dotenv package
//* == importing data using require, our own data(models) requires a relative file path
const fruits = require("./models/fruits");
const express = require("express");
//get cached into the memory of the application
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//? our new model from mongoose
const Fruit = require("./models/Fruit");

const app = express();
const port = 3000;

//*====Setting up our view engine, must be done above our routes
app.set("view engine", "jsx");
//run once and as long as application is running, only going to be required once
//this already knows to look inside the views folder
//this code sets up an express view engine for rendering JSX file using the jsx-view-engine libaray
//app.engine is a method in express framework that registers a view engine for rendering templates
app.engine("jsx", require("jsx-view-engine").createEngine());

//*==== MiddleWare (runs before routes), only needed when we need to create middleware, most already have middlewares, everytime we get a request this runs first on all endpoints
//will set the middleware in the app and runs in betweent he req and response cycle
//takes 3 parameters, req response and next property within the function
//when server gets a request, this gets executed
app.use((req, res, next) => {
  console.log(req.url);
  //the next will tell the next middleware to go, if there is no next middleware then it will send the following regular endpoints and rotues
  //next() to ensure that the request continues to be processed and that you get a  response.
  //will always send middleware before response to the client which is the routes below
  next();
});

//* MIDDLEWARE that express provides for us, we are always going to use it like this
//parses the data from the request
//always needs to parse the data, default setting
app.use(express.urlencoded({ extended: false }));
//built in middleware funciton by express, parses incoming request bodies in URL encoded format

//* Method Override so we can connect the form / input / delete button query to delete
//==  Override using a query value ; so that when i make the request from the form we are going to make a POST and then the action we will specific the route and the query with the method we want to execute
app.use(methodOverride("_method"));

//* =========== * ENDPOINTS /ROUTES

app.get("/", (req, res) => {
  res.send("<h1>Hello Fruits</h1>");
});

//? Index Route ==== (return a list/index of fruits)
app.get("/fruits", (req, res) => {
  //sending raw array with objects inside
  //   res.send(fruits);
  // res.render("fruits/Index", { fruits: fruits });
  Fruit.find({}, (error, allFruits) => {
    //find all the documents in mongoose from Fruit mongoose model and putting it in allFruits
    res.render("./fruits/Index", { fruits: allFruits });
    //passing in the prop name fruits and reading from allFruits we got back from database instead of just our local data from models
    //we asked for all the documents
  });
});

//? New Route: (return a form to create a new fruit)
//why we put this above our show route is because our show route has a parameter and it will never reach the new page as it will think it is a parameter.
app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

//* Return the edit form
app.get("/fruits/:id/edit", (req, res) => {
  Fruit.findById(req.params.id, (error, foundFruit) => {
    !error
      ? res.render("fruits/Edit", { fruit: foundFruit })
      : res.send({ msg: error.message });
  });
});

//* Seed Route
app.get('/fruits/seed', (req,res) => {
  Fruit.create([
    {
        name:'grapefruit',
        color:'pink',
        readyToEat:true
    },
    {
        name:'grape',
        color:'purple',
        readyToEat:false
    },
    {
        name:'avocado',
        color:'green',
        readyToEat:true
    }
], (err, data)=>{
    res.redirect('/fruits');
})
})



//* Handle the edit form data
app.put("/fruits/:id", (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
  Fruit.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedFruit) => {
      res.redirect(`/fruits/${req.params.id}`);
    }
  );
});

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
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);
  //push the new object to the fruits array
  // fruits.push(req.body)

  //? We created a new object call createdFruit that was sent to the user after the user creates a new fruit, this is our way of adding things to the MongoDB database using the schema as our guide.
  //? req.body is the request the user sent and we filter what they sent and use it to create a new piece of data to our MongoDB
  Fruit.create(req.body, (err, createdFruit) => {
    // res.send(createdFruit);
    // redirects the user to another page/endpoint in the app, in this case to the fruits index route/page/endpoint.
    res.redirect("/fruits");
  });
});

//=====================
//? Show Route === (return a specific/single fruit)
//This get put last because it has a more specific route since it takes the user parameters
app.get("/fruits/:id", (req, res) => {
  console.log(req.params);
  //   res.send(fruits[req.params.indexOfFruit]);
  // res.render("fruits/Show", { fruit: fruits[req.params.indexOfFruit] });
  //we are rendering the template Show.jsx
  Fruit.findById(req.params.id, (error, foundFruit) => {
    res.render("fruits/Show", { fruit: foundFruit });
  });
});


//! DELETE FRUIT
app.delete("/fruits/:id", (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (error, deletedFruit) => {
    // res.send(deletedFruit)
    //here we are sending the data(deletedFruit) we have selected by the req.params.id and deleting it
    res.redirect("/fruits");
  });
});

//**** Super Cool way to redirect user if they misspell the url , bc it will all get redirected, checks any of the routes and if the routes doesnt match until it reaches the end and redirects the user to /fruits */
//* Usually shows the user the 404 page and can create a new view and call it 404.jsx and create a new view and use res.render
app.get("/*", (req, res) => {
  //These are two different behaviors, the first one renders a view 404 we made; the second redirects user to the /fruits page
  res.render("404");
  // res.redirect('/fruits')
});
//* PORT LISTENING

app.listen(port, () => {
  console.log(`server running on port ${port}`);
  mongoose.set("strictQuery", true);
  //connect to mongodb with mongoose.connect. This always going to be the same
  //trying to make the connection
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //once we make the connection, this will happen below, only once. we should always do once
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB!");
  });
});
