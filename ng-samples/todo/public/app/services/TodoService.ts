/// <reference path="../../../../typings/angularjs/angular.d.ts" />
/// <reference path="../models/Todo.ts" />

module Todos{
    export interface ITodoService{
        getTodos(): ng.IPromise<Todo[]>;
        addTodo(Todo): ng.IPromise<Todo>;
        deleteTodo(Todo): ng.IPromise<boolean>;
        modify(Todo): ng.IPromise<Todo>;
        getTodo(string): ng.IPromise<Todo>
    }

    export class TodoService implements ITodoService{
        static $inject = [
            "$http",
            "$q",
            "$log"
        ];

        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $log: ng.ILogService){}

        getTodos(): ng.IPromise<Todo[]>{
            var d = this.$q.defer();

            this.$http.get("/todos")
                .success((data: Todo[]) => {
                    d.resolve(data);
                })
                .error((error) => {
                    this.$log.error(error);
                    d.reject();
                });

            return d.promise;
        }

        getTodo(id: string): ng.IPromise<Todo>{
            return this.getTodos()
                .then((todos: Todo[]) => {
                    return todos.filter((t) => t.id == id)[0];
                });
        }

        addTodo(todo: Todo): ng.IPromise<Todo>{
            var d = this.$q.defer();

            this.$http.post("/todos", todo)
                .success((data: Todo) => {
                    d.resolve(data);
                })
                .error((error) => {
                    this.$log.error(error);
                    d.reject();
                });

            return d.promise;
        }

        deleteTodo(todo: Todo): ng.IPromise<boolean>{
            var d = this.$q.defer();

            this.$http.delete("/todos/" + todo.id)
                .success(() => {
                    d.resolve(true);
                })
                .error((error) => {
                    this.$log.error(error);
                    d.reject();
                });

            return d.promise;
        }

        modify(todo: Todo): ng.IPromise<Todo>{
            var d = this.$q.defer();

            this.$http.put("/todos/" + todo.id, todo)
                .success((modified: Todo) => {
                    d.resolve(modified);
                })
                .error((error) => {
                    this.$log.error(error);
                    d.reject();
                });

            return d.promise;
        }
    }

}