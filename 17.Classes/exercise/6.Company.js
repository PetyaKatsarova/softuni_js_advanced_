// Write a class Company, which following these requirements: The constructor takes no parameters: You could initialize an object:  departments - empty object;
//  addEmployee({username}, {Salary}, {Position}, {Department}) This function should add a new employee to the department with the given name.  If one of the passed parameters is empty string (""), undefined or null, this function should throw an error with the following message: ";Invalid input!"; If salary is less than 0, this function should throw an error with the following message: ";Invalid input!";
//  If the new employee is hired successfully, you should add him into the departments array and return the following message: ";New employee is hired. Name: {name}. Position: {position}";
// bestDepartment() This function should return the department with the highest average salary rounded to the second digit after decimal point and its employees sorted by their salary by descending order and by their name in ascending order as a second criteria:
// "Best Department is: {best department's name}
// Average salary: {best department's average salary}
// {employee1} {salary} {position}
// {employee2} {salary} {position}
// {employee3} {salary} {position}

class Company{
    constructor(){
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        this.checker(username);
        this.checker(salary);
        this.checker(position);
        this.checker(department);

        if(salary < 0){
            throw new Error('Invalid input!');
        }
        
        if(!this.departments[department]){
            this.departments[department] = [];
        }
        this.departments[department].push({ username, salary, position });
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
    checker(el){
        if(el === '' || el === undefined || el == null){
            throw new Error('Invalid input!');
        }
    }

    bestDepartment(){
       let sortedDepts = Object.entries(this.departments).sort((a,b) => this._avgSalary(b[0]) - this._avgSalary(a[0]));
       let result = `Best Department is: ${sortedDepts[0][0]}\nAverage salary: ${this._avgSalary(sortedDepts[0][0])}`;
       let foo = sortedDepts[0][1].sort((a,b) => b.salary - a.salary || a.username.localeCompare(b.username));
       
       foo.forEach(row => {
            result += `\n` + row.username + ' ' + row.salary + ' ' + row.position;
       })
       return result;
                          
    }

    _avgSalary(dep){
        let depEmpl = this.departments[dep];
        let bla = depEmpl.reduce((acc, item) => acc + item.salary, 0) / depEmpl.length; 
        return bla.toFixed(2);           
    }   
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer



// class Company{
//     constructor(){
//         this.departments = new Map();
//     }
//     static Employee = class Employee {
//         constructor(username,salary,position){
//             this._username = username;
//             this._salary = salary;
//             this._position = position;
//         }
//         get username(){
//             return this._username;
//         }
//         set username(val){
//             this._validateParam(val);
//             this._username = val;
//         }
//         get salary(){
//             return this._salary;
//         }
//         set salary(val){
//             this._validateParam(val);
//             if(val < 0){
//                 throw new Error('Invalid input!');
//             }
//             this._salary = val;
//         }
        
//         get position(){
//             return this._position;
//         }
//         set position(val){
//             this._validateParam(val);
//             this._position = val;
//         }

//         _validateParam(val){
//             if(val === undefined || val === null || val === ''){
//                 throw new Error('Invalid input');
//             }
//         }
//     } 

//     addEmployee(username, salary, position, department){
//         if(department=== undefined || department=== null || department=== ''){
//             throw new Error('Invalid input');
//         }

//         if(!this.departments.has(department)){
//             this.departments.set(department,[]);
//         }
//         let employee = new Company.Employee(username,salary,position);
//         let workers = this.departments.get(department);
//         workers.push(employee);
//     }

//     bestDepartment(){
//        let sortedDepts = [...this.departments].sort(([aName, aWorkers], [bName, bWorkers]) => {
//            return this._getAverageSalary(bName) - this._getAverageSalary(aName) || aWorkers.username.localeCompare(bWorkers.username);
//        })
//        let [bestDName, bestDWorkers] = sortedDepts[0];
//        let best = bestDWorkers.sort((a,b) => b.salary - a.salary);

//        let result = `Best Department is: ${bestDName}\n Average salary: ${this._getAverageSalary(bestDName).toFixed(2)}`;
//       // result += this._printObj(this.departments[bestDName]);
//       // return result;
//     //   Object.entries(this.departments[bestDName]).forEach((el) => console.log(el))
//          this._printObj(this.departments)
//     }
//     _printObj(mp){
//          mp.forEach(el => {
//              console.log(el['salary']);
//          })
//     }

//     _getAverageSalary(departmentName){
//         let depWorkers = this.departments.get(departmentName);
//         let avgSalary = depWorkers.reduce((acc,item) => acc + item.salary, 0) / depWorkers.length
//         return avgSalary;
//     }
// }