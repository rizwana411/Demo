app.filter('tel', function () {
    return function (tel) {
        if (!tel) { return 'NA'; }

        var value = tel.toString();

        if (value.match(/[^0-9]/)) {
			return 'NA';
        }else{
			 return tel;
		}	
	}
});	
