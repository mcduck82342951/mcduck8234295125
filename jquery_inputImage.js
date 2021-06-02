(function($){
	console.log("I am jquery_inputImage.js. I am working in your site now");
        alert("for the first time all is ok");
	$.fn.params={
                  imageWidth: "30%",
                  imageHeight: "30%",
		  numOfPics: 100 
                  };
	var allowance=0;
	var numPic=0;
	var images=[];
	$.fn.showAllImages=function(params){
		if(allowance){
 			$(".bgImageAddingModuleProduct").slideToggle("slow"); 
                return 0; 
        }
		allowance=(allowance==0) ? 1: 1;
		var container=this;
		var newMainDiv=document.createElement("div");
		$(newMainDiv).addClass("bgImageAddingModuleProduct");
		var newOuterDiv=document.createElement("div");
		var newInnerDiv=document.createElement("div"); 
		params=$.fn.extend({},$.fn.params,params);
        var imageWidth=params.imageWidth;
        var imageHeight=params.imageHeight;
		var numOfPics=params.numOfPics;
		
		if(imageWidth="30%"){
				var strainX=screen.availWidth/(screen.availWidth*0.3);
                var strainY=screen.availHeight/(screen.availHeight*0.3);
		}else{
				var strainX=screen.availWidth/imageWidth;
                var strainY=screen.availHeight/imageHeight;
                imageWidth+="px";
            	imageHeight+="px";
        }

		var okButton=document.createElement("input");
		okButton.setAttribute("type","button"); 
        $(okButton).css({"width":"40px",
                                 "height":"40px",
                                 "background-color":"white",
                                 "color":"maroon",
                                 "position":"fixed",
                                 "bottom":"20px",
                                 "right":"25px",
                                 "border-radius":"100px",
                                 "text-align":"center",
                                 "font-size":"large",
                                 "font-weight":"bold"}).appendTo(newInnerDiv).val("Ok").click(function(){
                                 	$(".bgImageAddingModuleProduct").slideToggle("slow");
                                 })

		var nextButton=document.createElement("input");
		nextButton.setAttribute("type","button");
                $(nextButton).css({"width":"50px",
                                   "height":"20px",
                                   "background-color":"white",
                                   "color":"maroon",
				   "position":"fixed",
                                   "right":"0px",
                                   "bottom":"0px", 
                                   "border-radius":"100px",
                                   "text-align":"center"}).appendTo(newInnerDiv).val("Next");

		var prevButton=document.createElement("input"); 
                prevButton.setAttribute("type","button");
                $(prevButton).css({"width":"70px",
                                   "height":"20px",
                                   "background-color":"white",
                                   "color":"maroon",
                                   "position":"fixed",
                                   "right":"50px",
                                   "bottom":"0px",
                                   "border-radius":"100px",
                                   "text-align":"center"}).appendTo(newInnerDiv).val("Previous");
               
		var miniNum=Math.floor(strainX)*Math.floor(strainY);


		$(nextButton).click(function(){
			numPic+=miniNum;
			if(numPic>numOfPics){
				numPic-=miniNum; 
				return 0;
			}
           $(newInnerDiv).scrollTo(images[numPic],{duration:3000});
		});

		$(prevButton).click(function(){
			numPic-=miniNum;
                        if(numPic<0){
				numPic+=miniNum; 
                                return 0;
                        } 
			$(newInnerDiv).scrollTo(images[numPic],{duration: 3000}); 
		});


		for(var i=0;i<numOfPics;i++){
			var newImg=document.createElement("img");
			newImg.setAttribute("src","images/image ("+i+").jpg");
			$(newImg).width(imageWidth).height(imageHeight);
                        $(newImg).appendTo(newInnerDiv);
			images.push(newImg); 
		}
	
		$(newMainDiv).css({"width":"100%",
				   "height":"100%",
				   "position":"fixed",
				   "top":"0px",
				   "left":"0px",
				   "overflow":"hidden",
                                   "z-index":"200"});

		$(newOuterDiv).css({"width":"100%",
                                    "height":"100%",
                                    "position":"fixed",
                                    "top":"0px",
                                    "left":"0px",
			            "z-index":"201", 
                                    "background-color":"black",
                                    "opacity": "0.5",
                                    "overflow":"hidden"});

		$(newInnerDiv).css({"width":"100%",
                                    "height":"100%",
                                    "position":"fixed",
                                    "top":"0px",
                                    "left":"0px",
                                    "z-index":"202",
                                    "background-color":"none",
                                    "overflow":"hidden"});
		$(newOuterDiv).appendTo(newMainDiv);
                $(newInnerDiv).appendTo(newMainDiv);

		$(newMainDiv).hide().appendTo("body").slideToggle("slow");

		$(newMainDiv).find("img").click(function(){
			$(container).css("background-image","url('"+$(this).attr("src")+"')"); 
		});
	}
})(jQuery)