


(function(){
    angular.module('angularSpa')
    .controller('agregaCtrl', function($scope, $http,agregaService){
        revision= function  (arreglo) {
               
        var elementos = arreglo;
        var largo = arreglo.length;
        var nuevoArreglo= [];
        var conteo = 0;

        for(var n = (largo-9); n<largo ;n++){
            nuevoArreglo[conteo]=(elementos[n]);
            conteo++;
        };

        if (nuevoArreglo!="@,u,s,a,c,h,.,c,l") {
        window.alert("ingrese utilizando el correo Usach");
        return 0;
        };

        return 1;
    }
              
        $scope.logPost = function (){
              var x=1;
        var y=1;
        var z=1;
        //revisa nobre de usuario no este vacio
        if ($scope.newNombre == null) {
            window.alert("El campo nombre se encuentra vacio");
            x = 0;
        };
        //revisa mail del usuario no este vacio
        if ($scope.newMail == null) {
            window.alert("El campo mail se encuentra vacio");
            y = 0;
        };
        //revisa mail de usuario sea de la usach
        if (revision($scope.newMail)==0) {
            window.alert("ingrese utilizando el correo Usach ");
            y = 0
        };
        //revisa password del usuario no este vacio
        if ($scope.newPass == null) {
            window.alert("El campo password se encuentra vacio");
            z = 0;
        };
        if (x==1 && y==1 && z==1) {
            agregaService.addPost($scope.newNombre,
                $scope.newMail,$scope.newPass
                )

            .success(function(data){
              window.alert("Usuario registrado correctamente"); 
            })
            .error(function(error){
                $scope.status = 'Error al consultar por usuarios';
            });

           };
        }


    });
    
})();

 



