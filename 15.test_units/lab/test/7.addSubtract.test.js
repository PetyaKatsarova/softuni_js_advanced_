// Your tests will be supplied with a function named 'createCalculator()'. It should meet the following requirements: Return a module (object), containing the functions add(), subtract() and get() as properties
//  The functions add() and subtract() take a parameter that can be parsed as a number (either a
// number or a string containing a number) that is added or subtracted from the internal sum
//  The function get() returns the value of the internal sum

const { expect } = require('chai');
const createCalculator = require('../7.addSubtract');

describe("addSubtract testing", ()=>{
    it("Should return obj", ()=>{
        expect(typeof createCalculator()).to.equal('object');
    });
    it("Should have the funcs add, subtract, get", ()=>{
        let bla = createCalculator();
        expect(typeof bla.add).to.equal('function');
        expect(typeof bla.subtract).to.equal('function');
        expect(typeof bla.get).to.equal('function');
    });
    it("Should: get func returns internal sum", ()=>{
        let bla = createCalculator();
        bla.add(5);
        let actualResult = bla.get();
        bla.subtract(10);
        actualResult = bla.get();
        expect(actualResult).to.equal(-5);
    });
    it("Should: add and subtract funcs param should be parsable to num",()=>{
        let bla = createCalculator();
        bla.add('5');
        expect(bla.get()).to.equal(5);
        bla.subtract('-10');
        expect(bla.get()).to.equal(15);
    });
    it("Should return undefined if not parsable to num param is passed to add() and subtract()",()=>{
        let bla = createCalculator();
        bla.add('five');
        expect(bla.get()).to.be.NaN;
        bla.subtract('ten');
        expect(bla.get()).to.be.NaN;
    });
});