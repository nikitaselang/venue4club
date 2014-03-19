var buytickets = {};
buytickets.init = function(){
	$("ul.navbar-nav>li").removeClass('active').find('a[href="/buyticket"]').parent().addClass('active');	
};
