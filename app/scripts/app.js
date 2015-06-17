'use strict';

/**
 * @ngdoc overview
 * @name angularUrlRewriteApp
 * @description
 * # angularUrlRewriteApp
 *
 * Main module of the application.
 */
angular
  .module('angularUrlRewriteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
    }
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
