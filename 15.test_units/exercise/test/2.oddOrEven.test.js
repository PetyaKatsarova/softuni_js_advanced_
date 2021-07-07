const {assert, expect} = require('chai');
const isOddOrEven = require('../2.oddOrEven.js');

describe('Test functionality of evenOrOdd', ()=>{
    it("Should return undefined if the param is not a str", () => {
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven(['1', '2'])).to.equal(undefined);
        expect(isOddOrEven({'bla':1, 'kuk': 2})).to.equal(undefined);
        expect(isOddOrEven()).to.equal(undefined);
    });
    it("Should return 'odd' if the length of the str is odd",()=>{
        expect(isOddOrEven('bla')).to.equal('odd');
    });
    it("Should return 'even' if the length of the str is odd",()=>{
        expect(isOddOrEven('blab')).to.equal('even');
    });
    it("Should return 'even' if the length of the str is 0",()=>{
        expect(isOddOrEven('')).to.equal('even');
    });
    // it("What happens if we enter multiple strings as params?",()=>{
    //     expect(isOddOrEven('', 'bla', 'wtf5')).to.equal('even');
    // });
});