function toggle() {
    let text = document.querySelector('.button');
    let extra = document.querySelector('#extra');
    if(text.textContent.toUpperCase() == 'MORE'){
        text.textContent = 'Less';
        extra.style.display = 'block';
    }else if(text.textContent.toUpperCase() == 'LESS'){
        text.textContent = 'More';
        extra.style.display = 'none';
    }
}

// refactor
function toggle(){
    let button = document.querySelector('.button');
    let extra = document.querySelector('#extra');
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';
    extra.style.display = extra.style.display == 'none' ? 'block' : 'none'; 
}