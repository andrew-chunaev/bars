var QueryExecutor = require('./queryExecutor.js');

exports.getAll = function(callback) {
    QueryExecutor.get('select * from doc', callback);
}

exports.create = function(doc, success) {
    console.log("doc from store: ", doc);
    QueryExecutor.create('doc', doc, success);
}

