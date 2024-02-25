const Product = require('./models/product');
const {productSchema, reviewSchema} = require('./schemas');

module.exports.IsLoggedIn = (req, res, next) => {

    req.session.returnUrl = req.originalUrl;
    //request contain req.originalUrl which we are storing in session
    // console.log(req.originalUrl);
    if(!req.isAuthenticated()) {
        req.flash('error','Please Login to move ahead...');
        return res.redirect('/login');
    }
    next();
}


module.exports.validateProduct = (req, res, next) => {
    const{name, img, desc, price} = req.body;
    const{error} = productSchema.validate({name, img, price, desc});
    //validate is provided by Joi
    
    if(error) {
        const msg = error.details.map((err) => err.message).join(',')
        //adding all the errors under the detail tag
        return res.render('error', {err : msg});
    }
    next();
}

module.exports.validateReview = (req, res, next) => {
    const{rating, comment} = req.body;
    const{error} = reviewSchema.validate({rating, comment});
    if(error) {
        const msg = error.details.map((err) => err.message).join(',')
        //adding all the errors under the detail tag
        
        return res.render('error', {err : msg});
    }
    next();
}
