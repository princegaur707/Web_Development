

// const names = process.argv.slice(2);//gives the string where file is located

//If we write node.js 10 20 30 
//10 20 30 will pass as input to the nodes js

// console.log(names);

// for (let name of names) {
//     console.log(`Hello from ${name}`);
// }

console.log(process.argv);

const num = parseInt(process.argv[2]);//parseInt: converts string to integer
//when we will add one more input like node index.js 20

console.log(process.cwd());

function print(n) {
    
    for (let i = 1; i <= n; i++){
        console.log(i);
    }

}

print(num);