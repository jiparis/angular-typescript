import shapes = require("Shape")

export module Leccion07.Shapes {
    export class Triangle extends shapes.Leccion07.Shapes.BaseShape {
        constructor(private width: number, private height: number) {
            super("triangle");
        }

        getArea(): number {
            return this.width * this.height / 2;
        }
    }
}
