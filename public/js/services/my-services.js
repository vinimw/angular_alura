angular.module('myService', ['ngResource'])
.factory('recursePhoto', function($resource){
	
	return $resource("v1/fotos/:fotoId", null, {
		update: {
			method: 'PUT'
		}
	});	
})
;