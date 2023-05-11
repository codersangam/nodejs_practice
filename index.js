const color = require('colors');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, "files");
console.log(dirpath.bgBlue);

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(dirpath + `/apple${i}.txt`, "hello this is text")
// }

fs.readdir(dirpath, (err, items) => {
    items.forEach((item) => {
        console.log(item)
    })
})