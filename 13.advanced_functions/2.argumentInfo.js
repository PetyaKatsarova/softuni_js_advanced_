// Write a function that displays information about the arguments which are passed to it (type and value) and a
// summary about the number of each type in the following format:
// "{argument type}: {argument value}"
// Print each argument description on a new line. At the end print a tally with counts for each type in descending order, each on a new line in the following format: "{type} = {count}"
// If two types have the same count, use order of appearance.
// Do NOT print anything for types that do not appear in the list of arguments.
// Input
// You will receive a series of arguments passed to your function.
// Output
// Print on the console the type and value of each argument passed into your function.
//50%
function solve(){
   // console.log(arguments);
   let str=func=obj=num=0;
    for(let row of arguments){
        console.log(`${typeof(row)}: ${row}`);
        if((typeof(row)) === 'string'){
            str += 1;
        }else if((typeof(row)) === 'number'){
            num += 1;
        }else if((typeof(row)) === 'object'){
            obj += 1;
        }else if((typeof(row)) === 'function'){
            func += 1;
        }
    }
    if(str > 0){
        console.log(`string = ${str}`);
    }
    if(num > 0){
        console.log(`number = ${num}`);
    }if(func > 0){
        console.log(`function = ${func}`);
    }if(obj > 0){
        console.log(`object = ${obj}`);
    }
    
}

function solve2(...params){
    let obj = {}
    let result = [];
    params.forEach(el => {
        let type = typeof(el);
        result.push(`${typeof(el)}: ${el}`);
        obj[type] = obj[type] !== undefined ? obj[type]++ : 1;
    });

    Object.keys(obj).sort((a,b) => obj[b] - obj[a]).forEach(el => result.push(`${el} = ${obj[el]}`));
    return result.join('\n');
}

function solve3(...params){
    let obj = {}
    let result = []

    params.map(el => {
        let type = typeof(el);
        obj[type] = obj[type] !== undefined ? obj[type]++ : 1;
        result.push(`${type}: ${el}`);
    });
    
    Object.keys(obj).sort((a,b) => obj[b] - obj[a]).forEach(el => result.push(`${el} = ${obj[el]}`));

    
    return result.join('\n');
}


console.log(solve3('cat', 42, function () { console.log('Hello world!');}));
//string: cat
// number: 42
// function: function () { console.log(&#39;Hello world!&#39;); }
// string = 1
// number = 1
// function = 1