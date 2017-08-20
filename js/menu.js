$(document).ready(function() {
	var menuOn = $('.header__hamburger-link'),
		menuOff = $('.header__close-link'),
		menu = $('.section--hamburger-menu');

	//гамбургер-меню для мобильных устройств в секции section__first-screen
	$(menuOff).on('click', function(e){
		e.preventDefault();
		$(menu).toggleClass('active');
	});

	$(menuOn).on('click', function(e){
		e.preventDefault();
		$(menu).addClass('active');
	});

	//вертикальный аккордеон в секции section__team
	$('.team__member').on('click', function(e){
		e.preventDefault();
		var wrap = $(e.target).next('.team__member-wrap'),
			info = wrap.children('.team__member-info'),
			item = $(e.target).parent('.team__item');

		item.toggleClass('active');
		item.siblings().removeClass('active');

		if (item.hasClass('active')) {
			$('.team__member-wrap').css({ 'height' : 0 });
			wrap.css({ 'height' : info.height() });
		} else {
			$('.team__member-wrap').css({ 'height' : 0 });
		} 
	});

	//горизонтальный аккордеон в секции section__menu
	$('.menu__name').on('click', function(e){
		e.preventDefault();
		var item = $(e.target).parent().parent();
		
		item.toggleClass('active');
		item.siblings().removeClass('active');
	});
});