

   angular.module('angularSpa')
    .controller('valoracionCtrl', function($scope,agregaValoracionservice,$routeParams,detalleService){
   


    $scope.actor =[];
        function getActorsId(){
            detalleService.getActorsId($routeParams.publicacionId)
            .success(function(data){
                $scope.actor = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        getActorsId();
   
  $scope.logPost = function (){
                      
            agregaValoracionservice.addPost(1,$scope.actor.pubId,$scope.newvaloracion)

            .success(function(data){
               window.alert("Valoración enviada correctamente");
            })
            .error(function(error){
               window.alert("No se pudo agregar un Lugar");
            });

           
        }
  
    });