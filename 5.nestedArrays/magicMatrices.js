//sums of cells of each row = sum of each column this gives 80%
// function magicMatrices(arr){
//     cols = [];
//     rows = [];
//    for(let i=0; i<arr.length; i++){
//        let sumRows = 0;
//        let sumCols = 0;
//        for(let j=0; j<arr[i].length; j++){
//            sumRows += arr[i][j];
//            sumCols += arr[j][i];
//        }
//        if(sumCols !== sumRows) return false;
//        cols.push(sumCols);
//        rows.push(sumRows);
//    }

//     for(let i=0; i<rows.length-1; i++){
//         if(rows[i] !== rows[i+1]){
//             return false;
//         }
//     }
//     return true;
// }
function magicMatrices(arr2d){
    magicNum = Number.MIN_SAFE_INTEGER;
    let isMagicNum = true;
    for(let row=0; row<arr2d.length; row++){
        let rowSum = 0; 
        let colSum = 0;
        for(col=0; col<arr2d.length; col++){
            rowSum += arr2d[row][col];
            colSum += arr2d[col][row];
        }
        if(magicNum === 0){
            magicNum = rowSum;
        }
        if(magicNum < colSum){
            magicNum = colSum;
        }
        if(magicNum !== rowSum){
            isMagicNum = false;
        }
    }
    return isMagicNum;
}


console.log(magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]])); // true
console.log(magicMatrices([[11, 32, 45],
               [21, 0, 1],
               [21, 1, 1]])); // false
console.log(magicMatrices([[1, 0, 0],
              [0, 0, 1],
              [0, 1, 0]])); //true