var H = $(window).height();
var W = $(window).width();

$(document).ready(function(){/*
	$('.isotope').isotope({
		  itemSelector: '.item',
		  getSortData: {
			name: '.name',
			category: '[data-category]'
		  },
		  // layout mode options
		  masonry: {
			columnWidth: 200
		  }
	});
	$('.isotope').isotope({ filter: '.design' });


	$('.work ul li').click(function(){
		var test = $(this).attr("class");
		$('.work .info > div').each(function(){
			var info = $(this).attr("class");
			console.log(test);
			console.log(info);
			if(test == info){
				$(this).css("display",'block');
			}
		});		
	});
	*/

	jQuery(window).scroll(function(event){ // => 스크롤이  돌아가면
	var WINDOW = $(window);

	var scroll = document.body.scrollTop;

	if(WINDOW.scrollTop() >= H){
		$('.basiclogo').animate({opacity:1},500);;
	}


	});

	$(document).mousewheel(function(event,delta){
		var scoll2 = delta;
			var T = document.body.scrollTop;
/*			if(scoll2 < 0){
				console.log("down");
			}
			if(scoll2 > 0){
				console.log("up");
			} */

			if(scoll2 < 0 && T == 0){
				$("html, body").animate({scrollTop:H}, 500); // 시간조절 , 100= 0.1초
			}

			if(scoll2 > 0 && T == H){
				$("html, body").animate({scrollTop:0}, 500); // 시간조절 , 100= 0.1초
			}
			
			if(scoll2 > 0 && T <= H){
				$('.basiclogo').animate({opacity:0},500);;
			}

			if(scoll2 < 0 && T == H){
				$("html, body").animate({scrollTop:H*2}, 500); // 시간조절 , 100= 0.1초
			}

			if(scoll2 > 0 && T <= H && T > 0){
				$("html, body").animate({scrollTop:0}, 500); // 시간조절 , 100= 0.1초
			}

			if(scoll2 > 0 && T <= H*2 && T > H ){
				$("html, body").animate({scrollTop:H}, 500); // 시간조절 , 100= 0.1초
			}
	});
});