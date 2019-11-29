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
    db.none(query)
        .then(() => {
            success();
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}

exports.createWithResult = (table, object, success) => {
    var values = Utils.wrappedJoin(Object.values(object));
    var query = 'insert into ' + table + '(' + Object.keys(object).join()
        + ') values(' + values +') returning id';
    db.one(query)
        .then(data => {
            success(data.id);
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}

exports.update = (query, success) => {
    db.none(query)
        .then(() => {
            success();
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}

exports.delete = (query, success) => {
    db.none(query)
        .then(() => {
            success();
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
        });
}    
