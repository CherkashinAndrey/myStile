(function() {
  angular
  .module('app')
  .directive('stilHeaderTop', headerTopDirective);

  function headerTopDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/header/header_top/header_top.html'	
    };
  }
})();
