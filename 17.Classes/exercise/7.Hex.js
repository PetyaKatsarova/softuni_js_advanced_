// The constructor takes one parameter value, which is a number
//  valueOf() This function should return the value property of the hex class.
//  toString() This function will show its hexadecimal value starting with "0x"
//  plus({number}) This function should add a number or Hex object and return a new Hex object.  //minus({number}) This function should subtract a number or Hex object and return a new Hex object. 
//parse({string}) Create a parse class method that can parse Hexidecimal numbers and convert them to standard decimal numbers.
class Hex{
    constructor(num){
        this._value = num;
    }
    valueOf(){
        return this._value;
    }
    // object.valueOf() returns the primitive val of an obj if such, otherwise returns the obj
    plus(num){
        let result = this._value + Number(num.valueOf());
        return new Hex(result);
    }
    minus(num){
        let result = this._value - Number(num.valueOf());
        return new Hex(result);
    }
    toString(){
        return `0x${(this._value.toString(16)).toUpperCase()}`;
    }
    static parse(str){
        return parseInt(str, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString()); //0XFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString()); //0XF
console.log(a.plus(b).toString()==='0xF'); // true
console.log(Hex.parse('AAA')); // 2730