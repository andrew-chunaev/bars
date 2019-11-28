var UserStore = require('../stores/userStores.js');

exports.register = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status(400);
        res.send("Invalid details!");
    } else {
        var request = req;
        var response = res;
        UserStore.checkByUsername(req.body.name, result => {
            if (result[0].exists) {
                response.status(400);
                response.send("User Already Exists! Login or choose another user id");
            } else {
                UserStore.create(req.body, id => {
                    request.session.userId = id;
                    response.redirect('/doc/currentUser');
                });
            }
        });               
    }
}

exports.login = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status(400);
        res.send("Please enter both name and password");
    } else {
        var request = req;
        var response = res;
        UserStore.findByUsernameAndPassword(req.body.name, req.body.password, result => {
            if (result.length == 0) {
                response.status(401);
                response.send("Invalid credentials!");
            } else {
                request.session.userId = result[0].id;
                response.redirect('/doc/currentUser');
            }
        });               
    }
}

exports.logout = (req, res) => {
    req.session.destroy(() => {});
    res.redirect('/doc');
}
