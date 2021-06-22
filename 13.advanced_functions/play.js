function fly(){
    console.log('flying');
}

let hero = {
    name: 'Superman',
    fly
}
// fly();
// hero.fly();

// context obj
function fly2(text){
    console.log(`${this.name} is flying, too ${text}`);
}

let contextObj = {
    name: 'Wonder woman',
}
fly2('with Robin');// name is undefined
//fly2.call(contextObj, 'with Super girl.');
//fly2.call({name: 'Pesho'});
fly2.apply({name: 'Gosho'}, ['with Pesho']);
let wonderWomanFly = fly2.bind(contextObj);
wonderWomanFly('with Supergirl');



function solve(area, vol, input){
    let objs = JSON.parse(input);

    function calc(obj){
        let areaObj = Math.abs(area.call(obj));
        let volObj = Math.abs(vol.call(obj));
        return {area: areaObj, volume: volObj}
    }

    return objs.map(calc);
}

function area(a,b){
    console.log(5+5);
    return Number(a) * Number(b);
}
function vol(a,b,c){
    return Number(a) * Number(b) * Number(c);
}


console.log(solve(area, vol,'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'));