angular.module('myDirectives', [])
.directive('myPanel', function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		title : "@"
	};

	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/panel.html';

	return ddo;

})
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
})
;
