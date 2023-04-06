const express = require("express");
const fs = require("fs");
//import fs - file system moduel

const app = express();

//TODO: define our template engine
//we can do another engine
app.engine("madeline", (filePath, options, callback) => {
  //creating template file
  fs.readFile(filePath, (err, content) => {
    // if there is error we return and use callback to handle the error
    if (err) return callback(err);
    //if no error parse template file
    const rendered = content.toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      //making it a string using string method and using replace method to find the title content and change it to the option.title we will add later within a title HTML tag and replacing the rest of the template #message#, #content#
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<div>" + options.content + "</div>");
      //return the parsed data and we are passing null bc there is no error and then we return the rendered data
  });
});
//app.engine taking a callback and fs.readFile is taking another callback, need to handle error in second callback so its easier to handle the callback errors

//? Configuration =======
//setting the views folder in our app and then writing the file path on where to find the template files.
//sets directory where app should look for views to be rendered
app.set('views', './views')
//==============
//setting the default engine (view engine) with the name that we defined it with 'madeline'
//the 'view engine' setting is used by Express to automatically render views when you use the 'res.render()' method in your code
app.set('view engine', 'madeline')


//TODO: tell our express app to use our new template engine

//TODO: create routes
//replace placeholders and display content
app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
    res.render('template', {
        title: 'Hello Word',
        message: 'Welcome to my first template engine',
        content: 'In this template engine I will....'
    })    
});

app.get('/about-me', (req, res) => {
    res.render('about-me', {

    })
})

app.get('/fun-page', (req, res) => {
    res.render('template', {
        title: 'fun page',
        message: 'wow hi',
        content: 'fun page welcomes you'
    })
})




const port = 3000;
app.listen(port, function () {
  console.log(`server is running on port ${port}`);
});
