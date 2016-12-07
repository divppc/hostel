$(document).ready(function () {

	$( ".departure" ).dateDropper({
		lang: 'ru',
		animate: false,
		dropPrimaryColor: '#e9366c',
		minYear: '2016',
		format: 'd/m/Y'
	});

	$("nav>a").on("click", function(e) {
		e.preventDefault();
		$(".popup").slideDown();
	});
	$(".close-btn").on("click", function() {
		$(".popup").slideUp();
	});

	$(".mobile-menu").on("click", function() {
		$("nav").slideDown();
	});

	$("nav>.close-nav").on("click", function() {
		$("nav").slideUp();
	});

	$(".fancybox").fancybox({
		 helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(0, 0, 0, 0.7)'
	            }
	        }
	    }
	});
	
	var response = $(".response-slider");
    response.owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        margin: 0,
        items: 1,
        dots: true,
        autoplaySpeed: 800
    });

    var roomsSlider = $(".slider-wrap");
    roomsSlider.owlCarousel({
        loop: true,
        nav: false,
        margin: 0,
        items: 3,
        responsive: {
        	0: {
        		items: 1,
        		dots: true
        	},
        	600: {
        		items: 3,
        		dots: true
        	},
        	1024: {
        		dots: false
        	}
        }
    });

    $(".rooms-slider .slider-nav .left-arrow").click(function() {
    	var x = $(this).parent().siblings('.slider-wrap')
        x.trigger('prev.owl.carousel');
    });
    $(".rooms-slider .slider-nav .right-arrow").click(function() {
    	var x = $(this).parent().siblings('.slider-wrap')
        x.trigger('next.owl.carousel');
    });

});