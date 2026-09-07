const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/student") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const student = JSON.parse(body);

            student.registeredAt = new Date().toISOString();

            fs.readFile("students.json", "utf8", (err, data) => {

                let students = [];

                if (!err) {
                    students = JSON.parse(data);
                }

                students.push(student);

                fs.writeFile(
                    "students.json",
                    JSON.stringify(students, null, 2),
                    (err) => {
                        if (err) {
                            res.end("Error saving student data");
                        } else {
                            res.end("Student registered successfully");
                        }
                    }
                );
            });
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});