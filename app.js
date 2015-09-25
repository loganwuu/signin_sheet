var SignInSheet = angular.module('SignInSheet', ['ui.router']);

SignInSheet.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('welcome', {
        url: "",
        templateUrl: "partials/welcome.html"
    });

    $stateProvider.state('signins', {
        url: "/signins",
        templateUrl: "partials/signins.html",
        controller: "SignInsCtrl"
    });

    $stateProvider.state('students', {
        url: "/students",
        templateUrl: "partials/students.html",
        controller: "StudentsCtrl"
    });
});
