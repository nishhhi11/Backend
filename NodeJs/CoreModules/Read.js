//fs.readFile(filepath, ,callback)

const fs = require('fs');
fs.readFile("data.txt", "utf8", (err,data) => {
    if (err) {
        console.log(err);
        return err;
    }
    console.log("File written successfully", data)
})