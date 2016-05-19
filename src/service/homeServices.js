(function() {

  angular
    .module('app')
    .service('homeServices', homeServices)
    .constant('DATA', [
          {
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
          {
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
          },
          {
            id: 'id_4',
            article: '11111',
            available: true,
            sale: 10,
            atribut: 'len',
            sex: 'woman',
            category: 'jacket',
            season: 'autumn',
            composition: 'Diadora',
            color: 'blue',
            title: 'White jacket3',
            images: [{
              mainImage: '2_2',
              productGallery: ['2_1', '2_3']
            }],
            size: ['M','L','XL','XLL'],
            price: 333,
            description: 'Платье приталенного силуэта с пышной юбкой. 2016',

          }
        ]


     );    

  function homeServices($http, DATA) {
    return {
      getData: function(id) {
       // console.log(DATA[id]);
       return (id===undefined) ?  DATA :  DATA[id];
      },

      summerData: function(id) {
       return [
          {
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
          }
          ]
      },

      winterData: function(id) {
       return [
          {
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
          {
            id: 'id_2',
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
          }
          ]
      }
    }
  }


})();
