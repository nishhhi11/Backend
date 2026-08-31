const axios = require('axios');

axios.get('https://api.github.com/users/octocat')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
