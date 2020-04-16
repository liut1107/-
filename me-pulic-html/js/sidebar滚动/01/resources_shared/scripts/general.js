/* GENERAL FUNCTIONS */

var brDir = '/white/';

var brIconSrc = '<img src="' + brDir + 'resources_shared/images/icn_popup.gif" alt="" width="9" height="9" class="iconR" />';

/* UA IE6 (work with universal script) */
var nUaIE6=nUa.indexOf("MSIE 6")!=-1;

/* IMG ROLLOVER */
$(document).ready(function(){
	$(".rollover").hover(
		function () { //hover
		var srcOvr=$(this).attr('src').replace('_def.','_ovr.');
			$(this).attr('src',srcOvr);
		},
		function () { //out
		var srcDef=$(this).attr('src').replace('_ovr.','_def.');
			$(this).attr('src',srcDef);
		}
	);
});

/* SUB WINDOW OPEN */
function openSWin(uri,name,w,h) {
	sub=window.open(uri,name,"location=no,directories=no,scrollbars=1,resizable=0,width="+w+",height="+h+",left=5,top=5");
	sub.focus();
}

/* GLOBAL NAVI SUB MENU */
$(document).ready(function(){
	$('#GNAVI .cateLink .blog a').eq(0).mouseover(function(){
		$('body').prepend('<div id="MSKTRANS"></div>');
		if(nUaIE){
			$('#GNAVI .cateLink .blog a').eq(0).addClass('ovr');
			$('#GNAVI .cateLink .blog ul').show();
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.item,#GNAVI .cateLink li.style,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.special').mouseover(function(){
				$('#GNAVI .cateLink .blog ul').hide();
			$('#GNAVI .cateLink .blog a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}else{
			$('#GNAVI .cateLink .blog a').eq(0).addClass('ovr');
			$('#GNAVI .cateLink .blog ul').fadeIn('fast');
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.item,#GNAVI .cateLink li.style,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.special').mouseover(function(){
				$('#GNAVI .cateLink .blog ul').fadeOut('fast');
			$('#GNAVI .cateLink .blog a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}
	});
	$('#GNAVI .cateLink .item a').eq(0).mouseover(function(){
		$('body').prepend('<div id="MSKTRANS"></div>');
		if(nUaIE){
			$('#GNAVI .cateLink .item a').eq(0).addClass('ovr');
			$('#GNAVI .cateLink .item ul').show();
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.style,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.blog,#GNAVI .cateLink li.special').mouseover(function(){
				$('#GNAVI .cateLink .item ul').hide();
			$('#GNAVI .cateLink .item a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}else{
			$('#GNAVI .cateLink .item a').eq(0).addClass('ovr');
			$('#GNAVI .cateLink .item ul').fadeIn('fast');
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.style,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.blog,#GNAVI .cateLink li.special').mouseover(function(){
				$('#GNAVI .cateLink .item ul').fadeOut('fast');
			$('#GNAVI .cateLink .item a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}
	});

	$('#GNAVI .cateLink .style a').eq(0).mouseover(function(){
		$('body').prepend('<div id="MSKTRANS"></div>');
		if(nUaIE){
			$('#GNAVI .cateLink .style a').eq(0).addClass('ovr');
			$('#GNAVI .cateLink .style ul').show();
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.item,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.blog,#GNAVI .cateLink li.special').mouseover(function(){
				$('#GNAVI .cateLink .style ul').hide();
			$('#GNAVI .cateLink .style a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}else{
			$('#GNAVI .cateLink .style a').eq(0).addClass('ovr');
			$('#GNAVI .cateLink .style ul').fadeIn('fast');
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.item,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.blog,#GNAVI .cateLink li.special').mouseover(function(){
				$('#GNAVI .cateLink .style ul').fadeOut('fast');
			$('#GNAVI .cateLink .style a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}
	});
	$('#GNAVI .funcLink .store a').eq(0).mouseover(function(){
		$('body').prepend('<div id="MSKTRANS"></div>');
		if(nUaIE){
			$('#GNAVI .funcLink .store a').eq(0).addClass('ovr');
			$('#GNAVI .funcLink .store ul').show();
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.item,#GNAVI .cateLink li.style,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.blog,#GNAVI .cateLink li.special,#GNAVI .funcLink li.favorite,#GNAVI .funcLink li.mobile').mouseover(function(){
				$('#GNAVI .funcLink .store ul').hide();
				$('#GNAVI .funcLink .store a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}else{
			$('#GNAVI .funcLink .store a').eq(0).addClass('ovr');
			$('#GNAVI .funcLink .store ul').fadeIn('fast');
			$('div#MSKTRANS,#GNAVI .cateLink li.home,#GNAVI .cateLink li.news,#GNAVI .cateLink li.concept,#GNAVI .cateLink li.item,#GNAVI .cateLink li.style,#GNAVI .cateLink li.shop,#GNAVI .cateLink li.blog,#GNAVI .cateLink li.special,#GNAVI .funcLink li.favorite,#GNAVI .funcLink li.mobile').mouseover(function(){
				$('#GNAVI .funcLink .store ul').fadeOut('fast');
				$('#GNAVI .funcLink .store a').eq(0).removeClass('ovr');
				$('div#MSKTRANS').remove();
			});
		}
	});
});


/* GLOBAL NAVI MOBILE QR WINDOW */
$(document).ready(function(){
	$('#GNAVI .funcLink .mobile a').click(function(){
		if(nUaIE){
			$('#MOBQR,#MSK').show();
		}else{
			$('#MOBQR,#MSK').fadeIn('fast');
		}
	});
	$('#MOBQR .close a').click(function(){
		if(nUaIE){
			$('#MOBQR,#MSK').hide();
		}else{
			$('#MOBQR,#MSK').fadeOut('fast');
		}
	});
});


/* SIZE CHART FLOAT WINDOW */
$(document).ready(function(){
	$('a.btnShowSize').click(function(){
		if(nUaIE){
			$('#SIZECHART,#MSK').show();
		}else{
			$('#SIZECHART,#MSK').fadeIn('fast');
		}
		var scrBoxH=$(window).height()*0.6;
		$('#mcs2_container,#mcs2_container .dragger_container').height(scrBoxH);
		mCustomScrollbars();
		$('#SIZECHART .close a').click(function(){
			if(nUaIE){
				$('#SIZECHART,#MSK').hide();
			}else{
				$('#SIZECHART,#MSK').fadeOut('fast');
			}
		});
	});
});


/* STYLING FLOAT WINDOW */
function showStyle(id){
	var tgt='#STYLE'+id;
	if(nUaIE){
		$('#MSK').show();
		$(tgt).show();
		flWinTop(tgt);
	}else{
		$('#MSK').fadeIn('fast');
		$(tgt).fadeIn('fast',function(){flWinTop(tgt);});
	}
	$('.floatWin .close a').click(function(){
		if(nUaIE){
			$('.floatWin,#MSK').hide();
		}else{
			$('.floatWin,#MSK').fadeOut('fast');
		}
	});
}
function flWinTop(winId){
	var inHID = winId + ' .box';
	var pTop=($(window).height()-$(inHID).innerHeight())/2+$(document).scrollTop();
	pTop=pTop-100;
	pTop=(pTop>0)?pTop:0;
	$(winId).css('top',pTop+'px');
}

/* BLANK ICON ADD */
$(document).ready(function(){
	$('.newsIdx a,.newsList a,.articleList dl a,.mediaList .itemName a,.col3List .itemName a,.stylingData a,.sitemapList a,.bnS .data a,.bnS h2 a').each(function(){
		if($(this).attr('target')=='_blank'){
			$(this).append(brIconSrc);
		};
	});
});


/* .col3List LI HEIGHT ADJUST */
$(document).ready(function(){
	var num=$('.col3List li').size();
	for(n=0;n<Math.floor(num/3)+1;n++){
		var h = Math.max($('.col3List li').eq(3*n).height(),$('.col3List li').eq(3*n+1).height());
		h = Math.max(h,$('.col3List li').eq(3*n+2).height());
		$('.col3List li').eq(3*n).height(h);
		$('.col3List li').eq(3*n+1).height(h);
		$('.col3List li').eq(3*n+2).height(h);
		if(!nUaIE6){
			$('.col3List li div.inner').eq(3*n).height(h);
			$('.col3List li div.inner').eq(3*n+1).height(h);
			$('.col3List li div.inner').eq(3*n+2).height(h);
		}
	}
});



