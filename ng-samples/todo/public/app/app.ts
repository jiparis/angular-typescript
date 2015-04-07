/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
// / <reference path="services/TodoService.ts" />
/// <reference path="controllers/TodoController.ts" />
/// <reference path="directives/TodoList.ts" />

module Todos{

    angular.module("TodoApp", ["ngRoute"])
        .service("TodoService", TodoService)
        .directive("todoList", TodoList)
        .controller("TodoController", TodoController)
        .config(["$routeProvider", (routeProvider: angular.route.IRouteProvider) => {
            routeProvider.when(
                "/login",{
                    templateUrl: "app/partials/login.html",
                })
                .otherwise({
                    templateUrl: "app/partials/app.html"
                });

        }]);


}
