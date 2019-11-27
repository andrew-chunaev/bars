const promise = require('bluebird');

const initOptions = {
    promiseLib: promise 
};

const pgp = require('pg-promise')(initOptions);

// Database connection details;
const cn = {
    host: 'localhost', 
    port: 5432, 
    database: 'bars',
    user: 'bars',
    password: 'bars'
};

const db = pgp(cn); // database instance;

module.exports = db;
