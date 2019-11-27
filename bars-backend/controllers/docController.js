var DocStore = require('../stores/docStore.js');

exports.list = function(req, res) {
    var response = res;
    DocStore.getAll(function (data) {
        response.send(data);
    });
   
}

exports.create = function(req, res) {
    var response = res;
    DocStore.create(req.body, function() {
        console.log('Success is executed');
        response.status(200).send('OK');
    });
}

exports.update = function(req, res) {
    
}

exports.delete = (req, res) => {
    var response = res;
    DocStore.delete(req.params.id,() => {
        res.status(200).send('OK');
    });
}
