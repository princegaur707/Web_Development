const express = require('express')
const app = express();
const cookieParser = require('cookie-parser'); //middleware to see the cookie

app.use(cookieParser('thisisnotagoodsecret'));

app.get('/', (req, res) => {
    // console.log(req.cookies);
    res.send(req.cookies);
})

app.get('/setcookie', (req, res) => {
    res.cookie('mode', 'dark');
    res.cookie('location','New Delhi');
    res.cookie('username', 'prince');
    res.send('Sent u a cookie successfully');
});

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
})

app.get('/getcookiestatus', (req, res) => {
    res.send(req.signedCookies);
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grapes', {signed: true});
    res.send('Sent you a signed cookie')
})



 app.listen(3000, () => {
    console.log('Server started at port 3000');
});

