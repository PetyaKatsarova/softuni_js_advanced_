// // 'use strict';
// const myObj = {
//     name: 'Petya',
//     age: 48
// }
// //console.log(Object.getOwnPropertyDescriptor(myObj,'name'));

// const myCollection = {};
// Object.defineProperty(myCollection, 'size', {
//     enumerable: false,
//     get: function () {
//             return Object.keys(this).length;   
//          }
// });
// myCollection['Ivan'] = '12345';
// myCollection['Petkan'] = '5678';
// myCollection['Genka'] = '111111';
// //console.log(myCollection.size);

// const bla = {};
// Object.defineProperty(bla, 'name', {
//     value: "George",
//     writable: false
// });
// bla.name = 'kuku'
// //console.log(bla.name);

// const bla2 = {};
// Object.defineProperty(bla2, 'name', {
//     get() {
//         return this._name;
//     },
//     set(val) {
//         this._name = val;
//     }
// });

// bla2.name = 'John';
// console.log(bla2._name);
// //Object.freeze(bla2);
// bla2.name = 'pupilala';
// console.log(bla2.name);
// //console.log(Object.getOwnPropertyDescriptor(bla2, '_name'));
// Object.seal(bla2);
// console.log(Object.getOwnPropertyDescriptor(bla2, '_name'));
// // console.log('After: ', bla2.name);

// const myObj = {};
// Object.defineProperty(myObj, 'name', {
//    value: 'Koki',
//    writable: true,
//    enumerable: true,
//    configurable: false
// });
//console.log(myObj);
//delete myObj.name;// with configurable false cant delete 
//console.log(myObj.name);
// obj.seal(cat) puts configurable false
//obj.freeze(cat) puts writable all to false and cant redefine

// &&&&&&&&&&&&&&&&& PROTOTYPE &&&&&&&&&&&&&&&&&&

function  Person(fn,ln) {
    this.firstName = fn;
    this.lastName = ln;
}
Person.prototype.write = function (msg) {
    console.log(`${this.firstName} wrote: ${msg}`);
}
// that is what the 'new' word does: 
// function  newOperator(constructor, ...params) {
//     //allocate memory
//     const result = {};
//     //assign prototype
//     Object.setPrototypeOf(result, Person.prototype);
//     //execute constructor with params inside the memory context
//     constructor.apply(result, params);
//     //return memory reference
//     return result;
// }

//version 2
function  newOperator(constructor, ...params) {
    //allocate memory and assign prototype
    const result = Object.create(Person.prototype);

    //execute constructor with params inside the memory context
    constructor.apply(result, params);
    //return memory reference
    return result;
}

const person1 = newOperator(Person, 'Kiki', 'The Feather');
const person2 = newOperator(Person, 'Krali', 'Marko');

console.log(person1, person2);

person1.write('i love u');