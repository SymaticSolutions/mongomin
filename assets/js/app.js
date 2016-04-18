/**
 * @name mongomin
 * @description Mongo DB admin by Symatic Solutions
 * @license GPL-3.0
 * @copyright Copyright(c) 2016 Symatic Solutions
 */

angular.module('mongomin.starter', ['mongomin.controllers', 'mongomin.services', 'mongomin.directives', 'ngMaterial', 'ngRoute'])
    .config(function($routeProvider){
        $routeProvider.
            when('/test', {
                templateUrl: '/home',
                controller: 'HomeCtrl'
            }).
            otherwise({
                templateUrl: '/home',
                controller: 'HomeCtrl'
            });
    });