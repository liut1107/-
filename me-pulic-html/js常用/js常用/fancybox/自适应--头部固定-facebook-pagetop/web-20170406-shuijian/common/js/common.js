
function showPagetop(){
	var scrolledTop = $(document).scrollTop();
	if(scrolledTop>50){
		$('.pageTop').fadeIn();
	}else{
		$('.pageTop').fadeOut();
	}
}
jQuery(function(){
	$(window).scroll(showPagetop);
});


$(function(){
	$('#header .menu').click(function(){
		$('#header .menu').toggleClass('on');
		$('#header #gNavi').slideToggle(300);
		return false;	
	});	
});