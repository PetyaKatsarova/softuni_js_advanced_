// Your tests will be supplied with a function named 'isSymmetric()'. It should meet the following
// requirements:
//  Take an array as argument
//  Return false for any input that isn’t of the correct type
//  Return true if the input array is symmetric
//  Otherwise, return false


const assert = require('chai').assert;
const isSymmetric = require('../15.test_units/check_for_symetry/check_symetry.js');

describe('Test some functionality', ()=>{
    // 'it' is for a function
    it('Shoud take arr as argument', ()=>{
        //arrange
        let expectedResult = 'object';
        let arr = [1,2,3,4];

        //act
        let actualResult = typeof(arr);
        //assert
        assert.strictEqual(expectedResult, actualResult);
    });

    it("Return false for any input that isn’t of the correct type", ()=>{
         //arrange
         let expectedResult = false;
         let arr = 'string';
         //act
         let actualResult = isSymmetric(arr);
         //assert
         assert.strictEqual(actualResult, expectedResult);
    });
    it("Return true if the input array is symmetric", ()=>{
       //arrange
       let expectedResult = true;
       let arr = [1,2,3,3,2,1];
       //act
       let actualResult = isSymmetric(arr);
       //assert
       assert.strictEqual(actualResult, expectedResult);
    });
    it("Return false if the input array is not symmetric", ()=>{
        //arrange
        let expectedResult = false;
        let arr = [1,2,3,3,2];
        //act
        let actualResult = isSymmetric(arr);
        //assert
        assert.strictEqual(actualResult, expectedResult);
     });
});