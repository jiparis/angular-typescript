
function getArea(shape: string, width: number, height: number, show: boolean = true): number {
    var area = width * height;

    if(show) {
        var message = "I'm a " + shape + " with an area of " + area + " cm squared.";
        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        newDiv.innerHTML = message;
        container.appendChild(newDiv);
    }

    return area;
}

getArea("square", 12, 44, true);
getArea("square", "12", 33);   // Error

