angular.module('tarls-app')

	.controller('fbHomeCtrl', function($scope, $window, authService, $location){
		
		$scope.loader = function(){
			authService.getPhoto().then(function(response){
				$scope.picture = response.data.url;
			});

			authService.getProfile().then(function(response){
				$scope.full_name = response.name;
			});
			$scope.showProfile = true
		};


	});