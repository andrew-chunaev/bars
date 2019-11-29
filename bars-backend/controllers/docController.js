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
        response.status(201);
        response.send('');
    });
}

exports.update = (req, res) => {
    var response = res;
    var newDoc = req.body;
    DocStore.update(newDoc,
                    req.params.id,
                    req.session.userId !== 'undefined' ? req.session.userId : 0,
                    () => {
                        response.status(200);
                        response.send('');
                    });
}

exports.delete = (req, res) => {
    var response = res;
    var request = req;
    DocStore.delete(req.params.id,
                    req.session.userId !== 'undefined' ? req.session.userId : 0,
                    () => {
                        response.status(200);
                        response.send('');
                    });
}
