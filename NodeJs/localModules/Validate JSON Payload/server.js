const http = require('http');
const validateUser = require('./validator');

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/user") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const user = JSON.parse(body);
            if (validateUser(user)) {
                res.end("User is valid");
            } else {
                res.statusCode = 400;
                res.end("User is invalid");
            }
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running on this port")
});

// const user = {
//     name: "Nishi",
//     age: 19,
//     email: "nishi@gmail.com"
// }

// const server = http.createServer((req, res) => {

//     if (req.method === "POST" && req.url === "/user") {

//         let body = "";

//         req.on("data", chunk => {
//             body += chunk;
//         });

//         req.on("end", () => {

//             try {
//                 const user = JSON.parse(body);

//                 const result = validateUser(user);

//                 if (result !== "Valid user") {
//                     res.writeHead(400, { "Content-Type": "application/json" });
//                     res.end(JSON.stringify({ error: result }));
//                     return;
//                 }

//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({
//                     message: "User is valid",
//                     user: user
//                 }));

//             } catch (error) {
//                 res.writeHead(400, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({
//                     error: "Invalid JSON payload"
//                 }));
//             }
//         });

//     } else {
//         res.writeHead(404);
//         res.end("Route not found");
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });
// const server = http.createServer((req, res) => {

//     if (validateUser(user)) {
//         res.end("User is valid");
//     }
//     else {
//         res.statusCode = 400;
//         res.end("User not valid");
//     }
// });

// server.listen(3000);