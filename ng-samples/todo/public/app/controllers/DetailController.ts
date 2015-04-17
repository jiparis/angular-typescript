/// <reference path="../services/TodoService.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module Todos{

    export class DetailController{
        static $inject=[
            "TodoService",
            "$routeParams"
        ];

        todo: Todo;

        constructor(private svc: ITodoService,
                    private $routeParams: angular.route.IRouteParamsService){


            var id = this.$routeParams['id'];
            this.svc.getTodo(id)
                .then((todo: Todo) => {
                    this.todo = todo;

                })
        }
    }
}