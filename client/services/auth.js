angular.module('tarls-app.authService', [])

	.factory('authService', function($firebase){

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

		// var userStore = function(user){
		// 	var ref = new Firebase('https://tarley-fass.firebaseio.com');

		// 	ref.createUser({
		// 		user
		// 	})
		// };
		return {
			FBlogin: FBlogin,
			FBdata: FBdata
		}
	});