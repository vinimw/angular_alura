angular.module('myPhoto', [])
.directive('myPhoto', function() {
	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		title : "@",
		url : "@"
	};

	// ddo.transclude = true;
	ddo.templateUrl = 'js/directives/photo.html';

	return ddo;
});
