//* ==== Import data using require
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Veggie = require("./models/Veggie");

//* ====  Variables
const app = express();
const port = 3000;

//* ==== View Engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware
app.use(express.urlencoded({ extended: false }));

//* ==== Our Routes/ Endpoints for templates (.jsx files )
app.get("/", (req, res) => {
  res.send("<h1>Hello Veggies</h1>");
});

app.get("/veggies", (req, res) => {
  Veggie.find({}, (error, allVeggies) => {
    res.render("Index", { veggies: allVeggies });
    //veggies: allVeggies
    //***THIS MUST MATCH THE PROPS WE CALLED IN INDEX.JSX
  });
});

app.get("/veggies/new", (req, res) => {
  res.render("New");
});

//? POST methods where we are accepting data from the form we are creating in veggie NEW

app.post("/veggies", (req, res) => {
  console.log(req.body);
  req.body.triedBefore === "on"
    ? (req.body.triedBefore = true)
    : (req.body.triedBefore = false);
  Veggie.create(req.body, (err, createdVeggie) => {
    res.redirect("/veggies");
  });
});

app.get("/veggies/:id", (req, res) => {
  Veggie.findById(req.params.id, (error, foundVeggie) => {
    res.render("Show", { veggie: foundVeggie });
  });
});

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
