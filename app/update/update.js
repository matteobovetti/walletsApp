'use strict';

angular.module('walletsApp.update', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/update/:movId', {
        templateUrl: 'update/update.html',
        controller: 'UpdateCtrl'
    });
}])

.controller('UpdateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

    $scope.movement = new Movement();
    $scope.cost = 'cost';

    $scope.getMovement = function() {

        $http.get('/movement/'+ $routeParams.movId).
        success(function(data, status, headers, config) {

            $scope.movement = data;
            if($scope.movement.amount < 0) {
                $scope.cost = 'cost';
                $scope.movement.amount *= -1;
            }
            else
                $scope.cost = 'income';
        }).
        error(function(data, status, headers, config) {
            alert('Opssss!!! the server is not ready');

            console.log(data);
            console.log(status);
        });

    };

    $scope.update = function () {

        if ($scope.cost === 'cost')
            $scope.movement.amount *= -1;

        $http.put('/movement/' + $routeParams.movId, $scope.movement).
        success(function(data, status, headers, config) {
            $location.path('/movements')
        }).
        error(function(data, status, headers, config) {
            alert('Opssss!!! the server is not ready');

            console.log(data);
            console.log(status);
        });
    };

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
    };

    $scope.getMovement();

}]);