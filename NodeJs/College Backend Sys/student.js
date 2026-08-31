const fs = require("fs");

const fileName = "students.json";

fs.readFile(fileName, "utf8", (err, data) => {

    let students = [];

    if (!err) {
        students = JSON.parse(data);
    }

    students.push(students);

    fs.writeFile(
        fileName,
        JSON.stringify(students),
        (err) => {
            if (err) {
                console.log("Error saving data");
            } else {
                console.log("Student data saved successfully");
            }
        }
    );
});
