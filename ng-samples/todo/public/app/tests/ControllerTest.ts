/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../app.ts" />

module Todos.Test {

    describe("Mi primer test case", () => {

        var todoService;
        var rootScope;
        var controller;
        var backend: ng.IHttpBackendService;

        beforeEach(angular.mock.module("TodoApp"));

        beforeEach(inject((TodoService: Todos.ITodoService,
                           $rootScope: ng.IRootScopeService,
                            $httpBackend: ng.IHttpBackendService) => {

            rootScope = $rootScope;
            todoService = TodoService;


            backend = $httpBackend;

            controller = new TodoController(TodoService, $rootScope);
            backend.whenGET("/todos").respond([{id: "todo1"}, {id: "todo2"}]);

        }));

        afterEach(() => {
            backend.verifyNoOutstandingExpectation();
            backend.verifyNoOutstandingRequest();
        });

        it("inicialmente contiene todos los elementos", () => {
            backend.flush();
            expect(controller.categorias.length).toBe(4);
            expect(controller.todos.length).toBe(2);

        });

        it("todo se añade correctamente", () => {
            backend.whenPOST("/todos").respond({id:"todo3"});
            controller.addTodo({description: "test"});

            backend.flush();

            expect(controller.todos.length).toBe(3);

        });
    });



}
