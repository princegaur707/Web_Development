const express = require('express');
const app = express();
const path = require('path');



app.set('view engine', 'ejs');//telling express to use ejs
app.set('views', path.join(__dirname, 'views'));//to get rid  of process.cwd() failure

app.use(express.static(path.join(__dirname, 'public')));//telling express to use static folder (public folder)


const todos = ["Go To Gym", 'Buy Groceries', 'Learn React','Watch Web Series'];


app.get('/', (req, res) => {

    res.render('index');//no need to write index.ejs as it knows already
    //render means to make visible; to draw
    //default address for render: process.cwd() + '/views'
});


app.get('/random', (req, res) => {
    
    const randomNum = Math.floor(Math.random() * 100)

    res.render('random', { randomNum });//already calculating random number here so,
    //template is not logic heavy
});

app.get('/todos', (req, res) => {
    

    res.render('todos',{todos})
})


app.listen(8000, () => {
    console.log('server running at port 8000');
})