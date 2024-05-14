const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

// router.get('/demouser', async(req, res) => {
    
//     const user = {
//         email: 'prince@gmail.com',
//         username: 'Prince'
//     }
//     const newUser = await User.register(user, 'prince123');
//     res.send(newUser);
// });


router.get('/register', (req, res) => {
    res.render('auth/signup');
});

router.post('/register', async(req, res) => {
    try {
        const {username, password, email, role} = req.body;
        const user = new User({username, email, role});
        const newUser = await User.register(user, password);//newUser required for auto login
        req.login(newUser, function(err) {//For automatically log in on registering
            if(err) { 
                return next(err);
            }
            req.flash('success', 'You are Registered successfully!')
            return res.redirect('/products');
        });
    }
    catch(e){
        req.flash('error', e.message);
        res.redirect('/register');
    }
});

router.get('/login', (req, res) =>{
    res.render('auth/login');
});

router.post('/login', 
    passport.authenticate('local', {//This 'authenticate' method is of passport
            failureRedirect: '/login',//if there is failure redirect here
            failureFlash: true }),//let use flash messages
            (req, res) => {
                // console.log(req.user);//this contains whole  user
                req.flash('success', `Welcome back ${req.user.username}!!!`);

                let redirectUrl = req.session.returnUrl || '/products';
                console.log(`redirectUrl ${redirectUrl}`);


                //Removing review from the url as in case of submitting review we will be redirected to product/productid/review
                //as get request, this link do not exist so this means we have to check if this link is called then 
                //we have to redirect it to product/productid
                if(redirectUrl && redirectUrl.indexOf('review') !== -1) {
                    redirectUrl = redirectUrl.split('/');
                    redirectUrl.pop();
                    redirectUrl = redirectUrl.join('/');
                }
                // console.log("Login Page session-------->")
                // console.log(req.session);
                //this req.session is not showing redirectUrl
                
                delete req.session.returnUrl;
                res.redirect(redirectUrl);
                //redirect sends the GET request
});
//This authenticate will call User.authenticate in app.js and will provide
//username and password inside it which will validate if yes, then this will allow us to login 

router.get('/logout',(req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success', 'Hope to see u soon!');
        res.redirect('/products');
      });
});


module.exports = router;