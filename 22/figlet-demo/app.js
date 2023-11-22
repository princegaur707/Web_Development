const figlet = require('figlet');//we don't want this variable to be change anywhere so we will always use const
const colors = require('colors');

figlet('Prince Gaur', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});