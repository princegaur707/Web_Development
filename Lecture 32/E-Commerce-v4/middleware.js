const {productSchema, reviewSchema} = require('./schemas');

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