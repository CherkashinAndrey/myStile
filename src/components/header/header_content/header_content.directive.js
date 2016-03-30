(function() {
  angular
  .module('app')
  .directive('stilHeaderContent', headerContentDirective);

  function headerContentDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/header/header_content/header_content.html'	
    };
  }
})();
