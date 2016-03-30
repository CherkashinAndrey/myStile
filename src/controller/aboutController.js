(function() {

  angular
    .module('app')
    .controller('aboutController', aboutController);

  function aboutController($scope, data) {
  	$scope.date = data;
  	console.log('$scope.dates',$scope.date);
  }

})();
