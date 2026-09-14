const http = require('http');
const validateUser = require('./validate');
PORT = 3000;

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

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});