angular.module('tarls-app.authService', [])

	.factory('authService', function($firebase, $q){

		var FBdata = {};
		var FBlogin = function(){
			var ref = new Firebase("https://tarley-fass.firebaseio.com");
			ref.authWithOAuthPopup("facebook", function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			  	authData.facebook = FBdata;
			    // console.log("Authenticated successfully with payload:", authData.facebook);
			  }
			});
		};

     var getPhoto = function() {
          var deferred = $q.defer();
          FB.api('/me/picture', function(response) {
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
     	FB.api('/me', function(response){
     		if(!response || response.error){
     			deferred.reject('Error occured');
     		}else{
     			deferred.resolve(response);
     		}
     	});
     	return deferred.promise;
     }
    

		// var userStore = function(user){
		// 	var ref = new Firebase('https://tarley-fass.firebaseio.com');

		// 	ref.createUser({
		// 		user
		// 	})
		// };
		return {
			FBlogin: FBlogin,
			FBdata: FBdata,
			getPhoto: getPhoto,
			getProfile: getProfile
		}
	});