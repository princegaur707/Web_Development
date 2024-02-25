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

//Routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');

//APIs
const productApis = require('./routes/api/productapi');

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
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // expires: Date.now() + 1000* 30,
        maxAge:1000* 300 *300
        //maxAge works same as expire but when I tried maxAge alone or with expire
        //then only worked fine
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
});



app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
app.use(productApis);
app.use(cartRoutes);

const port = 5000;

app.listen(port, () => {
    console.log(`server running at port ${port}`);
});