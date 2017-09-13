angular.module('alurapic').controller('PhotoController', function($scope, $http, $routeParams) {
	
	$scope.photo = {};
	$scope.message = '';

	if ($routeParams.idPhoto) {
		$http.get('v1/fotos/' + $routeParams.idPhoto)
		.success(function(photo) {
			$scope.photo = photo;
		})
		.error(function(){
			$scope.message = "Error to find picture";
		});
	}

	$scope.submission = function() {

		if ($scope.form.$valid) {
			if ($scope.photo._id) {
				$http.put('v1/fotos/' + $scope.photo._id, $scope.photo)
				.success(function(){
					$scope.photo = {};
					$scope.message = "Your photo was edited successfull";
				})
				.error(function(){
					$scope.message = "Sorry, we have some problems with your form, please try again or contact the admin.";
				});
			} else {
				$http.post('v1/fotos', $scope.photo)
				.success(function() {
					$scope.photo = {};
					$scope.message = "Your photo was uploaded successfull";
				})
				.error(function(error){
					$scope.message = "Sorry, we have some problems with your form, please try again or contact the admin.";
				});
			}
		}

	};
});