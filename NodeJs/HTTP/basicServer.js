const http = require('http');

const server = http.createServer((req, res) => {
    // const email = req.getParameter("email");
    // const password = req.getParameter("password");
    // res.write("welcome to my server");
    // res.write("hello");

    if (req.method === "GET") {
        res.write("get request received");
    } else if (req.method === "GET" && req.url === "/") {
        res.write(" Home page");
        res.end();
    } else if (req.method === "GET" && req.url === "/login") {
        res.end("user registered succesfully....");
    } else if (req.method === "POST" && req.url === "/about") {
        res.write(" you are on the about us page ...");
        res.write(" Login page");
        res.end();
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        console.log(body);
        res.end(" user is here " + body);
    } else if (req.method === "PUT" && req.url === "/update") {
        res.write(" welcome to update...");
        res.end();
    } else {
        res.end(" 404 :page not found");
    }
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error('Port 3000 is already in use. Try a different port or stop the other process.');
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});