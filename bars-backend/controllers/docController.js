var DocStore = require('../stores/docStore.js');

exports.list = (req, res) => {
    var response = res;
    DocStore.getAll(data => {
        response.send(data);
    });   
}

exports.getByCurrentUser = (req, res) => {
    var response = res;
    DocStore.getByUserId(req.session.userId, data => {
        response.send(data);
    });   

}

exports.get = (req, res) => {
    var response = res;
    DocStore.getById(req.params.id, data => {
        response.send(data);
    });
   
}

exports.create = (req, res) => {
    var response = res;
    var newDoc = req.body;
    if (req.session.userId !== 'undefined') {
        newDoc.userId = req.session.userId;
    }
    DocStore.create(newDoc, () => {
        response.status(200);
        response.send('OK');
    });
}

exports.update = (req, res) => {
    var response = res;
    var newDoc = req.body;
    if (req.session.userId !== 'undefined') {
        newDoc.userId = req.session.userId;
    } 
    DocStore.update(newDoc, req.params.id, () => {
        response.status(200);
        response.send('OK');
    });
}

exports.delete = (req, res) => {
    var response = res;
    DocStore.delete(req.params.id, () => {
        response.status(200);
        response.send('OK');
    });
}
