
    'use strict';
var app = angular.module("app");


angular.module('app').controller('ProductModelController',  ['$scope', '$uibModal', '$log','$document','ProductsService', 'CartService', function ($scope,$uibModal, $log,$document, ProductsService, CartService) {
  
	

	$scope.open = function (catID, productID, parentSelector) {
		console.log(catID, productID);
		$scope.product = ProductsService.getProduct(catID, productID);
		
		var parentElem = parentSelector ? 
		  angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
		var modalInstance = $uibModal.open({
			
			animation: false,
			backdrop: 'static',
			ariaLabelledBy: 'modal-title',
			ariaDescribedBy: 'modal-body',
			templateUrl: 'views/products/productsModal.html',
			controller: 'ModalInstanceCtrl',
			preserveScope: true,
			resolve: {
				product: function(){return $scope.product;}
			}
		});

		modalInstance.result.then(function (result) {
			$scope.product = result;
			CartService.putCartItems($scope.product);
		}, function () {
			$log.info('Modal dismissed at: ' + new Date());
			//CartService.removeCartItems();
		});
  };
}]);

angular.module('app').controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance','product', function ($scope, $uibModalInstance, product) {
	$scope.product = product;
	$scope.total = product.Price.replace('$','');
	
	$scope.ok = function () {
		$uibModalInstance.close($scope.product);
	};

	$scope.inc = function(ID){
		$scope.product.Modifiers.Preps.forEach(function(item)
		{
			if(item.ID == ID)
			{
				item.Quantity = item.Quantity + 1;
				
			}
		});
		$scope.onValChange();
	}
	
	$scope.onValChange = function(){
		total = parseFloat($scope.product.Price.replace('$',''));
		$scope.product.Modifiers.Preps.forEach(function(item)
		{
			total += (parseFloat(item.Price.replace('$', '')) * item.Quantity);
		});
		$scope.total = total.toFixed(2);
		if(!$scope.$$phase) {
			$scope.$apply()
		}
	}
	
	$scope.dec = function(ID){
		$scope.product.Modifiers.Preps.forEach(function(item)
		{
			if(item.ID == ID && item.Quantity > 0)
			{
				item.Quantity = item.Quantity - 1;
				
			}
		});
		$scope.onValChange();
	}
	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}]);


