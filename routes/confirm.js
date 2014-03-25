var HttpError = require('../error').HttpError;
var User = require('../models/user').User;
var nodemailer = require('nodemailer');
var config = require('../config');

exports.get = function (req, res) {

	res.render('registration', {
		title : 'Регистрация'
	});
};

exports.get = function (req, res, next) {

	var key = req.query.key;
	if (!key) {
		return next(404);
	}
	User.findOne({
		"activationKey" : key,
		"isEmailConfirmed" : false
	}, function (err, user) {
		if (err) {
			return next(err);
		}
		if (!user) {
			next(new HttpError(404, "User with this key not found"));
		} else {
			user.isEmailConfirmed = true;
			user.save(function (err, user) {
				if (err) {
					return next(err);
				}
				
				req.session.user = user._id;
				res.send('<html><body><p>Потрачено</p></body></html>');
				
			});

		}
	});

};
