(function () {
    'use strict';


	angular.module('app').factory('CartService',['$window', function($window) {
		var factory = {};
		
		
		factory.getCartItems = function(){
			var items = JSON.parse($window.localStorage.getItem('CartItems'))
			return items;
		}
		
		factory.putCartItems  = function(item){
			var a = [];
			if($window.localStorage.getItem('CartItems'))
			{
				JSON.parse($window.localStorage.getItem('CartItems')).forEach(function(item){
					a.push(item);
				});
				
			}
			a.push(JSON.stringify(item));
			$window.localStorage.setItem('CartItems', JSON.stringify(a));
			console.log("Cart Items", JSON.parse($window.localStorage.getItem('CartItems')));
		}
		
		factory.removeCartItems = function(){
			$window.localStorage.removeItem('CartItems');
		};
	

		return factory;
	}]);

})();

