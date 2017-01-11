var scrollFunction = function(idstring) {
	$('html, body').animate({
	    scrollTop: $("#about").offset().top
	}, 400);
};
$(document).ready(function (){
	$("#aboutlink").click(function() {
		scrollFunction("#about")
	});
	$("#footerlink").click(function() {
		scrollFunction("#footer")
	});
});
$(document).ready(function () {
	$(window).scroll( function(){
	    
	        /* Check the location of each desired element */
	        $('.fade').each( function(i){
	            
	            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	            var bottom_of_window = $(window).scrollTop() + $(window).height();
	            
	            /* If the object is completely visible in the window, fade it it */
	            if( bottom_of_window > bottom_of_object ){
	                
	                $(this).animate({'opacity':'1'},500);
	                    
	            }
	            
	        }); 
	    
	    });
	$(window).load( function(){
	    
	                $('.me').animate({'opacity':'1'},3000);
	                   
	    
	    });
})