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

      getDataSummer: function () {
        return [{
            id: 'id_1',
            article: '343434',
            available: true,
            sale: 10,
            sex: 'man',
            category: 'skirt',
            season: 'summer',
            composition: 'Nike',
            atribut: 'Catton',
            color: 'black',
            title: 'Майка шифон волан',
            images: [{
              mainImage: '2',
              productGallery: ['2_1', '2_2']
            }],
            size: ['M','XL'],
            price: 100,
            description: 'Платье приталенного силуэта . Декорировано итальянским кружевом',
            novelty: true
          },
          ]
      },

      getDataWinter: function () {
          //debugger
        return [{
            id: 'id_2',
            article: '5656565',
            available: false,
            sale: 25,
            atribut: 'len',
            sex: 'woman',
            category: 'jacket',
            season: 'winter',
            composition: 'Diadora',
            color: 'blue',
            title: 'White jacket1',
            images: [{
              mainImage: '2',
              productGallery: ['2_1', '2_2', '2_3']
            }],
            size: ['M','L','XL'],
            price: 1000,
            description: 'Платье приталенного силуэта с пышной юбкой. Тренд 2014 принт " монетки " Dolce Gabbana . Декорировано итальянским кружевом',
            novelty: true
          },
          {
            id: 'id_3',
            article: '5656565',
            available: true,
            sale: 25,
            atribut: 'len',
            sex: 'man',
            category: 'jacket',
            season: 'winter',
            composition: 'Diadora',
            color: 'blue',
            title: 'White jacket2',
            images: [{
              mainImage: '2_2',
              productGallery: ['2_1', '2_3']
            }],
            size: ['M','L','XL','XLL'],
            price: 500,
            description: 'Платье приталенного силуэта с пышной юбкой. 2016',
            novelty: true
          }
        ]
      }

    }
  }

})();

