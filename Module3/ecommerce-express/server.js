//Configuration
const express = require('express')
const PORT = 3000
const app = express()
const jsx = require('jsx-view-engine')

//View Engine
app.set('view engine', 'jsx')
app.set('jsx', jsx.createEngine())

//Middleware
app.use(express.urlencoded({extended:false}))

//Routes
app.get('/', (req,res)=> {
    res.send('Home page')
})


//Listening Port
app.listen(3000, function(){
    console.log(`server port ${PORT} is running`);
})