var app = angular.module('myApp', []);

app.controller('MyCtrl', function ($scope) {

    $scope.products = [
        { id: 1, name: 'kitap', stok: 19 },
        { id: 2, name: 'kalem', stok: 3 },
        { id: 3, name: 'defter', stok: 12 }
    ];

    $scope.kategoriler = [{ aylar: "ocak", value: 0 },
    { aylar: "subat", value: 0 },
    { aylar: "mart", value: 0 },
    { aylar: "nisan", value: 0 },
    { aylar: "mayis", value: 0 },
    { aylar: "haziran", value: 0 },
    { aylar: "temmuz", value: 0 },
    { aylar: "agustos", value: 0 },
    { aylar: "eylul", value: 0 },
    { aylar: "ekim", value: 0 },
    { aylar: "kasim", value: 0 },
    { aylar: "aralik", value: 0 },];
    

    ///////////////////////////////////////////////////////////////////////

    $scope.guncelle = function (index) {        // ilgili id'nin bulundugu row'u aldik.

        $('#exampleModal').modal('show');
        var id = $scope.products[index].id;

        $scope.productID = id;
    }

    //////////////////////////////////////////////////////////////////////////////////////    

    $scope.updateProduct = function () {       //  modal icinde ki verileri guncelledik. 

        var productid = $scope.productID;
        
        var deger = degerAl();

        var currentElement = $scope.products.find(x => x.id == productid);
        currentElement.stok = deger;
        
        $('#exampleModal').modal('hide');
       // modalSifirla();
    
    }
 
    ///////////////////////////////////////////////////////////////////////////////////////


    // var modalSifirla = function(){                                  // modal icinde ki kategorideki value degerlerini sifirlariz.
    //     angular.forEach($scope.kategoriler,function(value){
    //         modalvalueSifirlama = value.value = 0;
    //     });
    // return modalvalueSifirlama;
    // }

    var degerAl = function(){                                         // alinan aylik stok degerlerini bu fonksiyonda topladik.  
        var toplam =0;
        angular.forEach($scope.kategoriler, function(value) {     
            toplam = toplam + parseInt (value.value);
          });
        console.log(toplam);
        return toplam;
    }
});