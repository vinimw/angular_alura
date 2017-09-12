angular.module('alurapic').controller('PhotoController', function($scope,$http) {
	
	$scope.photo = {};
	$scope.message = '';

	$scope.submission = function() {

		if ($scope.form.$valid) {
			$http.post('v1/fotos', $scope.photo)
			.success(function() {
				$scope.photo = {};
				$scope.message = "Your photo was uploaded successfull";
			})
			.error(function(error){
				$scope.message = "Sorry, we have some problems with your form, please try again or contact the admin.";
			});
		}

	};
});