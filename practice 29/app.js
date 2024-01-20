//This whole JS file code is for backend

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');


mongoose.connect('mongodb://localhost:27017/shopping-app')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
//override default express engine to use this ejs-mate

app.set('view engine', 'ejs');
//for which template language we will be using

app.set('views', path.join(__dirname, 'views') );

app.use(express.static(path.join(__dirname, 'public')));
//Static files are those which are for frontend
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

const productRoutes = require('./routes/product');

app.use(productRoutes);


const port = 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
}); 