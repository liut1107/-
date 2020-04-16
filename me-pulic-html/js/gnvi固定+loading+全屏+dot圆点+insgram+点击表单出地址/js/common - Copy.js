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

});


	$(function(){
		$('.dot').dotdotdot({
			watch: 'window'
		});
		
	/*	
	多行以后显示... 加上class名 连接上jquery.dotdotdot.js  css写上一个高度
	*/	
		
		
		if($('#cover').length){
			$(window).bind('load', function(){
				openFade();
				
			});
		}
		//OPEN FADE
		function openFade(){
			$('#cover').fadeOut(1500,function(){
			});
		}
		
		/*	
	loadling的加法  加个空的div 然后加上一段css就可以了
	
	
	#cover {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9000;
		background: #fff url(../../img/common/loading.gif) no-repeat center center;
		background-size: 50px 50px;
	}
	
	*/	
	
		
		
		$(".pcBg").backstretch([
			"../img/index/main_visual_img01.jpg",
			"../img/index/main_visual_img02.jpg",
			], 
			{	fade: 1500,
				duration: 3000
		});
		
		$(".spBg").backstretch([
			"../img/index/main_visual_img01.jpg",
			"../img/index/main_visual_img02.jpg",
			], 
			{	fade: 1500,
				duration: 3000
		});
		
		
		/*$(window).resize(function(){
			$('.mainVisual').height($(window).height());
		}).trigger('resize');	
		
		mainvisual全屏
		
		
		
		*/
		
		
		
	});


