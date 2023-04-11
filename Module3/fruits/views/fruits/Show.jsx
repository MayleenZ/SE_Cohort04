const React = require("react");

function Show(props) {
  const { fruit } = props;
  console.log(fruit);
  return (
    <div>
      <h1>Hello Show Route</h1>
      <p>
        {fruit.name} is {fruit.color} 
      {fruit.readyToEat ? " Yummy lets feast" : " Lets wait till ripe"}
      </p>
    </div>
  );
}

// class Show extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>Show Route</h1>
//             </div>
//         )
//     }
// }

module.exports = Show;
