(function() {

  angular
    .module('app')
    .controller('rootController', rootController);

  function rootController($scope, $rootScope, checkedLeftColumnServices) {
  	console.log('rootScope', $rootScope);

  	$scope.test = {value: checkedLeftColumnServices.getData()}

    $scope.applyFilters = function() {
        debugger
    $scope.filtersCollection = checkedLeftColumnServices.getData();
    $rootScope.filtersCollection = checkedLeftColumnServices.getData();
    console.log('$scope.filtersCollection',$scope.filtersCollection);
    };


  }

})();
