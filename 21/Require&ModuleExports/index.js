const math = require('./math');//math.js is not necessary node knows it is js file as we can require only js files node is only for js
// const { PI, add, square } = require('./math');//these variable names must be same as in math.js file
//we can rearrange these variables there will be no impact on their behavior

console.log(math);


console.log(square(9));
console.log(math.PI);

// If we use 2nd line command we don't need to use math.square we can direcly use square variable