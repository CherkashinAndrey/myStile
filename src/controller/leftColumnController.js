(function() {

  angular
    .module('app')
    .controller('leftColumnController', leftColumnController);

  function leftColumnController($scope,  checkedLeftColumnServices) {
    //debugger
    $scope.checkedCollection = {
        summer: false,
        winter: false,
        autumn: false,
        spring: false
    };
      $scope.products = [];
      // $scope.dates.leftMenu = [{
      //  summer: [],   //лето
      //  winter: [],   //зима
      //  autumn: [],   //осень
      //  spring: []    //весна
      //},
      //{
      //  Trousers : [] ,  //Брюки
      //  Skirts : [],     //Юбки
      //  Dresses : [],    //Платья
      //  Blouses : [],    //Блузы
      //  tshirts: []     //Майки
      //},
      //{
      //  available_true: [], //наличие есть
      //  available_false: [] //наличие нету
      //}
      //]

    $scope.clickCheckbox = function(item) {
     debugger
        $scope.checkedCollection = checkedLeftColumnServices.renameData(item);

        if (item == 'summer') {
            $scope.products =  checkedLeftColumnServices.getDataSummer();
            console.log($scope.products);
        } else if(item == 'winter') {
            $scope.products = checkedLeftColumnServices.getDataWinter();
            console.log($scope.products);
        }

    };

  }

})();
