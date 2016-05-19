(function(){

    angular.module('angularSpa', [
    'ngRoute','ngMap'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MyCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/registro', {
            templateUrl: 'views/registro.html',
            controller: 'agregaCtrl'
          })
        .when('/agregarlugar', {
            templateUrl: 'views/agregalugar.html',
            controller: 'agregalugarCtrl'
          })
        .when('/junaeb', {
            templateUrl: 'views/junaeb.html',
            controller: 'AboutCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
