const React = require("react");

function New() {
  return (
    <div>
        <a href = "/veggies">Click for All Vegetables</a>
      <h1>Create a new Vegetable</h1>
      <form action="/veggies" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Ready to Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create new Veggie" />
      </form>
    </div>
  );
}

module.exports = New;
