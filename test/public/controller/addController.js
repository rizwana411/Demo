app.controller('addController', function($scope, $state, $timeout, empService) {
   
	 	
	$scope.empDetails = empService.data();
	$scope.hide=false;
	
	$scope.add = function(){
		$scope.hide=true;
	}
	
  $scope.submit = function(){
	  var emp = {
            "id":$scope.id,
            "name": $scope.name,
			"phone":$scope.phone,
			"address":{
					"city":$scope.city,
					"address_line1":$scope.address1,
					"address_line2":$scope.address2,
					"postal_code":$scope.postalCode
			}
		};
		
	  if($scope.phone && $scope.name.length > 3){
		  
		  empService.save(emp);
		  
		  $timeout(function(){
			 $state.go('task1'); 
		  },1000);
		  
	  }
  }
	
	$scope.edit = function(id){
		empService.get(id);
		
		$timeout(function(){
			$state.go('task4');
		},500);
	}
	    
});
