function lowestPrice(arr){
   let obj = {};

   for(let row of arr){
       let [town, product, price] = row.split(' | ');
       price = Number(price);
      if(!obj.hasOwnProperty(product)){
         obj[product] = {};
      }
      obj[product][town] = price; 
   }
   
   for(const key in obj){
      let townsSorted = Object.entries(obj[key]).sort((a,b)=>a[1]-b[1]);
      let cheapestTown = townsSorted[0];
      console.log(`${key} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
   }
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)