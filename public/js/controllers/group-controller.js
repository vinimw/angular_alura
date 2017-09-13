angular.module('alurapic').controller('GroupController', function($scope, $http) {

	$scope.groups = [];

	$http.get("v1/grupos")
	.success(function(group){
		$scope.groups = group;
	})
	.error(function(){
		console.log("error in groups");
	});
});