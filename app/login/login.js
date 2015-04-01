'use strict';

angular.module('walletsApp.login', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'login/login.html',
			controller: 'LoginCtrl'
		});
	}])

	.controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {
        
        $scope.username = 'matteo';
        $scope.password = '';
        
		$scope.login = function() {

			$http.get('/login?u=' + $scope.username + '&p=' + $scope.password).
			success(function(data, status, headers, config) {
                
                $location.path('/statistics')

			}).
			error(function(data, status, headers, config) {
				alert('Login incorrect. Try again!');

				console.log(data);
				console.log(status);
			});

		};

	}]);