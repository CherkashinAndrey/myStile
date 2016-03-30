(function() {
  angular
  .module('app')
  .directive('stilHeaderNav', headerNavDirective);

  function headerNavDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/header/header_nav/header_nav.html'	
    }
  }
})();
