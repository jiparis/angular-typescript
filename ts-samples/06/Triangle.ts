/// <reference path="Shape.ts" />

module Leccion06.Shapes {
    export class Triangle extends BaseShape {
        constructor(private width: number, private height: number) {
            super("triangle");
        }

        getArea(): number {
            return this.width * this.height / 2;
        }
    }
}
