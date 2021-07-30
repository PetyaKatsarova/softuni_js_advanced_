let person = {
    name: "Pesho Peshev",
    age: 48, 
    greet(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let employee = {
    employeeId : 111,
    department: 'development'
}

Object.setPrototypeOf(employee,person);

for(const key in employee){
    if(employee.hasOwnProperty(key)){
        console.log('employee only key: ' + key);
    }else{
        console.log('prototype prop: ' + key);
    }
}
employee.greet();

// for(const key in employee){
//     if(Object.hasOwnProperty.call(employee,key)){
//         const el = Object[key];
//         console.log(el);
//     }
// }

// console.log(employee);
//  console.log(employee.__proto__);
// console.log(Object.getPrototypeOf(employee));
