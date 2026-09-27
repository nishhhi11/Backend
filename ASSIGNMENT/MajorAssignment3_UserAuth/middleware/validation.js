const validateSignup = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({
            message: "Invalid email"
        });
    }

    if (!password || password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters"
        });
    }

    if (!/[A-Z]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one uppercase letter"
        });
    }

    if (!/[a-z]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one lowercase letter"
        });
    }

    if (!/[0-9]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one digit"
        });
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one special character"
        });
    }

    next();
};

module.exports = validateSignup;
