const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');//Have to install package before using this
//npm i method-override
//method-override: convert patch to POST request as browser can processs only get and post request
//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const comments = [//faking database entries for now
    {
        id: uuid(),//uuid: universally unique identity document, return type is string
        username: 'Sabeel',
        text: 'Nice Product.Go for It!!'
    },
    {
        id: uuid(),
        username: 'Kartik',
        text: "Bad Product don't buy it"
    },
    {
        id: uuid(),
        username: 'Vivek',
        text: 'Good Product'
    }
];


app.get('/', (req, res) => {
    res.send('connected');
});


// List all the comments 
app.get('/comments', (req, res) => {
    
    res.render('index', { comments });
});


// Get the form for new comment: we will have to give form for getting the 
//entries for the new comment
app.get('/comments/new', (req, res) => {
    
    res.render('new');
});



// Creating a New Comment
app.post('/comments', (req, res) => {
    
    const { username, text } = req.body;

    comments.push({ username, text, id: uuid() });

    res.redirect('/comments');
});


// Displaying Particular Comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;
    const foundComment = comments.find((comment) => comment.id === commentid);
    //                                           find's comment.id    commentid we got in above line
    res.render('show',{comment:foundComment});//passing foundComment as comment
});

//For edit page
app.get('/comments/:commentid/edit', (req, res) => {

    const { commentid } = req.params;

    const foundComment = comments.find((comment) => comment.id === commentid);

    res.render('edit', { comment: foundComment });
});

//For saving the changes after editing
app.patch('/comments/:commentid', (req, res) => {
    
    const { commentid } = req.params;
    const foundComment = comments.find((comment) => comment.id === commentid);

    // const { text } = req.body;//Earlier this line was required now, I have updated req.body.text

    foundComment.text = req.body.text;
    console.log(foundComment);
    res.redirect('/comments');
})  
//Both Patch and Put are used for updating but
// Patch -> Updating existing comment
// Put -> To replace it with completely new comment


app.listen(8000, () => {
    console.log('server running at port 8000');
})