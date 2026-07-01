app.use(exampleMiddleware)

//Middleware is a function that runs between the incoming request and the outgoing response. It can be used to modify the request or response objects, or to perform other tasks like logging, authentication, or error handling. In this case, we are using a middleware function called exampleMiddleware that logs the request method and URL to the console.
//Global middleware is applied to all routes, so it is placed before route handlers. In this case, we are using a middleware function called exampleMiddleware that logs the request method and URL to the console.
//Custom error handling middleware must go after all the route handlers to cathc any errors
//For example:
function exampleMiddleware(req, res, next) {
    const { username, email } = req.body
        const isAdmin = checkForAdmin(username, email)

        if(isAdmin) {
            return res.send('Welcome Admin')
        }

        next() //run next middleware or route handler
        //IMPORTANT: next() is required everytime you have a middleware function, otherwise the request will hang and never reach the route handler. It tells express to move on to the next middleware or route handler in the stack.
    }

    //Middleware can read or change req or res, decide to send a response early, or call next() to pass control to the next middleware or route handler. In this case, we are using a middleware function called exampleMiddleware that logs the request method and URL to the console.
    //Common use cases for middleware include logging, authentication and permissions, error handling, handling file uploads, and validating data before it reaches the route handler. In this case, we are using a middleware function called exampleMiddleware that logs the request method and URL to the console.
    //Typical request response flow looks like this: fetch('path') from frontend -> middleware and express routes from backend -> response from backend -> frontend receives response and updates the UI accordingly. 