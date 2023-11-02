
// Normal Function declaration
function a() {
    console.log('inside a');
}


// Functional Expresssion

const square = function (num) {
    return num * num;
}
/*The ability of a function to be used as a value is called first class
function or first citizen function*/
 
// Arrow Function 

const add = (x,y)=> {
    return x + y;
}


// Arrow Function Implicit Return
const squareRoot = num => Math.sqrt(num);
//only in case of single parameter

//Arrow
const car = {
    name: 'Audi',
    color: 'Black',
    getColor: ()=> {
        console.log(this);
        console.log(this.color);
    }
}
/*
    If we used 
    getColor: function() {
        console.log(this);
        console.log(this.color);
    }
    output: Audi, Black
    But when arrow function is used there is change in output as this function behaves differently as it gets attached to 
    "window" global object so, avoid using "this" keyword and arrow function together
*/

