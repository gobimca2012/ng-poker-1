'use strict';

/**
 * @ngdoc overview
 * @name fcApp
 * @description
 * # fcApp
 *
 * Main module of the application.
 */

angular.module('fcApp', ['ngRoute', 'ngSanitize', 'ngTouch', 'ngLodash']).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  }).when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  }).otherwise({
    redirectTo: '/'
  });
});
//# sourceMappingURL=app.js.map
