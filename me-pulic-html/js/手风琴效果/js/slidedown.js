/*!
 * SLIDE DOWN
 */

$(function() {
	$(".sideNavi li a").click(function() {
		if($(this).siblings("ul").is(":hidden")) {
			$(this).siblings("ul").slideDown("slow");
			$(this).addClass("on");
			$(this).parent().siblings("li").find("ul").slideUp(500);
			$(this).parent().siblings("li").children("a").removeClass("on");
		}else {
			$(this).siblings("ul").slideUp("slow");
			$(this).removeClass("on");
		}
	});
});