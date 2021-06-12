// Your function should take the values of "firstNumber" and "secondNumber", convert them to
// numbers, subtract the second number from the first one and then append the result to the div
// with id="result".
//  Your function should be able to work with any 2 numbers in the inputs, not only the ones given in
// the example.

function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    let result = Number(num1) - Number(num2);
    document.getElementById('result').innerHTML = result;
}
console.log(subtract());