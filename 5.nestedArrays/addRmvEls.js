function solve(arr){
    let sum = 1;
    let result = [];

    for(let i=0; i<arr.length; i++){
        if(arr[i] === 'add'){
            result.push(sum);
            sum ++;
        }else if(arr[i] === 'remove'){
            if(sum > 0){
                sum ++;
                result.pop();
            }else{
                continue; 
            }
        }
    }
    if(result.length >0){
        result.forEach(el=>console.log(el));
    }else{
        console.log('Empty');
    }
}

solve(['add', 'add', 'remove', 'add', 'add']); // 1 4 5
solve(['remove', 'remove','remove']); // Empty
solve(['add', 'add','add','add']);// 1 2 3 4 