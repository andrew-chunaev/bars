var QueryExecutor = require('./queryExecutor.js');
const tableName = "users"
exports.checkByUsername = (username, success) => {
    QueryExecutor.get(`select exists (select 1 from ${tableName} where name=\'${username}\')`, success);
}

exports.create = (newUser, success) => {
    QueryExecutor.createWithResult(tableName, newUser, success);
}

exports.findByUsernameAndPassword = (username, password, success) => {
    QueryExecutor.get(`select * from ${tableName} where name=\'${username}\' and password=\'${password}\'`, success);
}

