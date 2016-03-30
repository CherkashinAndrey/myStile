(function() {
  angular
  .module('app')
  .directive('stilConteiner', stilConteinerDirective);

  function stilConteinerDirective() {
    return {
          restrict: 'E',
          templateUrl: 'src/components/content/conteiner/conteiner.html'	
    };
  }
})();
