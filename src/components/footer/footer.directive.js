(function() {
  angular
  .module('app')
  .directive('stilFooter', stilFooterDirective);

  function stilFooterDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/footer/footer.html'	
    };
  }
})();