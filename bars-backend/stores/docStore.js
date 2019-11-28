var QueryExecutor = require('./queryExecutor.js');
const tableName = 'doc';
      
exports.getAll = callback => {
    QueryExecutor.get(`select * from ${tableName}`, callback);
}

exports.getByUserId = (userId, callback) => {
    QueryExecutor.get(`select * from ${tableName} where userid=${userId}`, callback);
}

exports.getById = (id, callback) => {
    QueryExecutor.get(`select * from ${tableName} where id=` + id, callback);
}

exports.create = (doc, success) => {
    QueryExecutor.create(tableName, doc, success);
}

exports.update = (doc, id, success) => {
    QueryExecutor.update(tableName, doc, id, success)
}

exports.delete = (id, success) => {
    QueryExecutor.delete(tableName, id, success);
}
