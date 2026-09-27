const express = require("express");

const logger = require("./middleware/logger");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
