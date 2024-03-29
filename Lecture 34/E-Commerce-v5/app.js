const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/shopping-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const sessionConfig = {
    secret:'badsecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // expire: Date.now() + 1000 * 60 , //expire cookie in one week
        magAge : 1000* 60
        //max Age works exactly same as expire 
    }
}

app.use(session(sessionConfig));
app.use(flash());

//Initializing middlewares for passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Telling the passport to check for username and password using authenticate method
passport.use(new LocalStrategy(User.authenticate()));
//              firstly strategy    then the function we will use to authenticate(this 'authenticate' function is of passport-local-mongoose file which already contain the whole code which is shown on passport website for passport-local)
//                                  we can declare this function ourselves

//locals are variables available everywhere
app.use((req, res, next) => {
    res.locals.currentUser = req.user;//If not logged in undefined will go
    res.locals.success = req.flash('success');//success message corresponding to the success key
    res.locals.error = req.flash('error');
    next();
})

//Routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');


app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

const port = 5000;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});