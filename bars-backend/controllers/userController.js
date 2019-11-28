var UserStore = require('../stores/userStores.js');

exports.register = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
    } else {
        //TODO check that user is exist in database
        var request = req;
        var response = res;
        UserStore.create(req.body, id => {
            request.session.userId = id;
            response.redirect('/doc');
        });
    }
}

exports.login = (req, res) => {
}
