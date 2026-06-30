//The require() function is a built-in node.js function that loads other files or libraries into your code. 
//When you call require('express'), Node.js looks for the installed express package in node.modules
//and gives you access to its functions so you can build a web server.

const express = require('express') //This is basically importing express
const app = express () //const app creates the app

app.listen(3000, () => {
    console.log('whatever you want to see on the screen')
})

//The app.listen function basically tells you where to see the code you are generating, as it doesn't use the 'npm start' command that React uses

//Routes are instructions stating that if someone visits a specific URL, then send back a specific response.
//Using express, you create routes using either app.get() or app.post(), and inside the route handler you decide what data to send back or which action to perform.
//If you look at the Youtube clone, you'll see how to import req and res, and how to set them up in the file.
//Req is request, which is only used if there is frontend.
//Res is the response, which is shown in the curly brackets below.
app.get('/', (req, res) => {
    res.send('Hello World')
})

//res.json sends a JSON response to the client by converting the passed argument into a JSON string and automatically setting the HTTP headers.

app.get('/products', (req, res) => {
    res.json([
        {id: 1, name: 'Lqptop', price: 1299 },
        {id: 2, name: 'Mouse', price: 50 }
    ])
})

//Routes are defined by http method - app.get(), a path- ex: /about, and one or more handler functions that get called when a request matches that path
//It should look something like this:
app.get('/about', (req, res) => {
    res.send('This is the about page')
})


