const mongoose = require('mongoose');

// Create the schema
const tweetSchema = new mongoose.Schema({
    title: String,
    body: {
        type: String,
        min: 1,
        max: 255
        //min and max amount of strings
    },
    author: String,
    category: {
        enum: ['Programming', 'Gaming', 'Arts']
        //a enum validator is an array that will check if the value given, is an item in the enum array
        //if value is not in array, mongoose will throw a validation error when trying to save
    },
    likes: {
        type: Number,
        default: 0
    },
    sponsored: {
        type: Boolean,
        default: false
    }
},
{timestamps: true}
)
// create the model
const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet