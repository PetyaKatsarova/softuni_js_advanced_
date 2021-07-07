function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
// let bla = createCalculator();
// bla.add(5)
// console.log(bla.get());
module.exports = createCalculator;