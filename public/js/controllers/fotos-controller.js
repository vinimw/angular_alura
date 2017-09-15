angular.module('alurapic').controller('FotosController', function($scope, $http, recursePhoto) {

	$scope.photos = [];
	$scope.filter = '';
	$scope.message = '';

	recursePhoto.query(function(photos){
		$scope.photos = photos;
	}, function(error){
		console.log(error);
	});

	// $http.get('v1/fotos')
	// .success(function(photos) {
	// 	$scope.photos = photos;
	// })
	// .error(function(error) {
	// 	console.log(error);
	// });

	$scope.remove = function(photo) {
		//remove photo
		
		recursePhoto.delete({fotoId: photo._id}, function(){
			var indexPhoto = $scope.photos.indexOf(photo);
			$scope.photos.splice(indexPhoto, 1);
			$scope.message = "Image " + photo.titulo + " has been deleted";

		}, function(error){
			$scope.message = "Image " + photo.titulo + " has not been deleted";
		});

		// $http.delete('v1/fotos/' + photo._id)
		// .success(function(){
		// 	var indexPhoto = $scope.photos.indexOf(photo);
		// 	$scope.photos.splice(indexPhoto, 1);
		// 	$scope.message = "Image " + photo.titulo + " has been deleted";
		// })
		// .error(function(){
		// 	$scope.message = "Image " + photo.titulo + " has not been deleted";
		// });
	}

});