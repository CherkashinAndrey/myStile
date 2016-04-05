(function() {

  angular
    .module('app')
    .service('checkedLeftColumnServices', checkedLeftColumnServices)


  function checkedLeftColumnServices($http) {
	checkedCollection = {
      summer: false,
      winter: false,
      autumn: false,
      spring: false
    };

    return {
    	getData: function() {
    		return checkedCollection
    	},

        renameData: function(item) {
      	    checkedCollection[item] = !checkedCollection[item];
      	    console.log('checkedCollection', checkedCollection);
            return checkedCollection
        }


    }
  }

})();

