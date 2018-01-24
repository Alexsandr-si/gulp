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
    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        rresponsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
             720:{
            items:2,
            
        },
        1100:{
            items:3,
        }
    }
    });
});