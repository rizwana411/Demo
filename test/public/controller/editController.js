app.controller('editController', function($scope, $state, $timeout, empService) {
	
	$scope.emp = empService.dataDefault().then(function(data){
		console.log('controller is running ',data);
		
		$scope.id = data.id;
		$scope.name = data.name;
		$scope.phone = parseInt(data.phone);
		$scope.address_line1 = data.address.address_line1;
		$scope.address_line2 = data.address.address_line2;
		$scope.city = data.address.city;
		$scope.postal_code = data.address.postal_code;
	
	});
	
	$scope.submit = function(id){
	  var emp = {
            "id":$scope.id,
            "name": $scope.name,
			"phone":$scope.phone,
			"address":{
					"city":$scope.city,
					"address_line1":$scope.address_line1,
					"address_line2":$scope.address_line2,
					"postal_code":$scope.postal_code
			}
		};
		
		 
		  console.log('>>>>>>>>',$scope.phone , $scope.name.length,  emp);
		  
	  if($scope.phone && $scope.name.length > 3){
		  
		  empService.set($scope.id,emp);
		 
		  
		  $timeout(function(){
			 $state.go('task1'); 
		  },1000);
		  
	  }
	  
  }
	
	
    
});
