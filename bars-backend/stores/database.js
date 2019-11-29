const promise = require('bluebird');

const initOptions = {
    promiseLib: promise 
};

const pgp = require('pg-promise')(initOptions);

// Database connection details;
const cn = {
    host: '127.0.0.1', 
    port: 5432, 
    database: 'bars',
    user: 'bars',
    password: 'bars'
};

const db = pgp(cn); // database instance;

module.exports = db;
