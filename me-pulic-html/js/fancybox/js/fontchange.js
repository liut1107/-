//文字サイズ変更＋画像のON/OFF
$(function(){
	size = $.cookie('fsize')
	var sizes=new Array("50%","62.5%","100%");
	$('body').css("font-size",sizes[size-1]);

	switch(size){
		case "1":
			$('#fs').addClass('on').removeClass('off');
			$('#fm').addClass('off').removeClass('on');
			$('#fl').addClass('off').removeClass('on');
			break;
		case "2":
			$('#fs').addClass('off').removeClass('on');
			$('#fm').addClass('on').removeClass('off');
			$('#fl').addClass('off').removeClass('on');
			break;
		case "3":
			$('#fs').addClass('off').removeClass('on');
			$('#fm').addClass('off').removeClass('on');
			$('#fl').addClass('on').removeClass('off');
			break;
	}
});

function font(size){
	var sizes=new Array("50%","62.5%","100%");
	$('body').css("font-size",sizes[size-1]);
	
	switch(size){
		case "1":
			$('#fs').addClass('on').removeClass('off');
			$('#fm').addClass('off').removeClass('on');
			$('#fl').addClass('off').removeClass('on');
			break;
		case "2":
			$('#fs').addClass('off').removeClass('on');
			$('#fm').addClass('on').removeClass('off');
			$('#fl').addClass('off').removeClass('on');
			break;
		case "3":
			$('#fs').addClass('off').removeClass('on');
			$('#fm').addClass('off').removeClass('on');
			$('#fl').addClass('on').removeClass('off');
			break;
	}
	$.cookie('fsize',size,{expires:30,path:'/'});
}
