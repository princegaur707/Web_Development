// async keyword wraps the function into a promise
async function add(x, y, z) {
    return x + y + z;
}

add(1, 2, 3)
    .then((data) => {
        console.log(data);
        console.log('Inside resolve');
    })
    .catch((err) => {
        console.log(err);
    })


console.log("---------------Await function------------------------")
//await can only be used inside async function or top level of a module

async function fun() {
    
    console.log('starting the fun function');

    console.log('starting to fetch the data');
    
    const res = await fetch('https://api.nationalize.io/?name=prince');//await function holds the 
    //execution of this function till fetch do not resolves the promise 
    
    //If we will not wait above 'res' will be undefined
    console.log('starting to parse the response');
    const data = await res.json()//json function parses the response so we also need await function here

    console.log('printing the data');

    console.log(data);

    console.log('fun function completed');
    console.log('everything done');
}

console.log('START');//In output, these all will come before "printing the data" etc lines 

fun();

console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');
console.log('After fun function');

console.log('END');