$(document).ready(function() {

	$('#modal').submit(function(e) {
		e.preventDefault();
		$.fancybox('#thanks_pop');
		return false;
	});

	$('header .main_content .form_right form').submit(function(e) {

		e.preventDefault();
		
		$('.shadow').fadeIn();
		$('header .main_content .form_right form .thanks').fadeIn();

		setTimeout(function() {
			$('.shadow').fadeOut();
			$('header .main_content .form_right form .thanks').fadeOut();	
		},3000);

		return false;
	});


	$('.delivery .form_wrap .form form').submit(function(e) {

		e.preventDefault();
		
		$('.shadow2').fadeIn();
		$('.delivery .form_wrap .form .thanks').fadeIn();

		setTimeout(function() {
			$('.shadow2').fadeOut();
			$('.delivery .form_wrap .form .thanks').fadeOut();	
		},3000);

		return false;
	});


	$('.shadow').click(function() {
		$(this).fadeOut();
		$('.thanks').fadeOut();
	});

	$('.shadow2').click(function() {
		$(this).fadeOut();
		$('.thanks').fadeOut();
	});


	$('select').selectmenu();


	$('header .main_content .form_right form .column .item.select').click(function() {
		var element  =  $(this).find('select');
/*		openSelect('element');*/ 
		element.triggerHandler( "click" );
	});

	$('header a.scroll').click(function(e) {
		e.preventDefault();
		var offset = $(this).parent('header').offset().top+ $(this).parent('header').height()+120;
		$('body,html').animate({ scrollTop: offset },1000);
	});

	$('header nav ul li a').click(function(e) {
		e.preventDefault();
		var ref = $(this).attr('href');
		destination = $(ref).offset().top;
		if ( $(ref).attr('data-offset') ) {
			$('body,html').animate( { scrollTop: destination + parseInt($(ref).attr('data-offset')) }, 1100 );
		}
		else {
			$('body,html').animate( { scrollTop: destination }, 1100 );
		}
		
		return false;
	});


	$('.mobmenu ul li a').click(function(e) {
		e.preventDefault();
		$('.mobmenu').removeClass('active');
		$('a.menumob').removeClass('active');
		var ref = $(this).attr('href');
		destination = $(ref).offset().top;
		if ( $(ref).attr('data-offset') ) {
			if (window.matchMedia("(min-width: 700px)").matches) {
				$('body,html').animate( { scrollTop: destination + parseInt($(ref).attr('data-offset')) }, 1100 );
			}
			else {
				$('body,html').animate( { scrollTop: destination }, 1100 );
			}
		}
		else {
			$('body,html').animate( { scrollTop: destination }, 1100 );
		}
		
		return false;
	});





	$('a.menumob').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.mobmenu').toggleClass('active');
	});


	var element = $('.form_right form .price .right .before');
	var parrent  = element.closest('.price');
	var need_width = parrent.width()  - parrent.find('.right').width() - parrent.find('span ').width() -6;
	element.css('width',need_width);


	$('.form_right form .check_block label').click(function() {
		$('.form_right form .check_block label').removeClass('active');
		$(this).addClass('active');

		if ( $('.check_block label:nth-child(2)').hasClass('active') ) {
			$('.dis').addClass('hid');
		}
		else {
			$('.dis').removeClass('hid');
		}
	});

	$('.comments .content').owlCarousel({
		nav : true, 
		slideSpeed : 300,
		paginationSpeed : 400,		
		items: 1,
		navText: ""
	});

	$('.sertificate .slider').owlCarousel({
		nav : true, 
		slideSpeed : 300,
		paginationSpeed : 400,		
		navText: "",
		mouseDrag: false,
		responsive: {
			0: {
				items : 1
			},
			400: {
				items : 2
			},
			760: {
				items : 3
			}

		},
		onInitialize : function() {

			$('.sertificate .right .prev-btn').click(function() {
				$('.sertificate .slider').trigger('prev.owl.carousel');
			});

			$('.sertificate .right .next-btn').click(function() {
				$('.sertificate .slider').trigger('next.owl.carousel');
			});

		}
	});


	owl = $('.delivery .slider_wrap');
	owl.owlCarousel({
		nav : true, 
		slideSpeed : 300,
		paginationSpeed : 400,		
		items: 1,
		slideSpeed : 500,
		navSpeed: 500,
		dotsSpeed: 500,
		paginationSpeed : 500,
		smartSpeed: 500,
		navText: "",
		onInitialize : function() {

			$('.delivery .right_nav ul li').click(function(e) {
				e.preventDefault();
				$('.delivery .right_nav ul li').removeClass('active');
				$(this).addClass('active');
				var index_li = $(this).index();
				owl.trigger('to.owl.carousel', index_li);
			});

		}
	});


	owl.on('changed.owl.carousel', function(event) {
		setTimeout(function() {

			var current_slide = $('.delivery .owl-item.active').index()+1;
    	//	console.log(current_slide);
    	$('.delivery .right_nav ul li').removeClass('active');
    	$('.delivery .right_nav ul li:nth-child('+current_slide+')').addClass('active');

    	/*	if (current_slide==4) {
    			$('.main_top .slider_nav ul li:nth-child('+current_slide+')').find('a').trigger('click');

    			setTimeout(function() {

    			if ($('.main_top .slider_nav ul li.active').index()==3) {
    				$('.main_top .slider_nav ul li:nth-child(1)').find('a').trigger('click');
    			}

    
    			
    			},  $('.time_slide').val());    			
    		}
    		else {    			
    			$('.main_top .slider_nav ul li:nth-child('+current_slide+')').find('a').trigger('click');
    		}*/

    	},1);


	});


	$('.fancybox').fancybox({
		padding: 0
	});

});

function init() {


	if (window.matchMedia("(min-width: 980px)").matches) {
		var myMap = new ymaps.Map('map', {
			center: [55.317151022621436,38.698473499999984], 
			zoom: 16
		});

		var myPlacemark = new ymaps.Placemark(
			[55.314177022621436,38.692473499999984] , {
				hintContent: 'Фасованый цемент '
			}, {
				iconImageHref: 'img/icon.png', 
				iconImageSize: [51, 64], 
				iconImageOffset: [-6, -10] 
			}); 
	} 
	else {
		var myMap = new ymaps.Map('map', {
			center: [55.314177022621436,38.692473499999984], 
			zoom: 16
		});

		var myPlacemark = new ymaps.Placemark(
			[55.314177022621436,38.692473499999984] , {
				hintContent: 'Фасованый цемент '
			}, {
				iconImageHref: 'img/icon.png', 
				iconImageSize: [51, 64], 
				iconImageOffset: [-6, -10] 
			}); 
	}




	

	myMap.behaviors.disable('drag');
	myMap.geoObjects.add(myPlacemark);



}

$(window).load(function() {

	ymaps.ready(init);

});