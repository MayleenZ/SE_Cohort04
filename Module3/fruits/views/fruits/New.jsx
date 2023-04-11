const React = require("react");

function New() {
  return (
    <div>
      <nav>
        <a href="/fruits/">Index Page</a>
      </nav>
      <h1>New Fruit Page</h1>
      {/* when form gets submitted, it will make the action to post/using the POST method to send the data to the endpoint  /fruits */}
      {/* It sending it to be added to our index route */}
      <form action="/fruits" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Is Ready to Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create new fruit" />
      </form>
    </div>
  );
}

module.exports = New;
