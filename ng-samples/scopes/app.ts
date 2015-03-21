/**
 * Created by jose on 14/03/15.
 */

/// <reference path="../typings/angularjs/angular.d.ts" />

module Scopes{
    interface AppScope extends ng.IScope{
        nombre: string;
    }

    class ParentController{
        constructor($scope: AppScope){

        }
    }

    class ChildController{
        constructor($scope: AppScope){

        }
    }

    angular.module("ScopesApp", [])
        .controller("ParentController", ParentController)
        .controller("ChildController", ChildController);
}