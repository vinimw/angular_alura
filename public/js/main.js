angular.module('alurapic', ['myDirectives','ngAnimate','ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/photos', {
		templateUrl: 'partials/home.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/photos/new', {
		templateUrl: 'partials/new.html',
		controller: 'PhotoController'
	});

	$routeProvider.otherwise({
		redirectTo: '/photos'
	});

});