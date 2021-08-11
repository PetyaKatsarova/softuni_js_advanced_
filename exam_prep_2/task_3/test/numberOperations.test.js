// Using Mocha and Chai write JS Unit Tests to test a variable named numberOperations, which represents an object.
// The object that should have the following functionality:
//  powNumber(num) - A function that accepts a single parameter:
// o the function returns the power of the given number
// o there is no need of validation for the input
//  numberChecker(input) - A function that accepts a single parameter:
// o the function parses the input to number, and validates it
// o If the input is not a number the function throws an error
// o if the input is a number, the function checks if it is lower than 100. If so the function returns the string: 'The number is lower than 100!'
// o otherwise the function returns: 'The number is greater or equal to 100!'
//  sumArrays(array1, array2) - A function that should accepts two parameters (arrays):
// o the function loops through the arrays and sums the number on the first index in the first array with
// the number on the first index of the second array, then sums the number on the second index of the
// two arrays and so on.
// o The function returns new array, which represents the sum of the two arrays by indexes
// o The arrays will be always valid, there is no need to test the input arrays.
const { assert, expect } = require('chai');
const numberOperations = require('../numberOperations.js');

describe('numberOperations', function() {
    describe('powNumber()', function() {
        // it('Takes single param', function() {
        //    assert.strictEqual(1,1);
        // });
        it('Should return num to the second pow', function() {
            assert.strictEqual(numberOperations.powNumber(3), 9);
            assert.strictEqual(numberOperations.powNumber(1.5), 1.5 * 1.5);
            assert.strictEqual(numberOperations.powNumber(-4), 16);
            assert.strictEqual(numberOperations.powNumber(0), 0);
            assert.isNaN(numberOperations.powNumber(NaN));
         });
    });
    describe('numberChecker()', function() {
        it('Should correctly coherse the input arg', function() {
            assert.strictEqual(numberOperations.numberChecker('3'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(''), 'The number is lower than 100!');
         });
         it('Should throw an err when passsed an arg coherced to NaN', function() {
            assert.throw(()=>numberOperations.numberChecker('abc', Error, 'The input is not a number!'));
            assert.throw(()=>numberOperations.numberChecker(undefined, Error, 'The input is not a number!'));
            expect(() => numberOperations.numberChecker('1234c')).to.throw(Error,'The input is not a number!' );
            // assert.throw(()=>numberOperations.numberChecker('1234c', Error, 'The input is not a number!'));
         });
         it('Should return correct str when arg is a valid num', function() {
            assert.strictEqual(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker('99'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('-100'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('55.99'), 'The number is lower than 100!');
         });
    });

    describe('sumArrays()', function() {
        it('should return correct result if one arr is empty', function() {
            assert.deepEqual(numberOperations.sumArrays([],[1,2,3]), [1,2,3]);
            assert.deepEqual(numberOperations.sumArrays([1], []), [1])
        });
        it('should return correct result if both arr r empty', function() {
            assert.deepEqual(numberOperations.sumArrays([], []), []);
        });
        it('should return correct result if one arr is shorter', function() {
            let arr1 = [1,2,3];
            let arr2 = [4,5,6,7]
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [5,7,9,7]);
            assert.deepEqual(numberOperations.sumArrays([1.1,2,3,4,5,6], [2.2]), [1.1 + 2.2,2,3,4,5,6]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b','c'], ['b', 'c']), ['ab', 'bc', 'c']);
        });
        it('should return correct result if both arr r equal', function() {
            let arr1 = [1,2,3];
            let arr2 = [4,5,6,]
            assert.deepEqual(numberOperations.sumArrays(arr1, arr2), [5,7,9]);
            assert.deepEqual(numberOperations.sumArrays([1.01], [2.02]), [1.01+2.02]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b','c'], ['b', 'c', 'd']), ['ab', 'bc', 'cd']);

        });
    });
});

