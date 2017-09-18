angular.module('myService', ['ngResource'])
.factory('recursePhoto', function($resource){
	
	return $resource("v1/fotos/:fotoId", null, {
		update: {
			method: 'PUT'
		}
	});	
})
.factory('photoRegister', function(recursePhoto, $q){

	var service = {};

	service.register = function(photo) {
		return $q(function(resolve, reject){
			if (photo._id) {

				recursePhoto.update({fotoId: photo._id}, photo, function() {
					resolve({
						mesage: 'Photo' + photo.titulo + "was changed",
						add: false
					});
				}, function(error){
					console.log(error);
					reject({
						message: "Photo was not changed"
					});
				});

			} else {
				recursePhoto.save(photo, function() {
					resolve({
						message: "Photo " + photo.titulo + "was uploaded",
						add: true
					});
				}, function(error){
					console.log(error);
					reject({
						message: "Photo was not uploaded"
					});
				});
			}
		});
	};
	return service;
	
})
;