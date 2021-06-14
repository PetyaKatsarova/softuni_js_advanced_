// You will be given some furniture as an array of objects. Each object will have a name, a price and a decoration factor.
// When the "Generate" button is clicked, add a new row to the table for each piece of furniture with image, name, price and decoration factor (code example below).
// When the "Buy" button is clicked, get all checkboxes that are marked and show in the result textbox the
// names of the piece of furniture that were checked, separated by a comma and single space (", ") in the following
// format: "Bought furniture: {furniture1}, {furniture2}…".
// On the next line, print the total price in format: "Total price: {totalPrice}" (formatted to the second
// decimal point). Finally, print the average decoration factor in the format: "Average decoration factor:
// {decFactor}"
// Input Example
// [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]

function solve() {
    const textareaInput = document.querySelectorAll('#exercise textarea')[0];
    let textAreaResult = document.querySelectorAll('textarea')[1];
    const generate = document.querySelector('#exercise button');
    const buy = document.querySelectorAll('button')[1];
    const tableBody = document.querySelector('.table tbody');

    generate.addEventListener('click', ()=>{
      let text = JSON.parse(textareaInput.value);
      // loop through the arr
        for(let i=0; i<text.length; i++){
            let row = document.createElement('tr');

            for(let keys in text[i]){
                if(keys === 'img'){
                    let img = document.createElement('img');
                    img.setAttribute('src', text[i][keys]);
                    let td = document.createElement('td');
                    td.appendChild(img);
                    row.appendChild(td);
                  //   row.appendChild(td); 
                } else if(keys === 'name'){
                    // console.log(h.textContent);
                    let td = document.createElement('td');
                    let p = document.createElement('p');
                    p.textContent = text[i][keys];
                    td.appendChild(p);
                    row.appendChild(td); 
                } else if(keys === 'price'){
                  let td = document.createElement('td');
                    let p = document.createElement('p');
                    p.textContent = text[i][keys];
                    td.appendChild(p);
                    row.appendChild(td); 
                } else if(keys === 'decFactor'){
                    let td = document.createElement('td');
                    let p = document.createElement('p');
                    p.textContent = text[i][keys];
                    td.appendChild(p);
                    row.appendChild(td); 
                }               
            }
            let mark = document.createElement('input');
            mark.setAttribute('type', 'checkbox');
            let td = document.createElement('td');
            td.appendChild(mark);
            row.appendChild(td);
            tableBody.appendChild(row);
              
          } 
    });

    buy.addEventListener('click', ()=>{
        let text = JSON.parse(textareaInput.value);
        let averageDecorationFactor = 0;
        let totalPrice = 0;
        let names = [];
        for(let i=0; i<text.length; i++){
            names.push(text[i].name);
            totalPrice += text[i].price; 
            averageDecorationFactor += text[i].decFactor;
        }
        textAreaResult.value = `Bought funriture: ${names.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecorationFactor}`;
    });
}
// Bought furniture: Sofa, Wardrobe
// Total price: 379.00
// Average decoration factor: 0.8