
//fs writeFile (filepath, data, callback )
const fs = require('fs');
fs.writeFile("data.txt", "Hello", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("file written successfully")
    }
})