document.addEventListener('DOMContentLoaded', function() {
var imageSlider = new Swiper('.image-slider', {
loop: false,
pagination: {
	el: ".swiper-pagination",
	type: "fraction",
},
spaceBetween: 0,
lidesPerView: 1,
breakpoints: {
				// when window is <= 380px
				375: {
						slidesPerView: 1,
						spaceBetween: 0
				},
				// when window is <= 516px
				516: {
						slidesPerView: 1,
						spaceBetween: 0
				},
				// when window is <= 768px
				768: {
						slidesPerView: 1,
						spaceBetween: 0
				},
				// when window is <= 992px
				992: {
						slidesPerView: 1,
						spaceBetween: 0
				},
				// when window is <= 1200px
				1200: {
						slidesPerView: 1,
						spaceBetween: 0
				},
		}
});
var imageSlider = new Swiper('.image-slider-main', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
},
loop: true,
navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
},
spaceBetween: 0,
lidesPerView: 3,
breakpoints: {
	360: {
			slidesPerView: 1,
			spaceBetween: 0
	},
	700: {
		slidesPerView: 2.0,
		spaceBetween: 10
  },
	800: {
		slidesPerView: 2.3,
		spaceBetween: 10
  },
	900: {
		slidesPerView: 2.5,
		spaceBetween: 10
  },
	1000: {
		slidesPerView: 2.8,
		spaceBetween: 10
  },
	1200: {
		slidesPerView: 3,
		spaceBetween: 10
  },
 }
});

$('.arrow').click(function() {
	$('li .arrow').removeClass('subactive');
	$(this).addClass('subactive');
});

$('.menu__icon').click(function() {
	$('.menu').addClass('active');
	$('.light__block').fadeIn();
	$(this).fadeOut();
});
$('.light__block').click(function() {
	$('.menu').removeClass('active');
	$('.menu__icon').fadeIn();
	$(this).fadeOut();
});





});