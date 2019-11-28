var UserStore = require('../stores/userStores.js');

exports.register = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
    } else {
        var request = req;
        var response = res;
        UserStore.checkByUsername(req.body.name, result => {
            console.log(result);
            if (result[0].exists) {
                response.status("400");
                response.send("User Already Exists! Login or choose another user id");
            } else {
                UserStore.create(req.body, id => {
                    request.session.userId = id;
                    response.redirect('/doc');
                });
            }
        });               
    }
}

exports.login = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status(401);
        res.send("Please enter both name and password");
    } else {
        Users.filter(function(user){
            if(user.id === req.body.id && user.password === req.body.password){
                req.session.user = user;
                res.redirect('/doc');
            }
        });
        res.render('login', {message: "Invalid credentials!"});
    }
}

exports.logout = (req, res) => {
    req.session.destroy(() => {});
    res.redirect('/login');
}
