//For seeding our database with Dummy products
const mongoose = require('mongoose');
const Product = require('./models/Product');

const DUMMY_PRODUCTS = [
    {
        name: 'Iphone',
        price: 100,
        desc: 'The Iphone is line of smartphone designed and marketed by Apple Inc. that use Apple IOS mobile operating system. '   
    },
    {
        name: 'Macbook Air',
        price: 200,
        desc: 'The Macbook Air is line of smartphone designed and marketed by Apple Inc. that use Apple IOS mobile operating system. '   
    },
    {
        name: 'Apple Watch Series-6',
        price: 150.6,//can use decimal values
        desc: 'The Series-6 is line of smartphone designed and marketed by Apple Inc. that use Apple IOS mobile operating system. '   
    },
    {
        name: 'Reebok Shoes',
        price: 80.40,
        desc: 'Comfortable and stylish Shoes'
    }
];

//To save these entries to database 
async function seedDB() {
    await Product.insertMany(DUMMY_PRODUCTS);
    console.log('DB seeded');
}
module.exports = seedDB;