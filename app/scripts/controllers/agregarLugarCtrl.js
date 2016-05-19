


(function(){     angular.module('angularSpa')
.controller('agregalugarCtrl', function($scope, $http,agregalugarService){
$scope.lat=null;        
  $scope.lon=null;        
   $scope.latlng =[-25.363882,131.044922];        
    $scope.getpos = function(event){
        $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
        $scope.lat=event.latLng.lat();     
         $scope.lon=event.latLng.lng();
            };

           
        $scope.logPost = function (){
            console.log($scope.newtipo);
           
            agregalugarService.addPost($scope.newnombre,$scope.newdescripcion,$scope.newvaloracion,$scope.newcodigo,$scope.newtipo,$scope.lat,$scope.lon,$scope.newpago
                )

            .success(function(data){
               window.alert("Lugar agregado correctamente");
            })
            .error(function(error){
               window.alert("No se pudo agregar un Lugar");
            });

           
        }


    });
    
})();
