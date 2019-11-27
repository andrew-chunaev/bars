var QueryExecutor = require('./queryExecutor.js');

exports.getAll = function(callback) {
    QueryExecutor.get('select * from doc', callback);
}

