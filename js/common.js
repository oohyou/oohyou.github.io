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
    $('.work ul li.graphic').fadeIn();
});


$('ul.menu .workmenu ul li.servicedesign').click(function(){
	$('.work ul li:not(.service)').fadeOut();
    $('.work ul li.service').fadeIn();
});


$('ul.menu .workmenu ul li.branding').click(function(){
	$('.work ul li:not(.brand)').fadeOut();
    $('.work ul li.brand').fadeIn();
});


$('ul.menu .workmenu ul li.illustration').click(function(){
	$('.work ul li:not(.illust)').fadeOut();
    $('.work ul li.illust').fadeIn(500);
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


$('a[href^=#about]').on("click",function(){
    var t= $(this.hash);
    var t=t.length&&t||$('[about='+this.hash.slice(1)+']');
    if(t.length){
        var tOffset=t.offset().top;
        $('html,body').animate({scrollTop:tOffset-0},'slow');
        return false;
    }
});
