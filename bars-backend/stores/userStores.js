var QueryExecutor = require('./queryExecutor.js');

exports.checkByUserName = (userName, success) = {
    QueryExecutor.get('select count(id) from user where name=' + userName, success);
}

exports.create = (newUser, success) => {
    QueryExecutor.createWithResult('user', newUser, success);
}

