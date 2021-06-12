// Create a function returns an object with 2 methods (mage and fighter). This object should be able to create heroes (fighters and mages). Every hero has a state.
//     • Fighters have name, health = 100 and stamina = 100 and every fighter can fight.  When he fights his stamina decreases by 1 and the following message is printed on the console:
// `${fighter's name} slashes at the foe!`

function heroes(){
    function outerFuncForFight(stateObj){
        stateObj.fight = () => {
            stateObj.stamina--;
            console.log(`${stateObj.name} slashes at the foe!`);
        }
    }

    function outerFuncForCast(stateObj){
        stateObj.cast = (spell) => {
            stateObj.mana--;
            console.log(`${stateObj.name} cast ${spell}`);
        }
    }

    function fighter(name){
        let fighterState = {
            name,
            health: 100,
            stamina: 100
        }
        outerFuncForFight(fighterState);
        return fighterState;
    }

    function mage(name){
        let mageState = {
            name,
            health: 100,
            mana: 100
        }
        outerFuncForCast(mageState);
        return mageState;
    }    


    return {mage, fighter};
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

// Scorcher cast fireball
// Scorcher cast thunder
// Scorcher cast light
// Scorcher 2 slashes at the foe!
// 99
// 97