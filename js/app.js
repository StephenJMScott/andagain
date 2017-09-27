angular.module('MyApp',['ngRoute', 'RouteControllers']);

angular.module('MyApp').config(function($locationProvider, $routeProvider) { $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
});
