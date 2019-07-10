(function () {
    'use strict';
    angular.module('app').controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$scope','ProductsService'];

    function ProductsController($scope, ProductsService) {
		$scope.selected = 0;
        $scope.categories = function(){
			return ProductsService.getCategories();
		}
		
		$scope.getProducts = function(){
			return ProductsService.getAllProducts();
		}
		
		$scope.setActive = function(id){
			$scope.selected = id;
			console.log("init", id);
			console.log("intit", $scope.selected)
		}
		
		$scope.isSelected = function(id) 
		{
			console.log("intit", $scope.selected == id )
			return $scope.selected == id;
		}

    }

})();

