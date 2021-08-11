// Each product has name. When you click the [Add gift] button, a new list item should be added to
// the List of gifts. To each list item you should put a class “gift”. Upon clicking the [Add gift]
// button you should sort the gifts in alphabetical order and you should clear the input field.
// The new item should have the following structure: Append two buttons to each list item
// Add class “gift” to each list item [Send] button with class “sendButton” [Discard] button with class “discardButton”
// When you click the [Send] button you should move the list item to the Sent gifts section. Important!Do not move the entire list item, but only the name of the gift. You should leave the buttons behind.

function solution() {
    const [addGift, listOfGifts, sentGifts, discardedGifts] = document.querySelectorAll('.card');
    const addGiftInpt = addGift.querySelector('div input');

    let giftsArr = [];
    addGift.querySelector('button').addEventListener('click', (e) => {
       giftsArr.push(addGiftInpt.value);
       listOfGifts.querySelector('ul').innerHTML = '';
       giftsArr.sort((a,b) => a.localeCompare(b)).forEach(text => {

            let li = createEl('li', text)
            li.classList.add('gift');

            let sendBtn = createEl('button', 'Send');
            sendBtn.classList.add('sendButton');

            let discardBtn = createEl('button', 'Discard');
            discardBtn.classList.add('discardButton');

            li.appendChild(sendBtn);
            li.appendChild(discardBtn);
            listOfGifts.querySelector('ul').appendChild(li);

            sendBtn.addEventListener('click', (e) => {
                    moveLists(e,sentGifts);
            });
            discardBtn.addEventListener('click', (e) => {
                moveLists(e,discardedGifts);
       });
       });
       
        addGiftInpt.value = '';
    });

    function createEl(el, text){
        let element = document.createElement(el);
        element.textContent = text;
        return element;
    }

    function moveLists(e, element){
        let parent = e.currentTarget.parentElement;
        while(parent.children.length){parent.children[0].remove();}

       let li = createEl('li', parent.textContent);
       element.querySelector('ul').appendChild(li);


       giftsArr = giftsArr.filter(el => el !== parent.textContent);
       parent.remove();
    }
    
}