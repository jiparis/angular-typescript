
export module Leccion07.Shapes {
    export interface IShape {
        /**
        * returns the shape's area in sq cms
        */
        getArea(): number;

        /**
        * shows the shape's area in the document
        */
        showArea();
    }

    export class BaseShape implements IShape {
        constructor(private type: string) {
        }

        // utility method. private (not in prototype). Could be also:
        // private showMessage(area:number): void { }
        public showMessage = (area: number): void => {
            var el = document.getElementById("content");
            var message = "I'm a " + this.type + " with an area of " + area + " cm squared.";

            var newEl = document.createElement("div");
            newEl.innerHTML = message;

            el.appendChild(newEl);
        }

        getArea(): number { throw "Not implemented"; }   // empty implementation (no "abstract" in typescript)
        showArea(): void {
            var area = this.getArea();
            this.showMessage(area);
        }
    }
}

