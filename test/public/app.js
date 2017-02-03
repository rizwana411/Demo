// app.js
var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/task1');
    
    $stateProvider
        .state('task1', {
        url: '/task1',
        templateUrl: 'views/task1.html',
		controller: 'task1Controller'
    })
	.state('task2', {
        url: '/task2',
        templateUrl: 'views/task2.html',
		controller:'task1Controller'
    })
	.state('task3', {
        url: '/employee/add',
        templateUrl: 'views/add.html',
		controller:'addController'
    })
	.state('task4', {
        url: '/employee/1/edit',
        templateUrl: 'views/edit.html',
		controller:'editController'
    });
});