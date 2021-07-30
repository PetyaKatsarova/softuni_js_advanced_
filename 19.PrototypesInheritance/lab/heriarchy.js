// Write a function that returns 3 classes - Figure, Circle and Rectangle.
//Figure: Should have property units ("m", "cm", "mm") with default value "cm" Should have a getter area
//  Has method changeUnits that sets different units for that figure
//  Has method toString, which returns `Figures units: {units}`
// Circle:
//  Extends Figure
//  Has a property radius
//  Overrides area getter to return the area of the Circle (PI * r * r)
//  toString() - should return a string representation of the figure in the format
// "Figures units: {type} Area: {area} - radius: {radius}"
// Rectangle:
//  Extends Figure
//  Has properties width, height and units (extended from the class Figure)
//  Overrides area getter to return the area of the Rectangle (width * height)
//  toString() - should return a string representation of the figure in the format
// "Figures units: {type} Area: {area} - width: {width}, height: {height}"
function  wrapper() {
    class Figure{
        constructor(units='cm', area){
            this.units = units;
            this._area = area;
        }
        get area(){
            return this._area;
        }
        changeUnits(u){
            this.units = u;
        }
        toString(){
            return `Figures units: ${this.units}`;
        }
    }
    class Circle extends Figure{
        constructor(units, radius){
            super(units);
            this._area = ''
            this.radius = radius;
        }
        get area(){
            this._area = Math.PI * this.radius * this.radius;
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure{
        constructor(width, height, units){
            super(units);
            this.width = width;
            this.height = height;
            this._area = '';
        }
        get area(){
            return this._area = this.width * this.height;
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }
    return {Figure, Circle, Rectangle};
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

© SoftUni – https://softuni.org. Copyrighted document. Unauthorized copy, reproduction or use is not permitted.
Follow us: Page 3 of 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50