$(function(){
	setting();
	setTimeout(doScroll, 100);
	window.addEventListener('load', function(){ setTimeout(doScroll, 100); },false);
	window.onorientationchange = function(){ setTimeout(doScroll, 100); }
	
	$("a").bind({
		touchstart: function () {
		  $(this).addClass("touch");
		}
	 });
	 
	 $("a").bind({
		touchend: function () {
		  $(this).removeClass("touch");
		}
	 });
});

function setting(){
	tilt();

	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1){
		$("body").addClass("iphone");
		window.onorientationchange = tilt;
	}else if(agent.search(/Android/) != -1){
		$("body").addClass("android");
		window.onresize = tilt;
	}
}

function tilt(){
	var orientation = window.orientation;
	if(orientation == 0){
		$("body").addClass("portrait");
		$("body").removeClass("landscape");
	}else{
		$("body").addClass("landscape");
		$("body").removeClass("portrait");
	}
}

function doScroll() {
	if (window.pageYOffset === 0) { window.scrollTo(0,1); }
}