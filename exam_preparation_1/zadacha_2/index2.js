// Write a class Parking, which implements the following functionality:
// Functionality constructor ( capacity )
// Should have these 2 properties:// • capacity – number; // • vehicles – array;
// Hint: You can add more properties to help you finish the task.

// addCar( carModel, carNumber ) // The carModel and carNumber are of type string.
// • If there's not enough parking spots for the car the park, throw an Error:
// "Not enough parking space."
// Otherwise this function should add the car, with the properties: carModel, carNumber, payed: default false, to the vehicles array and return: "The {carModel}, with a registration number {carNumber}, parked."

// removeCar( carNumber )• If the car is not found, throw an Error:
// "The car, you're looking for, is not found." • If the car hasn't payed, throw an Error:
// "{carNumber} needs to pay before leaving the parking lot."
// • Otherwise, this function should remove the car from the vehicles array and return:
// "{carNumber} left the parking lot."

// pay( carNumber )• If the car is not found, throw an Error:";{carNumber} is not in the parking lot.";  If the car has already payed, throw an Error:";{carNumber}'s driver has already payed his ticket.";
// • Otherwise, this function set payed to true on the found car and return:
// ";{carNumber}'s driver successfully payed for his stay.";

// getStatistics(carNumber)
// This method can be called with one parameter or without any.
// If NO parameter is provided, the method should return the full information of the parking lot.
// • At the first line:
// "The Parking Lot has { emptySlots } empty spots left."
// • On the lines, display information about each vehicle, sorted alphabetically ascending by
// their carModel:
// "{carModel} == {carNumber} - {Has payed / Not payed}"
// If the method is called with parameter for carNumber:
// • return only the information about the car with the given carNumber:
// "{carModel} == {carNumber} - {Has payed / Not payed}"
class Parking{

    constructor(capacity){
        this.capacity = Number(capacity);
        this.vehicles = [];
    }
    addCar(carModel, carNumber){
        if(this.vehicles.length >= this.capacity){
           throw new Error("Not enough parking space.");
        }else{
            this.vehicles.push({carModel, carNumber, payed: false});
            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }
    removeCar(carNumber){
        let isParked = this.vehicles.filter(el => el.carNumber === carNumber)[0];

        if(!this.vehicles.includes(isParked)) throw new Error(`The car, you're looking for, is not found.`);
        if(isParked.payed === false) throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);

        this.vehicles = this.vehicles.filter(v => v.carNumber !== carNumber);
        return `${carNumber} left the parking lot.`;   
    }

    pay(carNumber){
        let isParked = this.vehicles.filter(el => el.carNumber === carNumber)[0];

        if(!this.vehicles.includes(isParked)) throw new Error(`${carNumber} is not in the parking lot.`);
        if(isParked.payed === true) throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        isParked.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber){
        let result = [];
        result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);

        if(!carNumber){
            this.vehicles.slice().sort((a,b) => a.carModel.localeCompare(b.carModel))
                         .map(v => {
                            result.push(`${v.carModel} == ${v.carNumber} - ${v.payed === true ? `Has payed` : `Not payed`}`);
                         });
        }else{
            let vehicle = this.vehicles.filter(el => el.carNumber === carNumber)[0];
            result.push(`${vehicle.carModel} == ${carNumber} - ${vehicle.payed === true ? `Has payed` : `Not payed`}`);
        }
        
        return result.join("\n");
    }
}
    // getFullStatistic(){

    // }
    // getStatistics(carNumber){
    //     if(!carNumber){
    //         return this.getFullStatistic();
    //     }
    // }
    // findVehicle(carNumber){
    //     return this.vehicles.find(v => v.carNumber === carNumber);
    // }
  



const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Toyoto Aygo", "TX1234"));
console.log(parking.addCar("Lamburghini", "TX5678"));
console.log(parking.pay("TX1234"));
console.log(parking.getStatistics());
console.log('------------');
console.log(parking.getStatistics("TX1234"));
// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));
// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA&#39;s driver successfully payed for his stay.
// TX3691CA left the parking lot.