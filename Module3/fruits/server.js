const express = require('express')
const app = express()
const port = 3000

const fruit = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

//* ENDPOINTS /ROUTES
app.get('/fruits', (req,res) => {
    res.send(fruit)
})

app.get('/fruits/:indexOfFruit', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    if(req.query.color === fruit[req.params.indexOfFruit].color){
        return res.send(`fruit is ${fruit[req.params.indexOfFruit].name} and is it ripe? ${fruit[req.params.indexOfFruit].readyToEat}`)
    }
})




app.listen(port, function(){
    console.log(`server running on port ${port}`);
})