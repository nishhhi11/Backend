const express = require('express');
const PORT = 3000;
const app = express();

function checkAuth(req, res, next) {
    const isLogin = false;
    res.query.user == "nishi" ? isLogin = true : isLogin = false;

    if (!isLogin) {
        return res.status(401).json({
            message : "Please login first"
        })
    }
}

// app.use((req,res,next)=> {
//     console.log("middleware called");
//     next();
// if(user==="Admin"){
//     next();
// } else {
//     res.send("sorry");
// }
// });
    
app.use((req, res, next => {
    req.body.user = {
        role: "Admin",
        name: req.body.name,
        pass: req.body.pass
    }
    next();
}))

app.post('/', (req, res) => {
    res.send(req.body.user)
})

app.get('/dashboard', checkAuth, (req, res) => {
    res.send("Welcome")
})

// app.get('/', (req, res,next) => {
//     console.log("Middleware call");
//     next();
//     // if (user == "Admin") {
//     //     next();
//     // } else {
//     //     res.send("Sorry")
//     // }
// })

app.get('/', (req, res,next) => {
    res.send("Hello class")
})

app.listen(PORT);