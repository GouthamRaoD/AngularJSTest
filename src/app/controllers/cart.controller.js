(function () {
    'use strict';
    angular.module('app').controller('CartController', CartController);

    CartController.$inject = ['$scope', 'CartService'];

    function CartController($scope,  CartService) {
		var getCartItems = function(){
			var items = [];
			CartService.getCartItems().forEach(function(item){
				items.push(JSON.parse(item));
			});
			return items;
		}
		$scope.items = getCartItems();
		$scope.total = 0;
		var getItemPrices = function(){
			var prices = [];
			$scope.items.forEach(function(item){
				
				var sum = parseFloat(item.Price.replace('$',''));
				item.Modifiers.Preps.forEach(function(data)
				{
					console.log("Item inside", sum);
					sum = sum + (parseFloat(data.Price.replace('$', '')) * data.Quantity);
				});
				$scope.total += sum;
				prices.push( sum.toFixed(2));
			});
			console.log("Prices", prices);
			return prices;
		};
		$scope.prices = getItemPrices();


    }

})();

