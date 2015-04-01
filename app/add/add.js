'use strict';

angular.module('walletsApp.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'add/add.html',
        controller: 'AddCtrl'
    });
}])

.controller('AddCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.movement = new Movement();
    $scope.cost = 'cost';
    $scope.movement_number_badge = 0;

    $scope.add = function () {

        if ($scope.cost === 'cost')
            $scope.movement.amount *= -1;

        $http.post('/movement', $scope.movement).
        success(function(data, status, headers, config) {

            $scope.movement_number_badge += 1;
            angular.element("#movement-badge").text($scope.movement_number_badge);
            $scope.statusclass = 'alert alert-success';
            $scope.statustext = 'New movement(s)';
            $scope.statusshow = true;

            $scope.movement = new Movement();

        }).
        error(function(data, status, headers, config) {
            $scope.statustext = 'Opssssss! Something was wrong. Status ' + status + ' Data ' + data;
            $scope.statusclass = 'alert alert-danger';
            $scope.statusshow = true;

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

}]);