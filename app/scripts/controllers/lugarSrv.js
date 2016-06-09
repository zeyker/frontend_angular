
angular.module('angularSpa')
    .service('lugarService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/publicaciones';
        this.getLugares = function(){
            return $http.get(urlBase);
        };
    });

angular.module('angularSpa')
    .service('detalleService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/publicaciones/';
        this.getActorsId = function(actorId){
            return $http.get(urlBase+actorId);
        };
    });    

angular.module('angularSpa')
    .service('getvaloracionService', function($http){
        var urlBase = 'http://localhost:8080/sakila-backend-master/valoraciones';
        this.getValoraciones = function(){
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
    				
      				codigoPub :codigo, 
        			tipoPublicacionPub:tipo, 
          			latPub:lat,  
            		lonPub:lon,  
               		pagoPub:pago,
                    sumavalPub:0,
                    cantidavalPub:0,
                    valoracionPub:0
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };


    });    
angular.module('angularSpa')
    .service('agregaValoracionservice', function($http){
       

        this.addPost = function(idUser,idPub,Valoracion,comment){
           console.log(idPub);
           console.log(Valoracion);
              var request = $http({
            method: "POST",
            url: "http://localhost:8080/sakila-backend-master/valoraciones",
            data: {
                    userId: idUser, 
                    publicacionId:idPub,  
                    valoracion:Valoracion,
                    texto: comment



                    
                    },
            headers: {'Content-Type': 'application/json'}
            });
            return ( request);
        };


    });    
