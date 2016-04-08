
(function () {
  angular
  .module('app', ['ui.router','slick'] )
  .config(routes)
  //.run(run)

  function run ($rootScope, $state ) {

  }

  function routes ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  $stateProvider
  .state('home', {
        controller: 'rootController',
        restrict: 'E',
        url: '/home',
       // templateUrl: 'src/components/template/root.html',
        templateUrl: 'src/components/template/home.html',
        resolve: {
          data: ['$stateParams','homeServices', function($stateParams, homeServices) {
            return homeServices.getData();
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

  .state('product', {
          controller: 'productController',
          templateUrl: 'src/components/template/product.html',
          url: '/product',
          resolve: {
            data: ['$stateParams','productServices', function($stateParams, productServices) {
              return productServices.getData();
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

  .state('sale', {
          controller: 'saleController',
          templateUrl: 'src/components/template/sale.html',
          url: '/sale',
          resolve: {
            data: ['$stateParams','saleServices', function($stateParams, saleServices) {
              return saleServices.getData();
            }]
      }
    })


  .state('summer', {
        controller: 'filtersCollectionsController',
        templateUrl: 'src/components/template/filter.html',
        url: '/summer',
        resolve: {
          data: ['$stateParams','checkedLeftColumnServices', function($stateParams, checkedLeftColumnServices) {
            return checkedLeftColumnServices.getDataSummer();
          }]
    }
  })

  .state('winter', {
        controller: 'filtersCollectionsController',
        templateUrl: 'src/components/template/filter.html',
        url: '/winter',
        resolve: {
          data: ['$stateParams','checkedLeftColumnServices', function($stateParams, checkedLeftColumnServices) {
            return checkedLeftColumnServices.getDataWinter();
          }]
    }
  })


    
    

  }

})()
