(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope, data) {
  	$scope.dates = data;
  	//debugger
  	console.log('$scope.dates',$scope.dates);
  }

})();
