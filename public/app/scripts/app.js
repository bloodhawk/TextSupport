'use strict';

/**
 * @ngdoc overview
 * @name textSupportApp
 * @description
 * # textSupportApp
 *
 * Main module of the application.
 */
angular
  .module('textSupportApp', [
    'ngRoute', 'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/support', {
        templateUrl: 'views/support.html',
        controller: 'SupportCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
