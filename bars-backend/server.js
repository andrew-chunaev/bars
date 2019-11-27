const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use( bodyParser.json() );

var DocController = require('./controllers/docController.js');

app.get('/', (req, res) => {
    DocController.list(req, res);
});

app.post('/doc', (req, res) => {
    DocController.create(req, res);
});

app.delete('/doc/:id', (req, res) => {
    DocController.delete(req, res);
    return res;
});



app.listen(port, () => console.log(`App started on port ${port}!`))
