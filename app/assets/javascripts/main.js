(function(){
    'use strict';

    angular.module('app', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    controller: 'HomeController',
                    controllerAs: 'home',
                    templateUrl: 'assets/views/home.html'
                })
                .when('/creator', {
                    templateUrl: 'assets/views/creator.html'
                });
        });
}());
