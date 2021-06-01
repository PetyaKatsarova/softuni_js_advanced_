// Write a program that assembles a car by given requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfil the client’s order. You have the following parts in storage:
// An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.
// Small engine: { power: 90, volume: 1800 }
// Normal engine: { power: 120, volume: 2400 }
// Monster engine: { power: 200, volume: 3500 }
// A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint it any color.
// Hatchback: { type: 'hatchback', color: <as required> }
// Coupe: { type: 'coupe', color: <as required> }
// The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 
function carFactory(car){
    const model = car.model;
    newCar = {
        model: model,
        engine: {}, 
        carriage: {},
        wheels: []
    }
    if((car.power <= 90) && (car.power < 120)){
            newCar.engine = {power: 90, volume: 1800}
    }else if((car.power <= 120) && (car.power < 200)){
            newCar.engine = { power: 120, volume: 2400 }
    }else{
            newCar.enging = { power: 200, volume: 3500 }   
    }
    let wheel = car.wheelsize;
    if(car.wheelsize % 2 === 0){
        wheel = car.wheelsize - 1;
    }
    newCar.wheels = [wheel, wheel, wheel, wheel];

    let carriage = car.carriage;
    let color = car.color;
    newCar.carriage = {type: carriage, color: color};
    console.log(newCar);
}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });

// { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });
// { model: 'Opel Vectra',
//   engine: { power: 120,
//             volume: 2400 },
//   carriage: { type: 'coupe',
//               color: 'grey' },
//   wheels: [17, 17, 17, 17] }


