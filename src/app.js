
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

      .state('product', {
          url: '/product',
          views: {
              leftColumn: {
                  templateUrl: "src/components/content/left_column/left_column.html",
                  controller: "leftColumnController",
                  restrict: 'E'
              },
              content: {
                  templateUrl: "src/components/template/product.html",
                  controller: "productController",
                  restrict: 'E',
                  resolve: {
                      data: ['$stateParams','homeServices', function($stateParams, homeServices) {
                          return homeServices.getData();
                      }]
                  }

              },
          }
      })

      .state('summer', {
          url: '/product/summer',
          views: {
              leftColumn: {
                  templateUrl: "src/components/content/left_column/left_column.html",
                  controller: "leftColumnController",
                  restrict: 'E',
              },

              content: {
                  templateUrl: "src/components/template/product.html",
                  controller: "productController",
                  restrict: 'E',
                  resolve: {
                     data: ['$stateParams','homeServices', function($stateParams, homeServices) {
                        console.log('state"summer');
                         return homeServices.summerData();
                     }]
                  }

              },
          }
      })

      .state('winter', {
          url: '/product/winter',
          views: {
              leftColumn: {
                  templateUrl: "src/components/content/left_column/left_column.html",
                  controller: "leftColumnController",
                  restrict: 'E',
              },

              content: {
                  templateUrl: "src/components/template/product.html",
                  controller: "productController",
                  restrict: 'E',
                  resolve: {
                     data: ['$stateParams','homeServices', function($stateParams, homeServices) {
                         return homeServices.winterData();
                     }]
                  }
              },
          }
      })

      .state('home', {
          url: '/home',
          views: {
              content: {
                  templateUrl: "src/components/template/home.html",
                  controller: "productController",
                  restrict: 'E',
                  resolve: {
                      data: ['$stateParams','homeServices', function($stateParams, homeServices) {
                          return homeServices.getData();
                      }]
                  }

              },
          }
      })

      .state('about', {
          url: '/about',
          views: {
              content: {
                  templateUrl: "src/components/template/about.html",
                  controller: "aboutController",
                  restrict: 'E',
                  resolve: {
                      data: ['$stateParams','aboutServices', function($stateParams, aboutServices) {
                          return aboutServices.getData();
                      }]
                  }

              },
          }
      })

      .state('detail', {
          controller: 'homeController',
          templateUrl: 'src/components/template/detail.html',
          url: '/detail/id=:index',
          resolve: {
              data: ['$stateParams','homeServices', function($stateParams, homeServices) {

                  return homeServices.getData($stateParams.index);
              }]
          }
      })



   /*
  .state('home', {
          controller: 'rootController',
          restrict: 'E',
          url: '/home',
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
      })*/


    
    

  }

})()
