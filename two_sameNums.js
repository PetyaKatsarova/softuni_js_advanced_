function sameNums(int){
    let str = int.toString().split('');
    let isTrue = '';
    let sum = 0;
    for(let i=0; i<str.length; i++){
        sum += Number(str[i]); 
        if(str[0] !== str[i]){
            isTrue = 'false';
            continue;
        }  
    }
    if(isTrue.length == 0){
        isTrue = 'true';
    }
    console.log(isTrue);
    console.log(sum);
}

sameNums(2222222); // true br, 14
sameNums(1234); // false br, 10