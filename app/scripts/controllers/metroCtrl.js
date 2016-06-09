

   angular.module('angularSpa')
    .controller('metroCtrl', function($scope, lugarService,agregaValoracionservice){
    	  var map;
        var nombre;
        $scope.positions =[];
        function getLugares(){
            lugarService.getLugares()
            .success(function(data){
                $scope.positions = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        getLugares();

          $scope.$on('mapInitialized', function(evt, evtMap) {
    map = evtMap;
  });

   $scope.showCity = function(event, city) {
    $scope.selectedCity = city;
    $scope.map.showInfoWindow('myInfoWindow', this);
     
  };
  $scope.pinClicked = function(events, marker) {
    var pos = marker.$index;
    
    console.log('the marker ->' , map.markers[pos].title , ' was clicked');
    $scope.map.showInfoWindow('myInfoWindow', this);
    
  }













  $scope.logPost = function (){
           console.log($scope.selectedCity.publicacionId);
           
            agregaValoracionservice.addPost(1,$scope.selectedCity.publicacionId,$scope.newvaloracion)

            .success(function(data){
               window.alert("Lugar agregado correctamente");
            })
            .error(function(error){
               window.alert("No se pudo agregar un Lugar");
            });

           
        }
  
    });
