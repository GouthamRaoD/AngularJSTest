(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider
                .when('/', {templateUrl: 'views/products/products.html', controller: 'ProductsController'})
				.when('/cart', {templateUrl: 'views/cart/cart.html', controller: 'CartController'})
                .when('/404', {templateUrl: 'shared/404.html'})
                .otherwise({ redirectTo: '/404'});

        }]
    );

})(); 