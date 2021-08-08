// Write a function which receives a class and attaches to it a property species with value "Human" and a function toSpeciesString(). When called, the function returns a string with format: "I am a 'species'. 'toString()'"
// The function toString() is called from the current instance (call using this).
// Input / Output
// Your function will receive a class whose prototype it should extend. There is NO output, your function should only
// attach the properties to the given class’ prototype.
//!!!!!!!!!!!!
// using prototype is like using delegation/reference to the class: saves memory
// objects inherit props and methods from prototype, not exactly inheriting
//!!!!!!!!!!!!!!
function extendProrotype(classToExtend) {
     classToExtend.prototype.species = 'Human';
     classToExtend.prototype.toString = function () {
         
     }
      classToExtend.prototype.greet = function () {
        console.log(`Hi, my name is ${this.name}`);
        // }

    return `I am a ${this.species}. ${this.toString()}`;
}

class bla{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
console.log(extendPrototype(bla))