var db = require('./database.js');
var Utils = require('../utils/utils.js');

exports.get = (query, callback) => {
    db.any(query)
        .then(data => {
            callback(data); 
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}

exports.create = (table, object, success) => {
    var values = Utils.wrappedJoin(Object.values(object));
    var query = 'insert into ' + table + '(' + Object.keys(object).join()
        + ') values(' + values +')';
    console.log("Query is: ", query);
    db.none(query)
        .then(() => {
            success();
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}

exports.update = (table, object, id, success) => {
    var stringifiedEntries = Utils.wrappedEntries(Object.entries(object));
    var query = 'update ' + table + ' set ' +
        stringifiedEntries + ' where id=' + id;
    console.log("Query is: ", query);
    db.none(query)
        .then(() => {
            success();
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}

exports.delete = (table, id, success) => {
    db.none('delete from ' + table + ' where id=' + id)
        .then(() => {
            success();
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}    