// function increasingSubsequence(arr){
//     let result = [arr[0]];
//     // change to min save int
//     let max = arr[0];
//    for(let i=1; i<arr.length; i++){
//        if(( max <= arr[i])){
//            max = arr[i];
//            result.push(max);
//        }else{
//            continue;
//        }
//    }
// //    result.forEach(el=>console.log(el));
//    return result;
// }

// function increasingSubsequence(arr) {
//     return arr.reduce((acc, item) => { item >= (acc.slice(-1)) ? acc.push(item) : null; return acc}, []);
// }
// option 3
function increasingSubsequence(arr){
    let result = [arr[0]];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>=result[result.length-1]){
            result.push(arr[i]);
        }
    }
    console.log(result);
}



increasingSubsequence([1,3, 8, 4,10, 12,3,2,24]);//[1, 3, 8, 10, 12, 24]
increasingSubsequence([1, 2, 3, 4]);//[1, 2, 3, 4]
increasingSubsequence([20,3, 2,15,6, 1]); //[20]