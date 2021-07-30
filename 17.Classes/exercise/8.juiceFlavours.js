// You will be given different juices, as strings. You will also receive quantity as a number. If you receive a juice, you already have, you must sum the current quantity of that juice, with the given one. When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them at the end. Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000, you must make as much bottles
// as you can, and store what is left from the juice. Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.
// Input
// The input comes as array of strings. Each element holds data about a juice and quantity in the following format: “{juiceName} => {juiceQuantity}”
// The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles. Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi juice until the 4 th line, at which point we have already created Pear and Watermelon juice bottles, thus the Kiwi bottles appear last in the output.

// judge gives me 40%
function  juiceFlavours5(params) {
    let juices = {};
    let result = {}
    for(let row of params){
        let [juice, q] = row.split(' => ');
        juices[juice] = juices[juice] || 0;
        juices[juice] += Number(q);
        if(juices[juice] > 1000){
            result[juice] = (juices[juice] - (juices[juice] % 1000)) / 1000;
        }
    }
    return Object.entries(result).map(([juice, q])=> `${juice} => ${q}`)
                                 .join('\n');
}

function  juiceFlavours(params) {
     let juices = {}
     let result = {}

     function  addBtls(juice, q) {
         const btlsToAdd = (q - (q % 1000)) / 1000;
        if(btlsToAdd > 0){
            result[juice] = (result[juice] || 0) + btlsToAdd;
            return q % 1000;
        }
        return q;
     }

     params.forEach(row => {
        const [juice,q] = row.split(' => ');
        juices[juice] = juices[juice] || 0;
        juices[juice] = addBtls(juice, juices[juice] + Number(q));
     });
     
    return Object.entries(result).map(([juice,q]) => `${juice} => ${q}`).join('\n');
}
// Examples

// Input Output

console.log(juiceFlavours(['Orange => 2000','Peach => 1432','Banana => 450','Peach => 600',
'Strawberry => 549']));
// Orange => 2
// Peach => 2

console.log(juiceFlavours(['Kiwi => 234','Pear => 2345','Watermelon => 3456','Kiwi => 4567','Pear => 5678',
'Watermelon => 6789']));

// Pear => 8
// Watermelon => 10
// Kiwi => 4