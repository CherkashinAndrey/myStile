(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope, data) {
    $scope.dates = data;
    
    // $scope.dates.map(function(item) { 
    //   if (item.title.length > 15) {
    //     item.title = item.title.split('').splice(0,15).join('')
    //   };
    // })

  	console.log('$scope.dates',$scope.dates);
    console.log('$scope.test',$scope.test);

	
	$scope.setImage = function(image, e) {
	 // e.preventDefault();
	  console.log(image);
	  $scope.dates.images[0].mainImage = image;
      //$scope.mainImage = image;
    };

  }

})();
