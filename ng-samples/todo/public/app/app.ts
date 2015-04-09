/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
// / <reference path="services/TodoService.ts" />
/// <reference path="controllers/TodoController.ts" />
/// <reference path="controllers/DetailController.ts" />
/// <reference path="directives/TodoList.ts" />
/// <reference path="directives/MiValidador.ts" />

module Todos{

    angular.module("TodoApp", ["ngRoute"])
        .service("TodoService", TodoService)
        .directive("todoList", TodoList)
        .directive("miValidador", MiValidador)
        .controller("TodoController", TodoController)
        .config(["$routeProvider", (routeProvider: angular.route.IRouteProvider) => {
            routeProvider.when(
                "/login", {
                    templateUrl: "app/partials/login.html"
                })
                .when("/todos/:id", {
                    templateUrl: "app/partials/detail.html",
                    controller: DetailController,
                    controllerAs: "detail"

                })
                .when("/todos", {
                    templateUrl: "app/partials/app.html"
                })
                .otherwise({
                    redirectTo: '/login'
                });
        }]);




}
