const request = require('request');

const json ={
    "nombre":"Luis Manuel",
    "apellido":"Jimenez",
};

request.post({
    url: 'http://localhost:3002/users',
    body: json,
    json: true,
}, function(error, response, body){
    console.log(body);
});