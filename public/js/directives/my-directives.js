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

});