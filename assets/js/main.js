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
})();