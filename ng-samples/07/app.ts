/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/namesController.ts" />
/// <reference path="filters/dashFilter.ts" />
/// <reference path="services/namesServices.ts" />

module Lesson06{
    'use strict';

    // nuestra aplicación angular.
    var myApp: ng.IModule = angular.module("myApp", [])
        // controllers
        .controller("heroesController", HeroesController)
        // filters
        .filter("dash", DashFilter)
        // value service
        .value("superHeroes", superHeroes)
        .value("maxElements", maxElements)
        // factory service
        .factory("randomHero", randomHeroFactory)
        // service service
        .service("heroesService", SuperHeroesService)
        .provider("myServiceProvider", MyServiceProvider);
}