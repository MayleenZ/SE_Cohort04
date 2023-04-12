const mongoose = require('mongoose')

//* Mongoose Schema

const VeggieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
})

//* Mongoose Model 
const Veggie = mongoose.model('Veggie', VeggieSchema)

//* Export mod 
module.exports = Veggie
