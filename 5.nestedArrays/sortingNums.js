function sortingNums(arr){
    let result = []; 
    let ascend = arr.sort((a,b)=> a-b);
    let length = ascend.length;

    while(length > 0){
        result.push(ascend.shift());
        length-=1;
        if(length>0){
            result.push(ascend.pop());
            length --;
        }
    }
    // console.log(result);
    return result;
}




sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,2]);//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]