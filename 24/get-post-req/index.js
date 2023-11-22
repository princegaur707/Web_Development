const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware(function) to parse(converting one form to another) the data sent by the form
app.use(express.urlencoded({ extended: true }));//i.e it will attach the post request 
//data to request.body, "extended: true"-> general enabling command

// Middleware used to parse the json data populate the req.body
app.use(express.json());
//Selections in PostMan : Post,body, raw, json

app.get('/', (req, res) => {
    
    res.render('index');
})


app.get('/user', (req, res) => {

    console.log(req.query);
    res.send('GET REQUEST');
});

app.post('/user', (req, res) => {
    
    console.log(req.body);//for printing the content of request body as post
    //request sends the data in a body

    res.send('POST REQUEST');
})


app.listen(3000, () => {
    console.log('server running at port 3000');
})

/* Browser can send only get and post request while Postman can send variety of
requests like Patch, Put, Head, Option
*/