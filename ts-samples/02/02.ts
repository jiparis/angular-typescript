class Shape{
    private mShape: string;
    private mWidth: number;
    private mHeight: number;

    constructor(shape: string, width: number, height: number) {
        this.mShape = shape;
        this.mWidth = width;
        this.mHeight = height;
    }

    public showArea() {
        var area = this.getArea();
        var message = "I'm a " + this.mShape + " with an area of " + area + " cm squared.";

        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }

    protected getArea(): number{
        return this.mWidth * this.mHeight;
    }
}

var shape = new Shape("square", 12, 44);
shape.showArea(); 

