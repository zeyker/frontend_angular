


(function(){
    angular.module('angularSpa')
    .controller('agregaCtrl', function($scope, $http,agregaService){
        
              
        $scope.logPost = function (){
            agregaService.addPost($scope.newNombre,
                $scope.newMail,$scope.newPass
                )

            .success(function(data){
               
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });

           
        }


    });
    
})();
