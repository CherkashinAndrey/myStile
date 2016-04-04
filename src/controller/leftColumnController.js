(function() {

  angular
    .module('app')
    .controller('leftColumnController', leftColumnController);

  function leftColumnController($scope, homeServices) {
  	$scope.leftMenu = homeServices.getData();
  	$scope.leftMenu.summer = []; //лето 
  	$scope.leftMenu.winter = []; //зима
  	$scope.leftMenu.autumn = []; //осень
  	$scope.leftMenu.spring = []; //весна


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
  	console.log('$scope.leftMenu',$scope.leftMenu);
  }

})();
