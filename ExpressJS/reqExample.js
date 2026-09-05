const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send("About us page from express");
})

app.get('/products', (req, res) => {
    console.log(req.query.category);
    console.log(req.query.maxPrice);
    res.end("Completed");
})

app.post('/products/addProduct', (req, res) => {
    console.log(JSON.parse(req.body.name));
    res.send("Completed");
})

app.listen(3000);