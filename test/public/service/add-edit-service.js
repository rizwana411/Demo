app.service('empService', function($q){
	
	var editData = {};
	var emp = {"data" :[
        {
            "id":1,
            "name": "Jhon",
			"phone":"9999999999",
			"address":{
					"city":"Pune",
					"address_line1":"ABC road",
					"address_line2":"XYZ buliding",
					"postal_code":"12345"
			}
		},	
        {
            "id":2,
            "name": "Jacob",
			"phone":"AZ99A99PQ9",
			"address":{
					"city":"Pune",
					"address_line1":"PQR road",
					"address_line2":"ABC buliding",
					"postal_code":"13455"
			}
		},
		{
            "id":3,
            "name": "Abhi",
			"phone":"9898989862",
			"address":{
					"city":"Pune",
					"address_line1":"LMN road",
					"address_line2":"P buliding",
					"postal_code":"41111"
			}
		}	
    ]};
	
	this.data = function(){
		return emp.data;
	}	

    
	this.save = function(empDetail){
		emp.data.push(empDetail);
	}
	
	this.get = function(id,values){
			var data = emp.data;
		
		for(var i=0; i<emp.data.length; i++){
			angular.forEach(data[i], function(value, key) {
				if(key == 'id' && value == id){
						editData = data[i];
				}
				
			});
		}	
	
	}
	
	this.dataDefault = function(){
		  var deferred = $q.defer();
		        deferred.resolve(editData);
	 return deferred.promise;
	
	}
	
	this.set = function(id,values){
		
		for(var i=0; i<emp.data.length; i++){
			if(emp.data[i].id == id){	
						emp.data[i].id = values.id;
						emp.data[i].name = values.name;
						emp.data[i].phone = values.phone;
						emp.data[i].address.city = values.address.city;
						emp.data[i].address.address_line1 = values.address.address_line1;
						emp.data[i].address.address_line2 = values.address.address_line2;
						emp.data[i].address.postal_code = values.address.postal_code;

		}	
		}
	}
})