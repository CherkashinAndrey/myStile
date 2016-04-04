(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope, data) {
  	$scope.dates = data;
  	//$scope.mainImage = data.images[0].mainImage;
  	console.log('$scope.dates',$scope.dates);

	
	$scope.setImage = function(image, e) {
	 // e.preventDefault();
	  console.log(image);
	  $scope.dates.images[0].mainImage = image;
      //$scope.mainImage = image;
    };

  }

})();
