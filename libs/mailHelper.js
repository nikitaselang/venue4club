var nodemailer = require('nodemailer');
var config = require('../config');

function sendActivationRequestMail(req, user, callback) {
	var transport = nodemailer.createTransport("SMTP", {
			service : "Gmail",
			auth : {
				"user" : config.get('gmailer:login'),
				"pass" : config.get('gmailer:password')
			}
		});

	var linkstr = req.protocol + '://' + req.headers.host + '/confirm?key=' + user.activationKey;
	var message = {
		from : config.get('gmailer:fromName'),
		to : toEmail,
		subject : 'Registration confirmation',
		html : '<p>Please, confirm your email: <a href="' + linkstr + '">click here</a>!</p>',
	};

	transport.sendMail(message, function (error) {
		if (error) {
			return;
		}
		console.log('Message sent successfully!');
		transport.close();
		
		callback();
	});
}

module.exports = sendActivationRequestMail;
