var QueryExecutor = require('./queryExecutor.js');

exports.getAll = function(callback) {
    QueryExecutor.get('select * from doc', callback);
}

exports.create = function(doc, success) {
    QueryExecutor.create('doc', doc, success);
}

exports.delete = (id, success) => {
    QueryExecutor.delete('doc', id, success);
}
