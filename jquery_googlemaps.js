(function($){
	console.log("Hello, I am jquery_googlemaps.js. I am working now in your site.");
	$.fn.addMap=function(){
		    var container=this;
		    $(container).appendTo("#global_elem").slideToggle('slow');
			console.log($(container).children());
			$(container).find("div").find("section").css("display","inline-block");
			$(container).find("div").find("section").on("click",function(event){
					var newMap=$(this).clone();
					$(newMap).find("img").remove();
					$(newMap).width("80%").height("70%");
					$(newMap).css({"background-color":"gray","text-align":"center"});
					$(newMap).find("iframe").width("99%").height("99%");
					var positionX="10%";
					var positionY=event.pageY+500;
					$(newMap).css({"position":"absolute",
								   "left":positionX,
								   "right":positionY}).appendTo("#global_elem").draggable();
					return $(container).slideToggle();
					//SHOULD BE CONTINUED
			});
	}
})(jQuery)