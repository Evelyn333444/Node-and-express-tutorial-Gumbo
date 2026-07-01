const express = require('express');
const router = express.Router();

//res.json sends a JSON response to the client by converting the passed argument into a JSON string and automatically setting the HTTP headers.
//The server will display the info inside the res.json below

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    const products = [
        { id: 1, name: 'Laptop', price: 1299 },
        {id: 2, name: 'Mouse', price: 50 }
    ]

    const requestedProduct = products.find((product) => product.id === id)
    res.json(requestedProduct

    )
})

//This is copied from server.js, but it is showing that you can create a new route in product.js, and the user will still see it.
router.post('/', (req, res) => {
    const { name, price } = req.body
    const newProduct = { name, price }
    console.log(`Received product: ${name}, Price: ${price}`)
    res.send('Product received')
})

module.exports = router
