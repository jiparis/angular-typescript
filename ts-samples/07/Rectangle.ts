import shapes = require("Shape");

export module Leccion07.Shapes {
    export class Rectangle extends shapes.Leccion07.Shapes.BaseShape {
        public constructor(private width: number, private height: number) {
            super("square");
        }

        getArea(): number {
            return this.width * this.height;
        }
    }
}
