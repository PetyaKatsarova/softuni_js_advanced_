// function  Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // to save memory: if we have a func inside the Person, it will be repeated with every 
// //object we create, so this way we save memory:
// //__proto__ is for objects: not recommended touse, prototype is for functs
// Person.prototype.greet = function () {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let pesho = new Person('Pesho', 101);
// let petentse = new Person('Petentseto Zlatno', 48);

// pesho.greet();
// petentse.greet();


let person = {
    name: 'Pesho',
    age: 55
};
let employee = Object.create(person);// assigne prototype to person
//console.log(employee.name);
console.log(employee.__proto__);

let employee2 = Object.assign({}, person); // clonew person
//console.log(employee2);
console.log(employee2.__proto__);