var QueryExecutor = require('./queryExecutor.js');
var Utils = require('../utils/utils.js');
const tableName = 'doc';
      
exports.getAll = callback => {
    QueryExecutor.get(`select * from ${tableName}`, callback);
}

exports.getByUserId = (userId, callback) => {
    QueryExecutor.get(`select * from ${tableName} where userid=${userId}`, callback);
}

exports.getById = (id, callback) => {
    QueryExecutor.get(`select * from ${tableName} where id=${id}`, callback);
}

exports.create = (doc, success) => {
    QueryExecutor.create(tableName, doc, success);
}

exports.update = (doc, id, userId, success) => {
    var stringifiedEntries = Utils.wrappedEntries(Object.entries(doc));
    var query = 'update ' + tableName + ' set ' + stringifiedEntries +
        ' where id=' + id + ' and userid=' + userId;
    QueryExecutor.update(query, success);
}

exports.delete = (id, userId, success) => {
    QueryExecutor.delete(`delete from ${tableName} where id=${id} and userid=${userId}`, success);
}
