$(document).ready(function(){

	// hide #back-top first
	$(".pageTop").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.pageTop').fadeIn();
			} else {
				$('.pageTop').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.pageTop a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});