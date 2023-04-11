const React = require("react");

function Index({ fruits }) {
  //destructured the object so instead of props = fruits i used a curly brances within fruits
  console.log(fruits);

  return (
    <div>
      <h1>Index Route</h1>
      <ul>
        {fruits.map((fruit, i) => {
          return (
            <div>
              <li>
                The <a href={`/fruits/${i}`}>{fruit.name}</a>
              </li>
              <li>
                Color is {fruit.color}
              </li>
              <li>
                The fruit is {fruit.readyToEat ? 'yum' : 'not yum'}
              </li>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
