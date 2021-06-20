/* global $ MobileDetect */


$(function(){
    $('.Toggle').click(function() {
    $(this).toggleClass('active');
    $('.nav-links').toggleClass('open');
    });
});
