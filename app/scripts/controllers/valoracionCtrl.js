

   angular.module('angularSpa')
    .controller('valoracionCtrl', function($scope,agregaValoracionservice,$routeParams,detalleService,getvaloracionService){
   

    $scope.vals=[];
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
  


        function getvaloraciones(){
            getvaloracionService.getValoraciones()
            .success(function(data){
                $scope.vals = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
        }
        getvaloraciones();

  $scope.logPost = function (){
            console.log($scope.comment);          
            agregaValoracionservice.addPost(1,$scope.actor.pubId,$scope.newvaloracion,$scope.comment)

            .success(function(data){
               window.alert("Valoración enviada correctamente");
            })
            .error(function(error){
               window.alert("No se pudo agregar un Lugar");
            });

           
        }
  
    });