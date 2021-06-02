(function($){
	console.log("Hello, I am talkMaker.js. I am working now in your site.");
			$.talk=function(index){
				var newSpan=document.createElement("span");
				$(newSpan).addClass("talkingObject");
				$(newSpan).css("display","block");
				if(index>=1 && index<=7){
				if(index==1){
					$(newSpan).html("Hello my dear friend!");
				}else if(index==2){
					$(newSpan).html("Hello my dear world!");
				}else if(index==3){
					$(newSpan).html("World,I love you!");
				}else if(index==4){
					$(newSpan).html("Dear family! Hakuna matata! Ohana!");
				}else if(index==5){
					$(newSpan).html("Introduce yourself, and I will introduce the world!");
				}else if(index==6){
					$(newSpan).html("Every day is increadible!");
				}else if(index==7){
					$(newSpan).html("Imagination I love you!");
				  }
				  $(newSpan).hide().appendTo("body").fadeIn(3000);
				}else{
					var random=Math.floor(Math.random()*69);
					var image=document.createElement("img");
					image.setAttribute("src","images/image ("+random+").jpg");
					$(image).css({"width":"200px",
						      "height":"200px",
						      "display":"inline-block"});
					$("body").css("text-align","center");

					$(image).addClass("talkingObject").hide().appendTo("body").show("puff",3000).click(function(){
						  $("body").css({"background-attachment":"fixed","transition-duration:":"2s","transition-property": "all","transition-timing-function":"linear"});
						  $("body").css("background-image","url('"+$(this).attr('src')+"')");
						  console.log($(this).attr('src'));
					});
				}
					return 0;
			}

			$.maketalking=function(stopingButton){
				var timer=setInterval(function(){ 
					var random=Math.floor(Math.random()*60);
					$.talk(random);
				},3000);
				$(stopingButton).click(function(){
					$(".talkingObject").hide("puff",3000);
					setTimeout(function(){$(".talkingObject").remove();},3000);
					clearInterval(timer);
				});
			}
		})(jQuery)
