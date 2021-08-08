// Write a JS program which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( "{firstName} {lastName}" ) properties which should be all accessible, we discovered that "accessible" also means "mutable". This means that:
//  If firstName or lastName have changed, then fullName should also be changed.
//  If fullName is changed, then firstName and lastName should also be changed.
//  If fullName is invalid, you should not change the other properties. A valid full name is in the format "{firstName} {lastName}"

//constructor func is sugar synthax for class
// function Person(f,l) {
//     this.firstName = f;
//     this.lastName = l;

//     Object.defineProperty(this, 'fullName',{
//         get: function (){return `${this.firstName} ${this.lastName}`},
//         set: function (fullName) {
//             // if u put g at the end of the regexp: get error
//             let pattern = /(?<fname>\w+) (?<lname>\w+)/;
//             let groups = fullName.match(pattern);
//             if(groups){
//                this.firstName = groups[1];
//                this.lastName = groups[2];
//             }
//         }
//     });
// }

class  Person{
    constructor(f,l){
       this.firstName = f;
       this.lastName = l;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        [this.firstName, this.lastName] = fullName.split(' ');
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
let person2 = new Person("Albert", "Simpson");
console.log(person2.fullName); //Albert Simpson
person2.firstName = "Simon";
console.log(person2.fullName); //Simon Simpson
person2.fullName = "Peter";
console.log(person2.firstName); // Simon
console.log(person2.lastName); // Simpson