/**************************************************
 *
 * Functions for New Age Creators
 * AUTHOR   David Leger
 *          www.davidleger.me
 *
 **************************************************/

(function(){
    'use strict';
    var x, y, trans;
    
    $(window).on('mousemove', function(e){
        x = (window.innerWidth/2 - e.pageX)/30;
        y = (window.innerHeight/2 - e.pageY)/30;
        trans = "translate("+x+"px,"+y+"px)";
        $('.star').css({
            "transform": trans
        });
    });
    
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - window.innerHeight/3
        }, 1000);
        return false;
      }
    }
  });
})();