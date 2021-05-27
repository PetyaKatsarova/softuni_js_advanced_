function solve(arr, delimeter){
   console.log(arr.join(delimeter));
}
solve(["How about no?","I","will","not","do","it!"],"_");

function solve2(arr, num){
    for(let i=0; i<arr.length; i+=num){
        console.log(arr[i]);
    }
}
solve2(['5', '20', '31', '4', '20'], 2); //'5,31,20'