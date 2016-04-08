(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope, data) {
    $scope.dates = data;
  	console.log('$scope.dates',$scope.dates);
    //console.log('dsds', $scope.test.value);
	
  	  $scope.setImage = function(image, e) {
  	    console.log(image);
  	    $scope.dates.images[0].mainImage = image;
      };



  }

})();
