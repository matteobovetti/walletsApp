'use strict';

// Declare app level module which depends on views, and components
angular.module('walletsApp', [
	'ngRoute',
	'walletsApp.add',
	'walletsApp.update',
	'walletsApp.movements',
	'walletsApp.statistics',
	'walletsApp.version',
    'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/statistics'});
}]);


/*
 * Movement class.
 */

function Movement() {
	this.date = new Date();
	this.description = '';
	this.amount = 0.0;
	this.tags = '';
	this.wallet = "home";
	this.PoU = 100.0;
	this.frequencytype = "m";
	this.frequency = 1;
}