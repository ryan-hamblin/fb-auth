angular.module('tarls-app')

	.controller('fbHomeCtrl', function($scope, $window, authService, $location){
		
		$scope.loader = function(){
			authService.getPhoto().then(function(response){
				$scope.picture = response.data.url;
				console.log('Pic: ', $scope.picture);
			});
			authService.getProfile().then(function(response){
				console.log('response: ', response);
				$scope.full_name = response.name;
				$scope.fb_link = response.link;
				$scope.about = response.about;
			});
			authService.getUserPhotos().then(function(response){
				console.log('Photos from User: ', response);
			});
			$scope.showProfile = true
		};


	});