var personalinfo = {};

personalinfo.init = function(){
	$("ul.navbar-nav>li").removeClass('active').find('a[href="/personalinfo"]').parent().addClass('active');	
};