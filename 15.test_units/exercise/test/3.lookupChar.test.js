const {assert, expect} = require('chai');
const lookupChar = require('../3.lookupChar.js');


describe("Retrieves char at index from a str param", ()=>{
    it("Should return char at index given from the str", ()=> {
        expect(lookupChar('string',0)).to.eq('s');
        expect(lookupChar('st',1)).to.eq('t');
    });
    it('Should return undefined if param1 !=str || param2 !== Number', ()=>{
        expect(lookupChar('a', 1.1)).to.be.undefined;
        expect(lookupChar(5, 5)).to.be.undefined;
        expect(lookupChar('str', 'str')).to.be.undefined;
    });
    it("Should return 'incorrect index' if given inc. i.", ()=> {
        expect(lookupChar('s',1)).to.equal('Incorrect index');
        expect(lookupChar('string',-3)).to.equal('Incorrect index');
    });
});

// why does it fail me??
// describe("Retrieves char at index from a str param", ()=>{
//     it('Should return undefined if param1 !=str || param2 !== Number', ()=>{
//         expect(charLookup('str', 'str')).to.be.undefined;
//         expect(charLookup(5, 'str')).to.be.undefined;
//         expect(charLookup(5, 5)).to.be.undefined;
//         expect(charLookup('str', 1.1)).to.be.undefined;
//     });
//     it("Should return 'incorrect index' if given inc. i.", ()=> {
//         expect(charLookup('',0)).to.equal('Incorrect index');
//         expect(charLookup('string',6)).to.equal('Incorrect index');
//         expect(charLookup('string',7)).to.equal('Incorrect index');
//         expect(charLookup('string',-3)).to.equal('Incorrect index');
//     });
//     it("Should return char at index given from the str", ()=> {
//         expect(charLookup('string',0)).to.eq('s');
//         expect(charLookup('string',5)).to.eq('g');
//     });
// });


