// Write a function that adds a number passed to it to an internal sum and returns itself with its internal sum set to the new value, so it can be chained in a functional manner. Hint: Overwrite toString() of the function. console.log(add(4)(3).toString());
//Your function needs to take one numeric argument.
//Your function needs to return itself with an updated context.
// add(1)//1
// add(1)(6)(-3)//4

function add(num1){
    let sum = 0;
    function inner(num2){
        sum+=num2;
       return inner;
    }
    inner.valueOf = () =>  {return sum}; //this one doesnt return the value
    // inner.toString = () => sum;
    return inner(num1);
}
function foo(n) {
    let temp = 0

    function recursive(x) {
        temp += x

        return recursive
    }
    recursive.toString = () => temp
    return recursive(n)
}

// console.log(add(1));// 1
// console.log(add(5)(1));// 6
// let a = add(5)(6)
// console.log(a(6));// 17
//when using el.valueOf()
console.log(add(1).valueOf());// 1
console.log(add(5)(1).valueOf());// 6
let a = add(5)(6)
console.log(a(6).valueOf());// 17
