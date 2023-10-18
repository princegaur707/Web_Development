/* Binding:
Implicit binding
Explicit binding
new keyword
Default(window object one)
*/


// Implicit Binding - Automatically done by the JS Engine

const person = {
    name: 'Sabeel',
    age: 22,
    sayName: function () {
        console.log(this);
        console.log(`Hello from ${this.name}`)
    }
}


// Explicit Binding
//2 ways of doing this either use call or bind

function fun(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const a = {
    l: 10,
    m: true,
    k:'Hello'
}


// fun('Kartik');


// fun.call(a, 'Vivek', 24);

const f = fun.bind(a);//in bind we can store it and later use it
// 100000 line of code

f('Garvit', 25);