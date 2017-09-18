angular.module('alurapic').controller('PhotoController', function($scope, $http, photoRegister, $routeParams) {
	
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

			//way to do 3
			
			photoRegister.register($scope.photo)
			.then(function(data){
				$scope.message = data.message;
				if(data.add) $scope.photo = {};
			})
			.catch(function(data) {
				$scope.message = data.message;
			});

			
			// if ($scope.photo._id) {

				

				//way to do 2
				// recursePhoto.update({fotoId: $scope.photo._id}, $scope.photo, function(){
				// 	$scope.photo = {};
				// 	$scope.message = "Your photo was edited";
				// }, function(error){
				// 	$scope.message = "Sorry, we have some problems with your form, please try again or contact the admin.";
				// });

				//way to do 1
				// $http.put('v1/fotos/' + $scope.photo._id, $scope.photo)
				// .success(function(){
				// 	$scope.photo = {};
				// 	$scope.message = "Your photo was edited successfull";
				// })
				// .error(function(){
				// 	$scope.message = "Sorry, we have some problems with your form, please try again or contact the admin.";
				// });
			// } else {

				//way to do 2
				// recursePhoto.save($scope.photo, function(){
				// 	$scope.photo = {};
				// 	$scope.message = "Your photo was uploaded";
				// }, function(error){
				// 	$scope.message = "Sorry, we have some problems with your form, please try again or contact the admin.";
				// });

				//way to do 1
				// $http.post('v1/fotos', $scope.photo)
				// .success(function() {
				// 	$scope.photo = {};
				// 	$scope.message = "Your photo was uploaded successfull";
				// })
				// .error(function(error){
				// 	$scope.message = "Sorry, we have some problems with your form, please try again or contact the admin.";
				// });
			// }
		}

	};
});