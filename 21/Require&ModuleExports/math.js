
const PI = 3.14205;

const square = num => num * num;

const add = (a, b) => a + b;


module.exports = {//without this export, empty string was being output in index.js
    PI,
    square,
    add
};

// module.exports = "Hello from math";//module.exports is a object which is being assigned string value

