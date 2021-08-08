function  Person(params) {
    this.name = params;
}
Person.prototype.saySth = function () {
    console.log(`${this.name} said: i love u`);
}

function Employee(name,salary) {
    Person.apply(this, [name]);
    this.salary = salary;
}
// nver do:
//Employee.prototype = Person.prototype;
// instead do: follow by reference, dont modify the above obj
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.collectSalary = function () {
    console.log(`${this.name} collected ${this.salary}`);
}

const myEmployee = new Employee('Penka', 60000);
console.log(myEmployee);

myEmployee.saySth('')// gives error

myEmployee.collectSalary();
const bla = new Person('p2');
console.log(bla.name);