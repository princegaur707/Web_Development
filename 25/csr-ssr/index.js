const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/',express.static(path.join(__dirname, 'public')));//here in the first argument we
//can give path of our choice while will be used for all static file communication
app.use(express.urlencoded({extended:true}));//middleware for sending data to req.body
//in jQuery this is used while in axios we use app.use(express.json())

const Todos = ["Go to Gym", "Buy Groceries", "Watch Movie", "Go to Shopping"];


app.get('/todos', (req, res) => {
    
    if (req.xhr) {//XML Http Response,if xhr property exist it means AJAX request
        console.log('AJAX Request');
        res.json(Todos);
    } else {
        console.log('Normal Request');
        res.render('todos', { Todos });
    }
});

app.post('/todos', (req, res) => {//we need post request to send the data to server
    
    try {
        const { todo } = req.body;//when we send data via post request it is available in req.body
        Todos.push(todo);

        if (req.xhr) {
            res.status(200).json({ msg: 'Todo Added Successfully' });//in jQuery we have to set the status code some like
            //axios attach status itself
        } 
        else {
            res.redirect('/todos');//here browser will do itself
        }
    }
    catch (e) {
        res.status(400).json({ msg: 'Something went wrong' });
    }
});



app.listen(3000, () => {
    console.log('server started at port 3000');
})

/*
Why we used jQuery? B/c we wanted to use both AJAX and DOM, jQuery support both these things.
Client Side Rendering(CSR) Vs Server Side Rendering(SSR)
F12 key -> Source -> Ctrl + Shift + P -> Search Disable JS 
After this JS will be disabled and We can see CSR will not work while SSR will keep working. In SSR client just displays
the page given by server while in CSR client side runs JS. so, once JS is disabled it will not work.
Banks disable client side JS for more security
CSR- Good User Experience 
*/