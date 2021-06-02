(function($){
	console.log("Hello, I am jquerytabledbody.js. I am working now in your site.")
	$.fn.params={
		color: "black",
		backgroundColor: $("body").css("background-color"),
		elemBackgroundColor: "white",
		opacity: "0.5",
		innerWidth: 30,	
		innerHeight: 30,
	}

	$.fn.makeTabledBody=function(params){
		//alert("hello my dear friend");
		//alert("I am glad to see you again writing the code on me");
		params=$.extend({},$.fn.params,params);
		var elem=this;
		var innerWidth=params.innerWidth;
		var innerHeight=params.innerHeight;
		var color=params.color;
		var backgroundColor=params.backgroundColor;
		var elemBackgroundColor=params.elemBackgroundColor;
		var width=$(elem).width();
		var height=$(elem).height();
		var opacity=params.opacity;

		var newTable=document.createElement("table");
		var newTbody=document.createElement("tbody");
		var mainTr=document.createElement("tr");
		var mainTd=document.createElement("td");
		$(mainTd).css({width: innerWidth,
			      height: innerHeight,
			      border: "1px solid"+color,
			      "background-color": elemBackgroundColor});
		for(var i=0;i<width/innerWidth;i++){
			var newTd=$(mainTd).clone();
			$(newTd).appendTo(mainTr);
		}
		
		for(var j=0;j<height/innerHeight;j++){
			var newTr=$(mainTr).clone();
			$(newTr).appendTo(newTbody);
		}
	
		$(newTbody).appendTo(newTable);
		$(newTable).css({"position":"fixed",
				 "left":"0px",
				 "top":"0px",
				 "z-index":"-1",
				 "opacity": params.opacity}).addClass("tabledBody_table");
		return $(this).append(newTable).css("background-color",backgroundColor);
	}
})(jQuery)