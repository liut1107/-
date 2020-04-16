if(((navigator.userAgent.indexOf('iPhone') > 0) || (navigator.userAgent.indexOf('Android') > 0) && (navigator.userAgent.indexOf('Mobile') > 0) && (navigator.userAgent.indexOf('SC-01C') == -1))){
document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">');
} 

$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() >$(window).height()) {
			$('#gNavi').addClass('on');
		} else {
			$('#gNavi').removeClass('on');
		}
	});
	if($(window).width()>767){
		$("#gNavi li:has(ul)").hover(function(){
			$(this).children("a").addClass("on");
			$(this).children("ul").stop(true,true).slideDown(300);
		},function(){
			$(this).children("a").removeClass("on");
			$(this).children("ul").stop(true,true).slideUp(300);	
		});	
	} else {
		$("#gNavi li:has(ul) > a").click(function(){
			$(this).toggleClass('on').next().stop().slideToggle(300);
			return false;
		});	
		$('#gHeader .menu').click(function(){
			$('#gHeader .menu').toggleClass('on');
			$('#gHeader #gNavi').slideToggle(300);
			return false;	
		});	
	}
/*	
	$('#gHeader #gNavi .accordion').click(function(){
		$('#gHeader #gNavi .accordion').toggleClass('on');
		$('#gHeader #gNavi .subNavi').slideToggle(300);
		return false;	
	});
*/


});

