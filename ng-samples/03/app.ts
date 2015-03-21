/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/HeroesController.ts" />

module Controllers{
    'use strict';

    var myApp = angular.module("myApp", [])
                .controller("HeroesController", HeroesController);
}
