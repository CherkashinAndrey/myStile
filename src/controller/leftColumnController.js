(function() {

  angular
    .module('app')
    .controller('leftColumnController', leftColumnController);

  function leftColumnController($scope, homeServices, checkedLeftColumnServices) {

  	$scope.leftMenu = homeServices.getData();

    $scope.test.value = 'dddd';
    
  	$scope.leftMenu.summer = []; //лето 
  	$scope.leftMenu.winter = []; //зима
  	$scope.leftMenu.autumn = []; //осень
  	$scope.leftMenu.spring = []; //весна
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

  	for (i =0; i < $scope.leftMenu.length ; i++) {
  		if ($scope.leftMenu[i].season === 'summer') {
  			$scope.leftMenu.summer.push($scope.leftMenu[i]);
  		}else if ($scope.leftMenu[i].season === 'winter') {
			$scope.leftMenu.winter.push($scope.leftMenu[i]);
  		}else if ($scope.leftMenu[i].season === 'autumn') {
			$scope.leftMenu.autumn.push($scope.leftMenu[i]);
  		}else if ($scope.leftMenu[i].season === 'spring') {
			$scope.leftMenu.spring.push($scope.leftMenu[i]);
  		}
  	}
  	//console.log('$scope.leftMenu',$scope.leftMenu);

    $scope.clickCheckbox = function(item, e) {
      //debugger
      checkedLeftColumnServices.renameData(item)
    };
  }

})();
