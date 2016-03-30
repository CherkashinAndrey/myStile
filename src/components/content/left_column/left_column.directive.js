(function() {
  angular
  .module('app')
  .directive('stilLeftColumn', stilLeftColumnDirective);

  function stilLeftColumnDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/content/left_column/left_column.html'	
    };
  }
})();