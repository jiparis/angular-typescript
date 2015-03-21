class MyClass {
    message: string = "Hello from MyClass";

    propertyMethod = () : void => {
        console.log("Hello from property");
        alert(this.message);   // always work
    }

    prototypeMethod(): void {
        console.log("this method goes to the prototype");
        alert(this.message);   // error when "this" is not the object
    }
}

var myObject = new MyClass();
var api = { // API for HTML callbacks
    propertyMethod() { myObject.propertyMethod.call(this); },
    publicMethod() { myObject.prototypeMethod.call(this); }
}
