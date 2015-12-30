angular.module('tarls-app', [
	'ui.router', 
	'firebase',
	'tarls-app.authService'
	])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
	    .state('login', {
	      url: '/login',
	      templateUrl: 'views/login.html',
	      controller: 'fbCtrl'
	    })
	    .state('route', {
	    	url: '/',
	    	templateUrl: 'views/route.html'
	    })
	    .state('loggedIn', {
	    	url: '/fbHome',
	    	templateUrl: 'views/fbHome.html',
	    	controller: 'fbHomeCtrl'
	    })


	 
	})

	.run(function($rootScope, $window){
		$rootScope.user = {};
		 $window.fbAsyncInit = function() {;
		    FB.init({
		      appId      : '1662635684018856',
		      xfbml      : true,
		      cookie     : true,
		      version    : 'v2.5'
		    });
		  };

		  (function(d, s, id){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "//connect.facebook.net/en_US/sdk.js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
	});


