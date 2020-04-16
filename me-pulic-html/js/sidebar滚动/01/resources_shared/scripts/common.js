/* DROPDOWN */
$(document).ready(function(){
	$("li.navi05:has(ul)").hover(function(){
		$(this).addClass("on").children("ul").stop(true,true).slideDown("fast");
		$(this).children("a").addClass("hover");
	}, function(){
		$(this).removeClass("on").children("ul").stop(true,true).slideUp("fast");
		$(this).children("a").removeClass("hover");
	});
});