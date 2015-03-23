/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/namesController.ts" />
/// <reference path="filters/dashFilter.ts" />
/// <reference path="services/namesServices.ts" />


module Lesson06{
    'use strict';

    // nuestra aplicación angular. 
    export var myApp: ng.IModule;

    // clase de inicialización
    class MyApp {
        
        /**
        * Creación de la aplicación
        */
        static create() : ng.IModule {
            return angular.module("myApp", [])
                // controllers
                .controller("namesController", NamesController) 
                // filters
                .filter("dash", DashFilter)
                // value service
                .value("superHeroes", superHeroes)
                .value("maxElements", maxElements)
                // factory service
                .factory("randomHero", RandomHeroFactory)
                // service service
                .service("heroesService", SuperHeroesService);
        }
    };

    export function init() {
        myApp = MyApp.create();
    }
}

Lesson06.init();