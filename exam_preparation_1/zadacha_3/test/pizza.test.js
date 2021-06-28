const pizzUni = require('../pizza.js');
const {expect, assert} = require('chai');

describe("Testing pizza place", function() {
    describe("Make an order tests", function() {
        it("Should return confirmation msg when pizza is ordered", function() {
            let order= {orderedPizza: 'Margeritta'}
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza}`);
        });
        it("Should return confirmation msg when pizza and drinks are ordered", function() {
            let order= {orderedPizza: 'Margeritta', orderedDrink: "Coka cola"}
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`);
        });
        it("Should throw when there is no order at all", function() {
            let order= {}
            expect(() => pizzUni.makeAnOrder(order)).throw();
        });
        it("Should throw when there is only drink ordered", function() {
            let order= {orderedDrink: 'Cola'}
            expect(() => pizzUni.makeAnOrder(order)).throw();
        });
    });
    describe("Get remaining work tests", function() {
        it("Should return 'All orders are complete' when the only obj have status ready", function() {
            let statusArr  = [
                {name: 'Margeritta', status: 'ready'}
            ]
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`All orders are complete!`);
        });
        it("Should return 'All orders are complete' when two objs have status ready", function() {
            let statusArr  = [
                {name: 'Margeritta', status: 'ready'},
                {name: 'Bla', status: 'ready'}
            ]
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`All orders are complete!`);
        });
        it("Should return remaining pizza with 1 order pending", () => {
            let statusArr  = [
                {pizzaName: 'Margeritta', status: 'ready'},
                {pizzaName: 'Bla', status: 'preparing'}
            ]
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Bla.`);
        });
        it("Should return remaining all pizzas with more orders preparing", () => {
            let statusArr  = [
                {pizzaName: 'Margeritta', status: 'ready'},
                {pizzaName: 'Bla', status: 'preparing'},
                {pizzaName: "bla2", status: 'preparing'}
            ]
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Bla, bla2.`);
        });
    });
    describe("OrderType tests", function() {
        it('Should return totalSum when type of order is Delivery', () => {
            expect(pizzUni.orderType(10, 'Delivery')).to.equal(10);
        });        
        it('Should return totalSum - 10% when type of order is Carry Out', () => {
            expect(pizzUni.orderType(10, 'Carry Out')).to.equal(9);
        });
        it('Should return floating totalSum  with 10% discount when type of order is Carry Out', () => {
            expect(pizzUni.orderType(10.50, 'Carry Out')).to.equal(9.45);
        });
    });
});