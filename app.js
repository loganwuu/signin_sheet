var SignInSheet = angular.module('SignInSheet', ['ui.router']);

AskExperts.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/welcome.html"
  });

  $stateProvider.state('signins', {
    url: "/signins",
    templateUrl: "partials/signins.html",
    controller: "SignInsCtrl"
  });

  $stateProvider.state('whoshere', {
    url: "/whoshere",
    templateUrl: "partials/whoshere.html",
    controller: "WhoshereCtrl"
  });
});
