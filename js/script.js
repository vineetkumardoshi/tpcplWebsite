$(document).ready(function(){

//Hover Funtion  
	$(".header-right a").hover(function(){
	  	$(this).addClass('header-right-border');	
	},function(){
			$(this).removeClass('header-right-border');
	});

	$(".header-right a").click(function(){
		$(".header-right a").removeClass('active')
		$(this).addClass('active');
	})

//End of Hover Function 

//Smooth Scroll
	$("#aboutus").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#aboutusdiv").offset().top
	    }, 1000);
	});
	$("#contactus").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contactusdiv").offset().top
	    }, 1000);
	});
	$("#home").click(function() {
	    $('html, body').animate({
	        scrollTop: $("body").offset().top
	    }, 1000);
	});
	
//End of Smooth Scroll
});