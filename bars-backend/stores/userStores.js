var QueryExecutor = require('./queryExecutor.js');
const tableName = "users"
exports.checkByUserName = (userName, success) => {
    QueryExecutor.get(`select count(id) from ${tableName} where name=${userName}`, success);
}

exports.create = (newUser, success) => {
    QueryExecutor.createWithResult(tableName, newUser, success);
}

