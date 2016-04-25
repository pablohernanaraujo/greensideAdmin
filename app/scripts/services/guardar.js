'use strict';

angular.module('greensideAdminApp')
  .factory('Guardar', function (FIRE, $firebaseArray, $rootScope) {
    
    var ref = new Firebase(FIRE.URL);
    var refProductos = new Firebase(FIRE.URL + 'productos');

    $rootScope.prdts = $firebaseArray(refProductos);

  	return {
  		online: function(){
 
  		},
  		guardar: function(producto){
  			$rootScope.guardando = true;
  			refProductos.push({
				date: Firebase.ServerValue.TIMESTAMP,
				nombre: producto.nombre,
        sabor: producto.sabor,
        nutrientes: producto.nutrientes,
				descripcion: producto.descripcion,
        logo: producto.logo,
        imagen: producto.imagen,
				status: 1
  			}).then(function(){
  				$rootScope.guardando = false;
	  			$rootScope.message = 'Guardado exitosamente';
	  		}).catch(function(error){
	  			$rootScope.message = error.message;
	  		});
  		}
  	};
  });
