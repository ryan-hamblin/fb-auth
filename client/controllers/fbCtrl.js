angular.module('tarls-app')

	.controller('fbCtrl', function($scope, $window, authService, $location){
		$scope.fbLogin = function(){
			authService.FBlogin()
			
			$scope.FBdata = authService.FBdata;
			
			console.log('$scope.FBdata: ', $scope.FBdata);
			$location.path('/fbHome');
		};

		$scope.login = function(){

		}
	});