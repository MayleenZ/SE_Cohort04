const React = require("react")

function Index ({veggies}){
    // const {veggies} = props
    // console.log(veggies);
return (
    <div>
        <h1>Index Route</h1>
        <ul>
        {veggies.map((veggie, i) => {
            return (
                <div>
                    <li key = {veggie._id}>The <a href = {`/veggies/${veggie._id}`}>{veggie.name}</a></li>
                    <li>{veggie.color}</li>
                    <li>{veggie.triedBefore ? "tried" : "not tried"}</li>
                </div>
            )
        })}
        </ul>
    </div>
)
}

module.exports = Index