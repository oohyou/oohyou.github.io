var H = $(window).height();
var W = $(window).width();

$(document).ready(function(){
	

/*
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
$('ul.menu .workmenu ul li').click(function(){
	 $("html, body").animate({scrollTop:H*2},500);
});

$('ul.menu .workmenu ul li.all').click(function(){
	$('.work ul li').fadeIn();
});

$('ul.menu .workmenu ul li.graphicdesign').click(function(){
	$('.work ul li:not(.graphic)').fadeOut();
});

$('ul.menu .workmenu ul li.servicedesign').click(function(){
	$('.work ul li:not(.servicedesign)').fadeOut();
});


if(W < 959){
    var previousPositon = 0;
    var eventPhase = false;
    var speed = 600;
    $(document).mousewheel(function(ev, dt) {
        var T = document.body.scrollTop;
        if(eventPhase === false) {
            if(dt === -1 && T === 0) {
                $('.basiclogo').animate({opacity:1},500);
            }
        }

        if(eventPhase === false) {
            if(dt === 1 && T > 0 && T < H) {
                $('.basiclogo').animate({opacity:0},500);
            }
        }
    });
}



if(W > 959){
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


$('a[href^=#]').on("click",function(){
    var t= $(this.hash);
    var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
    if(t.length){
        var tOffset=t.offset().top;
        $('html,body').animate({scrollTop:tOffset-20},'slow');
        return false;
    }
});
