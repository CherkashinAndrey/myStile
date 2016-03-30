(function() {

  angular
    .module('app')
    .controller('homeController', homeController);

  function homeController($scope, data) {
  	$scope.dates = data;
  	console.log('$scope.dates',$scope.dates);
  }

})();
