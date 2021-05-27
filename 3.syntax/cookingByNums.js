function cookingByNums(num, op1,op2,op3,op4,op5){
   let result = Number(num);
   const arr = [op1,op2,op3,op4,op5];

    for(const line of arr){
        if(line == 'chop'){
            result = result / 2;
            console.log(result);
        }else if(line == 'dice'){
            result = Math.sqrt(result);
            console.log(result);
        }else if(line == 'spice'){
            result += 1;
            console.log(result);
        }else if(line == 'bake'){
            result *= 3;   
            console.log(result);
        }else if(line == 'fillet'){
            result -= result * .2;
            console.log(result);
        }
    }
    return result;
}

cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop'); 
// 16
// 8
// 4
// 2
// 1
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// 3
// 4
// 2
// 6
// 4.8