var card = {};
card.init = function(){
	$("ul.navbar-nav>li").removeClass('active').find('a[href="/card"]').parent().addClass('active');
};