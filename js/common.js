document.addEventListener('DOMContentLoaded', function() {
var imageSlider = new Swiper('.image-slider', {
loop: false,
pagination: {
	el: ".swiper-pagination",
	type: "fraction",
},
		spaceBetween: 0,
		slidesPerView: 1,
breakpoints: {
				// when window is <= 380px
				380: {
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
spaceBetween: 10,
slidesPerView: 3,
});

$('.menu__icon').click(function() {
	$('.menu').addClass('active');
	$('.light__block').fadeIn();
	$(this).fadeOut();
});


});