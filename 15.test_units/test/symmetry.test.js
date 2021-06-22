// Your tests will be supplied with a function named 'isSymmetric()'. It should meet the following
// requirements:
//  Take an array as argument
//  Return false for any input that isn’t of the correct type
//  Return true if the input array is symmetric
//  Otherwise, return false

const isSymmetric = require('../symmetry.js');
const { assert, expect } = require('chai');
//but dont use should: goes into ur result
const should = require('chai').should();

describe('Test some functionality', ()=> {
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
         //assert
         assert.equal(isSymmetric(null), expectedResult);
         assert.equal(isSymmetric({}), expectedResult);
         assert.equal(isSymmetric(''), expectedResult);
         assert.equal(isSymmetric(0), expectedResult);
         assert.equal(isSymmetric(false), expectedResult);
         assert.equal(isSymmetric(true), expectedResult);
         assert.equal(isSymmetric(undefined), expectedResult);
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
    it("Should fail if different types are symetric", ()=>{
        let actualResult = isSymmetric([1,'1']);
        expect(actualResult).to.be.false;
    });
});