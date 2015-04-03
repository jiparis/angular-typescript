/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="services/TodoService.ts" />
/// <reference path="controllers/TodoController.ts" />

module Todos{

    angular.module("TodoApp", [])
        .service("TodoService", TodoService)
        .controller("TodoController", TodoController);

}