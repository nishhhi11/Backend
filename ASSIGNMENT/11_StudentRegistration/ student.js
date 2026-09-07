const fs = require("fs");

function saveStudent(student) {
    const fileName = "students.json";

    fs.readFile(fileName, "utf8", (err, data) => {

        let students = [];

        if (!err) {
            students = JSON.parse(data);
        }

        students.push(student);

        fs.writeFile(
            fileName,
            JSON.stringify(students, null, 2),
            (err) => {
                if (err) {
                    console.log("Error saving data");
                } else {
                    console.log("Student data saved successfully");
                }
            }
        );
    });
}

module.exports = saveStudent;