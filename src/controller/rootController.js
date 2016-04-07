(function() {

  angular
    .module('app')
    .controller('rootController', rootController);

  function rootController($scope, homeServices, checkedLeftColumnServices) {
   // $scope.leftMenu = homeServices.getData();
    $scope.filtersCollection ;//= checkedLeftColumnServices.getData();
    $scope.dates = homeServices.getData();

    //console.log('$scope.filtersCollection',$scope.filtersCollection);



  }

})();
