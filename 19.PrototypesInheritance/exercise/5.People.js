// // Define several classes, that represent a company’s employee records. Every employee has a name and age, a salary and a list of tasks, while every position has specific properties not present in the others. Place all common functionality in a parent abstract class.


// 80% at the moment
function solve(){
    class Employee{
        constructor(name, age, tasks){
            // abstract class: 
            if(this.constructor === Employee){
                throw new Error("Canont instantiate abstract class.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
            this._currTask = 0;
        }
        work(){
           let task = this.tasks[this._currTask].replace('{name}', this.name);
           this._currTask = (this._currTask + 1) % this.tasks.length;
           console.log(task);
        }
        _calculateSalary(){
            return this.salary;
        }
        collectSalary(){
            console.log(`${this.name} received ${this._calculateSalary()} this month.`);
        }

    }   

    class Junior extends Employee{
        constructor(name, age){
            super(name, age, ['{name} is working on a simple task.']);
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age, ['{name} is working on a complicated task.', '{name} is taking time off work.', '{name} is supervising junior workers.']);
        }
    }
    class Manager extends Employee{
        constructor(name, age){
            super(name, age, ['{name} scheduled a meeting.', '{name} is preparing a qurterly report.']);
            this.dividend = 0;
        }
        _calculateSalary(){
            return this.salary + this.dividend;
        }
    }

    
    return {Employee, Junior, Senior, Manager};
}

 const bla = solve(); 
 const junior = new bla.Junior("Ivan",25); 
//  
 junior.work();  
 junior.work();
// // Ivan is working on a simple task. 
// //  Ivan is working on a simple task. 
// //  Ivan received 5811 this month.
 junior.salary = 5811; 
junior.collectSalary();  

const sinior = new bla.Senior("Alex", 31); 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();   

const manager = new bla.Manager("Tom", 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();
// // Alex is working on a complicated task. 
// //  Alex is taking time off work. 
// //  Alex is supervising junior workers. 
// //  Alex is working on a complicated task. 
// //  Alex received 12050 this month. 
// //  Tom received 15000 this month. 
// //  Tom received 17500 this month.

// let inner = {age: 101};
// let a = {myBla: inner};
// let b = {}; 
// // copy a in b but from b will change values in a!
// Object.assign(b,a);
// console.log(a);
// console.log(b);
// //b.myBla.age = 48;
// console.log(b);
//??????? all turn 48 !!!!!!!!!!!!!!!//
