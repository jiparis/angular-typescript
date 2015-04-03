/// <reference path="../services/TodoService.ts" />

module Todos{

    export class TodoController{
        static $inject = [
            "TodoService"
        ];

        todos: Todo[];

        constructor(private svc: ITodoService){

            svc.getTodos().then((todos: Todo[]) => {
                this.todos = todos;
            });
        }

        addTodo(todo: Todo){
            this.svc.addTodo(todo)
                .then((newTodo: Todo) => {
                    this.todos.push(newTodo);
                    todo.description = '';
                });
        }

        toggle(todo: Todo){
            this.svc.modify(todo)
                .then(() => {
                    // do nothing
                });
        }

        delete(todo: Todo){
            this.svc.deleteTodo(todo)
            .then(() => {
                this.todos = this.todos.filter((t) => {
                    return t.id != todo.id;
                })
            });
        }


    }

}