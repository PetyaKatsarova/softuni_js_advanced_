// Your tests will be supplied with a function named 'rgbToHexColor()', which takes three arguments. It
// should meet the following requirements:
//  Take three integer numbers, representing the red, green and blue values of an RGB color, each
// within range [0…255]
//  Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//  Return undefined if any of the input parameters are of invalid type or not in the expected range

const rgbToHexColor = require('../6.rgb_to_hex').rgbToHexColor;
const { assert, expect } = require('chai');
// copied from @Sineastra
describe(`R,G,B integers Color to Hexadecimal Color Functionality`, () => {
    it(`valid input -> (66, 135, 245) -> #4287F5`, () => {
        expect(rgbToHexColor(66, 135, 245)).to.equals('#4287F5')
    })
    it(`invalid range red -> (-1, 0, 0) -> undefined`, () => {
        expect(rgbToHexColor(-1, 0, 0)).to.equals(undefined)
    })
    it(`invalid range green -> (0, -1, 0) -> undefined`, () => {
        expect(rgbToHexColor(0, 256, 0)).to.equals(undefined)
    })
    it(`invalid range blue -> (0, 0, -1) -> undefined`, () => {
        expect(rgbToHexColor(0, 0, -1)).to.equals(undefined)
    })
    it(`invalid range above 255 -> (256, 0, 0) -> undefined`, () => {
        expect(rgbToHexColor(256, 0, 0)).to.equals(undefined)
    })
    it(`more than 3 parameters -> (0, 0, 0, 0) -> undefined`, () => {
        expect(rgbToHexColor(0, 0, 0, 0)).to.equals('#000000')
    })
    it(`test saturation from specs -> (255, 158, 170) -> #FF9EAA`, () => {
        expect(rgbToHexColor(255, 158, 170)).to.equals('#FF9EAA')
    })
}) 