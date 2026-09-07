const http = require('http');
const validateUser = require('./validator');

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/user") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const user = JSON.parse(body);

            if (validateUser(user)) {
                res.end("User is valid");
            }
            else {
                res.statusCode = 400;
                res.end("User is invalid");
            }
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running on this port");
});