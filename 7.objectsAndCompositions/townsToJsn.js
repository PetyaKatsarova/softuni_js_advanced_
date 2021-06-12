function townsToJsn(arr){
    let titles = serializeStr(arr[0]);
    let rows = arr.slice(1).map(el=>serializeStr(el).reduce((acc,item, i)=> {
        acc[titles[i]] = item
        return acc;},{}));
    console.log(JSON.stringify(rows));
    

    function serializeStr(str){
        return str.split(/\s*\|\s*/gim).filter(el=>el !== '').map(el => isNaN(Number(el)) ? el : Number(Number(el).toFixed(2)));
    }
}


townsToJsn(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
// [{"Town":"Sofia",
//   "Latitude":42.7,
//   "Longitude":23.32
// },
// {"Town":"Beijing",
//  "Latitude":39.91,
//  "Longitude":116.36
// }]

// townsToJsn(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |']);
// [{"Town":"Veliko Turnovo",
//   "Latitude":43.08,
//   "Longitude":25.62
// },
// {"Town":"Monatevideo",
//  "Latitude":34.5,
//  "Longitude":56.11
// }]
