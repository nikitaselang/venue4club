exports.get = function (req, res) {
    res.render('frontpage', {
        title: "Регистрация и вход",
        users: [
            {name: 'one', email: 'a@b.ru'},
            {name: 'two', email: 'b@c.de'}
        ]
    });
};