function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "mainmenu") {
        x.className += " responsive";
    } else {
        x.className = "mainmenu";
    }
}
var scrollFunction = function(idstring) {
  $('html, body').animate({
      scrollTop: $(idstring).offset().top
  }, 400);
};
var open=0;
var open2=0;
$(document).ready(function (){
  $(".expanded").hide();
  $(".expanded2").hide();
  $("#aboutlink").click(function() {
    scrollFunction(".about")
  });
  $("#projectlink").click(function() {
    scrollFunction(".projects")
  });
  $("#bloglink").click(function() {
    scrollFunction(".blogT")
  });
  $("#contactlink").click(function() {
    scrollFunction("#contactArea")
  });
  $(".card").click(function(){
    if (open==0){
      open=1;
      $(".expanded").show(500);
      $(".collapsed").hide(500);
    }else{
      open=0;
      $(".expanded").hide(500);
      $(".collapsed").show(500);
    }
  });
  $(".card2").click(function(){
    if (open2==0){
      open2=1;
      $(".expanded2").show(500);
      $(".collapsed2").hide(500);
    }else{
      open2=0;
      $(".expanded2").hide(500);
      $(".collapsed2").show(500);
    }
  });
});
var didScroll;
// $(document).ready(function (){
  $(window).scroll(function(event){
    didScroll=true;
  });
// })
setInterval(function(){
  if(didScroll){
    hasScrolled();
    hasScrolledT();
    didScroll=false;
  }
}, 150);
function hasScrolled(){
  $('.fade').each(function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if( bottom_of_window > (bottom_of_object/1.4) ){
          $(this).animate({'opacity':'1'},1800);          
      }
  });
}
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
function hasScrolledT() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
// }
// function hasScrolledTwo(){
//   var st = $(this).scrollTop();
//   if (Math.abs(lastScrollTop — st) <= delta)
//     return;
//   // If current position > last position AND scrolled past navbar...
//   if (st > lastScrollTop && st > navbarHeight){
//     // Scroll Down
//     $(‘header’).removeClass(‘nav-down’).addClass(‘nav-up’);
//   } else {
//     // Scroll Up
//     // If did not scroll past the document (possible on mac)...
//     if(st + $(window).height() < $(document).height()) { 
//       $(‘header’).removeClass(‘nav-up’).addClass(‘nav-down’);
//     }
//   }
//   lastScrollTop = st;
// }
// }
// $(document).ready(function () {
//   $(window).scroll( function(){
      
//           /* Check the location of each desired element */
//           $('.fade').each(function(i){
//               var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//               var bottom_of_window = $(window).scrollTop() + $(window).height();
              
//               /* If the object is completely visible in the window, fade it it */
//               if( bottom_of_window > bottom_of_object ){
                  
//                   $(this).animate({'opacity':'1'},1800);
                      
//               }
              
//           }); 
      
//       });
// })