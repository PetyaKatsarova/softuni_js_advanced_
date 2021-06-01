function rotate(arr, num){
   let result = [];
   for(let i=0; i<num; i++){
       arr.unshift(arr.pop());
   }
   console.log(arr.join(' '));
}
// cool option:
function rotate2(arr, rotations){
    let realRotations = rotations % arr.length;
    // remove the els after index length-realrot.
    let els = arr.splice(arr.length - realRotations, realRotations);
    arr.splice(0,0,...els);
    console.log(arr.join(' '));
}

rotate(['1', '2', '3', '4'], 2); // 3 4 1 2
rotate2(['Banana', 'Orange', 'Coconut', 'Apple'], 15); //Orange Coconut Apple Banana