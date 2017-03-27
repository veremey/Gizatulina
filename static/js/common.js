$(document).ready(function() {

	if($(window).width() <= 750){
		$('.picking__item .adviser__footer').parent('.picking__item').css({
				'paddingBottom': '0'
		});
	}

	$('.ui-datepicker-calendar tr').on('click', function () {
		$(this).addClass('highlight');
	});

	$('.adviser__icon, .btn__style').hover(function () {
			$(this).parents('.adviser__item').addClass('is_hover');
		}, function () {
			$(this).parents('.adviser__item').removeClass('is_hover');
	});

	$('.modal-bg').on('click', function () {
		$('#myModal').hide();
		$('.js-spec').hide();
		$('.js-senks').hide();
	});

	$('.js-close').on('click', function () {
		var itm = $(this).data('dismiss');
		$('#myModal, .js-spec, .js-senks').hide();

		$('.'+itm).hide();
	});

	$('.js-open-senks').on('click', function () {
		$(this).parents('.modal-dialog').hide().next('.js-senks').show();
	});

	$('.js-module').on('click', function () {
		var itm = $(this).data('style');

		$('#myModal').show();
		$('#'+ itm).css({'display':'block'});
		$('#'+ itm).children().css({'display':''});
	});


});