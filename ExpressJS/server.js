// const http = require('http');

// http.createServer((req,res)=>{
//     if(req.url === '/about'){
//         res.end("About Us Page");
//     }
// }).listen(3000)

const express = require('express');
const app = express();

app.get('/about', (req, res) => {
    res.send("About us page from express");
})

app.listen(3000);