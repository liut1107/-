/* ============================================================

	script info : 独自のスクリプトを記述

============================================================ */

/* ▼▼2011/11/25追加・修正▼▼ */
/* ------------------------------------------------------------
	common : smartphone
------------------------------------------------------------ */

$(document).ready(function() {
	if ((navigator.userAgent.indexOf('iPhone') > 0 &&
		navigator.userAgent.indexOf('iPad') == -1) ||
		navigator.userAgent.indexOf('iPod') > 0 ||
		navigator.userAgent.indexOf('Android') > 0 ) {
			$('body').addClass('sp');
	}
});
/* ▲▲2011/11/25追加・修正▲▲ */


/* ▼▼2011/11/21追加・修正▼▼ */
/* ------------------------------------------------------------
	common : roll over
------------------------------------------------------------ */

(function($){
	$(function(){
		rollover();
	});
	function rollover(){
		var images = $('img');
		for(var i=0; i < images.size(); i++) {
		    if(images.eq(i).attr('src').match('_off.')) {
		        $('img').eq(i).hover(function() {
		            $(this).attr('src', $(this).attr('src').replace('_off.', '_on.'));
		        }, function() {
		            $(this).attr('src', $(this).attr('src').replace('_on.', '_off.'));
		        });
		    }
		}
	}
})(jQuery);
/* ▲▲2011/11/21追加・修正▲▲ */


/* ------------------------------------------------------------
	common : jquery.socialbuttons
------------------------------------------------------------ */

$(document).ready(function() {
	var $socialButton = $('#socialButton');
	$socialButton.children('.hatena').socialbutton('hatena');
	$socialButton.children('.mixi_check').socialbutton('mixi_check', {
  		key: '5466c31b26d73b19497e6316e4c73b001e36efdf'
	});
	$socialButton.children('.facebook_like').socialbutton('facebook_like');
	$socialButton.children('.twitter').socialbutton('twitter');
});


/* ------------------------------------------------------------
	common : smooth scroll
------------------------------------------------------------ */

$(document).ready(function() {
	$('a[href^=#]').click(function() {
		if ($(this).hasClass('nosc') == false) {
			var speed = 500;
			var href= $(this).attr('href');
			var target = $(href == '#' || href == '' ? 'html' : href);
			var position = target.offset().top;
			$($.browser.safari ? 'body' : 'html').animate({ scrollTop : position }, speed, 'easeInOutCirc');
			return false;
		}
	});
});


/* ------------------------------------------------------------
	common : checkboxTable
------------------------------------------------------------ */

$(document).ready(function() {
	$('#setPlanPanel').find('table.checkboxTable input').click(function(){
		$(this).parent().parent().toggleClass('checked');
	});
});


/* ------------------------------------------------------------
	common : popup window
------------------------------------------------------------ */

function openPopup(myself, width, height) {
	var url = $(myself).attr('href');
	var w = window.open(
		url,
		'popup',
		'width=' + width + ',height=' + height + ',scrollbars=yes,resizable=yes'
	);
	w.focus();
	return false;
};


/* ▼▼2011/8/8追加・修正▼▼ */
/* ------------------------------------------------------------
	common : global nav mypage pulldown
------------------------------------------------------------ */
$(document).ready(function(){
	if(jQuery.browser.msie) {
		$('#globalNav li.mypage a.parent').toggle(
		function() {
			$(this).siblings('ul').fadeIn(300, function(){ this.style.removeAttribute('filter'); });
		},
		function() {
			$(this).siblings('ul').fadeOut(400, function(){ this.style.removeAttribute('filter'); });
		});
	} else {
		$('#globalNav li.mypage a.parent').toggle(
		function() {
			$(this).siblings('ul').fadeIn(300);
		},
		function() {
			$(this).siblings('ul').fadeOut(400);
		});
	}
});
/* ▲▲2011/8/2追加・修正▲▲ */


/* ------------------------------------------------------------
	search : detail nav open / close
------------------------------------------------------------ */

$(document).ready(function(){
	var $detailNav = $('#detailSub').find('ul li');
	var $detailNav_btn = $detailNav.find('span');
	var $detailNav_parent = $detailNav.filter('li.parent');

	$detailNav_btn.mouseover(function(){
		$(this).css({ 'cursor': 'pointer'});
	});
	$detailNav_btn.click(function(){
		var $parent = $(this).parent('li');
		if ($parent.hasClass('close')) {
			$parent.removeClass('close');
			$(this)
				.removeClass('minNextButton')
				.addClass('minBottomButton');
		} else {
			$parent.addClass('close');
			$(this)
				.removeClass('minBottomButton')
				.addClass('minNextButton');
		}
	});
});


/* ------------------------------------------------------------
	search : search tab open / close / change
------------------------------------------------------------ */

function changeTab(myself) {
	var $settings = $('#settings');
	var $tab = $(myself);
	var $target = $($tab.attr('href'));

	if ($tab.hasClass('on')) {
		$settings
			.slideUp(400)
			.addClass('close');
		$tab.removeClass('on');
	} else {
		$tab.addClass('on')
			.parent().siblings().find('a').removeClass('on');
		$target.siblings()
			.css({
				'position': 'absolute',
				'zIndex': '1'
			})
			//.fadeOut(100);
			.hide();
		$target
			.css({
				'position': 'relative',
				'zIndex': '10'
			})
			.fadeIn(200);
		if ($settings.hasClass('close')) {
			$settings
				.slideDown(400)
				.removeClass('close');
		}
	}

	$settings.find('li.close').one('click', function() {
		$settings
			.slideUp(400)
			.addClass('close');
		$('#searchPanel ul.methodTab li a').removeClass('on');
		$($.browser.safari ? 'body' : 'html').animate({ scrollTop : $settings.scrollTop() }, 500);
	});

	return false;
}


/* ------------------------------------------------------------
	search : search condition delete
------------------------------------------------------------ */

function deleteSearchCondition(target) {
	$(target).parent().fadeOut(300);
}


/* ------------------------------------------------------------
	search : syllabary open / close
------------------------------------------------------------ */

function showSyllabaryTip(target) {
	var $target = $(target);
	var $syllabaryTip = $('#syllabaryTip');

	if ($syllabaryTip.hasClass('show')) {
		$syllabaryTip
			.fadeOut(150)
			.removeClass('show');
	} else {
		$syllabaryTip
			.css({
				'top': $target.offset().top + 20 + 'px',
				'left': $target.offset().left - (($syllabaryTip.width()/2) - ($target.width()/2)) + 'px'
			})
			.fadeIn(150)
			.addClass('show');
	}
}


/* ------------------------------------------------------------
	search : related Univ open / close
------------------------------------------------------------ */

function showRelatedUniv(target) {
	var $target = $(target).parents('div.infoFoot');

	$target.toggleClass('open');

	$target.find('a.minCloseButton').one('click', function() {
		$target.removeClass('open');
	});
}


/* ------------------------------------------------------------
	search : faculty more open / close
------------------------------------------------------------ */

function showFacultyMore(target){
	var $trigger = $(target).parent('div.trigger');
	var $target = $trigger.parent('div.particularMore');

	if ($target.hasClass('open')) {
		$trigger
			.removeClass('minDownLink')
			.addClass('minNextLink')
			.find('a').html('検索条件に合致する他の学部・学科も見る');
		$target.removeClass('open');
	} else {
		$trigger
			.removeClass('minNextLink')
			.addClass('minDownLink')
			.find('a').html('開いた学科を閉じる');
		$target.addClass('open');
	}
}


/* ------------------------------------------------------------
	search : exam info open / close
------------------------------------------------------------ */

$(function(){
	$('#main').find('div.univExamHead')
		.hover(
			function() {
				$(this).addClass('univExamHeadOver');
			},
			function() {
				$(this).removeClass('univExamHeadOver');
			}
		)
		.find('a.helpButton').click(function(){
			return false;
		});
});

function showExamInfo(target){
	$(target).addClass('univExamHeadOver').hide()
		.siblings().show();
}

function hideExamInfo(target) {
	var $container = $(target).parent().parent().slideUp(400)
		.siblings().fadeIn(400).parent();

	$($.browser.safari ? 'body' : 'html').animate({ scrollTop : ($container.position().top) }, 400);
}


/* ------------------------------------------------------------
	search : faculty list
------------------------------------------------------------ */

$(document).ready(function() {
	var $facultyLink = $('#main div.category ul li div');

	$facultyLink
		.live('mouseover', function(){
			$(this).addClass('over');
		})
		.live('mouseout', function(){
			$(this).removeClass('over');
		});

	$facultyLink.click(function(){
		var dataUrl = $(this).find('a').attr('href');
		location.href = dataUrl;
	});
});


/* ------------------------------------------------------------
	mypage : center subject select
------------------------------------------------------------ */

$(document).ready(function() {
	$('#centerSubjectList').children('li').hover(
 		function () {
			$(this).addClass('over');
		},
		function () {
			$(this).removeClass('over');
		}
	).find('input').click(function(){
		$(this).parent().parent().toggleClass('checked');
	});
});



/* ------------------------------------------------------------
	mypage : side info list
------------------------------------------------------------ */

$(document).ready(function() {
	var $infoChoice = $('#infoChoiceList > div.infoChoice');

	$infoChoice.hover(
		function() {
			$(this).addClass('over');
		},
		function() {
			$(this).removeClass('over');
		}
	);

	$infoChoice.click(function() {
		var dataUrl = $(this).find('div.inner p.univ a').attr('href');
		if (typeof dataUrl == 'undefined') {
			return false;
		}
		location.href = dataUrl;
	});

	$infoChoice.find('a.change, a.delete, input.scheButton').click(function(){
		return false;
	});
});


/* ------------------------------------------------------------
	mypage : side info list schedule set
------------------------------------------------------------ */

function examScheduleSet(target) {
	$target = $(target);
	$target.removeClass('on')
		.siblings('a.checkLink').addClass('on');
}


/* ------------------------------------------------------------
	mypage : new info list
------------------------------------------------------------ */

$(document).ready(function() {
	var $newInfo = $('#newInfoList div.newInfo');

	$newInfo
		.live('mouseover', function(){
			$(this).addClass('over');
		})
		.live('mouseout', function(){
			$(this).removeClass('over');
		});

	$newInfo.live('click', function(){
		var dataUrl = $(this).find('p.txt a').attr('href');
		location.href = dataUrl;
		// ▼▼▼二重リクエスト発行対応 2012/01/19
		return false;
		// ▲▲▲
	});

	$newInfo.find('input').live('click', function(){
		return false;
	});
});


/* ------------------------------------------------------------
	mypage : show new info
------------------------------------------------------------ */

function showNewInfo(myself, target) {
	var $myself = $(myself);
	var $myself_container = $myself.parent();
	var $target = $(target);
	var $loading = $('<span class="loadingIcon sub">Loading...</span>');
	$myself_container.height($myself_container.height());

	$myself.hide().after($loading);
	$loading.css({ 'display': 'block' });

	// データの読み込みなどの処理のダミー
	$target.load('../data/myp001-newinfo.html',
		function(){
			$myself_container.hide();
			$target.slideDown(600);
		}
	);
}


/* ------------------------------------------------------------
	mypage : show arrival new info
------------------------------------------------------------ */

function showArrivalNewInfo() {
	var $btn = $('#btnArrival');
	$btn.slideDown(200);
}


/* ------------------------------------------------------------
	mypage : choice panel open / close
------------------------------------------------------------ */

function closeChoicePanel(){
	var $close = $('<p class="choicePanelOpen minNextLink"><a href="javascript: void(0);" onclick="openChoicePanel(this);">出願締め切りのお知らせ</a></p>');
	var $target = $('#choicePanel');
	$close.css({ 'display': 'none' });
	$target.after($close).slideUp(200);
	$close.show();
}
function openChoicePanel(myself){
	$('#choicePanel').slideDown(200);
	$(myself).parent().remove();
}


/* ------------------------------------------------------------
	mypage : rank list
------------------------------------------------------------ */

$(document).ready(function() {
	var $rankInfo = $('#otherRankArea div.rankList div.info');

	$rankInfo.hover(
		function() {
			$(this).addClass('over');
		},
		function() {
			$(this).removeClass('over');
		}
	);

	$rankInfo.click(function() {
		var dataUrl = $(this).find('p.ttl a').attr('href');
		location.href = dataUrl;
	});
});


/* ------------------------------------------------------------
	common : form show status
------------------------------------------------------------ */
function showStatus(target, status) {
	var $target = $(target);
	var $status = $(target).find('.status');
	var $targetIcon = $target.find('span.statusIcon');
	var $statusIcon;
	if(status) {
		$statusIcon = $('<span class="statusIcon okIcon subCmnN">OK</span>');
	} else {
		$statusIcon = $('<span class="statusIcon ngIcon subCmnN">NG</span>');
	}

	if ($targetIcon.size() == 0) {
		$statusIcon
			.css({ 'display': 'none' })
			.prependTo($status)
			.fadeIn('fast');
	} else {
		if ($status.find('span.' + status + 'Icon').size() == 0) {
			$targetIcon.remove();
			$statusIcon
				.css({ 'display': 'none' })
				.prependTo($status)
				.fadeIn('fast');
		}
	}
}


/* ------------------------------------------------------------
	common : overlay -> panel open / close
------------------------------------------------------------ */
// var
var $overlay = $('<div id="overlay"></div>');
var $panel;
var panelW;
var panelH;

// openPanel
function openPanel(panelID) {
	$panel = $(panelID);
	panelW = $panel.width() + parseInt($panel.css('padding-top')) + parseInt($panel.css('padding-bottom'));
	panelH = $panel.height() + parseInt($panel.css('padding-left')) + parseInt($panel.css('padding-right'));

	var winW = $(window).width();
	var winH = $(window).height();
	var winST = $(window).scrollTop();

	// if(jQuery.browser.msie && jQuery.browser.version >= 6 && jQuery.browser.version < 7) {
	// 	$('select').hide();
	// }

	if (winW < panelW) {
		var left = 10;
	} else {
		var left = Math.floor((winW - panelW) / 2);
	}
	if (winH < panelH) {
		var top = Math.floor(winST + 10);
	} else {
		var top	= Math.floor(((winH - panelH) / 2) + winST);
	}
	overlay();

	// if(jQuery.browser.msie && jQuery.browser.version == '6.0') {
	// 	$panel.css({
	// 		border: 'solid 4px #cccccc'
	// 	});
	// }
	$panel.css({
		'top': top + 'px',
		'left': left + 'px'
	});

	if(jQuery.browser.msie) {
		$panel.fadeIn(400, function() { this.style.removeAttribute('filter'); });
	} else {
		$panel.fadeIn(400);
	}

	// close click
	$panel.find('.close').click(function() {
		closePanel($panel);
	});
}

// closePanel
function closePanel() {
	$panel.fadeOut(200);
	$overlay.fadeOut(400, function() {
		$overlay.remove();
		// if(jQuery.browser.msie && jQuery.browser.version == '6.0') {
		// 	$('select').show();
		// }
	})
	$(window).unbind('resize.overlay_resize');
};

// overlay
function overlay() {

	// pageSize
	$pageSize = function() {
		var xScroll, yScroll;
		if (window.innerHeight && window.scrollMaxY) {
			xScroll = window.innerWidth + window.scrollMaxX;
			yScroll = window.innerHeight + window.scrollMaxY;
		} else if (document.body.scrollHeight > document.body.offsetHeight) {
			xScroll = document.body.scrollWidth;
			yScroll = document.body.scrollHeight;
		} else {
			xScroll = document.body.offsetWidth;
			yScroll = document.body.offsetHeight;
		}

		var windowWidth, windowHeight;
		if (self.innerHeight) {
			if (document.documentElement.clientWidth) {
				windowWidth = document.documentElement.clientWidth;
			} else {
				windowWidth = self.innerWidth;
			}
			windowHeight = self.innerHeight;
			} else if (document.documentElement && document.documentElement.clientHeight) {
				windowWidth = document.documentElement.clientWidth;
				windowHeight = document.documentElement.clientHeight;
			} else if (document.body) {
				windowWidth = document.body.clientWidth;
				windowHeight = document.body.clientHeight;
			}
			var pageWidth = $('body').width();
			var pageHeight = $('body').height();
			return [pageWidth,pageHeight,windowWidth,windowHeight];
		};

		// show
		pageSize = $overlay.pageSize = $pageSize();
		$overlay.css({
			opacity: '0.8',
			display: 'none',
			position: 'absolute',
			top: '0',
			left: '0',
			width: pageSize[2],
			height: pageSize[1],
			zIndex: '2000'
		});
		if(jQuery.browser.msie && jQuery.browser.version == '6.0') {
			$overlay.show(0);
		} else {
			$overlay.css({
			background: '#fff'
		});
		$overlay.appendTo($('body'));
		$overlay.fadeIn(200);
	}

	// window resize
	$(window).unbind('resize.overlay_resize').bind('resize.overlay_resize', function(){
		pageSize = $overlay.pageSize = $pageSize();
		$overlay.css({
			width: pageSize[2],
			height: pageSize[1]
		});
		$panel.css({
			left: Math.floor((pageSize[2] - panelW) / 2)
		});
	});

	// cancel
	$overlay.click(function() {
		closePanel($panel);
	});
}


/* ------------------------------------------------------------
	common : setting panel open / close
------------------------------------------------------------ */

function openSettingPanel(target, panelID) {
 	$panel = $(panelID);
 	var $target = $(target);
 	var targetHeight = $target.height();
 	var targetWidth = $target.width();

	overlay();
 	$panel.css({
 		'top': $target.offset().top + (targetHeight + 10) + 'px',
 		'left': $target.offset().left + 'px'
 	}).show();

// 志望順位変更は、onchange でなく submit にしたので、以下をコメントアウトとする。
// openSettingPanelは、志望順位変更以外では使用していない。
//	$panel.find('select').change(function(){
//		closePanel($panel);
//	})
}
