// forEach() doesnt work in node.js
// function search() {
//    let liTowns = document.querySelectorAll("#towns li");
//    const searchText = document.querySelector("#searchText").value;

//    liTowns = liTowns.forEach(li => {
//        if(li.textContent.toLowerCase().includes(searchText.toLowerCase())){
//           li.style.fontWeight = 'bold';
//           li.style. textDecoration = 'underline';
//           console.log(li.textContent);
//        }
//    });
// }
function search() {
   let liTowns = document.querySelectorAll("#towns li");
   const searchText = document.querySelector("#searchText").value;
   let matches = 0;

   for(let i=0; i<liTowns.length; i++){
       if(liTowns[i].textContent.toLowerCase().includes(searchText.toLowerCase())){
          liTowns[i].style.fontWeight = 'bold';
          liTowns[i].style. textDecoration = 'underline';
       //  console.log(liTowns[i].textContent);
          matches++;
       }
   };
   document.getElementById("result").innerHTML = `${matches} matches found`;
}
