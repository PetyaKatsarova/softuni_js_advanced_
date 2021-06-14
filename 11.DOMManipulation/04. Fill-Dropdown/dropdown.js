// Your task is to take values from input fields with ids 'newItemText' and 'newItemValue' Then youshould create and append an 'option' to the 'select' with id 'menu'

function addItem() {
    let menu = document.getElementById('menu');
    let newItemTxt = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    const btn = document.querySelector('input[type="button"]');

    let option = document.createElement('option');
    option.textContent = newItemTxt.value;
    option.setAttribute('value', newItemValue.value);
    menu.appendChild(option);
    newItemTxt.value =  '';
    newItemValue.value = '';

}