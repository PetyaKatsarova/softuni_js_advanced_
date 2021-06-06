function storeCatalog(arr){
    let obj = {}
    for(let row of arr){
        let [name, price] = row.split(' : ');
        price = Number(price);
        let nameInitial = name[0].toUpperCase();
        if(obj[nameInitial] === undefined){
            obj[nameInitial] = {}
        }
        obj[nameInitial][name] = price;
    }
   
}

storeCatalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
// A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499
