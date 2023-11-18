//Read from 2 text files inp1.txt and inp2.txt, merge them, sort and then 
//write in output.txt file

//Here we can observe callback Hell is being created so to resolve this we will use promises (fileSystemPromise.js)
const fs = require('fs');
const path = require('path');

const F1 = path.join(__dirname, 'inp1.txt');
const F2 = path.join(__dirname, 'inp2.txt');

const F3 = path.join(__dirname, 'output.txt');


fs.readFile(F1, (err, data) => {
    const arr1 = data.toString().split('\n');
    console.log(arr1);

    fs.readFile(F2, (err, data) => {
        const arr2 = data.toString().split('\n');
        // console.log(arr2);

        // Merge two arrays from inp1 and inp2 files
        let ans = arr1.concat(arr2);

        // sort the numbers in ascending order
        ans.sort((a, b) => a - b);
        
        ans = ans.join('\n');
       
        fs.writeFile(F3, ans, { encoding: 'utf-8', flag: 'w' }, (err) => {
            if (err) throw err;
            console.log('File Written Successfully');
        })
    })
});

/*
While reading F2 file we can want to ensure that F1 is completely read which can be
confirmed if it's callback function is called as it waiting itself for file to complete
the task so, we are writing F2 file in callback of F1. Similarly, we will merge once F2 
is also read completely. 
*/







