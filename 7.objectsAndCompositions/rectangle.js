function rectangle(w,h,c){
    const obj = {
        width: w,
        height: h,
        color: c.charAt(0).toUpperCase() + c.slice(1),
        calcArea(){
            return w * h;
        }
    }
    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
// 4
// 5
// Red
// 20