angular.module('alurapic').controller('FotosController', function($scope, $http) {

	$scope.photos = [];
	$scope.filter = '';
	

	$http.get('v1/fotos')
	.success(function(photos) {
		$scope.photos = photos;
	})
	.error(function(error) {
		console.log(error);
	});

});