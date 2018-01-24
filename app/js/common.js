$(document).ready(function() {
     $('#my-menu').mmenu({
         "extensions": [ "position-back", "position-right", "effect-menu-slide"],
          navbar: { title: '<img src="img/logo.png" alt="РосАтомАудит">'}
    });
    var API = $("#my-menu").data( "mmenu" );
    API.bind("open:finish",function(){
        $('.hamburger').addClass('is-active');
    }).bind("close:finish",function(){
        $('.hamburger').removeClass('is-active');
    }); 
});