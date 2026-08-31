
function validateUser(user) {
    if (typeof user.name !== "string")
    if (typeof user.age !== "number" || user.age <= 18)
    return false;

    if (typeof user.email !== "string" || !user.email.includes("@")) return false;
    return "Valid user";
}

module.exports = validateUser;