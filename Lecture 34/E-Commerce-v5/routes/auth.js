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
        const {username, password, email} = req.body;
        const user = new User({username, email});
        const newUser = await User.register(user, password);
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
    res.render('auth/login')
})

router.post('/login', 
    passport.authenticate('local', {//This 'authenticate' method is of passport
            failureRedirect: '/login',//if there is failure redirect here
            failureFlash: true }),//let use flash messages
            (req, res) => {
                console.log(req.user);//this contains whole  user
                req.flash('success', `Welcome back ${req.user.username}!!!`);
                console.log(req.session);
                // let redirectUrl = req.session.returnUrl;
                // delete req.session.returnUrl;
                // res.redirect(redirectUrl);
                res.redirect('/products');
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