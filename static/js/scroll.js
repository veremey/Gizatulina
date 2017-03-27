var Scroll = new ScrollClass();

function ScrollClass() {
	var globalScope = this;

	/*--- init scroll ---*/
	/*---------------------------------------------------------------------*/
	this.initScroll = function(opt) {
		var $conteiner = $(opt.conteiner);

		(function($){
			$(window).on("load",function(){
				$conteiner.mCustomScrollbar({
				});
			});
		})(jQuery);

	};
}