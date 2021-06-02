(function($){
	console.log("Hello, I am jquery_foranimationwidgets.js. I am working new in your site.")
	$.fn.params2={
		elemWidth: "auto",
		elemHeight: "auto",
		containerWidth: "auto",
		containerHeight: "auto",
		elemBGColor: "auto",
		elemText1: "Hello",
		elemText2: "Motherland",
		textColor: "white",
		fontSize: "x-large"
	} 

	$.fn.params1={
		elemWidth: 100,
		elemHeight: 100,
		containerWidth: 400,
		containerHeight: 100,
		elemBGColor: "black",
		elemText1: "Hello",
		elemText2: "Motherland",
		textColor: "white",
		fontSize: "x-large"
	}


	$.addAnimationWidget=function(container){
		var animationWidgetIds=[];
		$(container).find("input").click(function(event){
			var animationWidgetId=prompt("Please identificator for animation Widget:")
			var allowKey=1;
		  while(true){
			for(var i=0;i<animationWidgetIds.length;i++){
				if(animationWidgetIds[i]==animationWidgetId){
					allowKey=0;
					break;
				}
			}


			if(allowKey==0){
				allowKey=1;
				animationWidgetId=prompt("You have entered such identificator before. Please try another:");
			}else{
				animationWidgetIds.push(animationWidgetId);
				break;
			}
		  }



			var newId="animation_widget_"+animationWidgetId;
			var params={};
			var newParamsPanel=$("#animation_widgets_params_div").clone();
			$(newParamsPanel).css("color","black").appendTo("#global_elem").fadeIn();
			var innerElem=this;
			$(newParamsPanel).find(".accomplish_button").on("click",function(){
					params.elemWidth=$(newParamsPanel).find(".elemWidth").val();
					params.elemHeight=$(newParamsPanel).find(".elemHeight").val();
					params.containerWidth=$(newParamsPanel).find(".containerWidth").val();
					params.containerHeight=$(newParamsPanel).find(".containerHeight").val(); 
					params.elemText1=$(newParamsPanel).find(".elemText1").val();
					params.elemText2=$(newParamsPanel).find(".elemText2").val();
					params.textColor=$(newParamsPanel).find(".textColor").val();
					params.fontSize=$(newParamsPanel).find(".fontSize").val();
					params.elemBGColor=$(newParamsPanel).find(".elemBGColor").val();
					$(newParamsPanel).remove();

					
					var positionX=200;
					var positionY=event.pageY;

					var container=$(innerElem).parent("div").clone();
					if($(container).hasClass("animation_collection_widgets_div")){
						params=$.extend({},$.fn.params1,params);
						$(container).attr("id","").addClass("animation_collection_widgets_div");
					}else{
						params=$.extend({},$.fn.params2,params);
						$(container).attr("id","").addClass("animation_collection_widgets_div2");
					}

					$(container).attr("id","");
					var elem=$(innerElem).next("div").clone();
					var sections=$(elem).find("section");
					$(sections).width(params.elemWidth).height(params.elemHeight).css("background-color",params.elemBGColor); 
					$(sections).find("span").css({"font-size":params.fontSize,"color": params.textColor});

					$(sections[0]).find("span").text(params.elemText2);
					$(sections[1]).find("span").text(params.elemText1);

					$(elem).width(params.containerWidth).height(params.containerHeight);
					$(container).attr("id",newId).css({"font-size":params.fontSize,"color":params.textColor});
						

					$(container).html("");
					$(elem).appendTo(container);
					$(container).css({
							  "position":"absolute",
							  "right":positionX,
							  "top": positionY,
							  "width": params.containerWidth,
							  "height": params.containerHeight}).appendTo("#global_elem").draggable();
			});
			
		});
	};
})(jQuery)