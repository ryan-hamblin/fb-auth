angular.module('tarls-app')

	.controller('fbCtrl', function($scope, $window, authService, $location){
		$scope.fbLogin = function(){
			authService.FBlogin();
			$location.path('/fbHome');
		};

		$scope.login = function(){

		}
	});