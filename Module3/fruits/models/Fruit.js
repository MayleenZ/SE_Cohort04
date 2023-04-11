const mongoose = require('mongoose')


//* Mongoose Schema is the structure of the data
const fruitSchema = new mongoose.Schema({
    //adding rules to create a new schema in our database - telling this to mongoose
    //required: true means that it will always be required such as the name or it will throw an error
    name: {type: String, required: true},
    //name is required , if they dont add name it will give an error 
    color: {type: String, required: true},
    readyToEat: Boolean
    //type is defined as Boolean and defined as not required
})

//* Mongoose Model: we pass the name for our model and the schema we made above ; creating new model and apply the method and rules from our schema 
const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit;