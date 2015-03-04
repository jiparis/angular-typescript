/// <reference path="Rectangle.ts" />
/// <reference path="Triangle.ts" />

module Leccion06 {
    export class Application {
        addSquare() {
            // use interface
            var newSq: Shapes.IShape = new Shapes.Rectangle(Math.random() * 10, Math.random() * 10);
            newSq.showArea();
        }

        addTriangle() {
            // use interface
            var newSq: Shapes.IShape = new Shapes.Triangle(Math.random() * 10, Math.random() * 10);
            newSq.showArea();
        }
    }
    export var app = new Leccion06.Application();
}

