angular.module('angularSpa')
    .service('agregaService', function($http){
       

        this.addPost = function(nombre,mail,contrasena){
              var request = $http({
            method: "POST",
            url: "http://localhost:8080/sakila-backend-master/usuarios",
            data: {
                    
                nombreUser: nombre,
                mailUser: mail,
                contraseñaUser:contrasena
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };


    });