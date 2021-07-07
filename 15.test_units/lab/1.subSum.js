function solve(arr, i, endI){
    i = i < 0 ? 0 : i;
    endI = i > arr.length-1 ? arr.length-1 : endI;
    
    try{
       return (arr.slice(i, endI+1).reduce((acc,item) => acc+item,0)*10)/10;
    }catch(e){
        return NaN;
    }
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300)) //150
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))//3.3
console.log(solve([10, "twenty", 30, 40], 0, 2));//NaN
console.log(solve([], 1, 2));//0
console.log(solve("text", 0, 2));//NaN