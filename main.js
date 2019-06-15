import pics from "./content-data/pics.js";

var site = angular.module("app", ["ngAnimate", "ngRoute"]);
// credit to tenisgent for the following directive for injecting css
// https://stackoverflow.com/questions/15193492/how-to-include-view-partial-specific-styling-in-angularjs
site.directive("head", [
  "$rootScope",
  "$compile",
  function($rootScope, $compile) {
    return {
      restrict: "E",
      link: function(scope, elem) {
        var html =
          '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
        elem.append($compile(html)(scope));
        scope.routeStyles = {};
        $rootScope.$on("$routeChangeStart", function(e, next, current) {
          if (current && current.$$route && current.$$route.css) {
            if (!angular.isArray(current.$$route.css)) {
              current.$$route.css = [current.$$route.css];
            }
            angular.forEach(current.$$route.css, function(sheet) {
              delete scope.routeStyles[sheet];
            });
          }
          if (next && next.$$route && next.$$route.css) {
            if (!angular.isArray(next.$$route.css)) {
              next.$$route.css = [next.$$route.css];
            }
            angular.forEach(next.$$route.css, function(sheet) {
              scope.routeStyles[sheet] = sheet;
            });
          }
        });
      }
    };
  }
]);

site.controller("mainController", function($scope, $rootScope) {
  $rootScope.active = "home";
  scrollFunction("#top");
  // Menu bar click
  $scope.scrollTo = function(className) {
    scrollFunction(className);
  };

  // gEvent
  $scope.gEvent = function(category, action) {
    gtag("event", action, {
      event_category: category
    });
  };
});

site.controller("photosController", function($scope, $rootScope) {
  $rootScope.active = "photos";
  $scope.pics = pics;
  scrollFunction("#top");
});

site.config([
  "$locationProvider",
  function($locationProvider) {
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
  }
]);

site.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html",
      controller: "mainController",
      css: "partials/home.css"
    })
    .when("/projects", {
      templateUrl: "partials/home.html",
      controller: "mainController",
      css: "partials/home.css"
    })
    .when("/photos", {
      templateUrl: "partials/photos.html",
      controller: "photosController",
      css: "partials/photos.css"
    })
    .otherwise({
      redirectTo: "/"
    });
});

var scrollFunction = function(idstring) {
  $("html, body").animate(
    {
      scrollTop: $(idstring).offset().top
    },
    400
  );
};

// ------------ MENU BAR SCROLL STUFF ------------
var didScroll = false;
$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    hasScrolledT();
    didScroll = false;
  }
}, 150);

function hasScrolled() {
  $(".fade").each(function(i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object / 1.4) {
      $(this).animate({ opacity: "1" }, 1000);
    }
  });
}
// Hide Header on on scroll down
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();
function hasScrolledT() {
  var st = $(window).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").addClass("hideNav");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("hideNav");
    }
  }

  lastScrollTop = st;
}
