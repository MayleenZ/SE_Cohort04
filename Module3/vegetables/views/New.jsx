const React = require("react");

function New() {
  return (
    <div>
      <h1>Create a new Vegetable</h1>
      <form action="/veggies" method="POST">
        Name: <input type="text" name="name" />
        Color: <input type="text" name="color" />
        Have Tried Before: <input type="checkbox" name="triedBefore" />
        <input type="submit" name="" value="Create new Veg" />
      </form>
    </div>
  );
}

module.exports = New;
