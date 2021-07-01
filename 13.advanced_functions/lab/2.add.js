function solve(n){
   let num = n;
   return (num2) => {
      return num + num2;
   }
}
let add5 = solution(5);
console.log(add5(2));//7
console.log(add5(3));//8