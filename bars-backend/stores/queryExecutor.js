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
