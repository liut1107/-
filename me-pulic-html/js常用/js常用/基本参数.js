$(function(){
	$('#main .topBox .foo').slick({
		centerMode: true,
		slidesToShow: 1,
		centerPadding: 0,
		variableWidth: true,
		slidesToScroll: 1,
		dots: true,
		pauseOnHover: false,
		autoplay: true,	
		fade: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 767,
			    settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false
		  		}
			}
		],
		prevArrow: '#main .topBox .subBox .prev',
		nextArrow: '#main .topBox .subBox .next'
	});
});