var QueryExecutor = require('./queryExecutor.js');

exports.getAll = function(callback) {
    QueryExecutor.get('select * from doc', callback);
}

exports.create = function(doc) {
    QueryExecutor.create('doc', doc.keys(), doc.values());
}

