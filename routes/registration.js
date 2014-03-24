var HttpError = require('../error').HttpError;
var User = require('../models/user').User;

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
			
			res.post({result:"ok"});
		});
	}
	else {
		return next(new HttpError(400, "Введите корректный e-mail, пароль и подтверждение пароля"));
	}
	
};
