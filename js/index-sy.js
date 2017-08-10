$(function(){
	var i = 0;
	function move(){
		$("#poster li").eq(i).fadeIn(500).find(".img").stop().animate({"left":0},2000,function(){
			$(this).next().show().stop().animate({"left":0},500);
			}).end().siblings().fadeOut(300);
				$(".navx li").eq(i).addClass("select").siblings().removeClass("select");
					$("#poster li").eq(i).siblings().find(".ing").css("left","-760px").next().hide().css("left","-20px");
				}
				move();
				setInterval(function(){
					i++;
					if(i ==$("#poster li").length){
						i=0;
					}
					move();
				},3000);
			});
			
			
$(function() {
	$("#jdw").hide();
});
	var preTop=0;
	var currTop=0;
$(function () {
	$(window).scroll(function(){
		currTop=$(window).scrollTop();
		if(currTop<preTop){
		$("#jdw").fadeOut(50);
		}
		if ($(window).scrollTop()>600){
			$("#jdw").fadeIn(1000);
		}
		else{
			preTop=$(window).scrollTop();
			$("#jdw").fadeOut(50);
		}
				/*preTop=$(window).scrollTop();*/
	});
});
		
$(function() {
	$("#xinxi").hide();
});
	var preTop=0;
	var currTop=0;
	$(function () {
	$(window).scroll(function(){
		currTop=$(window).scrollTop();
	if(currTop<preTop){
		$("#xinxi").fadeOut(50);
	}
	if ($(window).scrollTop()>600){
		$("#xinxi").fadeIn(1000);
	}
	else{
	preTop=$(window).scrollTop();	
	$("#xinxi").fadeOut(50);
}
	/*preTop=$(window).scrollTop();*/
	});
});