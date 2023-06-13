const express = require('express');


const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, (req, res) => {
    console.log(`working on port ${port}`);
});


app.post('/api/v1/register', (req, res) => {
    let body = req.body;
    res.send(body);
})