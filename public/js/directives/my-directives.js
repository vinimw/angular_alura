angular.module('myDirectives', [])
.directive('myPanel', function() {

	var ddo = {};

	ddo.restrict = "AE";

	ddo.scope = {
		title : "@" // if you can use the expression you need to change @ to &
	};

	ddo.transclude = true;
	ddo.templateUrl = 'js/directives/panel.html';

	return ddo;

});
