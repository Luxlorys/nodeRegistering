const express = require('express');
const saveUser = require('../models/userModel');

const routes = express.Router();

routes.post('/api/v1/register', (req, res) => {
    const body = req.body;
    const user = saveUser(body);

    res.send(user);
})

module.exports = routes;