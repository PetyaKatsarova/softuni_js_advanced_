function createRecord(name, population, treasury) {
    return {
        name,
        population,
        treasury
    };
}
// console.log(createRecord('Sofia', 2000000, 'sth'));
console.log('------------------------------------------------');

const department = {
    name: 'Engineering',
    director: 'Ted Thompson',
    employeeCount: 25
};
const { name, employeeCount } = department; 
// console.log(name, employeeCount); // 'Engineering' 25
// delete department.director;
// console.log(department.director); //undefined
console.log('------------------------------------------------');


const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
//   console.log(`obj.${key} = ${obj[key]}`);
}
// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
console.log('------------------------------------------------');

// Get an array of tuples (array of two elements), representing each key and value pair First tuple element is the key, the second is the value This method is often used if we want to sort the contents

const entries = Object.entries(obj);
// console.log(entries);
// [ ['a', '1'],['b', '2'],['c', '3'] ]
console.log('------------------------------------------------');

function townPopulation(townsArr){
    const towns = {};
    for(let line of townsArr){
        let[name, population] = line.split(' <-> ');
        population = Number(population);
        if(towns[name] != undefined) population += towns[name];
        towns[name] = population;
    }
    for(let town in towns){
        // console.log(`${town} : ${towns[town]}`)
    }
 }
townPopulation(['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344',
'Mexico City <-> 23401925','Istanbul <-> 1000']);
// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925
console.log('------------------------------------------------');
// ????????????? GIVES ERROR!!!
let count = 5;
const parser = {
    increment:function(){ count++; },
    decrement() { count--; },
    reset() { count = 0; }
}
// parser[command](); shorter way of writing funcs as property, used instead of switch
// let par = parser[increment]();
// console.log(par);
// console.log(parser[increment]());
// console.log(parser[decrement]());
// console.log(parser[reset]());

console.log('------------------------------------------------');
function createRecord(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() { this.treasury += this.population * this.taxRate; },
        applyGrowth(percent) {this.population += Math.floor(this.population * percent / 100); },
        applyRecession(percent) { this.treasury -= Math.floor(this.treasury * percent / 100); },
    };
}
let sth = createRecord('Sofia', 20, 60);
// console.log(sth[name]);
console.log('------------------------------------------------');
// gives error again
const department2 = {
    name: "Engineering", 
    data: {
    director: {
    name: 'John',
    position: 'Engineering Director'
    },
    employees: [],
    company: 'Quick Build'
    }
};
const {data: {director}} = department2;
// console.log(department2);
// director is { name: 'John', position: 'Engineering Director'}
console.log('------------------------------------------------');

// FACTORY FUNC
function createRect(width, height){
    const rect = {width, height};
    rect.getArea = ()=>{
        return rect.width * rect.height;
    }
    return rect;
}
let bla = createRect(10,5);
console.log(bla.getArea());
let bla2 = createRect(1,55);
console.log(bla2.getArea());
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');
console.log('------------------------------------------------');