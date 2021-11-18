const { response } = require('express');
const pool = require('../data/config');


const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Bienvenido a node.js express rest API'
        });
    });
    //mostrar todos los usuario
    app.get('/users', (request, response) =>{
        pool.query('SELECT * FROM users', (error, result) =>{
            if(error) throw error;
            response.send(result);
        });
    });
    // mostrar el usuario por id
    app.get('/users/:id', (request, response) =>{
        const id = request.params.id;
        pool.query('SELECT * FROM users where id=?', id, (error, result) =>{
            if(error) throw error;
            response.send(result);
        });
    });
    //agregar nuevo usuario
    app.post('/users', (request, response) =>{
        pool.query('INSERT INTO users SET ?', request.body, (error, result) =>{
            if(error) throw error;
            response.status(201).send(`User added with ID: ${result.insertId}`);
        });
    });
}

module.exports = router;