const React = require("react")

function Index ({veggies}){
    // const {veggies} = props
    // console.log(veggies);
return (
    <div>
        <h1>Index Route</h1>
        <a href = "./veggies/new">Click to create new vegetable</a>
        <ul>
        {veggies.map((veggie, key) => {
            return (
                <div>
                    <li key = {veggie._id}>The <a href = {`/veggies/${veggie._id}`}>{veggie.name}</a></li>
                    <li>Color: {veggie.color}</li>
                    <li>Ready to Eat? {veggie.readyToEat ? "Yes" : "Not ripe yet"}</li>
                    < hr/>
                </div>
            )
        })}
        </ul>
    </div>
)
}

module.exports = Index