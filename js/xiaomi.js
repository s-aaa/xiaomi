$(function(){
/*****************下拉菜单**************************/
	var caidanbox=$(".caidanbox");
	//var erjicaidanbox=$(".caidanbox .erjicaidanbox");
	caidanbox.hover(function(){
		$(this).find("div").stop();
		$(this).find("div").slideDown();
	},function(){
		$(this).find("div").stop();
        $(this).find("div").slideUp();
	})
/**************banner轮播**********************************/
	var bannerimg=$(".bannerimg");
	var rightbtn=$(".rightbtn");
	var leftbtn=$(".leftbtn");
	var btn=$(".banner-right>li");
	var index=0;
	function move(type){
		if(type=="r"){
			index++;
				if(index>=bannerimg.length){
				index=0;
			}
		}
		if(type=="l"){
			index--;
				if(index<=-1){
	            index=bannerimg.length-1;
			}
		}
      bannerimg.hide();
      bannerimg.eq(index).fadeIn();
      btn.css({background:"#666"});
      btn.eq(index).css({background:"#fff"})
	}
	var t=setInterval(function(){
		move("r")
	},2000);
	 bannerimg.hover(function(){
	 	clearInterval(t);
	 },function(){
	 	t=setInterval(function(){
			move("r")
		},2000);
	 })
     btn.hover(function(){
     	clearInterval(t);
     	index=$(this).index();
     	bannerimg.hide();
     	bannerimg.eq(index).show();
     	btn.css({background:"#666"});
     	btn.eq(index).css({background:"#fff"})
     },function(){
     	t=setInterval(function(){
			move("r")
		},2000);
     })
	 rightbtn.click(function(){
	 	clearInterval(t);
	 	move("r");
	 })
	 leftbtn.click(function(){
	 	clearInterval(t);
	 	move("l")
	 })



/******************banner左侧二级******************************/
var bannerLeftWords=$(".banner-left-words");
var bannerLeftErji=$(".banner-left-erji");
bannerLeftWords.hover(function(){
	$(this).find("div").show();
},function(){
	$(this).find("div").hide();
})

//菜单的宽
var ulW=$(".banner-left-erji ul:first").width();
bannerLeftErji.each(function(i,obj){
   var l=bannerLeftErji.eq(i).find("ul");
   bannerLeftErji.eq(i).css({width:(l.length*ulW)})
})
/****************搜索框********************/
var shousuoText=$(".shousuo-text");
var text=$(".shousuo-text~a");
var shousuobox=$(".shousuobox");
var shousuoboxLeft=$(".shousuobox-left")
shousuoText.focus(function(){
	if(text){
		text.hide();
	}
	
})
shousuoText.blur(function(){
	text.show();
	
})


/*var erji=$(".erji");
var img=$(".img");
erji.hover(function(){
	img.attr("src",function(){
		
		//return $(this).attr("ejyx");
	})
  
})*/
 
 

})