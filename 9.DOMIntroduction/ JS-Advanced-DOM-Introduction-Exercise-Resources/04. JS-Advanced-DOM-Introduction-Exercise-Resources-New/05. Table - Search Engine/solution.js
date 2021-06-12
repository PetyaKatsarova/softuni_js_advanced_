// function solve() {
//       document.querySelector('#searchBtn').addEventListener('click', onClick);

//       function onClick() {
//             let rowEls = Array.from(document.querySelectorAll('tbody tr td'));
//             let searchField = document.querySelector('#searchField');
//             let val = searchField.value;

//             rowEls.forEach(el => el.parentElement.className = '');

//             // remove all class 'select'
//             rowEls.forEach(el => {
//                if(el.textContent.toLowerCase().includes(val.toLowerCase()) && val !== ''){
//                   el.parentElement.classList.add('select');
//                }  
//             });
//             searchField.value = '';
//       }
// }

// option 2, refactor: 
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
         let rowEls = Array.from(document.querySelectorAll('tbody tr'));
         let searchField = document.querySelector('#searchField');
         let val = searchField.value;

         rowEls.forEach(el => el.className = '');

         // remove all class 'select'
         rowEls.filter(el => {
            let td = Array.from(el.children);
            // loop through td array and check td.value in some!
            console.log(td);
            if(td.some(e => e.textContent.includes(val))){
               el.className = 'select';
            }  
         });
         searchField.value = '';
   }
}