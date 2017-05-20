/*== Custom Javascript
======================================================== */
$(window).scroll(function(e){
	if($(window).scrollTop() > 0){
		$(".header").addClass("fixed-header");
	} else{
		$(".header").removeClass("fixed-header");
	}
});

$(document).ready(function(e) {

    if($(window).scrollTop() > 0){
		$(".header").addClass("fixed-header");
	}

	$(".search-box .search-icon").click(function(e){
		$(this).siblings(".search-input").slideToggle();
		if($(window).width() < 1081){
			$(".navigation").css("left", "-201px");
			$(".toggle-mobile-btn").removeClass("open");
		}
	});

	$(".toggle-mobile-btn").click(function(e){
		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$(".navigation").css("left", "-201px");
		}else{
			$(this).addClass("open");
			$(".search-input").fadeOut();
			$(".navigation").css("left", "0");
		}
	});
});

$(window).on("resize load", function(){
	if($(window).width() > 1080){
		$(".navigation").removeAttr("style");
		$(".toggle-mobile-btn").removeClass("open");
	}
});
/* Man I'm good */

/* Section for CSS animations
========================================= */
;(function ($) {
  'use strict';
  var content  = $('#main').smoothState({
        // onStart runs as soon as link has been activated
        onStart : {

          // Set the duration of our animation
          duration: 250,

          // Alterations to the page
          render: function () {

            // Quickly toggles a class and restarts css animations
            content.toggleAnimationClass('is-exiting');
          }
        }
      }).data('smoothState'); // makes public methods available
})(jQuery);
