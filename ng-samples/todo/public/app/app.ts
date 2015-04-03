/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="services/TodoService.ts" />
/// <reference path="controllers/TodoController.ts" />
/// <reference path="directives/TodoList.ts" />

module Todos{

    angular.module("TodoApp", [])
        .service("TodoService", TodoService)
        .directive("todoList", TodoListDirective)
        .controller("TodoController", TodoController);

}