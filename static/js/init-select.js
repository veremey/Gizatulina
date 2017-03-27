// check select

function select() {
	$(".js-select").each(function(){
		var select_list = $(this).children(".js-select-list");
		var content = select_list.find("li").first().html();
		//$(this).find(".js-select-text").html(content);//.text(text);//content
		$(this).click(function(event){
				var $self = $(this);

			if ($(this).hasClass("is-active")) {

					setTimeout(function () {
						$self.removeClass('is-active');
					}, 400);

					select_list.slideUp("fast");
			}
			else {
					$(".js-select").removeClass("is-active");
					$(".js-select-list").hide();
					select_list.slideDown("fast");
					$(this).addClass("is-active");
			}
			event.stopPropagation();
		});
		select_list.find("li").click(function(event) {
			var id = $(this).attr("data-id");
			var content = $(this).html();
			$(this).parent().parent().find(".js-select-text").html(content);
			$(this).parent().parent().find(".js-select-input").val(id);
			$(this).parent().hide();
			$(this).parents(".js-select").removeClass("is-active");
			event.stopPropagation();
		});
	});
}

$(document).ready(function() {
	select();

	$('.js-select').click(function(event){
		event.stopPropagation();
	});
});