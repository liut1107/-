$(function(){
    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top-$('#gHeader').outerHeight();
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});





/*$(function(){
   $('a[href^="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top-$('#header').outerHeight();
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});



高版本的用这个*/