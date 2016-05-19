(function(){
    angular.module('angularSpa')
.controller('MainCtrl', function($scope){
	$scope.items = [
      'Bower',
      'Sass',
      'Gulp'
    ];
});
})();


angular.module('angularSpa')


.controller('MyCtrl', ['$scope', function testCtrl($scope) {
  $scope.latlng = [-25.363882,131.044922];
  $scope.getpos = function(event){
     $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
     console.log(event.latLng.lat(), event.latLng.lng());
  };
  
}]);
    