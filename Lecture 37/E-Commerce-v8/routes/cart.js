const express = require('express');
const router = express.Router();
const {IsLoggedIn} = require('../middleware');
const User = require('../models/user');
const Product = require('../models/product')

router.get('/user/cart', IsLoggedIn, async(req, res) => {
    const user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
    res.render('cart/cart', {user, totalAmount});
})

router.post('/user/:productid/add', IsLoggedIn, async(req, res) => {
    const{productid} = req.params;
    const userid = req.user._id;
    const product = await Product.findById(productid);
    const user = await User.findById(userid);
    user.cart.push(product);
    await user.save();

    res.redirect('/user/cart');
})

router.delete('/user/:productid', IsLoggedIn, async(req, res) => {
    const{productid} = req.params;
    const userid = req.user._id;
    const product = await Product.findById(productid);
    const user = await User.findById(userid);
    // await user.cart.findByIdAndDelete(productid);
    await user.save();
    res.redirect('/user/cart');
})

module.exports = router;