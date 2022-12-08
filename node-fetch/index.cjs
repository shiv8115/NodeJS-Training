const fetch = require('node-fetch');

//1- Sending GET Requests Using node-fetch

fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text));


