/// <reference path="controllers/namesController.ts" />

module Lesson04{
    'use strict';

    // nuestra aplicación angular. 
    export var myApp: ng.IModule;

    // clase de inicialización
    class MyApp {
        
        /**
        * Creación de la aplicación
        */
        static init() : ng.IModule {
            return angular.module("myApp", [])
                .controller("namesController", NamesController); // ["$scope", NamesController]);
        }
    };

    export function init() {
        myApp = MyApp.init();
    }
}

Lesson04.init();