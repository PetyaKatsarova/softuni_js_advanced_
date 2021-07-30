// Extend the build-in Array object with additional functionality. Implement the following functionality:
//  last() - returns the last element of the array
//  skip(n) - returns a new array which includes all original elements, except the first n elements; n is a Number parameter
//  take(n) - returns a new array containing the first n elements from the original array; n is a Number parameter
//  sum() - returns a sum of all array elements
//  average() - returns the average of all array elements
(function solve() {
    Array.prototype.last = function () {
        return this[this.length-1];
    }
    Array.prototype.skip = function (n) {
        if(checker){
            let r = []
            for(let i=n; i<this.length; i++){5
                r.push(this[i]);
            }
            return r;
        }
    }
    Array.prototype.take = function (n) {
        if(checker){
            let r = []
            for(let i=0; i<n; i++){
                r.push(this[i]);
            }
            return r;
        }
    }
    Array.prototype.sum = function () {
        // return this.reduce((acc,item) => acc+item,0);
        let sum = 0;
        for(let i=0; i<this.length; i++){
            sum += this[i];
        }
        return sum;
    }
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
    function  checker(n) {
        if(n > this.length || n < 0){
            throw new Error('The number is out of range');
        }
        return true;
    }
})();

let arr = [1,2,3,4,5];
console.log(arr.sum());
console.log(arr.average());
console.log(arr.take(3));



// Input / Output: Input for functions that expect it will be passed as valid parameters. Output from functions should be their return value.
// Constraints Structure your code as an IIFE.
// Hints: If we have an instance of and array, since we know it’s an object, adding new properties to it is pretty
// straightforward:
// This however, only adds our new function to this instance. To add all functions just one time and have them work on
// all arrays is not much more complicated, we just have to attach them to Array’s prototype instead:

// With such a declaration, we gain access to the context of the calling instance via this. We can then easily access
// indexes and other existing properties. Don’t forget we don’t want to modify the exiting array, but to create a new
// one: Arrray.prototype.last = function  (params) {
    
// }