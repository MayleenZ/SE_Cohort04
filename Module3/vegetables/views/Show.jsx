const React = require('react')

function Show (props){
    const {veggie} = props;
    // console.log(veggie);
    return (
        <div>
            <h1>Show Route</h1>
            <p>
                {veggie.name} is {veggie.color}
                {veggie.triedBefore ? "awesome" : "you should try it"}
            </p>
        </div>
    )
}

module.exports = Show