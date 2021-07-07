// Write tests to check the functionality of the following code:// sumNumbers.js

function sum(arr) {
let sum = 0;
for (let num of arr){
sum += Number(num);
}
return sum;
}
module.exports = { sum };
