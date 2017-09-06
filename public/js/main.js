angular.module('alurapic', ['myDirectives','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/fotos', {
		templateUrl: 'partials/home.html',
		controller: 'FotosController'
	});

	$routeProvider.otherwise({
		redirectTo: '/fotos'
	});

});