(function() {

  angular
    .module('app')
    .controller('filtersCollectionsController', filtersCollectionsController);

  function filtersCollectionsController($scope, data) {


    $scope.filter = data;

    $scope.filters = [...$scope.filter];
    console.log('$scope.filtersCollection',$scope.filtersCollection)
  //  debugger

    //angular.extend($scope.filters, data);

    

    // $scope.applyFilters = function() {
    //     debugger
    // $scope.filtersCollection = checkedLeftColumnServices.getData();
    // console.log('$scope.filtersCollection',$scope.filtersCollection);
    // };


  }

})();
