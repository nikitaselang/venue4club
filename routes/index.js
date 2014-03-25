var checkAuth = require('../middleware/checkAuth');
var User = require('../models/user').User;
var HttpError = require('../error').HttpError;
var mailHelper = require('../libs/mailHelper');

module.exports = function (app) {

    app.get('/', require('./frontpage').get);

    app.get('/login', require('./login').get);
    app.post('/login', require('./login').post);

    app.post('/logout', require('./logout').post);

	app.get('/registration', require('./registration').get);
	app.post('/registration', require('./registration').post);
	
	app.get('/confirm', require('./confirm').get);
	
	
    app.get('/account', require('./account').get);
    app.get('/buyticket', require('./buyticket').get);
    app.get('/personalinfo', require('./personalinfo').get);
    app.get('/card', require('./card').get);

    app.get('/chat', checkAuth, require('./chat').get);
	
	app.get('/restore', require('./restore').get);
	
};


/*
 var HttpError = require('error').HttpError;
 var User = require('models/user').User;
 var ObjectId = require('mongodb').ObjectID;

 module.exports = function(app){

 app.put('/user', function(req,res,next){
 var vale = { email: 'Nikita ' + new Date(), password:'111222333' };
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
