// Write a class Rectangle for a rectangle object. It needs to have a width (Number), height (Number) and color// (String) properties, which are set from the constructor and a calcArea() method, that calculates and returns the // rectangle’s area.
// Input // The constructor function will receive valid parameters.
// Output// The calcArea() method should return a number.
// Submit the class definition as is, without wrapping it in any function.
class Rectangle {
   constructor(width, height, color){
       this._width = Number(width);
       this._height = Number(height);
       this._color = color;
   }
   get width(){return this._width}
   get height(){return this._height}
   get color(){return this._color.charAt(0).toUpperCase + this._color.slice(1)}

   calcArea(){
       return this._width * this._height;
   }
}


let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

// 4
// 5
// Red
// 20