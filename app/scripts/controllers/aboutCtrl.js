

   angular.module('angularSpa')
    .controller('AboutCtrl', function($scope, lugarService){
    	  var map;
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
    });
