/// <reference path="../services/TodoService.ts" />

module Todos{

    export class TodoController{
        static $inject = [
            "TodoService",
            "$rootScope"
        ];

        todos: Todo[];
        terminadas: Todo[];

        categorias = [
            {id: 0, label: "Limpiar", type:"Casa"},
            {id:1, label: "Cocinar", type:"Casa"},
            {id:3, label: "Terminar tareas", type:"Trabajo"},
            {id:4, label: "Ir a desayunar", type:"Trabajo"}
        ];

        constructor(private svc: ITodoService,
        $rootScope: ng.IRootScopeService){

            svc.getTodos().then((todos: Todo[]) => {
                this.todos = todos;
                if(this.todos) {
                    this.terminadas = this.todos.filter((todo:Todo) => {
                        return todo.done == true;
                    });
                }

            });
        }

        addTodo(todo: any){
            if(!todo.done) // aseguramos un valor
              todo.done = false;
            todo.category = todo.category.id;
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

        delete(todo: Todo) {
            this.svc.deleteTodo(todo)
                .then(() => {
                    this.todos = this.todos.filter((t) => {
                        return t.id != todo.id;
                    })
                });
        }

    }

}
