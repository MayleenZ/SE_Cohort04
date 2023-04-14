const React = require("react");
const DefaultLayout = require('../layout/Default')

function Show(props) {
  const { fruit } = props;
  console.log(fruit);
  return (
    <DefaultLayout title = "Show Page">
      {/* <h1>Hello Show Route</h1> */}
      <a href="/fruits">Index Fruit Page</a>
      <p>
        {fruit.name} is {fruit.color} 
      {fruit.readyToEat ? " Yummy lets feast" : " Lets wait till ripe"}
      </p>
    </DefaultLayout>
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
