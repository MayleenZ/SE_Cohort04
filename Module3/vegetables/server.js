//* ==== Import data using require
require("dotenv").config();
//which loads environment variables from a .env file into the process.env object.
const express = require("express");
const mongoose = require("mongoose");
const Veggie = require("./models/Veggie");

//* ====  Variables
const app = express();
const port = 3000;

//* ==== View Engine to render JSX templates/files
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware allows the app to parse URL-encoded form data
app.use(express.urlencoded({ extended: false }));

//* ==== Our Routes/ Endpoints for templates (.jsx files )
app.get("/", (req, res) => {
  res.send("<h1>Hello Veggies</h1>");
});

//? The reason app.get is before the app.post in this scenario is because we first want our user to see all the vegetables and then to create and "post" a new one to all the vegetables, after posting they will get redirected back to /veggies where they will see all the vegetables and their post.
//? Its important that the order of the code follows the flow of the user and functionality of site
app.get("/veggies", (req, res) => {
  Veggie.find({}, (error, allVeggies) => {
    res.render("Index", { veggies: allVeggies });
    //veggies: allVeggies
    //***THIS MUST MATCH THE PROPS WE CALLED IN INDEX.JSX
  });
});
//the code above will retrieve all the Veggie objects from the database and render them using the "Index" template

app.get("/veggies/new", (req, res) => {
  res.render("New");
});

//? POST methods where we are accepting data from the form we are creating in veggie NEW

app.post("/veggies", (req, res) => {
  console.log(req.body); // this logs the object we have created from our form located in new template file 
  req.body.readyToEat === "on"
    ? (req.body.readyToEat = true)
    : (req.body.readyToEat = false);
  Veggie.create(req.body, (err, createdVeggie) => {
    res.redirect("/veggies");
  });
});
//the code above will create a new Veggie object with data from the request body and redirect to the /veggies route

app.get("/veggies/:id", (req, res) => {
  Veggie.findById(req.params.id, (error, foundVeggie) => {
    //the line above is a mongoose method that searches for a Veggie document in the MongoDB by its ID (.findById(){})
    //req.params.id retrieves the iD from the url parameters, which is then passed to the findById method. if the veggie with id number is found, it is passed to the callback function as the 'foundVeggie' parameter
    res.render("Show", { veggie: foundVeggie });
    //the line above is within the callback function, the res.render method is called with Show view template and the foundVeggie object passed in as a property named 'veggie'. This object is then used in the view to display the details of the selected Veggie document.
    
  });
});
//the code above will retrieve a specific Veggie object by its ID and render it using the "Show" template 

//* ==== Listening Port

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB!");
  });
});
