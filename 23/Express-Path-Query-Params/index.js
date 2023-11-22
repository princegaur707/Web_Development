const express = require('express');
const app = express();


app.get('/', (req, res) => {
    

    res.send('ROOT PATH');
});


//------------------------------Path Parameter---------------------------------

app.get('/r/:subredit', (req, res) => {
    
    const { subredit } = req.params;

    res.send(`<h1>THIS IS ${subredit} Subreditt!!</h1>`);
});

/*
If we want the capability in our server to search itself for particular variable provided and develop a page for it
like reddit we need this code. Here, 'subredit' is just a variable which will become key for value provided in search bar
like if we serch localhost:8000/r/cat we will get 'subredit':'cat'
subredit is known as path parameter
colon(:) anything which will come after colons and before '/' will be path parameter so, that's make '/r' not possible to change
while ':subredit' subredit can be changed
*/

app.get('/user/:userid/comments/:commentsid', (req, res) => {
    
    console.log(req.params);

    res.send('USER ROUTE');
});

//------------------------------Query Parameter-------------------------------

/*
For searching like: localhost:8000/search?name=Prince&Address=Noida
we get: {firstname: 'Prince', Address: 'Noida'}
For searching like: localhost:8000/search?q=color
we get: {q : 'color'}
*/

app.get('/search', (req, res) => {
    
    const { q } = req.query;

    res.send(`YOU ARE TRYING TO SEARCH ${q}`);
});
//---------------------------------------------------------------------------

/*
Here we are using both path and query parameter here
http://localhost:8000/products/123?q=phone
*/
app.get('/products/:productid', (req, res) => {
    
    console.log(req.params);
    console.log(req.query);

    res.send('PRODUCT PAGE');
});


app.listen(8000, () => {//Port no. of our choice
    console.log('server started listening at port 8000');
})