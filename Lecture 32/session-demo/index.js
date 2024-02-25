const express = require('express')
const app = express();
const session = require('express-session')

//middleware for using session
app.use(session({
    secret: 'keyboad cat',
    resave: false, 
    saveUninitialized: true,
    // cookie: {secure: true}
    //for now we don't need this
}))

app.get('/', (req, res) => {
    res.send('Hey I\'m here')
})

app.get('/viewcount', (req, res) => {
    if(req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }
    res.send(`You visited this page ${req.session.count} times`)
})//As session is being stored in program memory so, if once server is restarted 
//visits will be lost

app.get('/setname', (req, res) => {
    req.session.username = 'Prince',
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const {username = 'Anonymous'} = req.session;//we'll see username as Anonymous if tempered otherwise undefined
    res.send(`Hello from ${username}`);
});


app.listen(3000, () => {
    console.log('Server started at 3000');
})