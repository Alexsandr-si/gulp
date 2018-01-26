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
    $('.carousel-services').owlCarousel(
        {
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        rresponsiveClass:true,
        responsive:{
        0: {
            items: 1,
            nav: true
        },
             720: {
            items: 2,
            
        },
        1100: {
            items: 3,
        }
    }
    });
    $('.partners').owlCarousel({
        loop: true,
        smartSpeed: 700,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        rresponsiveClass: true,
        responsive: {
        0: {
            items: 1,
            nav: true
        },
             720: {
            items: 2,
            
        },
        1100: {
            items: 3,
        }}
    });
    
    $(window).scroll(function() {
        if($(this).scrollTop() > $(this).height()){
            $('.top_up').css('bottom', '20px')
        }
        else {
            $('.top_up').css('bottom', '-200px')
        }
    });
    $('.top_up').click(function() {
        $('html').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });
    
    $(".main_form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.sucsess').addClass('active').css('display', 'flex');
			setTimeout(function() {
                $(th).find('.sucsess').removeClass('active');
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});
$(window).on('load', function(){
    $('.preloader').delay('2000').fadeOut('slow');
});