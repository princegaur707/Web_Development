const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        default: '/images/product.jpg'
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    desc: {
        type: String,
        trim: true
    },
    reviews: [//represent review id connected with this product
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'//we are telling here which model to use
        }
    ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;