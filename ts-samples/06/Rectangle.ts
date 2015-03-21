/// <reference path="Shape.ts" />
module Leccion06.Shapes {
    export class Rectangle extends BaseShape {
        public constructor(private width: number, private height: number) {
            super("square");
        }

        getArea(): number {
            return this.width * this.height;
        }
    }
}
