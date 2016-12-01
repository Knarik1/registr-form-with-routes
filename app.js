/**
 * Created by user on 11/29/2016.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'template/registration.html',
            controller: 'ValidCtrl'
        })
        .when("/registration", {
            templateUrl: 'template/registration.html',
            controller: 'ValidCtrl'
        })
        .when("/about", {
            templateUrl: 'template/about.html',
            controller: 'AboutController'
        })
        .when('/product', {
            templateUrl:'template/products.html',
            controller: 'ProductCtrl'
        })
        .otherwise({
            template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
        });
});
