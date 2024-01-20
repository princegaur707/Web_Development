const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');


router.post('/products/:productid/review', async(req, res) => {

    const {productid} = req.params;
    const product = await Product.findById(productid);
    const review = new Review({...req.body})
    //spread operator(...) inserts everything inside new object(review) from existing one(req.body)
    product.reviews.push(review);

    await review.save();
    await product.save();
    res.redirect(`/products/${productid}`);
});



module.exports = router;