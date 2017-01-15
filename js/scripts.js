(function() {

var app = angular.module("formApp", []);

app.controller("FormController", ["$scope", function($scope) {

	$scope.register = function() {
		$scope.submitted = true;
	};
	

}]);

})();