(function() {

  angular
    .module('app')
    .service('aboutServices', aboutServices)
    .constant('DATA', {
        name: 'SITEabout',
        site: 'MYSITEabout'
     }
     

     );    

  function aboutServices($http, DATA) {
    'ngInject'
    return {
      getData: function() {
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
      }
    }
  }

})();
