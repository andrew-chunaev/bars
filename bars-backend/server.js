const express = require('express');
const app = express();
const port = 3000;
var DocController = require('./controllers/docController.js');

app.get('/', (req, res) => {
    DocController.list(req, res);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
