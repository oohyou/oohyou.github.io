var win_width = window.innerWidth;
var win_height = window.innerHeight;
var win_scrolltop = 0;

var isScrolling = false;

jQuery.extend( jQuery.easing,
{
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}
});


var colors = (function() {
	var $goDown     = $('#go-down');

	return {
		change: function(bright) {
			if(!$goDown.length)
				$goDown = $('#go-down');
		},
	};
})();

var Slider = function(sliderContainer) {

	if (sliderContainer.length == 0) return;
	var that = this;

	this.$sliderContainer = sliderContainer;
	this.$slides = this.$sliderContainer.find('li');
	this.currentSheet = 0;
	this.bright = false;

	this.loop = function () {

		if (win_scrolltop < win_height) {
			var index = that.currentSheet;
			that.currentSheet++;
			that.currentSheet %= that.$slides.length;
			colors.change(this.bright);
			that.$slides.eq(index).fadeTo("slow", 0, function() {
				for (var i = 0, len = that.$slides.length; i < len; i++) {
					var new_index = parseInt(that.$slides.eq(i).css("z-index")) + 1;

					if (new_index >= len)
						new_index -= len;
					that.$slides.eq(i).css({zIndex: new_index});
				}
			});
		}
	};

	setInterval(function() {
		that.loop();
	}, 3500);


};

var SLIDER = new Slider($('#home-teaser-sheet1 ul'));

	var pageName = $('body').attr('id');

	var $homeTeaser = $(document.getElementById('home-teaser'));
	var $homeTeaserSheets = $homeTeaser.find('.sheet');

	var $navButton = $(document.getElementById('jump-nav-link'));
	var $mainNav = $(document.getElementById('main-nav'));
	var $mainNavLinks = $mainNav.find('a');
	var pageStructure = [];

		pageStructure.push(0);

	for (var i = 1, len = $mainNavLinks.length; i < len; i++) {
		var $currentLink = $($mainNavLinks[i].hash);

		if ($currentLink.length)
			pageStructure.push($currentLink.offset().top);
	}

	var logo = document.getElementById('logo');

	$('body').append('<a href="#" id="go-down">');

	var $goDownButton = $(document.getElementById('go-down'));

	$goDownButton.on('click', function(event) {
		event.preventDefault();

		if (isScrolling)
			return;


		($(this).hasClass('go-up')) ?
			goTop() :
			goNext();
	});

	$(window).on('resize', function(){
		win_width = window.innerWidth;
		win_height = window.innerHeight;
	});

	$(window).on('scroll', function() {
		win_scrolltop = $(this).scrollTop();

		if ((pageName == "page-home" && win_scrolltop >= 1 * win_height) || (pageName != "page-home" && win_scrolltop >= win_height)) {
			$goDownButton.addClass('go-up');
		} else {
			$goDownButton.removeClass('go-up');
		}
	});

	function goTo(new_position) {

		var new_position = new_position;

		if (isNaN(new_position)) {

			if (pageName == "page-home" && (win_scrolltop > 1 * win_height || (win_scrolltop == 1 * win_height && direction == 1)))
				return;

			if (pageName != "page-home" && (win_scrolltop > win_height || (win_scrolltop == win_height && direction == 1)))
				return;

			var factor = win_scrolltop / win_height;


			if ( win_scrolltop % win_height == 0)
				factor = factor + .5 * direction;

			new_position = (direction > 0) ?
								Math.ceil(factor) * win_height:
								Math.floor(factor) * win_height;

		}

		new_position = Math.max(0, new_position);

		var duration = Math.min(1500, Math.abs(win_scrolltop - new_position) / win_height * 500)

		//go to new position
		isScrolling = true;
		$('body, html').animate({scrollTop: new_position}, duration, "easeInOutCubic", function() {
			setTimeout(function() {
				isScrolling = false;
			}, 200);
		});

	};

	function goNext() {
		direction = 1;
		goTo();
	}

	function goPrev() {
		direction = -1;
		goTo();
	}

	function goTop() {
		goTo(0);
	}

	if (pageName == "page-home") {

		var $parallaxArea = $('#about .cite');
		var parallaxAreaTop = $parallaxArea.offset().top;
		var $parallaxLayer = $parallaxArea.find('.bg');



		var $orientationBar = "";

		for (var i = 0, len = $homeTeaserSheets.length; i < len; i++) {
			$orientationBar += "<li></li>";
		}

		//$homeTeaser.append('<ul id="orientation-bar">' + $orientationBar + '</ul>');


		$orientationBar = $(document.getElementById('orientation-bar'));
		var $orientationBarItems = $orientationBar.find('li');

		if ($orientationBar.length > 0) {
			$orientationBarItems.eq(0).addClass('active');
			$orientationBar.css({marginTop: -($orientationBar.height() / 2)});
		}

		$(window).on('scroll', function() {
			var activeSheet = Math.floor(win_scrolltop / win_height);

			var tmp = (win_scrolltop - (parallaxAreaTop + 472 - win_height)) * .5;

			$parallaxLayer.css({
				transform: "translateY(" + tmp + "px)"
			});

			var currentLink = 0;

			for (var i = 0, len = pageStructure.length; i <= len; i++) {
				if (i == len - 1) {
					currentLink = i;
					break;
				} else {
					if (pageStructure[i + 1] > win_scrolltop) {
						currentLink = i;
						break;
					}
				}
			}

			$mainNavLinks.removeClass('active').eq(Math.min(Math.max(currentLink, 0), len - 1)).addClass('active');


			$orientationBarItems.removeClass('active').eq(activeSheet).addClass('active');

			for (var i = 1, len = $homeTeaserSheets.length; i < len; i++) {
				if (len * win_height < win_scrolltop) break;

				var $currentSheet = $homeTeaserSheets.eq(i);

				if (win_scrolltop < i * win_height) {
					if ($currentSheet.css('position') != "absolute")
						$currentSheet.css({
							position: "absolute",
							top: (i * win_height),
							height: "25%"
						});
				} else if (win_scrolltop > (i+1) * win_height) {
					if ($currentSheet.css('top') != "100%")
						$currentSheet.css({
							position: "fixed",
							top: "100%",
							height: "100%"
						});
				} else {
					if ($currentSheet.css('top') != "0")
						$currentSheet.css({
							position: "fixed",
							top: "0",
							height: "100%"
						});
				}
			}

			colors.change(win_scrolltop >= win_height ? true : SLIDER.bright);

		});

		var direction = 0;

		$(document).on('keydown mousewheel', function( event ) {
			if (isScrolling) {
				event.preventDefault();
				return;
			}

			if (event.type == "keydown") {
				if ( event.which == 32 || event.which == 40 ) {
					//go down
					direction = 1;
				} else if (event.which == 38) {
					//go up
					direction = -1;
				} else {
					return;
				}
			} else {
				if (event.deltaY < 0) {
					//go down
					direction = 1;
				} else if (event.deltaY > 0) {
					//go up
					direction = -1;
				} else {
					return;
				}
			}


			if (win_scrolltop > 1 * win_height || (win_scrolltop == 1 * win_height && direction == 1))
				return;

			event.preventDefault();

			goTo();
		});
	}

	$navButton.on('mouseenter touchstart', function(event) {
		event.preventDefault();
		$(this).add($mainNav).addClass('hover');
	}).on('click', function(){
		event.preventDefault();
	});

	$mainNav.on('mouseleave touchstart touchend', function() {
		$navButton.add($mainNav).removeClass('hover');
	});


	$(window).scroll();
