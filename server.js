//                        DEPENDENCIES
const express = require('express') // importing express js library
const app = express() // assigning express package to be used
const port = 3000 // will run on localhost:3000


//                      MIDDLEWARE
app.use(express.static('public')) // serve static files such as images, css files, and javascript files

//                       ROUTES

// Landing page GET request----  localhost:3000 on your local machine
app.get('/', (req, res) => {
    res.send('Hello World!')
})
//GET request to /user route
app.get('/user', (req, res) => {
    res.send('DATING-APP!')
})

//Respond to POST request on the landing page/homepage
app.post('/', (req, res) => {
    console.log('sent a post')
    res.send('Got a POST request')
})

//RESPOND TO PUT request to the /user route
app.put('/user', (req, res) => {
    res.send('Got a PUT request')
    console.log('sent a put')
})

//Respond to a DELETE request to the /user route
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
    console.log('sent a delete')
})

//Calling listen method to connect to local machine's port
app.listen(port, () => {
    console.log(`running server on port ${port}`)
})