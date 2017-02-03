app.controller('task2Controller', function($scope, $timeout, $state, empService) {
    
    	
	$scope.empDetails = empService.data();
	
	$scope.edit = function(id){
		empService.get(id);
		
		$timeout(function(){
			$state.go('task4');
		},500);
	}
	
	console.log('controller is running ',$scope.emp);
    
});