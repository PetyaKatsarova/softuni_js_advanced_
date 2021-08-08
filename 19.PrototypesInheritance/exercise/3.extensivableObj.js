// Create an object that can clone the functionality of another object into itself. Implement an extend(template) function that would copy all of the properties of template to the parent object and if the property is a function, add it to the object’s prototype instead.
// Input / Output: Your code should return the extensible object instance. The extend() function of your object will receive a valid object as input parameter, and has no output.
// To gain access to the prototype of an instance, use the Object.getPrototypeOf() function. To make a function shared between all instances, it’ll have to be attached to the prototype instead of the instance.
// i dont understand it, need an example with calling the functionality...
function  solve(params) {
    const proto = {};
    const inst = Object.create(proto);

    inst.extend = function (param) {
        Object.entries(param).forEach(([key,val]) => {
            if(typeof val === 'function'){
                proto[key] = val;
            }
            inst[key] = val;
        });
    }

    return inst;
}
const myObj = solve();
const template = {
    extensionMethd: function(){console.log('hi from ext. method');},
    extensionProperty: 'propprop'
}
myObj.extend(template);
console.log(myObj);


// myObj: { 
//   __proto__: {} 
//   extend: function () {…} 
// } 

// const template = { 
//   extensionMethod: function () {}, 
//   extensionProperty: 'someString' 
// } 
// myObj.extend(template); 
    
    // myObj: { 
    //   __proto__: { 
    //     extensionMethod: function () {} 
    //   }, 
    //   extend: function () {}, 
    //   extensionProperty: 'someString' 
    // }