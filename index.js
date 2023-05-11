const color = require('colors');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, "files");
var filepath = `${dirpath}/apple0.txt`;


/// To create file
// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(dirpath + `/apple${i}.txt`, "hello this is text")
// }

// fs.readdir(dirpath, (err, items) => {
//     items.forEach((item) => {
//         console.log(item)
//     })
// })


/// To read file data
// fs.readFile(filepath, "utf8", (err, data) => {
//     console.warn(data);
// })


/// To update file data
// fs.appendFile(filepath, " and this is updated text", (err) => {
//     if (!err) console.warn("file data updated");
// })


/// To rename file
// fs.rename(filepath, `${dirpath}/orange.txt`, (err) => {
//     if (!err) console.warn("file name renamed");
// })


/// To delete file
fs.unlinkSync(`${dirpath}/orange.txt`);

