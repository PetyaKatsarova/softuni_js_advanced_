// Write a function that takes a deck of cards as an array of strings and prints them as a sequence of// cards (space separated). Use the solution from the previous task to generate the cards.// Print 'Invalid card: [card]' when an invalid card definition is passed as input.// Input / Output// The function takes an array of strings as parameter. Print the list of cards as string, separated by space.
//const { cardFactory } = require('./02_playingCards')
//const { factoryCards } = require('./playingCards');

function printDeckOfCards(arr) {
    let result = [];
    for(let i=0; i<arr.length; i++){
        let face = arr[i].slice(0,-1);
        let suit = arr[i].slice(-1);
        try{
            result.push(factoryCards(face,suit).toString());
        }catch(e){
            console.log(`Invalid card: ${arr[i]}`);
            return;
        }
        
    }

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

    return result.join(' ');
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));







