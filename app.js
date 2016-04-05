(function() {


	'use strict';


	angular.module('myApp', ['ngRoute', 'myApp.view1', 'myApp.view2'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/view1', {
				templateUrl: 'view1/view1.html',
				controller: 'View1Ctrl'
			});

			$routeProvider.when('/view2', {
				templateUrl: 'view2/view2.html',
				controller: 'View2Ctrl'
			});

			$routeProvider.otherwise({redirect: '/view1'});
		}]);
})();