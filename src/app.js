
(function () {
  angular
  .module('app', ['ui.router','slick'] )
  .config(routes)
  //.run(run)

  function run ($rootScope, $state ) {
    // loadingService.initLoading();
    // allPhotosSliderServices.getPhotos();
  }

  function routes ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  $stateProvider
  .state('home', {
        controller: 'homeController',
        restrict: 'E',
        url: '/home',
        templateUrl: 'src/components/template/root.html',
        resolve: {
          data: ['$stateParams','homeServices', function($stateParams, homeServices) {
            return homeServices.getData();
          }]
        }     
  })

  .state('detail', {
        controller: 'aboutController',
        templateUrl: 'src/components/template/detail.html',
        url: '/home/detail/id=:id',
        resolve: {
          data: ['$stateParams','homeServices', function($stateParams, homeServices) {
            
            return homeServices.getData($stateParams.id);
          }]
    }
  })

  .state('about', {
        controller: 'aboutController',
        templateUrl: 'src/components/template/about.html',
        url: '/about',
        resolve: {
          data: ['$stateParams','aboutServices', function($stateParams, aboutServices) {
            
            return aboutServices.getData($stateParams.id);
          }]
    }
  })

    
    

  }

})()
