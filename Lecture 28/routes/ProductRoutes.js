const express = require('express');
//we cannot create app from above express as then we will have 2 apps 


//We don't want to populate index.js much so, we will be using all
//product related routes here similarly for others too
//But, we defined 'app' in index.js so, we will use express funcionality 'router'
//Router acts as a mini express application supporting methods like 'app'

const  router = express.Router();
const Product = require('../models/Product')

//API rules say: display all products for this type of request

router.get('/products', async(req, res) => {
    const products = await Product.find({});
    // console.log(products);
    // res.send(products);
    res.render('index',{products});
});

//Form to create new product
router.get('/products/new',(req,res) => {
    res.render('new');
});

//Creating the product in the database
router.post('/products',async(req,res) =>{
    const {name, price, desc} = req.body;
    await Product.create({name, price, desc});
    res.redirect('/products');
});

//Show a product
router.get('/products/:productid', async(req,res) => {
    const {productid} = req.params;
    const product = await Product.findById(productid);
    res.render('show', {product});
});

//Render the edit form prefilled with the product data
router.get('/products/:productid/edit', async(req,res)=> {
    const {productid} = req.params;
    const product = await Product.findById(productid);
    res.render('edit',{product});
    //we are passing product here so that we can prefill all the entries in new form
});

router.patch('/products/:productid', async(req,res) => {
    //we cannot send patch request directly so, we will need method-override
    const{productid} = req.params;
    const {name, price, desc} = req.body;
    await Product.findByIdAndUpdate(productid, {name, price, desc});
    res.redirect(`/products/${productid}`);
    //redirecting to show page
});
router.delete('/products/:productid', async(req,res) => {
    const {productid} = req.params;
    await Product.findByIdAndDelete(productid);
    res.redirect('/products');
})
module.exports = router;