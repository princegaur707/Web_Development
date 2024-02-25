//express is made by similar series of middleware functions
const express = require('express');
const app = express();

app.use((req, res, next) => {//app.use runs before any types of request
    console.log('My first Middleware');
    req.username = 'Prince';
    //whatever code to get executed
    next();//will let to move to next otherwise it just keeps loading 
    // return next();//if we will use this console.log line will not be printed as it will stop the function call 
    console.log('First Middleware after calling next()');//this line will be printed after second middleware, Home route 
    //the control will come back here are after next() executions
});
//On output we will see Inside APP.USE b/c request came, response given, cycle completed



app.use((req, res, next) => {
    console.log('My second Middleware');
    // res.send('HIJACKED by send Middleware');
    next();
})

const verify = (req, res, next) => {
    const{password} = req.query;
    
    if(password !== 'orange') {
       return res.send('Invalid Password') //return will ensure next will not work
    }
    next();
}

app.get('/', (req, res) => {
    res.send('Home Route');
})

app.get('/cat', verify, (req, res) => {//verify function will be run before 
    const {username} = req;
    console.log(username);
    res.send('cat awakens')
})
app.get('/secret', verify,(req, res) => {
    res.send('My secret is: The less you know the better you are')
})

app.listen(5000, () => {
    console.log('Server running at port 5000');
})