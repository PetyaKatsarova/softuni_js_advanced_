// Your tests will be supplied with a function named 'sum()'. It should meet the following requirements:
//  Take an array of numbers as argument
//  Return the sum of the values of all elements inside the array
const  sum  = require('../4.sumNumbers').sum;
const { assert, expect } = require('chai');
//but dont use should: goes into ur result
const should = require('chai').should();

describe("Testing Sum Function", () => {
    it("return NaN if one element of array is not a number", () => {
        expect(isNaN(sum([1, "a"]))).to.equal(true)
    })
    it("calculates 1 element array", () => {
        expect(sum([1])).to.equal(1)
    })
    it("calculates 2 element array", () => {
        expect(sum([1, 1])).to.equal(2)
    })
})
