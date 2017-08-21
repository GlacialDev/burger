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

	//подключение карты
	ymaps.ready(init);
	var myMap;
	function init(){     
		myMap = new ymaps.Map("map", {
			center: [59.942037, 30.326865],
			zoom: 12,
			controls: []
		});
	myMap.behaviors.disable('scrollZoom');

	var coords = [
		[59.972641, 30.311758], [59.946128, 30.386945], 
		[59.893901, 30.317251], [59.916146, 30.493895]
	],

	myCollection = new ymaps.GeoObjectCollection({}, {
		draggable: false,
		iconLayout: 'default#image',  //все метки - картинки
		iconImageHref: 'img/section__contacts/map-marker.png',
		iconImageSize: [46, 57],
		iconImageOffset: [-26, -52]
	});

	for (var i = 0; i < coords.length; i++) {
		myCollection.add(new ymaps.Placemark(coords[i]));
	}
	myMap.geoObjects.add(myCollection);
	}

});