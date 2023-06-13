const express = require('express');
const saveUser = require('../models/userModel');

const routes = express.Router();

routes.post('/api/v1/register', async (req, res) => {
    const body = req.body;
    const user = await saveUser(body);

    res.send(user);
})

module.exports = routes;