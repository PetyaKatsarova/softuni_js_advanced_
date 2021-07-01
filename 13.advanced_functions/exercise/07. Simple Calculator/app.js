// Create a function calculator which returns an object that can modify the DOM. The returned object should support
// the following functionality: 
//  init (selector1, selector2, resultSelector) - initializes the object to work with the elements
// corresponding to the supplied selectors. 
//  add () - adds the numerical value of the element corresponding to selector1 to the numerical value of
// the element corresponding to selector2 and then writes the result in the element corresponding
// to resultSelector 
//  subtract () - subtracts the numerical value of the element corresponding to selector2 from the
// numerical value of the element corresponding to selector1 and then writes the result in the element
// corresponding to resultSelector 
// Input 
// There will be no input your function must only provide an object.
// Your function should return an object that meets the specified requirements. 
// Constraints 
//  All commands will always be valid, there will be no nonexistent or incorrect input. 
//  All selectors will point to single textbox elements. 
//  Use the given skeleton to solve this problem. 

// Sample execution 

// const calculate = calculator (); 
// calculate.init ("#num1", "#num2", "#result");

// function calculator(s1,s2, result){

//     const html = {s1: '', s2: '', result: ''}

//     let calc = (a,b,sign) => {
//        const signs = {'+': (a,b) => a+b, '-': (a,b) => a-b};
//        return signs[sign](Number(a), Number(b));
//     }

//     return {
//         init: (s1, s2, result) => {
//             html.s1 = document.querySelector(s1);
//             html.s2 = document.querySelector(s2);
//             html.result = document.querySelector(result);
//         },
//         add: () => {
//             html.result.value = calc(html.s1.value, html.s2.value, '+');
//         },
//         subtract: () => {
//             html.result.value = calc(html.s1.value, html.s2.value, '-');
//         }

//     }
// }

function calculator(s1,s2,result){
    const html = {s1:'', s2:'', result:''};

    const calc = (s1,s2,sign) => {
        let obj = {'+': () => s1+s2, '-': () => s1-s2};
        return obj[sign](s1,s2);
    }
    return {
        init: (s1,s2,result) => {
            html.s1 = document.querySelector(s1);
            html.s2 = document.querySelector(s2);
            html.result = document.querySelector(result);
        },
        add: () => {
            html.result.value = calc(Number(html.s1.value), Number(html.s2.value), '+');
        },
        subtract: () => {
            html.result.value = calc(Number(html.s1.value), Number(html.s2.value), '-');
        }
    }
     
}

const calculate = calculator();
calculate.init('#num1','#num2','#result');




