(function() {
  angular
  .module('app')
  .directive('stilContent', stilContentDirective);

  function stilContentDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/content/content.html'	
    };
  }
})();
