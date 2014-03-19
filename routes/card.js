exports.get = function (req, res) {
	var orders = [{
			sellTime : '12.01.2013 11:26',
			event : 'Marks and Spenser in da mix',
			sum : 1800,
			tickets : 2,
			isVip : false
		}, {
			sellTime : '23.01.2013 15:33',
			event : 'Goldie',
			sum : 1800,
			tickets : 2,
			isVip : false
		}, {
			sellTime : '04.08.2013 22:19',
			event : 'Esko-bar 10.08.2013 19:00',
			sum : 6400,
			tickets : 4,
			isVip : true
		}
	];

	res.render('card', {
		title : 'История действий по карте',
		orders : orders,
		cardNumber : '10912341454'
	});
}
