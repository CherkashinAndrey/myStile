(function() {
  angular
  .module('app')
  .directive('pagination', pagination);

  function pagination() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/pagination/pagination.html'	
    };
  }
})();