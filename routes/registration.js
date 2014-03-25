var HttpError = require('../error').HttpError;
var User = require('../models/user').User;
var nodemailer = require('nodemailer');
var config = require('../config');


exports.get = function (req, res) {

	res.render('registration', {
		title : 'Регистрация'
	});
};

exports.post = function (req, res, next) {
	var email = req.body.email;
    var password = req.body.password;
    var passwordRepeat = req.body.passwordRepeat;
	
	if(email && (password == passwordRepeat)) {
		User.register(email, password, function(err, user){
			if(err) return next(err);
			
			var transport = nodemailer.createTransport("SMTP", {
				service: "Gmail",
				auth: {
					user: config.get('gmailer:login'),
					pass: config.get('gmailer:password')
				}
			});
			console.log('SMTP Configured');
			var linkstr = req.protocol + '://' + req.headers.host + '/confirm?key='+user.activationKey;
			debugger;
			var message = {
				// sender info
				from: 'Sender Name <selenkov@foggylab.ru>',

				// Comma separated list of recipients
				to: email,

				// Subject of the message
				subject: 'Registration confirmation', //

				// HTML body with image that will be converted to embedded attachment
				html:'<p>Please, confirm your email: <a href="' + linkstr + '">' + linkstr  + '</a></p>',

				//forceEmbeddedImages: true
			};
			
			transport.sendMail(message, function(error){
				if(error){
					console.log('Error occured');
					console.log(error.message);
					return;
				}
				console.log('Message sent successfully!');

				// if you don't want to use this transport object anymore, uncomment following line
				//transport.close(); // close the connection pool
			});
			
			res.json({result:"ok"});
		});
	}
	else {
		return next(new HttpError(400, "Введите корректный e-mail, пароль и подтверждение пароля"));
	}
	
};
