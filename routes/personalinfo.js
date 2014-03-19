exports.get = function (req, res) {
	var data = {
		firstName: "Никита",
		lastName: "Селенков",
		email: "selenkov@foggylab.ru",
		phone: "+79111234567",
		cardNumber : "10912341454"
	};
    res.render('personalinfo', data);
};
