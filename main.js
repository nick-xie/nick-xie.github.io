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
    { thumb: "images/slideshow/bird2.jpg", full: "images/slideshow/bird.jpg",
    desc: "This is a picture of a bird I took at the Biodome in Montreal. Quite a friendly chap"},
    { thumb: "images/slideshow/cars2.jpg", full: "images/slideshow/cars.jpg",
    desc: "Taken while on the road back from a Twilight track meet in Hamilton in Summer 2017." +
    " Added some noise because I thought it looked cool."},
    { thumb: "images/slideshow/hillside2.jpg", full: "images/slideshow/hillside.jpg",
    desc: "Basic girl photo at Hillside Music Festival 2017. Performer pictured is Cœur de pirate."},
    { thumb: "images/slideshow/hillsidesunset2.jpg", full: "images/slideshow/hillsidesunset.jpg",
    desc: "Sunset at Hillside. Fun fact: I left this photo totally unedited! (serious)"},
    { thumb: "images/slideshow/path2.jpg", full: "images/slideshow/path.jpg",
    desc: "Some foggy morning walking from my dorm to class in my first year at Waterloo."},
    { thumb: "images/slideshow/edited2.jpg", full: "images/slideshow/edited.jpg",
    desc: "At Liujiazui in Shanghai. One of my favourite places in the whole world."},
    { thumb: "images/slideshow/bridge2.jpg", full: "images/slideshow/bridge.jpg",
    desc: "Went on a bike ride through Suzhou's alleys with some friends this day. We stopped by this bridge to" +
    " admire the beauty."},
    { thumb: "images/slideshow/sunset2.jpg", full: "images/slideshow/sunset.jpg",
    desc: "Super nice sunset by the Boathouse in my hometown. I've spent many evenings here throughout my life."},
    { thumb: "images/slideshow/mc2.jpg", full: "images/slideshow/mc.jpg",
    desc: "Picture of the math building at Waterloo one night coming back from a midterm. Picture turned out great," +
    " midterm did not."},
    { thumb: "images/slideshow/mcgreen2.jpg", full: "images/slideshow/mcgreen.jpg",
    desc: "Walking back to my dorm from the math building after doing some homework in my first term at Waterloo."},
    { thumb: "images/slideshow/kitchener2.jpg", full: "images/slideshow/kitchener.jpg",
    desc: "Picture of some of Kitchener's distinctive historical building style."}
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
    arrows: false,
    adaptiveHeight: true
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
