function fruit(type, weight, pricePerKg){
    weight = weight / 1000; // from gr into kgs
    let money = weight * pricePerKg;
    return `I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`;
}

console.log(fruit('orange', 2500, 1.80)); //I need $4.5o to buy 2.50 kilograms orange.