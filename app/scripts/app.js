'use strict';

angular
  .module('greensideAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-file-model',
    'firebase',
    'validation.match'
  ])
  .constant('FIRE',{
    'URL' : 'https://greenside.firebaseio.com/'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/productos', {
        templateUrl: 'views/productos.html',
        controller: 'ProductosCtrl',
        controllerAs: 'productos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
