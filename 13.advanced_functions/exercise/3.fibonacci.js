// Write a JS function that when called, returns the next Fibonacci number, starting at 0, 1. Use a closure to keep the current number. Input: There will be no input.
// Output: The output must be a Fibonacci number and must be returned from the function.


function getFibonator(){
    num1 = 0;
    num2 = 1;
    
    return function solve(){
        let result = num1 + num2;  
        num1 = num2;
        num2 = result;
        
        return num1;
    }

}

function foo() {
    let nums = [0, 0]

    return () => {
        const result = nums[0] + nums[1]
        nums = [nums[1], nums[1] + nums[0] || 1]
        return result || 1
    }
}


let fib = foo();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13