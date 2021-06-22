
  function sum(arr){
    let sum = 0;
    arr.forEach(element => {
         sum += Number(element);
    });
    return sum;
}

module.exports = sum;