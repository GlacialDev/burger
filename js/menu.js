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
		var wrap = $(e.target).next('.team__member-wrap');
		var info = $(e.target).next('.team__member-wrap').children('.team__member-info');

		$(e.target).parent().toggleClass('active');
		$(e.target).parent().siblings().removeClass('active');

		if ($(e.target).parent().hasClass('active')) {
			$('.team__member-wrap').css({ 'height' : 0 });
			wrap.css({ 'height' : info.height() });
		} else {
			$('.team__member-wrap').css({ 'height' : 0 });
		} 

	});

});