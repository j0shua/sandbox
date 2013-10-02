'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {templateUrl: 'partials/index.ejs'});
    $routeProvider.when('/scroll-to-top', {templateUrl: 'partials/scroll-to-top.ejs'});
    $routeProvider.when('/health-bar', {templateUrl: 'partials/health-bar.ejs'});
    $routeProvider.when('/progress-bar', {templateUrl: 'partials/progress-bar.ejs'});


    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.ejs', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.ejs', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/index'});
  }]);
