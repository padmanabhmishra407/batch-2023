class Area {
    static pie = 3.14159265359;
    areaOfCircle = (radius) => {
        return this.constructor.pie * (radius * radius);
    }
}
let area = new Area;
let rad = prompt("enter the radius of the circle:")
alert("The area of the circle = " + area.areaOfCircle(rad) + " unit square");