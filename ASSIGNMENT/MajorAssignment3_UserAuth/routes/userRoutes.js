const express = require("express");

const router = express.Router();

const {
    signup,
    login,
    getAllUsers,
    getUserById
} = require("../controllers/userController");

const validateSignup = require("../middleware/validation");

router.post("/signup", validateSignup, signup);

router.post("/login", login);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

module.exports = router;
