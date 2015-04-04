/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../services/TodoService.ts" />
/// <reference path="../controllers/TodoController.ts" />


module Todos{

    export function TodoListDirective(): ng.IDirective{
        return {
            restrict: 'E',
            replace: true,
            templateUrl: "/app/directives/todoList.html",
            controller: TodoController,
            controllerAs: 'todolist',
            scope: {
                todos: '='
            },
            link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {

            }
        };
    }
}
