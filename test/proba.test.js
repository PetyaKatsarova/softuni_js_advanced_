// // it("Should work!",()=>{
// //     console.log('It is working :)');
// // });

// const assert = require('chai').assert;
// const sum = require('../proba.js');

// describe('Test some functionality', ()=>{
//     // 'it' is for a function
//     it('Shoud add positive nums', ()=>{
//         //arange
//         let arr = [1,2,3,4,5];
//         let expectedResult = 15;
    
//         // act
//         let actualResult = sum(arr);
//         //assert
//         // if(expectedResult === actualResult){
//         //     console.log('Passing');
//         // }else{
//         //     throw new Error('It should be 15');
//         // }
//         // with chai: 
//         assert.strictEqual(expectedResult, actualResult), 'Should be 15';
//     });
    
//     it('Shoud return false when adding positive nums', ()=>{
//         //arrange
//         let arr = [10, 20, 30, 40];
//         let expectedResult = 100;
//         // act
//         let actualResult = sum(arr);
//         //assert
//         assert.notEqual(expectedResult, actualResult);
//     });

//     it('Shoud pass when adding negative numts', ()=>{
//         //arrange
//         let arr = [-10, -20, -30, 40];
//         let expectedResult = -20;
//         // act
//         let actualResult = sum(arr);
//         //assert
//         assert.strictEqual(expectedResult, actualResult);
//     });
// });

