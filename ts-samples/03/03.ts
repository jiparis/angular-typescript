class Shape{

    constructor(private type: string) {
    }

    public showMessage() {
        var area = this.getArea();
        var message = "I'm a " + this.type + " with an area of " + area + " cm squared.";

        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }

    protected getArea(): number{
        return 0;
    }
}

class Square extends Shape {
    constructor(private width: number, private height: number) {
        super("square");
    }


    getArea() : number{
        return this.width * this.height;
    }
}

class Triangle extends Shape{
    public constructor(private width: number, private height: number) {
        super("triangle");
    }

    getArea() : number{
        return (this.width  * this.height) / 2;
    }
}

// Helper methods
function addSquare() {
    var newSq = new Square(Math.random() * 10, Math.random() * 10);
    newSq.showMessage();
}

function addTriangle() {
    var newTn = new Triangle(Math.random() * 10, Math.random() * 10);
    newTn.showMessage();
}

