(function() {

  angular
    .module('app')
    .controller('leftColumnController', leftColumnController);

  function leftColumnController($scope, checkedLeftColumnServices) {
    //debugger
    //$scope.aaa = true
     $scope.dates.leftMenu = [{
      summer: [],   //лето 
      winter: [],   //зима
      autumn: [],   //осень
      spring: []    //весна
    },
    {
      Trousers : [] ,  //Брюки 
      Skirts : [],     //Юбки 
      Dresses : [],    //Платья 
      Blouses : [],    //Блузы 
      tshirts: []     //Майки 
    },
    {
      available_true: [], //наличие есть 
      available_false: [] //наличие нету 
    }
    ]

    $scope.clickCheckbox = function(item) {
      // $scope.aaa = !$scope.aaa
      $scope.filtersCollection[item] = !$scope.filtersCollection[item];
      // console.log(item,$scope.filtersCollection[item]);
       $scope.$applyAsync();
/*      console.log('clickCheckbox.filtersCollectionDO', $scope.filtersCollection);
      $scope.filtersCollection = checkedLeftColumnServices.renameData(item);
      console.log('clickCheckbox.filtersCollection', $scope.filtersCollection);
     */
     // $scope.$apply();
    };

  	// $scope.dates.leftMenu.summer = {}; //лето 
  	// $scope.dates.leftMenu.winter = {}; //зима
  	// $scope.dates.leftMenu.autumn = {}; //осень
  	// $scope.dates.leftMenu.spring = {}; //весна

   // debugger
    // $scope.checkedCollection = {
    //   summer: false,
    //   winter: false,
    //   autumn: false,
    //   spring: false
    // };

    // console.log('summer',$scope.checkedCollection.summer);
    // console.log('winter',$scope.checkedCollection.winter);
    // console.log('autumn',$scope.checkedCollection.autumn);
    // console.log('spring',$scope.checkedCollection.spring);

   

  	//for (i =0; i < $scope.dates.leftMenu.length ; i++) {

      
  	// 	if ($scope.dates.leftMenu[i].season === 'summer') {
  	// 		$scope.dates.leftMenu.summer.push($scope.dates.leftMenu[i]);
  	// 	}else if ($scope.dates.leftMenu[i].season === 'winter') {
			// $scope.dates.leftMenu.winter.push($scope.dates.leftMenu[i]);
  	// 	}else if ($scope.dates.leftMenu[i].season === 'autumn') {
			// $scope.dates.leftMenu.autumn.push($scope.dates.leftMenu[i]);
  	// 	}else if ($scope.dates.leftMenu[i].season === 'spring') {
			// $scope.dates.spring.spring.push($scope.dates.leftMenu[i]);
  	// 	}
  	//}
  	//console.log('$scope.leftMenu',$scope.leftMenu);


  }

})();
