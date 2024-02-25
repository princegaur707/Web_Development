const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('./models/user');
const session = require('express-session')


mongoose.connect('mongodb://localhost/authDemo')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

const requireLogin = (req, res, next) => {
    if(!req.session.user_id) {
        return res.send('You need to Login first')
    }
    next();
}
app.get('/register', (req, res) => {
    res.render('signup');
})

app.post('/register', async(req, res) => {
    const {username, password} = req.body;
    const salt = await bcrypt.genSalt(12);//salt: random number
    const hash = await bcrypt.hash(password, salt);
    const newUser = new User({username, password: hash});
    await newUser.save();
    res.redirect('/login');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async(req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username}); 
    if(user) {
        const validUser = await bcrypt.compare(password, user.password);//compare method return true or false
        if(!validUser){
            return res.send('Wrong Password entered!')
        }
        req.session.user_id = user._id;//saving object id here in session with name user_id
    }
    else{
        return res.send('Invalid Username')
    }
    res.redirect('/secret');
})

app.get('/secret', requireLogin, (req, res) => {
    
    res.send('This is secret which is visible only after Login');
})

app.get('/logout', (req, res) => {
    if(req.session.user_id){
        req.session.destroy();
        return res.redirect('login');
    }
    res.send('You Are not Logged in yet!')
})

app.listen(3000, () =>{
    console.log('Server connected at port 3000');
});