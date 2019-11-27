const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use( bodyParser.json() );

var DocController = require('./controllers/docController.js');

app.get('/doc', (req, res) => {
    DocController.list(req, res);
});

app.get('/doc/:id', (req, res) => {
    DocController.get(req, res);
});

app.post('/doc', (req, res) => {
    DocController.create(req, res);
});

app.put('/doc/:id', (req, res) => {
    DocController.update(req, res);
});

app.delete('/doc/:id', (req, res) => {
    DocController.delete(req, res);
});



app.listen(port, () => console.log(`App started on port ${port}!`))
