/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="controllers/namesController.ts" />
/// <reference path="filters/dashFilter.ts" />

module Lesson05{
    'use strict';

    // nuestra aplicación angular. 
    var myApp: ng.IModule =  angular.module("myApp", [])
        .controller("namesController", NamesController)
        .filter("dash", DashFilter);

}
