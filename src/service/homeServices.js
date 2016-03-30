(function() {

  angular
    .module('app')
    .service('homeServices', homeServices)
    .constant('DATA', [
          {
            id: 'id_1',
            article: '343434',
            available: true,
            sale: '10%',
            sex: 'man',
            category: 'skirt',
            season: 'summer',
            composition: 'Nike',
            atribut: 'Catton',
            color: 'black',
            title: 'Майка шифон волан горох',
            images: [{
              mainImage: 'image',
              productGallery: ['image1', 'image2']
            }],
            size: ['M','XL'],
            price: '100$',
            description: 'Платье приталенного силуэта . Декорировано итальянским кружевом'
          },
          {
            id: 'id_2',
            article: '5656565',
            available: false,
            sale: '25%',
            atribut: 'len',
            sex: 'woman',
            category: 'jacket',
            season: 'winter',
            composition: 'Diadora',
            color: 'blue',
            title: 'White jacket',
            images: [{
              mainImage: 'image',
              productGallery: ['image1', 'image2']
            }],
            size: ['M','L','XL'],
            price: '100$',
            description: 'Платье приталенного силуэта с пышной юбкой. Тренд 2014 принт " монетки " Dolce Gabbana . Декорировано итальянским кружевом'
          },
        ]


     );    

  function homeServices($http, DATA) {
    return {
      getData: function(id) {
        //debugger 
       return (id===undefined) ?  DATA :  DATA[id];
      }
    }
  }

})();
