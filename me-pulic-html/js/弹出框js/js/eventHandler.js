
var Unicode = Unicode || {};
Unicode.Japanese = Unicode.Japanese || {};

(function(){
	this.hankaku = new Array(
"ｶﾞ", "ｷﾞ", "ｸﾞ", "ｹﾞ", "ｺﾞ", "ｻﾞ", "ｼﾞ", "ｽﾞ", "ｾﾞ", "ｿﾞ",
"ﾀﾞ", "ﾁﾞ", "ﾂﾞ", "ﾃﾞ", "ﾄﾞ",
"ﾊﾞ", "ﾊﾟ", "ﾋﾞ", "ﾋﾟ", "ﾌﾞ", "ﾌﾟ", "ﾍﾞ", "ﾍﾟ", "ﾎﾞ", "ﾎﾟ", "ｳﾞ",
"ｧ", "ｱ", "ｨ", "ｲ", "ｩ", "ｳ", "ｪ", "ｴ", "ｫ", "ｵ",
"ｶ", "ｷ", "ｸ", "ｹ", "ｺ", "ｻ", "ｼ", "ｽ", "ｾ", "ｿ",
"ﾀ", "ﾁ", "ｯ", "ﾂ", "ﾃ", "ﾄ", "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ",
"ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ", "ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ",
"ｬ", "ﾔ", "ｭ", "ﾕ", "ｮ", "ﾖ", "ﾗ", "ﾘ", "ﾙ", "ﾚ", "ﾛ",
"ﾜ", "ｦ", "ﾝ", "｡", "｢", "｣", "､", "･", "ｰ", "ﾞ", "ﾟ");

	this.zenkaku  = new Array(
"ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ",
"ダ", "ヂ", "ヅ", "デ", "ド",
"バ", "パ", "ビ", "ピ", "ブ", "プ", "ベ", "ペ", "ボ", "ポ", "ヴ",
"ァ", "ア", "ィ", "イ", "ゥ", "ウ", "ェ", "エ", "ォ", "オ",
"カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ",
"タ", "チ", "ッ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ",
"ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ",
"ャ", "ヤ", "ュ", "ユ", "ョ", "ヨ", "ラ", "リ", "ル", "レ", "ロ",
"ワ", "ヲ", "ン", "。", "「", "」", "、", "・", "ー", "゛", "゜");

	this.h2z = function(str){
		var ret = str;
		for(var i in this.hankaku){
			while (ret.indexOf(this.hankaku[i]) >= 0){
				ret = ret.replace(this.hankaku[i], this.zenkaku[i]);
			}
		}
		return ret;
    };

}).apply(Unicode.Japanese);

(function(){
  function validateForm(){
    $(".validateForm .validateField").each(function(){
      var elm = $(this);
      var initv = elm.attr('defaultValue');
      if(initv==elm.val()){
        elm.css('color','#a8a8a8');
      }
      elm.focus(function(){
        var val = elm.val();
        if(val==initv){$(this).attr('value','');}
        $(this).css('color','#000');
      });
      elm.blur(function(){
        var val = elm.val();
        if(val==''){
          $(this).attr('value',initv);
          $(this).css("color",'#a8a8a8');
        }
      });
      elm.parents(".validateForm").submit(function(){
        var v = elm.val();
        if(v == '' || v == initv){
          alert('検索ワードを指定してください');
          return false;
        }
        elm.val(Unicode.Japanese.h2z(v));
        return true;
      });
    });
  }
  function tinyValidateForm(){
    $(".tinyValidateForm .tinyValidateField").each(function(){
      var elm = $(this);
      elm.parents(".tinyValidateForm").submit(function(){
        var v = elm.val();
        if(v == ''){
          alert('検索ワードを指定してください');
          return false;
        }
        elm.val(Unicode.Japanese.h2z(v));
        return true;
      });
    });
  }
  function topNyushiValidateForm(){

	var initv;
    $(".topNyushiValidateForm .validateField").each(function(){
      var elm = $(this);
      initv = elm.attr('defaultValue');
      if(initv==elm.val()){
        elm.css('color','#a8a8a8');
      }
      elm.focus(function(){
        var val = elm.val();
        if(val==initv){$(this).attr('value','');}
        $(this).css('color','#000');
      });
      elm.blur(function(){
        var val = elm.val();
        if(val==''){
          $(this).attr('value',initv);
          $(this).css("color",'#a8a8a8');
        }
      });
    });

	$(".topNyushiValidateForm").submit(function(){
		var checkKoshucategoryL = $(".nyushiRadioValidateField:checked").val();
		if (typeof checkKoshucategoryL === 'undefined') {
			alert('校種を選択してください');
			return false;
		}
		var v = $(".topNyushiValidateForm .validateField").val();
		if(v == '' || v == initv){
			alert('検索ワードを指定してください');
			return false;
		}
		$(".topNyushiValidateForm .validateField").val(Unicode.Japanese.h2z(v));

		var addkoshuHref = $("#nyushiKensaku").attr("action") + '/' + checkKoshucategoryL;
		$("#nyushiKensaku").attr("action",addkoshuHref);
		return true;
    });
  }
  function campusPhotoValidateForm(){
    $(".cpvalidateForm .cpvalidateField").each(function(){
      var elm = $(this);
      var initv = elm.attr('defaultValue');
      var currentRadio = elm.parents(".cpvalidateForm").find(".cpvalidateRadio:checked").val();
      if(initv==elm.val()){
        elm.css('color','#a8a8a8');
      }
      elm.focus(function(){
        var val = elm.val();
        if(val==initv){$(this).attr('value','');}
        $(this).css('color','#000');
      });
      elm.blur(function(){
        var val = elm.val();
        if(val==''){
          $(this).attr('value',initv);
          $(this).css("color",'#a8a8a8');
        }
      });
      elm.parents(".cpvalidateForm").submit(function(){
        var v = elm.val();
        if(v == '' || v == initv){
          alert('検索ワードを指定してください');
          return false;
        }
        elm.val(Unicode.Japanese.h2z(v));
        return true;
      });
      elm.parents(".cpvalidateForm").find(".cpvalidateRadio").click(function(){
        if (currentRadio != $(this).val()) {
          if ($(this).val() == 1) {
            initv = "気になるコトバを入れてみよう！";
          } else if ($(this).val() == 2) {
            initv = "校名の一部でもOK";
          }
          elm.attr('value',initv);
          elm.css('color','#a8a8a8');
        }
        currentRadio = $(this).val();
      });
    });
  }
  function campusLifeValidateForm(){
    $(".clvalidateForm .clvalidateField").each(function(){
      var elm = $(this);
      var initv = elm.attr('defaultValue');
      var currentRadio = elm.parents(".clvalidateForm").find(".clvalidateRadio:checked").val();
      if(initv==elm.val()){
        elm.css('color','#a8a8a8');
      }
      elm.focus(function(){
        var val = elm.val();
        if(val==initv){$(this).attr('value','');}
        $(this).css('color','#000');
      });
      elm.blur(function(){
        var val = elm.val();
        if(val==''){
          $(this).attr('value',initv);
          $(this).css("color",'#a8a8a8');
        }
      });
      elm.parents(".clvalidateForm").submit(function(){
        var v = elm.val();
        if(v == '' || v == initv){
          alert('検索ワードを指定してください');
          return false;
        }
        elm.val(Unicode.Japanese.h2z(v));
        return true;
      });
      elm.parents(".clvalidateForm").find(".clvalidateRadio").click(function(){
        if (currentRadio != $(this).val()) {
          if ($(this).val() == 1) {
            initv = "気になるコトバを入れてみよう！";
          } else if ($(this).val() == 2) {
            initv = "校名の一部でもOK";
          } else if ($(this).val() == 3) {
            initv = "校名の一部でもOK";
          }
          elm.attr('value',initv);
          elm.css('color','#a8a8a8');
        }
        currentRadio = $(this).val();
      });
    });
  }
  function clickableMap(){
    $(".clickableMap").each(function(){
      var cm = $(this);
      var imgSrc = cm.attr('src');
      var imgSrcPath = "";
      var lastSeparator = imgSrc.lastIndexOf('/');
      if(lastSeparator >= 0){
        imgSrcPath = imgSrc.substring(0, lastSeparator + 1 );
      }
      var usemap = cm.attr('usemap');
      $(usemap).children('area').each(function(){
        var hoverImg = imgSrcPath + $(this).attr('id') + ".gif";
        $(this).mouseover(function(){ cm.attr('src', hoverImg); });
        $(this).mouseout(function(){ cm.attr('src', imgSrc); });
      });
    });
  }

  $(document).ready(function(){
    validateForm();
    tinyValidateForm();
    topNyushiValidateForm();
    campusPhotoValidateForm();
    campusLifeValidateForm();
    clickableMap();
  });
})();

var EventHandler = function(){};
EventHandler.bind = function(base){
  if (!base) {
    base = document;
  }
  $(base).find(".hoverGifImg").hover(
       function(){
          var str = $(this).attr('src').match(/_r\.(gif|jpg)$/);
          if (!str) {
             src = $(this).attr('src').replace(/\.(gif|jpg)$/,"_r.$1"); $(this).attr('src',src)
          }
       },
       function(){src = $(this).attr('src').replace(/_r\.(gif|jpg)$/,".$1"); $(this).attr('src',src)}
  );
  $(base).find(".hoverChildGifImg").hover(
    function(){
      $(this).children('img').each(function(){
        src = $(this).attr('src').replace(/\.(gif|jpg)$/,"_r.$1");
        $(this).attr('src', src)
      });
    },
    function(){
      $(this).children('img').each(function(){
        src = $(this).attr('src').replace(/_r\.(gif|jpg)$/,".$1");
        $(this).attr('src', src)
      });
    }
  );
  $(base).find(".clickWindowOpen").click(
    function(){href = $(this).attr('href'); var w = window.open(href,"wname",""); return false; }
  );
  $(base).find(".cartOpen").click(
    function(){
      href = $(this).attr('href');
      document.cookie="SHINGAKU_COOKIE=OK; path=/; ";
      var w = window.open(href,"scl_gakkou_cart","scrollbars=yes,resizable=yes,width=550,height=700");
      w.focus();
      return false; }
  );
  $(base).find(".clickTsukaikata").click(
    function(){
      href = $(this).attr('href');
      var w = window.open(href,"wname","menubar=yes,scrollbars=yes,resizable=yes,width=600,height=500");
      return false; }
  );

  $(base).find(".clickTohyoOpen").click(
    function(){
      var href = $(this).attr('href');
      if (href.match(/\/vote\/senpaishigoto\/result\//)!=null){
        if (href.substring(href.indexOf('?')+1)=='vote=1'){
          window.open(href,"Newwindow","toolbar=yes,status=yes, menubar=yes,scrollbars=yes,resizable=yes,width=550,height=387");
        }else{
          window.open(href,"Newwindow","toolbar=yes,status=yes, menubar=yes,scrollbars=yes,resizable=yes,width=550,height=331");
        }
      }else if (href.match(/\/vote\/kokishin\/result\//)!=null){
        if (href.substring(href.indexOf('?')+1)=='vote=1'){
          window.open(href,"Newwindow","toolbar=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=550,height=675");
        }else{
          window.open(href,"Newwindow","toolbar=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=550,height=575");
        }
      }
   		return false;
		}
  );

  $(base).find(".clickChartOpen").click(
    function(){
      var href = $(this).attr('href');
      window.open(href,"window_name", "width=370,height=500,toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no");
   		return false;
		}
  );

  $(base).find(".shikakuMikataOpen").click(
    function(){
 	window.open("/rnet/article/shikaku/mikata.html","win1","toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=580,height=530");
 	return false;
	}
  );

  $(base).find(".clickTelemailOpen").click(
    function(){
      href = $(this).attr('href');
      var w = window.open(href,"WinTele","width=650,height=650,scrollbars=yes,resizable=yes,location = yes,menubar = yes,status = yes,toolbar = yes");
      return false; }
  );

  $(base).find(".todaysTestOpen").click(
    function(){
 	window.open("/rnet/help/techo_help_exam.html","win1","toolbar=yes,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=580,height=700");
 	return false;
	}
  );

  $(base).find(".historyBack").click(
    function(){history.back(); return false; }
  );
  $(base).find(".windowClose").click(
    function() {window.close(); return false; }
  );
  $(base).find(".changeWindowLocation").change(function(){
    var _selectedOption = $(this).children("option:selected");
    var url = _selectedOption.val();
    if(url){location.href=url;}
  });
};

EventHandler.unbind = function(base){
    if (!base) {
        base = document;
    }
    $(base).find(".hoverGifImg").unbind();
    $(base).find(".hoverChildGifImg").unbind();
    $(base).find(".clickWindowOpen").unbind('click');
    $(base).find(".cartOpen").unbind('click');
    $(base).find(".clickTsukaikata").unbind('click');
    $(base).find(".clickTohyoOpen").unbind('click');
    $(base).find(".shikakuMikataOpen").unbind('click');
    $(base).find(".historyBack").unbind('click');
    $(base).find(".windowClose").unbind('click');
    $(base).find(".changeWindowLocation").unbind('change');
}

$(document).ready( function() { EventHandler.bind(); } );
