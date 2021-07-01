// Write a function that sorts an array with numeric values in ascending or descending order, depending on an argument that is passed to it.
// You will receive a numeric array and a string as arguments to the first function in your code.
//  If the second argument is asc, the array should be sorted in ascending order (smallest values first).
//  If it is desc, the array should be sorted in descending order (largest first).
// Input
// You will receive a numeric array and a string as input parameters.[14, 7, 17, 6, 8], 'asc';
//[14, 7, 17, 6, 8], 'desc'
// Output
// The output should be the sorted array.
//[6, 7, 8, 14, 17]
//[17, 14, 8, 7, 6]
function solve(arr, str){
    return str === 'asc' ? arr.sort((a,b)=> a-b) : arr.sort((a,b)=> b-a);
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));//[6, 7, 8, 14, 17]
console.log(solve([14, 7, 17, 6, 8], 'disc'));