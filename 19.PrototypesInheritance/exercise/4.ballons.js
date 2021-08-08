// You have been tasked to create several classes for balloons.Implement a class Balloon, which is initialized with a color (String) and gasWeight (Number). These two arguments should be public members.
// Implement another class PartyBalloon, which inherits the Balloon class and is initialized with 2 dditional
// parameters - ribbonColor (String) and ribbonLength (Number). The PartyBalloon class should have a property ribbon, which is an object with color and length - the ones given upon initialization. The ribbon property should have a getter.

//Implement another class BirthdayBalloon, which inherits the PartyBalloon class and is initialized with 1 extra parameter - text (String). The text should be a property and should have a getter.
function solve(){

    class Balloon{
        constructor(color, gasW){
            this.color = color.toString();
            this.gasWeight = Number(gasW);
        }
    }
    
    class PartyBalloon extends Balloon{
        constructor(c, g, ribbonColor, ribbonLength){
            super(c,g);
            this._ribbon = { 'color': ribbonColor.toString(), 'length': Number(ribbonLength)};
        }
        get ribbon(){
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(c, g, ribbonColor, ribbonLength,text){
            super(c, g, ribbonColor, ribbonLength);
            this._text = text.toString();
        }
        get text(){
            return this._text;
        }
    }

    return {Balloon, PartyBalloon, BirthdayBalloon}
}




let classes = solve();
let testBalloon = new classes.Balloon('Tumno-bqlo', 20.5);
//console.log(testBalloon);
let testPartyBalloon = new classes.PartyBalloon('Tumno-bqlo',20.5, 'Svetlo-cherno', 10.25);
//console.log(testPartyBalloon);
// Balloon {color: "Tumno-bqlo", gasWeight: 20.5}

//PartyBalloon {color: "Tumno-bqlo", gasWeight: 20.5, _ribbon: {color: "Svetlo-cherno", length: 10.25}}

let ribbon = testPartyBalloon.ribbon;
console.log(ribbon);
//{color: "Svetlo-cherno", length: 10.25}