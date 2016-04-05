(function() {

	'use strict';

	angular.module('myApp.view1', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl: 'view1/view1.html',
				controller: 'View1Ctrl'
			});
		}])
		.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {
			// $scope
			$scope.user = {
				flag: 'GermanFlag',
				firstName: 'Sebastian',
				lastName: 'Vettel', 
				country: 'German',
				team: 'Red Bull',
				bod:  new Date(1987, 7, 3),
				biolink: '#'
			};

			$http.get('mock_data.json').success(function(datas) {
				$scope.datas = datas;
			});

			$scope.dataTable = [{}, {}]


		}]);
})()