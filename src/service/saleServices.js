(function() {

  angular
    .module('app')
    .service('saleServices', saleServices)


  function saleServices($http) {
    return {
    	getData: function () {
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
          // {
          //   id: 'id_3',
          //   article: '5656565',
          //   available: true,
          //   sale: 25,
          //   atribut: 'len',
          //   sex: 'man',
          //   category: 'jacket',
          //   season: 'winter',
          //   composition: 'Diadora',
          //   color: 'blue',
          //   title: 'White jacket2',
          //   images: [{
          //     mainImage: '2_2',
          //     productGallery: ['2_1', '2_3']
          //   }],
          //   size: ['M','L','XL','XLL'],
          //   price: 500,
          //   description: 'Платье приталенного силуэта с пышной юбкой. 2016',
          //   novelty: true
          // }
        ]
    	}

    }
  }

})();
