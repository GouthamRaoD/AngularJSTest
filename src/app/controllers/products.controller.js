(function () {
    'use strict';
    angular.module('app').controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$scope','ProductsService'];

    function ProductsController($scope, ProductsService) {
		
		
		$scope.getProducts = function(){
			return ProductsService.getAllProducts();
		}
		
		$scope.getProduct = function(categoryID, productID){
			var product = ProductsService.getAllProduct(categoryID, productID);
			
			return item;
		}	

    }

})();

