const mathEnforcer = require('../4.mathEnforcer.js');
const isOddOrEven = require('../2.oddOrEven.js');
const {expect} = require('chai');

describe("mathEnforcer", ()=>{
    describe("addFive", () => {
        it("Should return undefined if param is !num",()=>{
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
        it("Should return 5 plus the num param",()=>{
            expect(mathEnforcer.addFive(5)).to.eq(10);
            expect(mathEnforcer.addFive(-55)).to.eq(-50);
            expect(mathEnforcer.addFive(5.1)).to.eq(10.1);
        });
    });
    describe("subtractTen", () => {
        it("Should return undefined if param is !num",()=>{
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });
        it("Should return num param minus 10",()=>{
            expect(mathEnforcer.subtractTen(5)).to.eq(-5);
            expect(mathEnforcer.subtractTen(-55)).to.eq(-65);
            let result = Number(mathEnforcer.subtractTen(10.1).toFixed(2));
            expect(result).to.eq(0.10);
        });
    });
    describe("sum", () => {
        it("Should return undefined if pone of the 2 params is !num",()=>{
            expect(mathEnforcer.sum('5', 5) || mathEnforcer.sum(5,'5')).to.be.undefined;
        });
        it("Should return sum of both params",()=>{
            expect(mathEnforcer.sum(5,4)).to.eq(9);
            expect(mathEnforcer.sum(-5,1)).to.eq(-4);
            let result = Number(mathEnforcer.sum(10.1112, 5.2).toFixed(2));
            expect(result).to.eq(15.31);
        });
    });
});

// refactor
describe(`testing math calc methods obj`, () => {
    describe(`testing addFive method (floats allowed range +- 0.01)`, () => {
        it(`valid input positive Integer -> (0) -> 5`, () => {
            expect(mathEnforcer.addFive(0)).to.eq(5)
        })
        it(`valid input negative Integer -> (-1) -> 4`, () => {
            expect(mathEnforcer.addFive(-1)).to.eq(4)
        })
        it(`valid input float -> (0.1) -> 5.1`, () => {
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01)
        })
        it(`invalid input - not a number param -> ('a') -> undefined`, () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined
        })
    })

    describe(`testing subtractTen method`, () => {
        it(`valid input positive Integer -> (10) -> 0`, () => {
            expect(mathEnforcer.subtractTen(10)).to.eq(0)
        })
        it(`valid input negative Integer-> (-1) -> -11`, () => {
            expect(mathEnforcer.subtractTen(-1)).to.eq(-11)
        })
        it(`valid input float -> (10.1) -> 0.1`, () => {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01)
        })
        it(`invalid input - not a number param -> ('a') -> undefined`, () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined
        })
    })

    describe(`testing sum method`, () => {
        it(`valid input positive Integers -> (1,1) -> 2`, () => {
            expect(mathEnforcer.sum(1, 1)).to.eq(2)
        })
        it(`valid input negative Integers-> (-1,-1) -> -2`, () => {
            expect(mathEnforcer.sum(-1, -1)).to.eq(-2)
        })
        it(`valid input negative Int + positive Int-> (-1,1) -> 0`, () => {
            expect(mathEnforcer.sum(-1, 1)).to.eq(0)
        })
        it(`valid input float -> (1.1,2.2) -> 3.3`, () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01)
        })
        it(`invalid input - 1st param not a number -> ('1', 1) -> undefined`, () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined
        })
        it(`invalid input - 2nd paramnot not a number  -> (1, '1') -> undefined`, () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined
        })
    })
})