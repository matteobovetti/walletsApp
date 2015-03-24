'use strict';

angular.module('walletsApp.statistics', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/statistics', {
			templateUrl: 'statistics/statistics.html',
			controller: 'StatisticsCtrl'
		});
	}])

	.controller('StatisticsCtrl', ['$scope', '$http', function($scope, $http) {

		$scope.year_selected = moment().year();
		$scope.month_selected = moment().month() + 1;
		$scope.total_cost = 0;
		$scope.total_income = 0;
		$scope.percentage_cost_income = 0;
		$scope.difference_cost_income = 0;
		$scope.total_yearly_cost = 0;
		$scope.total_yearly_income = 0;

		$scope.getStatistics = function() {

			$scope.total_cost = 0;
			$scope.total_income = 0;
			$scope.total_yearly_cost = 0;
			$scope.total_yearly_income = 0;

			$http.get('/statistics?y=' + $scope.year_selected + '&m=' + $scope.month_selected).
			success(function(data, status, headers, config) {
				
				$scope.total_cost = data.total_cost;
				$scope.total_income = data.total_income;
				$scope.total_yearly_cost = data.total_yearly_cost;
				$scope.total_yearly_income = data.total_yearly_income;
				$scope.percentage_cost_income = data.percentage_cost_income;
				$scope.difference_cost_income = data.difference_cost_income;

			}).
			error(function(data, status, headers, config) {
				alert('Opssss!!! the server is not ready');

				console.log(data);
				console.log(status);
			});

		};

		$scope.getStatistics();

	}]);