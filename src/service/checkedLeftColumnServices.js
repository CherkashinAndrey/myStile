(function() {

  angular
    .module('app')
    .service('checkedLeftColumnServices', checkedLeftColumnServices)


  function checkedLeftColumnServices($http, $rootScope) {
	checkedCollection = {
      summer: false,
      winter: false,
      autumn: false,
      spring: false
    };

    return {
    	getData: function () {
    		return checkedCollection
    	},

      renameData: function ( item ) {
         // debugger
          checkedCollection[item] = !checkedCollection[item];
          console.log('->',checkedCollection)
          $rootScope.$applyAsync(checkedCollection);
          return checkedCollection
      },


    }
  }

})();

