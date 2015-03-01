interface IShape {
    /**
     * returns the shape's area in sq cms
     */
    getArea(): number;

    /**
     * return the shape's name
     */
    getName(): string;
}

// class for rendering shapes
class ShapeRenderer{
    constructor(private shape: IShape) {
    }

    // utility method. private (not in prototype). Could be also:
    // private showMessage(area:number): void { }
    public showArea = () : void => {
        var message = "I'm a " + this.shape.getName() +
            " with an area of " + this.shape.getArea() + " cm squared.";

        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }
}

class Square implements IShape {
    public constructor(private width: number, private height: number) {
    }

    getName():string{
        return "Square";
    }

    getArea():number {
        return this.width * this.height;
    }
}

class Triangle implements IShape {
    constructor(private width: number, private height: number) {
    }

    getName():string{
        return "Triangle";
    }

    getArea(): number {
        return this.width * this.height / 2;
    }
}

function addSquare() {
    // use interface
    var newSq: IShape = new Square(Math.random() * 10, Math.random() * 10);
    render(newSq);
}

function addTriangle() {
    // use interface
    var newTn: IShape = new Triangle(Math.random() * 10, Math.random() * 10);
    render(newTn);
}

function render(shape: IShape){
    var renderer = new ShapeRenderer(shape);
    renderer.showArea();
}