// Your tests will be supplied with a function named 'rgbToHexColor()', which takes three arguments. It
// should meet the following requirements:
//  Take three integer numbers, representing the red, green and blue values of an RGB color, each
// within range [0…255]
//  Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//  Return undefined if any of the input parameters are of invalid type or not in the expected range

const rgbToHexColor = require('../rgb_to_hex');
const assert = require('chai').assert;

describe('Test some functionality', ()=> {
    // 'it' is for a function
    it('Shoud take 3 int nums in range 0-255', ()=>{
        //arrange
        let expectedResult = 'object';
        const a = 0;
        const b = 10;
        const c = 255;
        let expectedResult = 

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