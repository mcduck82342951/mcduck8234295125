(function($){
	console.log("Hello,I am jquery_correctPositions.js.I am working now in your site.")
	//Field to write a new jQuery module
	$.fn.correctPositions=function(params){
		//alert("for the first time all is ok");
		$.fn.correctPositions.params={
			leftCorrection: 100,
			topCorrection: "auto",
			textAlign: null,
			complete: null,
		}
		
		params=$.extend({},$.fn.correctPositions.params,params);
	
 		$(this).each(function(){
		   if(!($(this).hasClass("nonEditable"))){
			var top=$(this).position().top;
			var left=$(this).position().left;
			
			var newTop=(top=="auto") ? "auto": Math.floor(top/params.topCorrection)*params.topCorrection;
			var newLeft=Math.floor(left/params.leftCorrection)*params.leftCorrection;
	
			$(this).animate({"left":newLeft,
				        "top": newTop},3000,params.complete);
		   }	
		});
		var totalWidth=screen.availWidth;
		if(params.textAlign=="center"){
			$(this).each(function(){
			      if(!($(this).hasClass("nonEditable"))){
				var elem=$(this);
				var elemWidth=$(elem).width();
				var newLeft=Math.floor((totalWidth-elemWidth)/2);
				$(elem).animate({"left":newLeft},3000,params.complete);
			      }
			});
		}else if(params.textAlign=="left"){
			$(this).each(function(){
			    if(!($(this).hasClass("nonEditable"))){
				$(this).animate({"left":params.leftCorrection},3000,params.complete);
			    }
			});
		}else if(params.textAlign=="right"){
			$(this).each(function(){
			    if(!($(this).hasClass("nonEditable"))){
				var ownRight=$(this).width();
				$(this).animate({"left": (totalWidth-params.leftCorrection-ownRight-30)},3000,params.completee);
			    }
			});
		}
		return this;	
	}
})(jQuery)