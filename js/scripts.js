$(document).ready(function(){

	// function is_touch_device() {
	// 	try {
	// 		document.createEvent("TouchEvent");
	// 		return true;
	// 	} catch (e) {
	// 		return false;
	// 	}
	// }

	// $('.wpcf7').attr('dir','rtl');

	// if(is_touch_device()){
	// 	$('body').addClass('touch');
	// } else{
	// 	$('body').addClass('no-touch');
	// }

	// $('.page-content').on('touchstart', function(){
	// 	$('.header').blur();
	// });

	// function equalSlideHeight(slider){
	// 	$(slider).on('setPosition', function () {
	// 		$(this).find('.slick-slide').height('auto');
	// 		var slickTrack = $(this).find('.slick-track');
	// 		var slickTrackHeight = $(slickTrack).height();
	// 		$(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
	// 	});
	// }

	// let arrowsButtons = {
	// 	prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 31"><path d="M19 2l2-2 15 14v3L21 31l-2-2 13-12H0v-3h32L19 2z"/></svg></button>',
	// 	nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 31"><path d="M17 2l-2-2L0 14v3l15 14 2-2L4 17h32v-3H4L17 2z"/></svg></button>'
	// }

	// $('.train-different-slider').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: true,
	// 	...arrowsButtons,
	// 	dots: true,
	// 	appendDots: $('.train-different-section .section-slider-nav'),
	// 	infinite: true,
	// 	rtl: true,
	// 	speed: 600,
	// 	autoplay: false,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				appendDots: $('.train-different-slider'),
	// 				prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M383 227L164 8c-5-5-12-8-19-8s-14 3-19 8l-16 16a27 27 0 000 38l183 184-184 184a27 27 0 000 38l16 16c6 5 12 8 19 8s14-3 20-8l219-219a27 27 0 000-38z"/></svg></button>',
	// 				nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M199 246L383 62a27 27 0 000-38L367 8c-6-5-12-8-19-8s-14 3-20 8L109 227a27 27 0 000 38l219 219a27 27 0 0038 0l16-16c11-10 11-28 0-38L199 246z"/></svg></button>',
	// 			}
	// 		}
	// 	]
	// });

	// equalSlideHeight('.train-different-slider');

	// $('.training-slider').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: false,
	// 	infinite: true,
	// 	rtl: true,
	// 	speed: 600,
	// 	autoplay: true,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				arrows: true,
	// 				prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M383 227L164 8c-5-5-12-8-19-8s-14 3-19 8l-16 16a27 27 0 000 38l183 184-184 184a27 27 0 000 38l16 16c6 5 12 8 19 8s14-3 20-8l219-219a27 27 0 000-38z"/></svg></button>',
	// 				nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M199 246L383 62a27 27 0 000-38L367 8c-6-5-12-8-19-8s-14 3-20 8L109 227a27 27 0 000 38l219 219a27 27 0 0038 0l16-16c11-10 11-28 0-38L199 246z"/></svg></button>',
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 576,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				arrows: true,
	// 				prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M383 227L164 8c-5-5-12-8-19-8s-14 3-19 8l-16 16a27 27 0 000 38l183 184-184 184a27 27 0 000 38l16 16c6 5 12 8 19 8s14-3 20-8l219-219a27 27 0 000-38z"/></svg></button>',
	// 				nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M199 246L383 62a27 27 0 000-38L367 8c-6-5-12-8-19-8s-14 3-20 8L109 227a27 27 0 000 38l219 219a27 27 0 0038 0l16-16c11-10 11-28 0-38L199 246z"/></svg></button>',
	// 			}
	// 		}
	// 	]
	// });

	// equalSlideHeight('.training-slider');

	// if ($(window).width() < 768) {
	// 	$('.gallery-section .section-images').slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		arrows: true,
	// 		prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M383 227L164 8c-5-5-12-8-19-8s-14 3-19 8l-16 16a27 27 0 000 38l183 184-184 184a27 27 0 000 38l16 16c6 5 12 8 19 8s14-3 20-8l219-219a27 27 0 000-38z"/></svg></button>',
	// 		nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492 492"><path d="M199 246L383 62a27 27 0 000-38L367 8c-6-5-12-8-19-8s-14 3-20 8L109 227a27 27 0 000 38l219 219a27 27 0 0038 0l16-16c11-10 11-28 0-38L199 246z"/></svg></button>',
	// 		dots: true,
	// 		infinite: true,
	// 		rtl: true,
	// 		speed: 600,
	// 		autoplay: true
	// 	});
	// }

	// To top btn
	let $toTopBtn = $('.to-top-btn');
	$(window).scroll(function(){
		window.scrollY > $(window).height() * 1
			? $toTopBtn.addClass('visible')
			: $toTopBtn.removeClass('visible');
	});

	// if ( $(window).width() >= 992) {
		$('#fullpage').fullpage({
			autoScrolling: true,
			scrollHorizontally: false,
			sectionSelector: '.fp-section-trigger',
			slideSelector: '.full-screen-slide',
			scrollBar: true,
			// fitToSection: false,
			// offset: 200,

			onLeave: function(origin, destination, direction){
				// $('.side-nav li').eq(destination.index).addClass('current-menu-item').siblings().removeClass('current-menu-item');
				// $(destination.item).find('video')[0].pause();

				// if ($(window).width() < 992) {
				// 	$.fn.fullpage.setAutoScrolling(false);
				// } else{
				// 	setTimeout(function(){
				// 		$.fn.fullpage.setAutoScrolling(true);
				// 	}, 300);
				// }
			},

			afterLoad: function(origin, destination, direction){
				let video = $(destination.item).find('video')[0];

				if ( !!$(video).data('src') ) {
					$(video).attr('src', $(video).data('src'));
					$(video).removeAttr('data-src');
				}

				video.play();

				$(destination.item).find('.section-bg').addClass('loaded');
			},

			afterRender: function(){
				// new WOW().init();
			}
		});

		$('#fullpage .next-section-link').click(function(e){
			e.preventDefault();
			e.stopPropagation();
			fullpage_api.moveSectionDown();
		});

		$('#fullpage .prev-section-link').click(function(e){
			e.preventDefault();
			e.stopPropagation();
			fullpage_api.moveSectionUp();
		});

		if ($('div').is("#fullpage")) {
			$('[data-section]').click(function(e){
				e.preventDefault();
				e.stopPropagation();

				let anchor = +$(this).data('section');

				if ($(this).data('mobile-section') && $(window).width() < 992) {
					anchor = +$(this).data('mobile-section');
				}

				$.fn.fullpage.moveTo( anchor );
			});
		}
});