const express = require('express');
const cors = require('cors');
const plantRoutes = require('./routes/plantRoutes')
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', plantRoutes);

app.listen(3000, () => {
    console.log("Server is running on 3000");
})