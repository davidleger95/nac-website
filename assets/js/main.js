/**************************************************
 *
 * Functions for [project name]
 * AUTHOR   David Leger
 *          www.davidleger.me
 *
 **************************************************/

(function(){
    'use strict';
    var x, y, trans;
    console.log("hey");
    
    $(window).on('mousemove', function(e){
        console.log("hey");
        x = (window.innerWidth/2 - e.pageX)/30;
        y = (window.innerHeight/2 - e.pageY)/30;
        trans = "translate("+x+"px,"+y+"px)";
        $('.star').css({
            "transform": trans
        });
    });
})();