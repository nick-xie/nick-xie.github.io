var site = angular.module('app',['ngAnimate']);
site.controller("mainController", function($scope, $window) {

  // Menu bar click
  $scope.scrollTo = function(className) {
    scrollFunction(className);
  };

  // Media cards
  $scope.showListen = false;
  $scope.showWatch = false;

  // Project Carousel
  $scope.projectsSlideNum = 1;
  $scope.projectsMaxSlides = 1;
  $scope.projectsNext = function() {
    $('.projects').slick('slickNext');
    ++$scope.projectsSlideNum;
    if ($scope.projectsSlideNum > $scope.projectsMaxSlides) $scope.projectsSlideNum = 1;
  };

  $scope.projectsPrev = function() {
    $('.projects').slick('slickPrev');
    --$scope.projectsSlideNum;
    if ($scope.projectsSlideNum < 1) $scope.projectsSlideNum = $scope.projectsMaxSlides;
  };

  // Photos Carousel
  $scope.images = [
    { num: 1, thumb: "images/slideshow/edited2.jpg", full: "images/slideshow/edited.jpg"},
    { num: 2, thumb: "images/slideshow/bridge2.jpg", full: "images/slideshow/bridge.jpg"},
    { num: 3, thumb: "images/slideshow/sunset2.jpg", full: "images/slideshow/sunset.jpg"},
    { num: 4, thumb: "images/slideshow/mc2.jpg", full: "images/slideshow/mc.jpg"},
    { num: 5, thumb: "images/slideshow/mcgreen2.jpg", full: "images/slideshow/mcgreen.jpg"},
    { num: 6, thumb: "images/slideshow/kitchener2.jpg", full: "images/slideshow/kitchener1.jpg"},
    { num: 7, thumb: "images/slideshow/path2.jpg", full: "images/slideshow/path.jpg"}
  ];
  $scope.photosNext = function() {
    $('.photos').slick('slickNext');
  };

  $scope.photosPrev = function() {
    $('.photos').slick('slickPrev');
  };
});

var scrollFunction = function(idstring) {
  $('html, body').animate({
    scrollTop: $(idstring).offset().top
  }, 400);
};

$(document).ready(function (){

  // Carousels
  $(".projects").slick({
    arrows: false
  });

  $(".photos").slick({
    arrows: false
  });
});


// ------------ MENU BAR SCROLL STUFF ------------
var didScroll;
$(window).scroll(function(event){
  didScroll=true;
});

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
