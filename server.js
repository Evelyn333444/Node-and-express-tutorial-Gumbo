//This section is a basic express server setup, which is used to create a backend for the application. It is important to note that this is not a full backend, but rather a simple server that can handle requests and responses.
//It will look something very close to this, but with different routes and data being sent back to the client.

const cors = require('cors')
const express = require('express');
const productsRouter = require('./products.js') //This is importing the product.js file, which is where the routes are being stored

const app = express() //This is creating the express app

app.use(cors()) //This is allowing cross-origin requests, which is important for frontend and backend communication
app.use(express.json()) //This is allowing the server to parse JSON data from the request body

app.use('/products', productsRouter) //This is telling the server to use the productsRouter for any requests that start with /products

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})



//Below are examples and explanations of how to use express and node.js. 

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
//The server will display the info inside the res.json below

app.get('/products', (req, res) => {
    res.json([
        {id: 1, name: 'Lqptop', price: 1299 },
        {id: 2, name: 'Mouse', price: 50 }
    ])
})

// Route parameters are variables inside the URL that lets your server handle dynamic values, like /products/5 or /users/abc123.
//In express you write this with a colon, for example /products/:id.
//Whatever replaces :id in the URL becomes available as req.params.id in your route handler.
//The id can be renamed, but products can not, because we are targeting a certain object within products
//In this canse, we are using a request, because we are requesting specifc object

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id)

    const products = [
        { id: 1, name: 'Laptop', price: 1299 },
        {id: 2, name: 'Mouse', price: 50 }
    ]

    const requestedProduct = products.find((product) => product.id === id)
    res.json(requestedProduct

    )
})

//Routes are defined by http method - app.get(), a path- ex: /about, and one or more handler functions that get called when a request matches that path
//It should look something like this:
app.get('/about', (req, res) => {
    res.send('This is the about page')
})


//Below is showing the post route pulling the requested data from the html file, and 
//pushing it to the server. When it does, the user will see the res.send message, as well as the console log data i've typed in
app.post('/message', (req, res) => {
    const { name, message } = req.body
    console.log(`Received message from ${name}: ${message}`)
    res.send('Message received')
})

//Get routes send data from the server to the browser
//Post routes send the dats from the browser to the express server
//This is useful because on real websites, there are forms, buttons, etc. that require the user's data input
//In order to do this, you need app.use(express.json())

app.use(express.json())

//CORS tells web browsers whether to allow frontend JS code to read the responses coming from your server.
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))


//The express router feature lets you split your routes into smaller modules and group things that belong together.
//This makes code smaller, more readable, and organized.
//In the code above, you can see that the routes are not organized, but with using express router, they will be.
//For this, I will be using the product.js file I have created.
//In this way, its sort of like creating components in React, but for the backend. You can create a file for each route, and then import them into the server.js file.
//IMPORTANT: You need to change app.get and app.post to router.get and router.post, and then export the router at the bottom of the file. Then you can import it into server.js and use it with app.use('/products', productRoutes)
//IMPORTANT: You need to delete products: app.get('/products/:id', (req, res) would be app.get('/:id', (req, res) in product.js, because the /products is already being used in server.js with app.use('/products', productRoutes)

