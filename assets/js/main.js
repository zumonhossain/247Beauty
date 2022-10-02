(function ($) {
"use strict";

// offer-active

$('.offer-banner-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			480:{
					items:1
			},
			767:{
					items:1
			},
			992:{
					items:1
			},
			1200:{
					items:1
			}
	}
})

// offer-banner-active
$('.right-offer-active').owlCarousel({
	loop:true,
	margin:30,
	navText:false,
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			480:{
					items:1
			},
			767:{
					items:1
			},
			992:{
					items:1
			},
			1200:{
					items:1
			}
	}
})

// featured-brand-active
$('.featured-brand-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			480:{
					items:1
			},
			767:{
					items:3
			},
			992:{
					items:4
			},
			1200:{
					items:4
			}
	}
})

// Featured Product-active
$('.featured-product-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			480:{
					items:1
			},
			767:{
					items:3
			},
			992:{
					items:4
			},
			1200:{
					items:4
			}
	}
})

// Featured Product-active
$('.sponsor-active').owlCarousel({
	loop:true,
	margin:30,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	dots:false,
	responsive:{
			0:{
					items:1
			},
			480:{
					items:1
			},
			767:{
					items:3
			},
			992:{
					items:4
			},
			1200:{
					items:6
			}
	}
})

// Details-active
$('.details-active').owlCarousel({
	loop:true,
	margin:30,
	items:1,
	navText:false,
	nav:true,
	dots:true,
	autoplay:false,
	dotsData:true,
})


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

//off-canvas-menu

$(".menu-trigger").on("click", function() {
	$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
	return false;
});
$(".menu-close, .off-canvas-overlay").on("click", function() {
	$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
});



})(jQuery);