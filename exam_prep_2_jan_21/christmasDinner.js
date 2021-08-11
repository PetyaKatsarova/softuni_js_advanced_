// Should have these 4 properties:
//  budget - number - comes from the constructor
//  dishes - empty array
//  products - empty array
//  guests - empty object
// Important! Use accessors to validate that the budget (the budget cannot be negative number). If the class is initialized with negative budget throw an error with the following message:
// 'The budget cannot be a negative number'
// In this method you should go shopping for the needed products to prepare for the dinner. The product will come as an array that has the type of the product and the price for it
//  If you don’t have enough money to buy the product, you should throw an error  'Not enough money to buy this product' Otherwise you should push the type of the product in the products array, decrease the budget with the price of the product and return a message:
// 'You have successfully bought {type}!'

class ChristmasDinner{
    constructor(budget){
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    set budget(b){
        if(this._budget < 0){
            throw new Error("The budget cannot be a negative number");
        } 
        this._budget = b;
    }
    shopping([product]){

    }
}
let dinner = new ChristmasDinner(-300);

console.log(dinner);
// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);
// dinner.recipes({recipeName: 'Oshav',productsList: ['Fruits', 'Honey']});
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
//     });
//     dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
//     });
//     dinner.inviteGuests('Ivan', 'Oshav');
//     dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
//     dinner.inviteGuests('Georgi', 'Peppers filled with beans');
//     console.log(dinner.showAttendance());


 //   Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage,
// Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt