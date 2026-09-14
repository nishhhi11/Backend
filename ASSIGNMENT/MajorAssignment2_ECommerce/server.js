const http = require("http");
const fs = require("fs");
const url = require("url");

const productFile = __dirname + "/product.json";
const userFile = __dirname + "/user.json";

const readProducts = () => {
    return JSON.parse(fs.readFileSync(productFile, "utf8"));
};

const saveProducts = (products) => {
    fs.writeFileSync(productFile, JSON.stringify(products, null, 2));
};

const readUsers = () => {
    return JSON.parse(fs.readFileSync(userFile, "utf8"));
};

const saveUsers = (users) => {
    fs.writeFileSync(userFile, JSON.stringify(users, null, 2));
};

const sendResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(data));
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    if (req.method === "GET" && path === "/products") {
        const products = readProducts();
        sendResponse(res, 200, products);
    }

    else if (req.method === "GET" && path.startsWith("/products/")) {
        const id = Number(path.split("/")[2]);
        const products = readProducts();

        const product = products.find(product => product.id === id);

        if (product) {
            sendResponse(res, 200, product);
        } else {
            sendResponse(res, 404, { message: "Product not found" });
        }
    }

    else if (req.method === "POST" && path === "/products") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const product = JSON.parse(body);
            const products = readProducts();

            product.id = products.length + 1;
            products.push(product);

            saveProducts(products);

            sendResponse(res, 201, {
                message: "Product added successfully",
                product: product
            });
        });
    }

    else if (req.method === "PUT" && path.startsWith("/products/")) {
        const id = Number(path.split("/")[2]);
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const updatedProduct = JSON.parse(body);
            const products = readProducts();

            const index = products.findIndex(product => product.id === id);

            if (index !== -1) {
                products[index] = {
                    id: id,
                    ...updatedProduct
                };

                saveProducts(products);

                sendResponse(res, 200, {
                    message: "Product updated successfully",
                    product: products[index]
                });
            } else {
                sendResponse(res, 404, {
                    message: "Product not found"
                });
            }
        });
    }

    else if (req.method === "DELETE" && path.startsWith("/products/")) {
        const id = Number(path.split("/")[2]);
        const products = readProducts();

        const newProducts = products.filter(product => product.id !== id);

        if (newProducts.length !== products.length) {
            saveProducts(newProducts);

            sendResponse(res, 200, {
                message: "Product deleted successfully"
            });
        } else {
            sendResponse(res, 404, {
                message: "Product not found"
            });
        }
    }

    else if (req.method === "POST" && path === "/auth/signup") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const user = JSON.parse(body);

            if (!user.email || !user.email.includes("@")) {
                return sendResponse(res, 400, {
                    message: "Invalid email"
                });
            }

            if (!user.password || user.password.length < 8) {
                return sendResponse(res, 400, {
                    message: "Password must be at least 8 characters"
                });
            }

            const users = readUsers();

            const existingUser = users.find(
                existingUser => existingUser.email === user.email
            );

            if (existingUser) {
                return sendResponse(res, 400, {
                    message: "User already exists"
                });
            }

            users.push(user);
            saveUsers(users);

            sendResponse(res, 201, {
                message: "Signup successful"
            });
        });
    }

    else if (req.method === "POST" && path === "/auth/login") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const loginData = JSON.parse(body);
            const users = readUsers();

            const user = users.find(
                user =>
                    user.email === loginData.email &&
                    user.password === loginData.password
            );

            if (user) {
                sendResponse(res, 200, {
                    message: "Login successful"
                });
            } else {
                sendResponse(res, 401, {
                    message: "Invalid email or password"
                });
            }
        });
    }

    else {
        sendResponse(res, 404, {
            message: "Route not found"
        });
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});