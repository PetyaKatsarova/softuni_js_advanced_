function sortArrBy2Crit(arr){
    arr.sort((a,b)=>a.length - b.length || a.localeCompare(b))
       .forEach(el => {
           console.log(el);
       });
}

sortArrBy2Crit(['alpha', 
'beta', 
'gamma']);
//beta
// alpha
// gamma
sortArrBy2Crit(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']);
// Jack
// Isacc
// George
// Theodor
// Harrison
sortArrBy2Crit(['test', 
'Deny', 
'omen', 
'Default']);
// Deny
// omen
// test
// Default