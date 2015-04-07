/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../models/Todo.ts" />
/// <reference path="../services/TodoService.ts" />

module Todos{

    export class TodoDirectiveController{
        static $inject = [
            "$scope",
            "TodoService"
        ];

        constructor(private $scope,
                    private todoSvc: ITodoService){
        }

        delete(todo: Todo){
            this.$scope.onDelete({item: todo});
        }

        toggle(todo: Todo){
            todo.done = !todo.done;
            this.$scope.onToggle({item: todo});
        }
    }

    export function TodoList(): ng.IDirective{
        return {
            restrict: 'E',
            templateUrl: 'app/directives/todoList.html',
            replace: true,
            link(scope: any,
                 element: ng.IAugmentedJQuery,
                 attrs: ng.IAttributes){


            },
            scope: {
                lista: "=",
                titulo: "@",
                onDelete: "&",
                onToggle: "&",
                done: "@"
            },
            controller: TodoDirectiveController,
            controllerAs: "todolist"
        };
    }

}
