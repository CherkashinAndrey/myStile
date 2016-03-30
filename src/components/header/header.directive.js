(function() {
  angular
  .module('app')
  .directive('header', headerDirective);

  function headerDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/header/header.html'	
    };
  }
})();
