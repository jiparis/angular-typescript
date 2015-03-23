/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/namesController.ts" />

module Lesson04 {
    'use strict';

    // nuestra aplicación angular. 
    var myApp:ng.IModule = angular.module("myApp", [])
        .controller("namesController", NamesController); // ["$scope", NamesController]);
}