(function(){
    angular.module('angularSpa')
    .controller('agregaMongo', function($scope, $http,agregaMongoService){
    
              
        $scope.logPost = function (){
              
            agregaMongoService.addPost($scope.newNombre,
                $scope.newMail
                )

            .success(function(data){
               
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });

           
        }


    });
    
})();

 