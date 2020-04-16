$(function() {
	$("#conts .infoSection").css("display","none");
	$("#conts .infoSection").eq(0).css("display","block");
});

function tab(n) {
	for(var i =0; i < $(".list li").length; i++){
		$(".list li").removeClass("on");
		$(".infoSection ").css("display","none");
	}
	$(".list .li0"+n).addClass("on");
	$("#infoSection0"+n).css("display","block");
}