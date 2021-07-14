//2. GET PERSONS : Write a function that returns an array of Person objects. Use the class from the previous task, create the following  instances, and return them in an array:For any empty cells, do not supply a parameter (call the constructor with less parameters).
//const Person = require('./1.Person.js');
//let Person = require('./1.Person');

function getPersons(){
    class Person{
        constructor(fn, ln, age, email){
            this.firstName = fn;
            this.lastName = ln;
            this.age = age;
            this.email = email;
        }
    }
    const info = [
        ['Anna', 'Simpson', 22, 'anna@yahoo.com'],
        ['SoftUni'],
        ['Stephan', 'Johnson', 25],
        ['Gabriel', 'Peterson', 24, 'g.p@gmail.com'],
    ];
    return info.map(arr=> {
        return new Person(...arr);
        
    });    
}
console.log(getPersons());
//getPersons();