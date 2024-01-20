const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}));
//middleware to populate the req.body b/c by default it is undefined
app.use(methodOverride('_method'));
//query parameter: simply override the method


//Routes
const productRoutes = require('./routes/ProductRoutes');

mongoose.connect('mongodb://localhost:27017/showApp')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err))


//seed the DB with the dummy products
// seedDB();//If we will not comment out this after first iteration
//then same entries will keep on getting added to database


app.get('/', (req, res)=> {
res.send('Connected');
})

app.use(productRoutes);


app.listen (3000, () => {
console.log('Server Started at port 3000');
})