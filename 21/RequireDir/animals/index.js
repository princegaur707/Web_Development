//contents of this "index.js" file are only exported when we want to export directory as this is special file
const cat = require('./cat');
const dog = require('./dog');



module.exports = {
    cat,dog
}