var DocStore = require('../stores/docStore.js');

exports.list = function(req, res) {
    var response = res;
    DocStore.getAll(function (data) {
        response.send(data);
    });
   
}

exports.create = function(req, res) {
    var doc = req.body;
    console.log("doc from controller: ", doc);
    DocStore.create(doc, function() {
        res.send('OK');
    });
}

exports.update = function(req, res) {
    
}

exports.del = function(req, res) {
    
}
