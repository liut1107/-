$(function() {
	$("#conts .subBox").css("display","none");
	$("#conts .subBox").eq(0).css("display","block");
});

function tab(n) {
	for(var i =0; i < $(".link li").length; i++){
		$(".link li").removeClass("on");
		$(".subBox").css("display","none");
	}
	$(".link .link0"+n).addClass("on");
	$("#subBox0"+n).css("display","block");
}
