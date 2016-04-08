(function() {

  angular
    .module('app')
    .controller('saleController', saleController);

  function saleController($scope, data) {
      console.log('SALE');
      $scope.sale = data;
  }

})();
