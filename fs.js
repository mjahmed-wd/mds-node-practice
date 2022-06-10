const path = require('path');
const fs = require('fs');

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Directory created...');
// });

// Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello World! ", err => {
//     if (err) {
//         throw err;
//     }
//     console.log('File created...');
//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "I love Node.js", err => {
//         if (err) {
//             throw err;
//         }
//         console.log('File created...');
//     })
// })

fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "hi.txt"), err => {
    if (err) throw err;
    console.log("File Renamed...");
 })

