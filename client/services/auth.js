angular.module('tarls-app.authService', [])

	.factory('authService', function($firebase, $q){

		var FBlogin = function(){
			var ref = new Firebase("https://tarley-fass.firebaseio.com");
			ref.authWithOAuthPopup("facebook", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    console.log("Authenticated successfully with payload:", authData.facebook);
			  }
			});
		};

     var getPhoto = function() {
	    var deferred = $q.defer();
	    FB.api('/me/picture?type=normal', function(response) {
	        if (!response || response.error) {
	            deferred.reject('Error occured');
	        } else {
	            deferred.resolve(response);
	        }
	    });
	    return deferred.promise;
      }
     var getUserPhotos = function() {
	    var deferred = $q.defer();
	    FB.api('me/photos?fields=album', function(response) {
	        if (!response || response.error) {
	            deferred.reject('Error occured');
	        } else {
	            deferred.resolve(response);
	        }
	    });
	    return deferred.promise;
      }

     var getProfile = function(){
     	var deferred = $q.defer();
     	FB.api('/me', 
     	{
     		fields: 'link, name, about, hometown'
     	},
     		function(response){
     		if(!response || response.error){
     			deferred.reject('Error occured');
     		}else{
     			deferred.resolve(response);
     		}
     	});
     	return deferred.promise;
     }
    
		return {
			FBlogin: FBlogin,
			getPhoto: getPhoto,
			getProfile: getProfile,
			getUserPhotos: getUserPhotos
		}
	});