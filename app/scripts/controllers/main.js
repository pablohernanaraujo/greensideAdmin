'use strict';

angular.module('greensideAdminApp')
  .controller('MainCtrl', function ($scope, $rootScope, Guardar, $timeout) {
    
    $(':file').filestyle({placeholder: 'No file'});

    $scope.prod = function(producto){
    	Guardar.guardar(producto);
    };

    $rootScope.$watch('message', function() {
    	if($rootScope.message === 'Guardado exitosamente'){		
    		$timeout(function(){
				$rootScope.message = '';
                $scope.producto = '';
                $(':file').filestyle('clear');
			}, 2000);
    	}
	});
 	
  });
