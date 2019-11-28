var DocStore = require('../stores/docStore.js');

exports.list = (req, res) => {
    console.log("userId: ",req.session.userId);
    var response = res;
    DocStore.getAll(data => {
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
    DocStore.create(req.body, () => {
         response.status(200).send('OK');
    });
}

exports.update = (req, res) => {
    var response = res;
    DocStore.update(req.body, req.params.id, () => {
        response.status(200).send('OK');
    });
}

exports.delete = (req, res) => {
    var response = res;
    DocStore.delete(req.params.id, () => {
        res.status(200).send('OK');
    });
}
