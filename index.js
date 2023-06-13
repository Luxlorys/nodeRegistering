const express = require('express');
const routes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, (req, res) => {
    console.log(`working on port ${port}`);
});

app.use(routes);