$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > $('#gHeader').height()) {
			$('.pageTop').fadeIn();
		} else {
			$('.pageTop').fadeOut();
		}
	});	
	
	$('#gHeader .sMenu a').click(function(){
		$(this).toggleClass('on');
		$('#gHeader .navi').slideToggle();
		return false;
	});
	
	
	
});