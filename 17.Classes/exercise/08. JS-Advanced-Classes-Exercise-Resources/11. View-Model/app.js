// We need to create a class Textbox that represents one or more HTML input elements with type="text". The constructor takes as parameters a selector and a regex for invalid symbols.
// Textbox elements created from the class should have:
//  property value (has getters and setters)
//  property _elements containing the set of elements matching the selector

//  getter elements for the _elements property – return as NodeList
//  property _invalidSymbols - a regex used for validating the textbox value
//  method isValid() - if the _invalidSymbols regex can be matched in any of the _elements values return false, otherwise return true.
// All _elements values and the value property should be linked. If the value of an element from _elements change all other elements' values and the value property should instantly reflect it, likewise should happen if the value property changes.
// Constraints Selectors will always point to input elements with type text.

class Textbox {
    constructor(selector, regex){
        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }
    get elements(){
        return this._elements;
    }
    get value(){
        return this._value;
    }
    set value(v){
        this._elements = Array.from(this._elements).map(el => el = v);
        this._value = v;
    }

    isValid = () =>  this._invalidSymbols.test(this.value);

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.querySelectorAll('.textbox');
console.log(inputs);

inputs.forEach(el => el.addEventListener('input',function(){console.log(el.value);}));
