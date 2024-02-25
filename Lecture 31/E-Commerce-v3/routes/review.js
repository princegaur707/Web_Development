const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const {validateReview} = require('../middleware')

router.post('/products/:productid/review', validateReview, async(req, res) => {

    try {
        const {productid} = req.params;
    const product = await Product.findById(productid);
    const review = new Review({...req.body})
    //spread operator(...) inserts everything inside new object(review) from existing one(req.body)
    product.reviews.push(review);

    await review.save();
    await product.save();
    res.redirect(`/products/${productid}`);
    }
    catch(e) {
        res.status(500).render('error', {err: e.message});
    }
});



module.exports = router;