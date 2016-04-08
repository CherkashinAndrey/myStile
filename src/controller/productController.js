(function() {

  angular
    .module('app')
    .controller('productController', productController);

  function productController($scope, data) {  
  	console.log('productController');
	  $scope.products = data;
	  	console.log('$scope.dates',$scope.products);
	    //console.log('dsds', $scope.test.value);
		
  	    $scope.setImage = function(image, e) {
  	    	debugger
  	        console.log(image);
  	        $scope.dates.images[0].mainImage = image;
        };

	  }

})();
