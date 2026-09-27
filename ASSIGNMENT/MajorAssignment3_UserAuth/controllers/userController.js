const fs = require("fs");
const User = require("../models/User");

const fileName = __dirname + "/../data/users.json";

const getUsers = () => {
    return JSON.parse(fs.readFileSync(fileName, "utf8"));
};

const saveUsers = (users) => {
    fs.writeFileSync(fileName, JSON.stringify(users, null, 2));
};

const signup = (req, res) => {
    const { email, password } = req.body;

    const users = getUsers();

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "Email already registered"
        });
    }

    const id = users.length + 1;

    const user = new User(id, email, password);

    users.push(user);

    saveUsers(users);

    res.status(201).json({
        message: "Signup successful",
        user: user
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    const users = getUsers();

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    res.json({
        message: "Login successful",
        user: user
    });
};

const getAllUsers = (req, res) => {
    const users = getUsers();

    res.json(users);
};

const getUserById = (req, res) => {
    const id = Number(req.params.id);

    const users = getUsers();

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
};

module.exports = {
    signup,
    login,
    getAllUsers,
    getUserById
};
