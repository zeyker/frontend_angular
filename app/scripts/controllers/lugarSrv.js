
angular.module('angularSpa')
    .service('lugarService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/publicaciones';
        this.getLugares = function(){
            return $http.get(urlBase);
        };
    });



angular.module('angularSpa')
    .service('agregalugarService', function($http){
       

        this.addPost = function(nombre,descripcion,valoracion,codigo,tipo,lat,lon,pago){
        	console.log(tipo);
              var request = $http({
            method: "POST",
            url: "http://localhost:8080/sakila-backend-master/publicaciones",
            data: {
                    nombrePub: nombre , 
  					descripcionPub:descripcion,  
    				valoracionPub:valoracion, 
      				codigoPub :codigo, 
        			tipoPublicacionPub:tipo, 
          			latPub:lat,  
            		lonPub:lon,  
               		pagoPub:pago
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };


    });    

