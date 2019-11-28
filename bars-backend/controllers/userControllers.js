var UserStore = require('../stores/userStores.js');

exports.register = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
    } else {
        //TODO check that user is exist in database
        //var newUser = {name: req.body.name, password: req.body.password};
        var request = req;
        var response = res;
        UserStore.create(req.body, id => {
            //request.session.user = newUser;
            request.session.userId = id;
            response.redirect('/doc');
        }
    }
}
