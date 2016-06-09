angular.module('angularSpa')
    .service('agregaMongoService', function($http){
       

        this.addPost = function(nombre,mail,contrasena){
              var request = $http({
            method: "POST",
            url: "http://127.0.0.1:5000/people",
            data: {
                    
                nombreUser: nombre,
                mailUser: mail
              
                    },
            headers: {
                'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
            });
            return ( request);
        };


    });