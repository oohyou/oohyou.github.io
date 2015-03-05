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

if(W > 740){
    var previousPositon = 0;
    var eventPhase = false;
    var speed = 600;
    $(document).mousewheel(function(ev, dt) {
        var T = document.body.scrollTop;
        if(eventPhase === false) {
            if(dt === -1 && T === 0) {
                $("html, body").animate({scrollTop:H}, {
                    duration: speed,
                    progress : function() {
                        eventPhase = true;
                    },
                    complete : function() {
                        eventPhase = false;
                        ev.preventDefault();
                    }
                });
                $('.basiclogo').animate({opacity:1},500);
            }
        }
        if(eventPhase === false) {
            if(dt === -1 && T >= (H + 10) && T < (H * 2)) {
                $("html, body").animate({scrollTop:H * 2}, {
                    duration: speed,
                    progress : function() {
                        eventPhase = true;
                    },
                    complete : function() {
                        eventPhase = false;
                        ev.preventDefault();
                    }
                });
            }
        }
        if(eventPhase === false) {
            if(dt === 1 && T > 0 && T < H) {
                $("html, body").animate({scrollTop:0}, {
                    duration: speed,
                    progress : function() {
                        eventPhase = true;
                    },
                    complete : function() {
                        eventPhase = false;
                        ev.preventDefault();
                    }
                });
                $('.basiclogo').animate({opacity:0},500);
            }
        }
        if(eventPhase === false) {
            if(dt === 1 && T > H && T < (H * 2)) {
                $("html, body").animate({scrollTop:H}, {
                    duration: speed,
                    progress : function() {
                        eventPhase = true;
                    },
                    complete : function() {
                        eventPhase = false;
                        ev.preventDefault();
                    }
                });
            }
        }
    });
}

});
