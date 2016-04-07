
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
        controller: 'rootController',
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
        controller: 'homeController',
        templateUrl: 'src/components/template/detail.html',
        url: '/home/detail/id=:index',
        resolve: {
          data: ['$stateParams','homeServices', function($stateParams, homeServices) {
            
            return homeServices.getData($stateParams.index);
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

  .state('summer', {
        controller: 'filtersCollectionsController',
        templateUrl: 'src/components/template/root.html',
        url: '/summer',
        resolve: {
          data: ['$stateParams','checkedLeftColumnServices', function($stateParams, checkedLeftColumnServices) {
            return checkedLeftColumnServices.getDataSummer();
          }]
    }
  })

  .state('winter', {
        controller: 'filtersCollectionsController',
        templateUrl: 'src/components/template/root.html',
        url: '/winter',
        resolve: {
          data: ['$stateParams','checkedLeftColumnServices', function($stateParams, checkedLeftColumnServices) {
            return checkedLeftColumnServices.getDataWinter();
          }]
    }
  })


    
    

  }

})()
