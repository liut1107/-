// JavaScript Document
$(document).ready(function(){
	
	$('#globalNavi li.headlink').hover(
		function() { $('ul', this).css('display', 'block'); },
		function() { $('ul', this).css('display', 'none'); });
	
    $('div.lightbox a').lightBox();
	
	$("#foo2").carouFredSel({
		auto : {
			play:true,
			pauseDuration:5000
		},
		prev : {	
			button	: "#nav-prev",
			key		: "left"
		},
		next : { 
			button	: "#nav-next",
			key		: "right"
		},
		pagination	: "#foo2_pag"
	});

	
	$('#changemenu').click(function(){
		$('li.menu').slideToggle();
	});
	
	setTimeout(function(){
		$("#main").slideToggle();				
	},2000);
	
});