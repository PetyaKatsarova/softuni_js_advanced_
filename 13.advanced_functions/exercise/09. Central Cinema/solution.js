// Write the missing JavaScript code to make the Central Cinema application work as expected.
// Each movie have Name, Hall and Ticket Price.
// When you click the [On Screen] button and only if inputs are all filled and the ticket price value is a number,
// then a new list item should be added to the Movies on Screen section. Clear the inputs.
// You should create a li element that contains span element with the name of the movie, a strong element with
// the name of the hall like “Hall: { hallName }“ and a div element. Inside the div element, there are a strong// element with the ticket price (fixed to the second digit after the decimal point), input element with placeholder containing “Tickets Sold” and a button [Archive].

// When you click the [Archive] button and only if the input for tickets count is filled with a number like: You should add that item to Archive section like a list item in the ul, calculating the total profit of the movie like this:// Here we have list item containing span element with the name of the movie, strong element with total profit like “Total amount: {total price}” fixed to the second digit after the decimal point. Add a delete button  [Delete]. When you click the [Delete] button, you should delete the current list item.
// Finally, when we click the [Clear] button delete all li elements from the archive section. No matter how many archived movies we have the archive section leaves like this:
function solve() {
    let onScreen = document.querySelector('#container > button');
    let inputs = document.querySelectorAll('#container >input');
    
    onScreen.addEventListener('click', (e) => {
        e.preventDefault();

        if(inputs[0].value && inputs[1].value && inputs[2].value
        && inputs[0].value != '' && inputs[01].value != '' && !isNaN(inputs[02].value)){
               // create li items in MOVIES ON SCREEN
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = inputs[0].value;
            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${inputs[1].value}`;

            let div = document.createElement('div');
            let strong2 = document.createElement('strong');
            strong2.textContent = Number(inputs[2].value).toFixed(2);
            let inputArchive = document.createElement('input');
            inputArchive.type = 'text';
            inputArchive.setAttribute('placeholder', 'Tickets Sold');
            let btnArchive = document.createElement('button');
            btnArchive.textContent = 'Archive';

            div.appendChild(strong2);
            div.appendChild(inputArchive);
            div.appendChild(btnArchive);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(div);
            document.querySelector("#movies ul").appendChild(li);
            // console.log(inputArchive.value);

            // ON CLICK BTNARCHIVE CREATE LI IN ARCHIVE SECTION
            btnArchive.addEventListener('click', (e) => {
                let numTickets = inputArchive.value;

                if(!isNaN(numTickets) && numTickets !== ''){

                    // CREATE LI ITEMS IN ARCHIVE SECTION
                    let li2 = document.createElement('li');
                    let span2 = document.createElement('span');
                    span2.textContent = document.querySelector('#movies ul li span').textContent;

                    let price = document.querySelector("#movies div strong").textContent;
                    price = Number(price);
                    numTickets = Number(numTickets);
                    let strong3 = document.createElement('strong');
                    strong3.textContent = `Total amount: ${(price * numTickets).toFixed(2)}`;

                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    
                    li2.appendChild(span2);
                    li2.appendChild(strong3);
                    li2.appendChild(deleteBtn);
                    document.querySelector('#archive ul').appendChild(li2); 

                     //delete the li item from movies on screen
                    e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);

                    // remove all archived li items
                    document.querySelector('#archive > button').addEventListener('click', () => {
                        if(inputArchive.value !== '' && !isNaN(inputArchive.value)){
                            document.querySelector("#archive ul").innerHTML = '';
                        }
                    });
                    
                    //delete curr li from archive
                    deleteBtn.addEventListener('click', (e)=>{
                        // let ul = e.currentTarget.parentElement.parentElement;
                        // ul.removeChild(e.currentTarget.parentElement);
                       // if(!isNaN(numTickets) && numTickets !== ''){
                            let li = e.currentTarget.parentElement;
                            li.remove();
                      //  }
                    });
                }

            });

            for(const inpt of inputs){
                inpt.value = '';
            }
        }
    });
}