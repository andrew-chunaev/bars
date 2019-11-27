var QueryExecutor = require('./queryExecutor.js');

exports.getAll = (callback) => {
    QueryExecutor.get('select * from doc', callback);
}

exports.getById = (id, callback) => {
    QueryExecutor.get('select * from doc where id=' + id, callback);
}

exports.create = (doc, success) => {
    QueryExecutor.create('doc', doc, success);
}

exports.update = (doc, id, success) => {
    QueryExecutor.update('doc', doc, id, success)
}

exports.delete = (id, success) => {
    QueryExecutor.delete('doc', id, success);
}
