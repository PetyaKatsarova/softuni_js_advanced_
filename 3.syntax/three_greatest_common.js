function greatestCommonDivisor(num1, num2){
    let smallest = Math.min(num1, num2);
    let biggest = Math.max(num1, num2);
    for(let i=smallest; i>0; i--){
        if((biggest % i === 0) && (smallest % i === 0)){
            return i;
        }
    }
}

console.log(greatestCommonDivisor(15,5)); // 5
console.log(greatestCommonDivisor(15,3)); //3
console.log(greatestCommonDivisor(15,14)); //1