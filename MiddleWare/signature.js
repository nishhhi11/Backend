function middlewareName(req, res, next) {
    //middleware logic
    next();
}

appendFile.post('/login', middlewareName, (req, res) => {
    
})