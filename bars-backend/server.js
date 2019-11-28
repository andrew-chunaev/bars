const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const multer = require('multer');
var upload = multer(); 
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "My secret key",
                 resave: true,
                 saveUninitialized: true}));

var DocController = require('./controllers/docController.js');
var UserController = require('./controllers/userController.js')

app.get('/register', (req,res) => { 
});

app.post('/register', (req,res) => {
    UserController.register(req, res); 
});

app.post('/login', (req,res) => {
    UserController.login(req, res);
});

app.get('/logout', (req, res) => {
    UserController.logout(req, res);
});

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
