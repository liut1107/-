/*$(function(){
    $('a[href*=#]:not([href=#]):not(.fancybox)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});
*/

$(function(){
    $('a[href*=#]:not([href=#]):not(.fancybox)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
				if($(window).width()<768){
					var of = $('#header').outerHeight();
				}else{
					var of = $('.fixArea').outerHeight();
				}
                var targetOffset = $target.offset().top-of;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});

$(function(){
  if(location.hash){
     var target = $(location.hash);
     if(target.length==1){
		if($(window).width()<768){
			var of = $('#header').outerHeight();
		}else{
			var of = $('.fixArea').outerHeight();
		}
         var top = target.offset().top-of;
         if(top > 0){
             $('html,body').animate({scrollTop:top}, 10);
         }
     }
  }
});
