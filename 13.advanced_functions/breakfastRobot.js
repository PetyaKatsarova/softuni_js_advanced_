
// Your task is to write the management software for a breakfast chef robot - it needs to take orders, keep track of available ingredients and output an error if something’s wrong. The cooking instructions have already been installed, so your module needs to plug into the system and only take care of orders and ingredients. And since this is the future and food is printed with nano-particle beams, all ingredients are microelements - protein, carbohydrate, fat and flavours. The library of recipes includes the following meals:
//  apple - made with 1 carbohydrate and 2 flavour
//  lemonade - made with 10 carbohydrate and 20 flavour
//  burger - made with 5 carbohydrate, 7 fat and 3 flavour
//  eggs - made with 5 protein, 1 fat and 1 flavour
// turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour
// The robot receives instructions either to restock the supply, cook a meal or report statistics. The input consists of one of the following commands:
//  restock <microelement><quantity> - increases the stored quantity of the given microelement
//  prepare <recipe><quantity> - uses the available ingredients to prepare the given meal
//  report - returns information about the stored microelements, in the order described below, including zero  elements The robot is equipped with a quantum field storage, so it can hold an unlimited quantity of ingredients, but there is no guarantee there will be enough available to prepare a recipe, in which case an error message should be returned. Their availability is checked in the order in which they appear in the recipe, so the error should reflect the first requirement that was not met.
// Submit a closure that returns the management function. The management function takes one parameter.
//Instructions are passed as a string argument to your management function. It will be called several ////times per session, so internal state must be preserved throughout the entire session.
// The return value of each operation is one of the following strings:
//  Success - when restocking or completing cooking without errors
//  Error: not enough &lt;ingredient&gt; in stock - when the robot couldn’t muster enough
// microelements
//  protein={qty} carbohydrate={qty} fat={qty} flavour={qty} - when a report is requested, in
// a single string


function solution(){
    let menu = {
        'apple' : {'carbohydrate': 1, 'flavour': 2},
        'lemonade': {'carbohydrate': 10, 'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7,  'flavour': 3},
        'eggs': { 'protein':5, 'fat': 1, 'flavour': 1},
        'turkey':{'protein':10, 'carbohydrate':10, 'fat': 10, 'flavour': 10}
    }

    let ingredients = {
        'protein' : 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    }

    return function(str){
        let [command, ingr, amt] = str.split(' ');
    
        if(command === 'restock'){
            ingredients[ingr] += Number(amt);
            return 'Success';
        }
        if(command === 'prepare'){
            // menu item ingredients
            // ingr here is menu item
            let ingrs = Object.entries(menu[ingr]);
            // remove those from the ingredients obj
            let areAllIngrs = true;
            for(let i=0; i<ingrs.length; i++){
                let menuIngredientQuantity = Number(ingrs[i][1]);
                let menuIngredientName = ingrs[i][0];
                if(ingredients[menuIngredientName] - (menuIngredientQuantity * Number(amt)) < 0){
                    areAllIngrs = false; 
                    return `Error: not enough ${menuIngredientName} in stock`;
                }
            }
            if(areAllIngrs){
                for(let i=0; i<ingrs.length; i++){
                    let menuIngredientQuantity = Number(ingrs[i][1]);
                    let menuIngredientName = ingrs[i][0];
                    ingredients[menuIngredientName] -= (Number(menuIngredientQuantity) * Number(amt));    
                    return `Success`;
                }
            }
        
        }
        if(command === 'report'){
            //protein=0 carbohydrate=0 fat=0 flavour=0
            let str = '';
            for(let ingr in ingredients){
                str += `${ingr}=${ingredients[ingr]} `;
            }
            return str;
        }     
    }
}

 let manager = solution ();

console.log (manager ('restock flavour 50'));// Success 

console.log('prepare lemonade 4');
console.log(manager ('prepare lemonade 4'));// Error: not enough carbohydrate in stock
console.log(manager('restock flavour 50'));//Success

console.log('prepare lemonade 4');
console.log(manager('prepare lemonade 4'));// error carb 10 * 4, flavor 20 * 4: Success
console.log(manager('restock carbohydrate 10'))
console.log(manager('restock flavour 10'))

console.log('prepare apple 1');
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))

console.log('prepare burger 1');
console.log(manager('prepare burger 1'))
console.log(manager('report'));
console.log(`---------------------------------`);

// console.log(' ------------------------------------------------------- ');

// // // Success
// // // Success
// // // Success
// // // Success
// // // Success
// // // protein=0 carbohydrate=4 fat=3 flavour=55
// // //example 2:
// console.log('prepare turkey: ');
console.log(manager('prepare turkey 1'))

// console.log('restock protein 10');
console.log(manager('restock protein 10'))

// console.log('prepare turkey 1');
console.log(manager('prepare turkey 1'))

// console.log('RESTock carbs: ');
console.log(manager('restock carbohydrate 10'))
console.log(manager('prepare turkey 1'))

// console.log('restock: fat');
console.log(manager('restock fat 10'))

// console.log('prepare turkey');
console.log(manager('prepare turkey 1'))

// console.log('restock flavour');
console.log(manager('restock flavour 10'))

// console.log('prep turkey');
console.log(manager('prepare turkey 1'))

console.log(manager('report'))

// // Error: not enough protein in stock
// Success
// Error: not enough carbohydrate in stock
// Success
// Error: not enough fat in stock
// Success
// Error: not enough flavour in stock
// Success
// Success
// protein=0 carbohydrate=0 fat=0 flavour=0







