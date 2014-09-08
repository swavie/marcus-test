(function($) {
  "use strict";
/* 
* Insperia - Multi-purpose Responsive HTML5 Theme, designed by Hashim Bilal -- (http://www.oscodo.com)
	------------------------------------------------------------------------------------------
	Script to detect mobile devices and makes menu dropdowns open on click tather than on hover
	--------------------------------------------------------------------------------------------- */
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
		//alert('not mobile');
		(function ($, window, delay) {
			var theTimer = 0;
			var theElement = null;
			var theLastPosition = {
				x: 0,
				y: 0
			};
			$('[data-toggle]')
				.closest('li')
				.on('mouseenter', function (inEvent) {
					if (theElement) theElement.removeClass('open');
					window.clearTimeout(theTimer);
					theElement = $(this);
	
					theTimer = window.setTimeout(function () {
						theElement.addClass('open');
					}, delay);
				})
				.on('mousemove', function (inEvent) {
					if (Math.abs(theLastPosition.x - inEvent.ScreenX) > 4 ||
						Math.abs(theLastPosition.y - inEvent.ScreenY) > 4) {
						theLastPosition.x = inEvent.ScreenX;
						theLastPosition.y = inEvent.ScreenY;
						return;
					}
	
					if (theElement.hasClass('open')) return;
					window.clearTimeout(theTimer);
					theTimer = window.setTimeout(function () {
						theElement.addClass('open');
					}, delay);
				})
				.on('mouseleave', function (inEvent) {
					window.clearTimeout(theTimer);
					theElement = $(this);
					theTimer = window.setTimeout(function () {
						theElement.removeClass('open');
					}, delay);
				});
		})($, window, 50); // 50 is the delay in milliseconds
	}
	

//document.ready function
$(document).ready(function(){
		$(window).scroll(function () { // scroll event
			
			var bannerHeight = $('.splash-banner').innerHeight();
			var winHeight = $(window).innerHeight();
			var pageId = $('body').attr('id');
			
			//splash banner DOWNLOAD btn
			if(pageId == 'intro'){
				if ($(window).scrollTop()+winHeight >= bannerHeight) {
					$('#download').css('position', 'absolute');
				} else {
					$('#download').removeAttr('style');
				}
		
				if ($(window).scrollTop() >= bannerHeight) {
					$('.navbar').addClass('navbar-fixed-top');
					$('body').css('padding-top', '60px');
				} else {
					$('.navbar').removeClass('navbar-fixed-top');
					$('body').removeAttr('style');
				}
			}
			
		});
	
	
	
		//ticker in main banner on home page
		$(function(){
			$('#vertical-ticker').totemticker({
				row_height	:	'80px',
				next		:	'#ticker-next',
				previous	:	'#ticker-previous',
				stop		:	'#stop',
				start		:	'#start',
				mousestop	:	true,
				max_items   :   1,
				speed       :   800,
				interval    :   3000
			});
		});

	  
	//portfolio filter options
	  var $filterType = $('.options-list li.active a').attr('class');
	  var $holder = $('.portfolio');
	  var $data = $holder.clone();

		$('.options-list li a').click(function(e) {
			$('.options-list li').removeClass('active');
			var $filterType = $(this).attr('class');
			$(this).parent().addClass('active');
			if ($filterType == 'all') {
				var $filteredData = $data.find('li');
			} 
			else {
				var $filteredData = $data.find('li[data-type=' + $filterType + ']');
			}
			
			// call quicksand and assign transition parameters
			$holder.quicksand($filteredData, {
				duration: 800,
				easing: 'easeInOutQuad',
				useScaling: true,
				adjustHeight: 'dynamic'
			});
			return false;
		});
	//portfolio filter options (END)
	
	//search form open-close
	$('.search-nav > a').click(function(){
		$('.search-form').animate({
				top: '0'
			}, 500);
	});
	$('.search-form .btn').click(function(){
		$('.search-form').animate({
				top: '-62'
			}, 500);
	});
	

	//portfolio category filter options
	//dropdown menu
	$('.cat-toggle').click(function(){
		$(this).next().slideToggle();
	});
	$('.filter-options .options-list li a').click(function(){
		var selectedCat = $(this).text();
		$('.cat-title span').text(selectedCat);
	});
	
	//Comparison Charts
	
	$('.chart-controls .btn-group label').click(function(){
		if($(this).attr('id') == 'monthByMonth'){
			$('.column .annual, .column .two-year').slideUp();
			$('.column .monthly').slideDown();
		}else
		if($(this).attr('id') == 'annualBilling'){
			$('.column .monthly, .column .two-year').slideUp();
			$('.column .annual').slideDown();
		}else
		if($(this).attr('id') == 'twoYearBilling'){
			$('.column .annual, .column .monthly').slideUp();
			$('.column .two-year').slideDown();
		}
	});

	//Inner page's header TEXT parallax
	$(window).scroll(function () {
		textParallax();
	});
	
	
});// document.ready function
})(jQuery);

//Utilcarousel "about_creative.html" function
function aboutCreativeCarousels(){
	 "use strict";	
			//util-carousel
			$('#carouselFirst').utilCarousel({
				responsiveMode : 'itemWidthRange',
				itemWidthRange : [260, 320],
					autoPlay : true,
					interval : 3000,
					itemAnimation:'util-flip-in-x'
			});
			$('#carouselSecond').utilCarousel({
				responsiveMode : 'itemWidthRange',
				itemWidthRange : [160, 180],
					autoPlay : true,
					interval : 3000,
					itemAnimation:'util-fade-in'
			});
			$('#team-showcase').utilCarousel({
				responsiveMode : 'itemWidthRange',
				itemWidthRange : [300, 360],
					autoPlay : false,
					interval : 3000,
					itemAnimation:'util-flip-in-y'
			});
}//Utilcarousel "about_creative.html" end


//Utilcarousel function "Home2.html"
function homeCreativeCarousels(){
	 "use strict";
	$('#fullwidth').utilCarousel({
					breakPoints : [[600, 1], [900, 2], [1200, 3], [1500, 4], [1800, 5]],
					mouseWheel : true,
					rewind : false
				});
}//Utilcarousel function "Home2.html" end


//All common functions
function allCommonFunctions(){
	 "use strict";
	//wow onload content animation
	var wow = new WOW(
	  {
		animateClass: 'animated',
		offset:       100
	  }
	);
	wow.init();
	
	/* fun-facts countTo animation */
	jQuery(function() {
		$(".fact").appear(function(){
			$('.fact').each(function(){
		       	var dataperc = $(this).attr('data-perc');
				$(this).find('.factor').delay(6000).countTo({
			        from: 0,
			        to: dataperc,
			        speed: 3000,
			        refreshInterval: 50,
	            
        		});  
			});
		});
	});
		
	
	/* PiE Chart init function */
	$('.chart').appear(function(){
		initPieChart();
	});	
	//pie chart (on about.html page)
	/* PiE Charts */
	var initPieChart = function() {
			jQuery('.percentage-light').easyPieChart({
				barColor: '#232425',
				trackColor: 'rgba(230, 230, 230, 0.2)',
				scaleColor: false,
				lineCap: 'round',
				rotate: -90,
				lineWidth: 10,
				size: 120,
				animate: 2000,
				onStep: function(value) {
					this.$el.find('span').text(~~value);
				}
			});
	
	};
	
	//carousel (smple image slider)
	$('.carousel').carousel();
	
	//mediaelementpalyer
	$(".my-video, .my-audio").mediaelementplayer();
	
	//masonry blog
	var $container = $('#masonryBlog');
	$container.masonry({
		itemSelector: '.masonry-item'
	});
	
	//initializing all parallax elements
	$('.iMac').parallax("right", 0.4);
	$('.parallax').parallax("50%", 0.5);
	
	//flexslider for testimonials
	$('.flexslider').flexslider({
		animation: "fade",
		touch: true,
	});
	
	//nivo lightbox
	$('.zoom').nivoLightbox({
		effect: 'fade',                             // The effect to use when showing the lightbox
		theme: 'default',                           // The lightbox theme to use
		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});
	
	//tool tip
	$('.tip').tooltip();
	
	//popover
	$('.pop-over').popover()
	
	//loading state button		
  $('.loading').click(function () {
    var btn = $(this)
    btn.button('loading')
  });
	
}//all common functions end


//Countdown days/hours/mints/sec
function flipCountDown(){
	"use strict";
		var clock;
		// Grab the current date
		var currentDate = new Date();
		// Set some date in the future. In this case, it's always Jan 1
		var futureDate  = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours() + 120);
		// Calculate the difference in seconds between the future and current date
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
		// Instantiate a coutdown FlipClock
		clock = $('#future').FlipClock(diff, {
			clockFace: 'DailyCounter',
			countdown: true
		});
}//Countdown days/hours/mints/sec end


//Inner page's header TEXT parallax
function textParallax() {
	var myScroll = $(this).scrollTop();
	$('.page-header-wrap .container').css({
		'opacity': 1 - (myScroll / 200)
	});
}