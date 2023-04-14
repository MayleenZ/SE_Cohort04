const React = require("react");
const DefaultLayout = require("../layout/Default");

function Edit(props) {
  const { fruit } = props;
  console.log(fruit);
  return (
    <DefaultLayout title="Edit Fruits Page">
      <form method="POST" action={`/fruits/${fruit._id}/?_method=PUT`}>
        Name: <input type="text" name="name" defaultValue={fruit.name} />
        {/* if you use regular value = {} it will not work bc it will set the value you are passing and if you do that in the front end, the person will not be able to type over the fruit.name , we have to update the state in the onChange or use defaultValue , React doesnt control the defaultValue property so the form can handle the state and user can re-type and actually edit */}
        <br />
        Color: <input type="text" name="color" defaultValue={fruit.color} />
        <br />
        Is Ready to Eat:
        {fruit.readyToEat ? (
          <input type="checkbox" name="readyToEat" defaultChecked />
        ) : (
          <input type="checkbox" name="readyToEat" />
        )}
        <br />
        <input type="submit" name="" value="Submit Edit" />
      </form>
    </DefaultLayout>
  );
}

module.exports = Edit;
