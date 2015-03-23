/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/namesController.ts" />
/// <reference path="services/namesServices.ts" />

module Lesson08{
    'use strict';

    // nuestra aplicación angular.
    var myApp: ng.IModule = angular.module("myApp", [])
        // controllers
        .controller("heroesController", HeroesController)
        // service service
        .service("heroesService", SuperHeroesService);
}