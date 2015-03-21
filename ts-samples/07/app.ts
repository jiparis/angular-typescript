import sqmod = require("Rectangle")
import Rectangle = sqmod.Leccion07.Shapes.Rectangle;
import trmod = require("Triangle")
import Triangle = trmod.Leccion07.Shapes.Triangle;
import shapes = require("Shape")

export module Leccion07 {
    export class Application {
        addSquare() {
            // use interface
            var newSq: shapes.Leccion07.Shapes.IShape = new Rectangle(Math.random() * 10, Math.random() * 10);
            newSq.showArea();
        }

        addTriangle() {
            // use interface
            var newSq: shapes.Leccion07.Shapes.IShape = new Triangle(Math.random() * 10, Math.random() * 10);
            newSq.showArea();
        }
    }
}

