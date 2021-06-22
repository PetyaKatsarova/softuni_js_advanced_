function solve(){

    document.querySelector('button').addEventListener('click', ()=>{
        generateTable();
    });

    document.querySelectorAll('button')[1].addEventListener('click', ()=>{
        generateResult();
    });

    function generateTable(){
        console.log('click');
        let text = JSON.parse(document.querySelector('textarea').value);
        // let arr = Array.from(text);
        
        text.forEach(obj => {
            let tr = document.createElement('tr');
            
            let tdImg = document.createElement('td');
            let img = document.createElement('img');
            img.setAttribute('src', obj.img);
            tdImg.appendChild(img);
            tr.appendChild(tdImg);

            let tdName = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = obj.name;
            tdName.appendChild(pName);
            tr.appendChild(tdName);

            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = obj.price;
            tdPrice.appendChild(pPrice);
            tr.appendChild(tdPrice);

            let tdDecFactor = document.createElement('td');
            let p = document.createElement('p');
            p.textContent = obj.decFactor;
            tdDecFactor.appendChild(p);
            tr.appendChild(tdDecFactor);

            let tdCheckbox = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            tdCheckbox.appendChild(checkbox);
            tr.appendChild(tdCheckbox);

            document.querySelector('table tbody').appendChild(tr);
        });
    }

    function generateResult(){ 
        //select the checked checkboxes tr
        let trows = Array.from(document.querySelectorAll('.table tbody tr'));
        let checkedRows = trows.filter(td => td.querySelector('input:checked'));

        let names = checkedRows.map(row => row.querySelector('td:nth-of-type(2) p'))
                               .map(p => p.textContent).join(', ');
        let totalPrice = checkedRows.map(row => row.querySelector('td:nth-of-type(3) p'))
                                    .map(p => Number(p.textContent))
                                    .reduce((acc,item) => acc + item, 0);
        let avgDecFactor = checkedRows.map(row => row.querySelector('td:nth-of-type(4) p'))
                                      .map(el => Number(el.textContent))
                                      .reduce((acc,item) => acc + item, 0) / checkedRows.length;
        document.querySelectorAll('textarea')[1].textContent = `Bought furniture: ${names}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;        
    }
}
// Bought furniture: bla, blu
// Total price: {totalPrice}
// Average decoration factor: {decFactor}