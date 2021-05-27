function rotate(arr, num){
   let result = [];
   for(let i=0; i<num; i++){
       arr.unshift(arr.pop());
   }
   console.log(arr.join(' '));
}

rotate(['1', '2', '3', '4'], 2); // 3 4 1 2
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15); //Orange Coconut Apple Banana