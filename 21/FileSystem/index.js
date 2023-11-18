const fs = require('fs');//for by default modules and packages we don't need to use '.' etc fs stands for file system
const path = require('path');

const data = 'Hello from File System';

const F1 = path.join(__dirname, 'files', 'xyz.txt');
const F2 = path.join(__dirname, 'files', 'def.txt');


// console.log(__dirname);
// console.log(process.cwd());


fs.writeFile(F2,data,{
    encoding: 'utf-8',//if we don't use these data will be written in buffer
    flag:'w'
}, (err) => {
    if (err) throw err;
    console.log('File Written Successfully');
})


// fs.readFile(F1,{encoding:'utf-8',flag:'r'}, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

/*


fs.appendFile(path, data[, options], callback)#

path <string> | <Buffer> | <URL> | <number> filename or file descriptor
data <string> | <Buffer>
options <Object> | <string>
encoding <string> | <null> Default: 'utf8'
mode <integer> Default: 0o666
flag <string> See support of file system flags. Default: 'a'.
flush <boolean> If true, the underlying file descriptor is flushed prior to closing it. Default: false.
callback <Function>
err <Error>

path.join: joins all given path segments together using the platform-specific separator(in windows ->// 
in mac - \) as a delimiter, then normalizes the resulting path
1) Do not separator if already in path
2) Only one separator removes the extra one

e.g : path.join('animals', 'cat\\', '\\dog.js')
'animals\\cat\\dog.js

--dirname: It always give the location of file running so, it remain always constant
unliked cwd which gives the current working directory location and keeps changing
*/