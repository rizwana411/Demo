app.controller('task1Controller', function($scope, $timeout, $state, empService) {
    
    	
	$scope.empDetails = empService.data();
	$scope.query = {}
    $scope.queryBy = '$'
	
	console.log('controller is running ',$scope.emp);
    
});