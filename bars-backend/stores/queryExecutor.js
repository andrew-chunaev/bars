var db = require('./database.js');

exports.get = function(query, callback) {
    db.any(query)
        .then(data => {
            callback(data); 
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
        .finally(db.$pool.end);
}

exports.create = function(table, columns, values) {
    db.none('insert into ' + table + '(' + columns + ') + values(' + values +')')
        .then(() => {
            // success;
        })
        .catch(error => {
            // error;
        });
}
