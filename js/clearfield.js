/**
 * @author Jeff Sittler
 * @version 2.0
 */
(
	function($){
		$.fn.clearField=function(options){
			var settings=$.extend({
				noStyle:false,
				focusClass:null
			},options||{});
			return this.filter('input:text, textarea').each(function(){
				if(!this.clearField){
					$(this).focus(
						function(){
							if($(this).val()==this.defaultValue){
								$(this).val("");
							}
							if(settings.focusClass){
								$(this).addClass(settings.focusClass);
							}
						}).blur(function(){
							if($(this).val()===""){
								$(this).val(this.defaultValue);
							}
							if(settings.focusClass){
								$(this).removeClass(settings.focusClass);
							}
						});
					this.clearField=true;
				}
			}
		);
	};
})(jQuery);