const http = require('http');
const student  = require('./student');

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/user") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const user = JSON.parse(body);
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running on this port")
});