const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

//Global Configuration
//listen on open and close, saving to different variables and connect to mongo within app.listen 
module.exports = function (){
    //Connecting to MongoDB
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })


    //*Handling the connection type, whether it has error, open or close 
    mongoose.connection.on('error', (error) => {
        console.error(error)
    })
    mongoose.connection.on('open', ()=> {
        console.log('Connected to MongoDB');
    })
    mongoose.connection.on('close', ()=> {
        console.log('Mongodb is disconnected');
    })
}