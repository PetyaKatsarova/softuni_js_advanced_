// Create a JS factory function that returns a Card object to hold a card’s face and suit, both set through the// constructor. Throw an error if the card is initialized with invalid face or suit or if an attempt is made to// change the face or suit of an existing instance to an invalid value.
//  Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
//  Valid card suits are: S (♠), H (♥), D (♦), C (♣)
// Both face and suit are expected as an uppercase string. The class also needs to have a toString()// method that prints the card’s face and suit as a string. Use the following UTF code literals to represent the// suits:
//  \u2660 – Spades (♠)
//  \u2665 – Hearts (♥)
//  \u2666 – Diamonds (♦)
//  \u2663 – Clubs (♣)
// Input / Output
// The factory function takes two string parameters. The toString() method of the returned object must// return a string.

function factoryCards(f,s){
    const faces = {
        2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 'J', Q: 'Q', K: 'K', A: 'A',
    }
    const suits = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663', }

    const setter = (a,b) => {
        if(!a[b]) throw new Error;
        return a[b];
    }
    const [face, suit] = [setter(faces,f), setter(suits,s)];
    const card = {face, suit, toString: () => `${face}${suit}`};

    Object.defineProperties(card, {
        face: {get() {return face},
              set: (f)=>{setter(faces,f)}
        },
        suit: {get(){return suit},
               set: (s) => {setter(suits,s)}

        }
    })

    return card;
}

let card1 = factoryCards('A', 'S');
let card2 = factoryCards('10', 'H');
let card3 = factoryCards('2', 'C');
console.log(card1.toString());// Aspade
console.log(card2.toString());//10hearts
console.log(card3.toString());

module.exports = { factoryCards }

