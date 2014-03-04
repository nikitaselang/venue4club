var checkAuth = require('middleware/checkAuth');

module.exports = function(app) {

    app.get('/', require('./frontpage').get);

    app.get('/login', require('./login').get);
    app.post('/login', require('./login').post);

    app.post('/logout', require('./logout').post);

    app.get('/chat', checkAuth, require('./chat').get);

};



/*
var HttpError = require('error').HttpError;
var User = require('models/user').User;
var ObjectId = require('mongodb').ObjectID;

module.exports = function(app){

app.put('/user', function(req,res,next){
    var vale = { username: 'Nikita ' + new Date(), password:'111222333' };
    var nikita =  new User(vale);
    nikita.save(function(err, affected){
        if(err) return next(err);
        console.log(arguments);
        res.json(affected);
    });
});
//app.get('/user', function(req,res,next){
//    re
//});


app.get('/user/:id', function(req,res,next){
    try {
        var id = new ObjectId(req.params.id);
        } catch (e){
        return next(404);
    }
        User.findById(req.params.id, function(err, user){
        if(err) return next(err);
        if(!user) {
            next(new HttpError(404, "User not found"));
        } else {
            res.json(user);
        }
        });
});

};*/
