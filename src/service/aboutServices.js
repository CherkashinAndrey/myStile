(function() {

  angular
    .module('app')
    .service('aboutServices', aboutServices)
    .constant('DATA', {
        name: 'SITEabout',
        site: 'MYSITEabout'
     }
     

     );    

  function aboutServices($http, DATA) {
    'ngInject'
    return {
      getData: function() {
        return DATA
      }
    }
  }

})();
