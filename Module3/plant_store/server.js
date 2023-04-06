const express = require("express");
const app = express();
const port = 3000;

const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches' Butter",
];

//* This is a REST API that has different endpoints that perform different actions, the first endpoint for root path '/' and another takes parameter from URL and responds with plant index array that have different methods we are working with app.get.
//* Using the HTTP method get, post, put, delete and following constraints of RESTful web architecutre, has the ability to create full REST API that performs CRUD capabilities.

app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
  //we are sending a response without request
});


/**
 * GET /awesome
 */




app.get("/awesome", (req, res) => {
    res.send(`
          <h1>Plants are awesome!</h1>
          <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >`);
  });


  app.get('/howdy/:firstname', (req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`hello ${req.query.title}, ${req.params.firstname}, ${req.query.year}`)
})


app.get('/hello/:firstname/:lastname', (req,res) => {
    console.log(req.params);
    const {firstname, lastname} = req.params
    res.send(`hello ${firstname} ${lastname}`)
})




//*parameter handling
app.get("/:indexOfPlantsArray", function (req, res) {
  //? Can only do one request and one response
  //? /: is the syntax for parameters
  //the key is indexOfPlantsArray and the value is whatever the user types in the url after / in the params
  //any value that you want to send over to backend app, do it by using parameter by URL
  //req request is what is coming in from browser
  console.log(req.params);
  if (plants[req.params.indexOfPlantsArray]) {
    //if there is an index number and plant corrosponding
    //This is looking into the array aka database and if its not there we will send the following else statement
    res.send(plants[req.params.indexOfPlantsArray]);
  } else {
    res.send("No plants at index: " + req.params.indexOfPlantsArray);
  }
  //use plants array and access the plant within the array of plants. We are responding to the request of parameter and we are giving the index of indexofPlantsArray. Our response is res.send
  //* Browser is sending request
  //* Our server aka this file is sending the response
});



app.listen(port, function () {
  `Server is listening on port ${port}`;
});
