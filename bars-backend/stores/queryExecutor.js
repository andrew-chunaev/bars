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

exports.create = function(table, object, success) {
    console.log("doc \' from qe: ", object);
    var values = Object.values(object).map(function(value){
        // Wrap each element of the dates array with quotes
        if (typeof value === 'string') {    
            return "'" + value + "'";
        } else {
            return value;
        }
}).join(",");
    var query = 'insert into ' + table + '(' + Object.keys(object).join() + ') values(' + values +')';
    console.log("Query is: ", query);
    db.none(query)
        .then(() => {
            success;
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        })
        .finally(db.$pool.end);
}
