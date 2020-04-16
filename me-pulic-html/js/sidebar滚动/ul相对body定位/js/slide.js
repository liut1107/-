$(function(){
	var num = 0;
	$("#slideMain img").eq(0).show();
	$("#slideNavi li").eq(0).css("opacity","1");
	$("#slideNavi li").each(function(i){
		$("#slideNavi li").eq(i).mouseover(function(){
			num = i;
			$(this).fadeTo(500,1).siblings().fadeTo(500,0.4);
			$("#slideMain img").eq(i).fadeIn("slow").siblings().fadeOut("slow");
		});
	});
	antoRun();
	function antoRun(){
		if(num <= $("#slideNavi li").length-1){
			$("#slideNavi li").eq(num).fadeTo(500,1).siblings().fadeTo(500,0.4);
			$("#slideMain img").eq(num).fadeIn("slow").siblings().fadeOut("slow");
			num++;
		}else {
			$("#slideNavi li").eq(0).fadeTo(500,1).siblings().fadeTo(500,0.4);
			$("#slideMain img").eq(0).fadeIn("slow").siblings().fadeOut("slow");
			num = 0;
		}
		setTimeout(antoRun,5000);
	}
});