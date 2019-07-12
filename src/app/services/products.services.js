(function () {
    'use strict';


	angular.module('app').factory('ProductsService',  ['$http', function($http){
		var factory = {};
		var categories = [];
		
		
		$http.get('categories.json').then(function (data){
			categories = data.data;
			
		});
		
		factory.getProduct = function(categoryID, productID){
			var product = {};
			
			categories.forEach( function(obj) {
				if(obj.Category.ID == categoryID){
					obj.Category.Items.forEach( function (item){
						if(item.Item.ID == productID){
							product = item.Item;
						}
					});
				}
			});
			return product;
		}
		
		factory.getAllProducts = function(){
			
			return categories;
		}

		return factory;
	}]);

})();

