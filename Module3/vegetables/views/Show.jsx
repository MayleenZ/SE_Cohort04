const React = require('react')

function Show (props){
    const {veggie} = props;
    // console.log(veggie);
    return (
        <div>
            <h1>Show Route</h1>
            <p>
                {veggie.name} is {veggie.color}
                {veggie.readyToEat ? " and it is ready to eat" : " but let's wait till ripe"}
            </p>
        </div>
    )
}

module.exports = Show