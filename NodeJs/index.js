// console.log("Hello, World!");

const http = require('http');
const PORT = 3000 || 9000;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(<h1>Welcome to node js</h1>);
    }

    else {
        res.statusCode = 404;
        res.end("Page not found");
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})