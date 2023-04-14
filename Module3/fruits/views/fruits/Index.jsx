const React = require("react");
const DefaultLayout = require('../layout/Default')

function Index({ fruits }) {
  //destructured the object so instead of props = fruits i used a curly brances within fruits
  console.log(fruits);

    return (
      <DefaultLayout title="Fruits Index Page">
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        
        {/* <h1>Index Page</h1> */}
  
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li key={fruit._id}>
                The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is {fruit.color}{" "}
                {fruit.readyToEat
                  ? "It is ready to eat"
                  : "It is not ready to eat"}
                  <a href = {`/fruits/${fruit._id}/edit`}> Edit</a>
                  {/* Creating an update (edit) route*/}
                  <form method = 'POST' action = {`/fruits/${fruit.id}?_method=DELETE`}>
                    {/* Post is going to send data but here we are sending the delete request. Forms only can do GET or POST requests so thats why we are using methodOVerride to do a delete while utilizing POST */}
                    <input type = 'submit' value = 'X'/>
                  </form>
                  <hr/>
              </li>
            );
          })}
        </ul>
  
      </DefaultLayout>
      //The default layer is a higher order component that is using the props and we are using it to follow the styling of the default layout. So in this case the title is being rendered as Fruits INdex page and its also going to be an h1 , and whatever is in between opening and closing tag is the children so this body would be the children 
    );
  }
// using fruit._id to match the mongoDB id so it catches it and reads it 

module.exports = Index;
