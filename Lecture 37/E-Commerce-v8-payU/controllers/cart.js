const User = require('../models/user');

module.exports.showCart = async(req, res) => {
    const user = await User.findById(req.user._id).populate('cart');
    const totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
    
    const productInfo = user.cart.map((p)=> p.desc).join(',');
    // this will contain the array of all the descriptions of the products in cart

    res.render('cart/cart', {user, totalAmount,productInfo});
}

module.exports.addToCart = async(req, res) => {
    const{productid} = req.params;
    const userid = req.user._id;
    const product = await Product.findById(productid);
    const user = await User.findById(userid);
    user.cart.push(product);
    await user.save();

    res.redirect('/user/cart');
}

module.exports.deleteFromCart = async(req, res) => {
    const{productid} = req.params;
    const userid = req.user._id;
    const product = await Product.findById(productid);
    const user = await User.findById(userid);
    // await user.cart.findByIdAndDelete(productid);
    await user.save();
    res.redirect('/user/cart');
}